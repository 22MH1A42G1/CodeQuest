import { createOpenAI } from "@ai-sdk/openai";
import { NoObjectGeneratedError, Output, streamText } from "ai";
import type { z } from "zod";
import { createLovableAiGatewayRunIdFetch, getLovableAiGatewayRunId } from "./run-id.server.ts";

export async function createInterviewJson<T>(
  request: Request,
  config: { apiKey: string; instructions: string; prompt: string; schema: z.ZodType<T> },
): Promise<T> {
  const runIdFetch = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(request));
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey: config.apiKey,
    headers: { "Lovable-API-Key": config.apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });
  try {
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      instructions: config.instructions,
      messages: [{ role: "user", content: config.prompt }],
      output: Output.object({ schema: config.schema }),
      abortSignal: request.signal,
      maxRetries: 0,
      providerOptions: {
        openai: {
          forceReasoning: true,
          reasoningEffort: "low",
          reasoningSummary: "auto",
          store: false,
          include: ["reasoning.encrypted_content"],
        },
      },
    });
    return await result.output;
  } catch (error) {
    if (NoObjectGeneratedError.isInstance(error)) throw new Error("The interview response was incomplete. Please start a new interview.");
    throw error;
  }
}

export function interviewErrorMessage(error: unknown): string {
  const candidate = error as { statusCode?: number; status?: number; message?: string; responseBody?: string };
  const status = candidate?.statusCode ?? candidate?.status;
  if (status === 401) return "AI interviews are not configured correctly. Please contact the app owner.";
  if (status === 402) return "AI credits are currently unavailable. Please try again after the owner restores them.";
  if (status === 403) return candidate.message || "AI access is unavailable for this interview.";
  if (status === 429) return "The AI interviewer is busy. Please wait a moment and start a new request.";
  if (status && status >= 500) return "The AI interviewer is temporarily unavailable. Please try again later.";
  return candidate?.message || "The AI interviewer couldn't respond. Please try again.";
}
