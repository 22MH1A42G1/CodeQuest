export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      bookmarks: {
        Row: {
          code_snippet: string | null
          created_at: string
          id: string
          problem_slug: string | null
          title: string
          topic_slug: string | null
          user_id: string
        }
        Insert: {
          code_snippet?: string | null
          created_at?: string
          id?: string
          problem_slug?: string | null
          title: string
          topic_slug?: string | null
          user_id: string
        }
        Update: {
          code_snippet?: string | null
          created_at?: string
          id?: string
          problem_slug?: string | null
          title?: string
          topic_slug?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookmarks_problem_slug_fkey"
            columns: ["problem_slug"]
            isOneToOne: false
            referencedRelation: "coding_problems"
            referencedColumns: ["slug"]
          },
          {
            foreignKeyName: "bookmarks_topic_slug_fkey"
            columns: ["topic_slug"]
            isOneToOne: false
            referencedRelation: "dsa_topics"
            referencedColumns: ["slug"]
          },
        ]
      }
      coding_problems: {
        Row: {
          created_at: string
          difficulty: string
          order_index: number
          slug: string
          title: string
          topic_slug: string
        }
        Insert: {
          created_at?: string
          difficulty: string
          order_index?: number
          slug: string
          title: string
          topic_slug: string
        }
        Update: {
          created_at?: string
          difficulty?: string
          order_index?: number
          slug?: string
          title?: string
          topic_slug?: string
        }
        Relationships: [
          {
            foreignKeyName: "coding_problems_topic_slug_fkey"
            columns: ["topic_slug"]
            isOneToOne: false
            referencedRelation: "dsa_topics"
            referencedColumns: ["slug"]
          },
        ]
      }
      daily_challenge_completions: {
        Row: {
          challenge_date: string
          completed_at: string
          id: string
          points: number
          problem_slug: string
          user_id: string
        }
        Insert: {
          challenge_date: string
          completed_at?: string
          id?: string
          points: number
          problem_slug: string
          user_id: string
        }
        Update: {
          challenge_date?: string
          completed_at?: string
          id?: string
          points?: number
          problem_slug?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "daily_challenge_completions_problem_slug_fkey"
            columns: ["problem_slug"]
            isOneToOne: false
            referencedRelation: "coding_problems"
            referencedColumns: ["slug"]
          },
        ]
      }
      dsa_topics: {
        Row: {
          created_at: string
          level: string
          order_index: number
          slug: string
          title: string
        }
        Insert: {
          created_at?: string
          level: string
          order_index: number
          slug: string
          title: string
        }
        Update: {
          created_at?: string
          level?: string
          order_index?: number
          slug?: string
          title?: string
        }
        Relationships: []
      }
      flashcards: {
        Row: {
          back: string
          created_at: string
          front: string
          id: string
          interval_days: number
          next_review_at: string
          review_count: number
          topic_slug: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          back: string
          created_at?: string
          front: string
          id?: string
          interval_days?: number
          next_review_at?: string
          review_count?: number
          topic_slug?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          back?: string
          created_at?: string
          front?: string
          id?: string
          interval_days?: number
          next_review_at?: string
          review_count?: number
          topic_slug?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "flashcards_topic_slug_fkey"
            columns: ["topic_slug"]
            isOneToOne: false
            referencedRelation: "dsa_topics"
            referencedColumns: ["slug"]
          },
        ]
      }
      mock_interviews: {
        Row: {
          category: string
          completed_at: string | null
          created_at: string
          difficulty: string
          feedback: string | null
          id: string
          mode: string
          question_count: number
          score: number | null
          status: string
          target_company: string | null
          transcript: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          category: string
          completed_at?: string | null
          created_at?: string
          difficulty: string
          feedback?: string | null
          id?: string
          mode: string
          question_count?: number
          score?: number | null
          status?: string
          target_company?: string | null
          transcript?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          completed_at?: string | null
          created_at?: string
          difficulty?: string
          feedback?: string | null
          id?: string
          mode?: string
          question_count?: number
          score?: number | null
          status?: string
          target_company?: string | null
          transcript?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      personal_notes: {
        Row: {
          content: string
          created_at: string
          id: string
          title: string
          topic_slug: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content?: string
          created_at?: string
          id?: string
          title: string
          topic_slug?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          title?: string
          topic_slug?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "personal_notes_topic_slug_fkey"
            columns: ["topic_slug"]
            isOneToOne: false
            referencedRelation: "dsa_topics"
            referencedColumns: ["slug"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          daily_goal: number
          display_name: string | null
          id: string
          target_role: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          daily_goal?: number
          display_name?: string | null
          id: string
          target_role?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          daily_goal?: number
          display_name?: string | null
          id?: string
          target_role?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      revision_reminders: {
        Row: {
          completed_at: string | null
          created_at: string
          due_on: string
          id: string
          problem_slug: string | null
          topic_slug: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          due_on: string
          id?: string
          problem_slug?: string | null
          topic_slug?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          due_on?: string
          id?: string
          problem_slug?: string | null
          topic_slug?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "revision_reminders_problem_slug_fkey"
            columns: ["problem_slug"]
            isOneToOne: false
            referencedRelation: "coding_problems"
            referencedColumns: ["slug"]
          },
          {
            foreignKeyName: "revision_reminders_topic_slug_fkey"
            columns: ["topic_slug"]
            isOneToOne: false
            referencedRelation: "dsa_topics"
            referencedColumns: ["slug"]
          },
        ]
      }
      submissions: {
        Row: {
          code: string
          created_at: string
          id: string
          kind: string
          language: string
          memory_kb: number | null
          passed: number
          problem_slug: string
          runtime_ms: number | null
          status: string
          total: number
          user_id: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          kind: string
          language?: string
          memory_kb?: number | null
          passed?: number
          problem_slug: string
          runtime_ms?: number | null
          status: string
          total?: number
          user_id: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          kind?: string
          language?: string
          memory_kb?: number | null
          passed?: number
          problem_slug?: string
          runtime_ms?: number | null
          status?: string
          total?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "submissions_problem_slug_fkey"
            columns: ["problem_slug"]
            isOneToOne: false
            referencedRelation: "coding_problems"
            referencedColumns: ["slug"]
          },
        ]
      }
      topic_progress: {
        Row: {
          completed: boolean
          quiz_score: number | null
          topic_slug: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          quiz_score?: number | null
          topic_slug: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed?: boolean
          quiz_score?: number | null
          topic_slug?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "topic_progress_topic_slug_fkey"
            columns: ["topic_slug"]
            isOneToOne: false
            referencedRelation: "dsa_topics"
            referencedColumns: ["slug"]
          },
        ]
      }
      user_activity: {
        Row: {
          activity_date: string
          minutes: number
          problems_solved: number
          submissions: number
          user_id: string
        }
        Insert: {
          activity_date: string
          minutes?: number
          problems_solved?: number
          submissions?: number
          user_id: string
        }
        Update: {
          activity_date?: string
          minutes?: number
          problems_solved?: number
          submissions?: number
          user_id?: string
        }
        Relationships: []
      }
      user_progress: {
        Row: {
          accepted_code: string | null
          attempts: number
          id: string
          marked_for_revision: boolean
          problem_slug: string
          solved_at: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          accepted_code?: string | null
          attempts?: number
          id?: string
          marked_for_revision?: boolean
          problem_slug: string
          solved_at?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          accepted_code?: string | null
          attempts?: number
          id?: string
          marked_for_revision?: boolean
          problem_slug?: string
          solved_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_problem_slug_fkey"
            columns: ["problem_slug"]
            isOneToOne: false
            referencedRelation: "coding_problems"
            referencedColumns: ["slug"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_weekly_leaderboard: {
        Args: never
        Returns: {
          alias: string
          challenges: number
          is_current: boolean
          points: number
          rank: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
