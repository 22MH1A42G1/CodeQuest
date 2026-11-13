// Server-only validation cases; never import into client code.
export const EXTRA_HIDDEN_TESTS: Record<string, { input: unknown[]; expected: unknown }[]> = {
  "balanced-parity-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          0,
          1,
          -3,
          -1,
          -2,
          -1,
          2,
          -1,
          -1
        ]
      ],
      "expected": 7
    }
  ],
  "balanced-parity-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        4,
        4,
        4,
        2
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        0,
        1,
        2,
        2,
        1
      ]
    },
    {
      "input": [
        [
          0,
          0,
          -1,
          0,
          -1,
          -2,
          3,
          -3,
          -2
        ]
      ],
      "expected": [
        1,
        5,
        7,
        9,
        9,
        9,
        7,
        5,
        4
      ]
    }
  ],
  "balanced-parity-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4,
        0,
        2,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        1,
        0,
        1,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -3,
          1,
          -1,
          3,
          0,
          2,
          3,
          0,
          3
        ]
      ],
      "expected": [
        0,
        4,
        0,
        3,
        0,
        2,
        0,
        0,
        0
      ]
    }
  ],
  "balanced-parity-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        3
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        5
      ]
    },
    {
      "input": [
        [
          -2,
          2,
          3,
          2,
          1,
          3,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        7
      ]
    }
  ],
  "balanced-parity-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        2,
        2,
        2,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        0,
        4,
        2,
        0,
        0
      ]
    },
    {
      "input": [
        [
          0,
          0,
          -1,
          -2,
          2,
          3,
          0,
          -1,
          -3
        ]
      ],
      "expected": [
        0,
        2,
        2,
        6,
        2,
        2,
        2,
        0,
        0
      ]
    }
  ],
  "balanced-parity-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          1,
          2,
          -1,
          -2,
          -3,
          -2,
          2,
          0,
          0
        ]
      ],
      "expected": 3
    }
  ],
  "zero-total-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 11
    },
    {
      "input": [
        [
          -1,
          1,
          3,
          -2,
          0,
          -3,
          0,
          2,
          0
        ]
      ],
      "expected": 8
    }
  ],
  "zero-total-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        2,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        4,
        5,
        7,
        6,
        6,
        4
      ]
    },
    {
      "input": [
        [
          2,
          3,
          3,
          1,
          -2,
          -1,
          3,
          -2,
          1
        ]
      ],
      "expected": [
        0,
        0,
        0,
        1,
        2,
        3,
        3,
        2,
        1
      ]
    }
  ],
  "zero-total-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        0,
        1,
        0,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        4,
        1,
        2,
        1,
        1
      ]
    },
    {
      "input": [
        [
          0,
          2,
          2,
          -2,
          0,
          3,
          3,
          -2,
          -1
        ]
      ],
      "expected": [
        2,
        1,
        2,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "zero-total-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        5
      ]
    },
    {
      "input": [
        [
          3,
          2,
          1,
          3,
          -1,
          2,
          0,
          -1,
          -3
        ]
      ],
      "expected": [
        3,
        8
      ]
    }
  ],
  "zero-total-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        3,
        1,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        2,
        2,
        0,
        1,
        1
      ]
    },
    {
      "input": [
        [
          2,
          2,
          -2,
          2,
          0,
          -2,
          3,
          2,
          -3
        ]
      ],
      "expected": [
        0,
        2,
        2,
        3,
        1,
        4,
        0,
        0,
        0
      ]
    }
  ],
  "zero-total-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 4
    },
    {
      "input": [
        [
          -3,
          -3,
          3,
          -2,
          3,
          1,
          1,
          1,
          -1
        ]
      ],
      "expected": 2
    }
  ],
  "unit-total-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -1,
          -2,
          -2,
          -3,
          2,
          -1,
          0,
          -2,
          1
        ]
      ],
      "expected": 3
    }
  ],
  "unit-total-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0,
        1,
        2,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          0,
          -1,
          2,
          0,
          -3,
          1,
          -2,
          2,
          1
        ]
      ],
      "expected": [
        2,
        4,
        5,
        3,
        1,
        3,
        3,
        3,
        3
      ]
    }
  ],
  "unit-total-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -2,
          0,
          -3,
          0,
          -3,
          -3,
          1,
          1
        ]
      ],
      "expected": [
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "unit-total-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        3
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          2,
          2,
          -1,
          1,
          0,
          -3,
          -3,
          -2,
          -1
        ]
      ],
      "expected": [
        0,
        5
      ]
    }
  ],
  "unit-total-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0,
        2,
        1,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          2,
          3,
          -1,
          0,
          -1,
          0,
          2,
          -3,
          -1
        ]
      ],
      "expected": [
        9,
        4,
        0,
        4,
        3,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "unit-total-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          -2,
          3,
          2,
          -3,
          2,
          3,
          -3
        ]
      ],
      "expected": 2
    }
  ],
  "positive-total-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          -1,
          3,
          1,
          -3,
          1,
          -3,
          -3,
          -2,
          -3
        ]
      ],
      "expected": 9
    }
  ],
  "positive-total-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        1,
        3,
        5,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        1,
        2,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          1,
          -2,
          -3,
          -1,
          -1,
          3,
          1,
          -3,
          -3
        ]
      ],
      "expected": [
        1,
        0,
        0,
        2,
        4,
        7,
        5,
        1,
        0
      ]
    }
  ],
  "positive-total-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        2,
        1,
        1,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          0,
          -1,
          2,
          -3,
          2,
          3,
          -2,
          -3,
          0
        ]
      ],
      "expected": [
        3,
        3,
        4,
        1,
        2,
        2,
        1,
        0,
        0
      ]
    }
  ],
  "positive-total-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        2
      ]
    },
    {
      "input": [
        [
          2,
          0,
          0,
          -2,
          -3,
          1,
          -2,
          -2,
          -1
        ]
      ],
      "expected": [
        0,
        2
      ]
    }
  ],
  "positive-total-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4,
        2,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          1,
          1,
          -1,
          -1,
          0,
          -1,
          3,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        6,
        4,
        3,
        2,
        1,
        1
      ]
    }
  ],
  "positive-total-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          -1,
          -1,
          0,
          -2,
          -2,
          2,
          -3,
          1,
          1
        ]
      ],
      "expected": 3
    }
  ],
  "negative-total-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 7
    },
    {
      "input": [
        [
          3,
          -3,
          -2,
          -3,
          -2,
          0,
          -3,
          -3,
          -3
        ]
      ],
      "expected": 42
    }
  ],
  "negative-total-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        4,
        5,
        3,
        1,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        4,
        3,
        6,
        4,
        2
      ]
    },
    {
      "input": [
        [
          2,
          1,
          1,
          -3,
          -2,
          1,
          3,
          -1,
          -2
        ]
      ],
      "expected": [
        1,
        5,
        10,
        16,
        16,
        11,
        7,
        8,
        6
      ]
    }
  ],
  "negative-total-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        2,
        1,
        1,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        1,
        2,
        1,
        1,
        0
      ]
    },
    {
      "input": [
        [
          1,
          -2,
          3,
          -3,
          2,
          -3,
          0,
          0,
          -1
        ]
      ],
      "expected": [
        4,
        5,
        5,
        5,
        4,
        4,
        3,
        2,
        1
      ]
    }
  ],
  "negative-total-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        3
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        5
      ]
    },
    {
      "input": [
        [
          1,
          -1,
          -1,
          1,
          1,
          2,
          2,
          -3,
          1
        ]
      ],
      "expected": [
        0,
        2
      ]
    }
  ],
  "negative-total-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        1,
        0,
        1,
        0,
        0
      ]
    },
    {
      "input": [
        [
          0,
          -2,
          3,
          -1,
          -1,
          3,
          -1,
          -1,
          0
        ]
      ],
      "expected": [
        2,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        0
      ]
    }
  ],
  "negative-total-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          2,
          -1,
          -2,
          -1,
          1,
          -2,
          3,
          -3,
          3
        ]
      ],
      "expected": 5
    }
  ],
  "divisible-triple-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 7
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 21
    },
    {
      "input": [
        [
          0,
          -2,
          -1,
          0,
          -3,
          3,
          2,
          0,
          1
        ]
      ],
      "expected": 22
    }
  ],
  "divisible-triple-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        3,
        4,
        5,
        4,
        3
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        10,
        12,
        12,
        10,
        6
      ]
    },
    {
      "input": [
        [
          1,
          2,
          2,
          -1,
          -2,
          1,
          2,
          2,
          -1
        ]
      ],
      "expected": [
        3,
        5,
        6,
        8,
        8,
        8,
        7,
        5,
        3
      ]
    }
  ],
  "divisible-triple-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        2,
        3,
        0,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        5,
        4,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          -3,
          2,
          1,
          2,
          0,
          -3,
          1,
          -3,
          3
        ]
      ],
      "expected": [
        5,
        4,
        2,
        2,
        1,
        2,
        2,
        2,
        1
      ]
    }
  ],
  "divisible-triple-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        5
      ]
    },
    {
      "input": [
        [
          -3,
          -3,
          3,
          0,
          -1,
          -3,
          2,
          -2,
          0
        ]
      ],
      "expected": [
        0,
        3
      ]
    }
  ],
  "divisible-triple-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        3,
        1,
        2,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          2,
          2,
          -2,
          1,
          -2,
          -2,
          -3,
          2,
          -2
        ]
      ],
      "expected": [
        4,
        2,
        3,
        3,
        0,
        3,
        1,
        2,
        0
      ]
    }
  ],
  "divisible-triple-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          2,
          2,
          0,
          -3,
          2,
          2,
          -3,
          -3,
          0
        ]
      ],
      "expected": 5
    }
  ],
  "odd-total-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 8
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 10
    },
    {
      "input": [
        [
          -2,
          -2,
          2,
          -2,
          3,
          3,
          0,
          -3,
          3
        ]
      ],
      "expected": 16
    }
  ],
  "odd-total-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        4,
        4,
        4,
        2
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        5,
        5,
        6,
        4,
        2
      ]
    },
    {
      "input": [
        [
          -1,
          3,
          2,
          2,
          1,
          -2,
          3,
          0,
          -2
        ]
      ],
      "expected": [
        3,
        8,
        9,
        10,
        11,
        10,
        9,
        6,
        3
      ]
    }
  ],
  "odd-total-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        4,
        2,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        4,
        1,
        3,
        1,
        1,
        0
      ]
    },
    {
      "input": [
        [
          -3,
          -3,
          -1,
          -3,
          1,
          -2,
          -1,
          -2,
          -2
        ]
      ],
      "expected": [
        6,
        3,
        5,
        3,
        2,
        3,
        1,
        1,
        0
      ]
    }
  ],
  "odd-total-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        2
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        5
      ]
    },
    {
      "input": [
        [
          0,
          3,
          1,
          3,
          -2,
          1,
          2,
          -3,
          2
        ]
      ],
      "expected": [
        0,
        8
      ]
    }
  ],
  "odd-total-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        1,
        2,
        1,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          2,
          0,
          -1,
          1,
          0,
          -1,
          3,
          1
        ]
      ],
      "expected": [
        4,
        3,
        2,
        1,
        1,
        2,
        1,
        1,
        1
      ]
    }
  ],
  "odd-total-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 4
    },
    {
      "input": [
        [
          -3,
          2,
          0,
          2,
          -3,
          0,
          0,
          3,
          2
        ]
      ],
      "expected": 3
    }
  ],
  "distinct-values-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 15
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 11
    },
    {
      "input": [
        [
          1,
          -3,
          -3,
          -2,
          0,
          3,
          2,
          1,
          2
        ]
      ],
      "expected": 26
    }
  ],
  "distinct-values-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        8,
        9,
        8,
        5
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        3,
        4,
        4,
        3,
        1
      ]
    },
    {
      "input": [
        [
          -1,
          -1,
          -1,
          1,
          2,
          1,
          0,
          2,
          1
        ]
      ],
      "expected": [
        1,
        1,
        3,
        4,
        5,
        5,
        6,
        5,
        3
      ]
    }
  ],
  "distinct-values-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        4,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        4,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -3,
          0,
          -2,
          0,
          1,
          -1,
          -1,
          0,
          3
        ]
      ],
      "expected": [
        9,
        7,
        4,
        1,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "distinct-values-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        4
      ]
    },
    {
      "input": [
        [
          0,
          -3,
          1,
          2,
          -2,
          3,
          2,
          -3,
          2
        ]
      ],
      "expected": [
        0,
        5
      ]
    }
  ],
  "distinct-values-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          0,
          -1,
          -3,
          2,
          0,
          1,
          -1,
          -2,
          -2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "distinct-values-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          0,
          1,
          0,
          -2,
          -2,
          -1,
          3,
          2,
          1
        ]
      ],
      "expected": 9
    }
  ],
  "single-repeat-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          -1,
          -2,
          0,
          -3,
          1,
          -3,
          -3,
          0,
          2
        ]
      ],
      "expected": 10
    }
  ],
  "single-repeat-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        3,
        4,
        4,
        4,
        3
      ]
    },
    {
      "input": [
        [
          3,
          2,
          2,
          2,
          2,
          1,
          3,
          2,
          3
        ]
      ],
      "expected": [
        1,
        2,
        3,
        4,
        4,
        4,
        4,
        3,
        2
      ]
    }
  ],
  "single-repeat-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        1,
        3,
        2,
        0,
        0
      ]
    },
    {
      "input": [
        [
          2,
          -3,
          1,
          -1,
          -3,
          -1,
          -3,
          0,
          2
        ]
      ],
      "expected": [
        0,
        0,
        2,
        3,
        2,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "single-repeat-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        4
      ]
    },
    {
      "input": [
        [
          -2,
          3,
          2,
          -2,
          -1,
          -2,
          -1,
          -3,
          3
        ]
      ],
      "expected": [
        0,
        4
      ]
    }
  ],
  "single-repeat-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        3,
        3,
        4,
        3,
        2,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          -3,
          -2,
          3,
          0,
          2,
          -3,
          -2
        ]
      ],
      "expected": [
        4,
        7,
        6,
        6,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "single-repeat-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          2,
          1,
          0,
          -2,
          1,
          1,
          -2,
          -3,
          2
        ]
      ],
      "expected": 1
    }
  ],
  "two-symbols-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 4
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 8
    },
    {
      "input": [
        [
          -3,
          1,
          -2,
          -3,
          3,
          -3,
          -3,
          -1,
          -2
        ]
      ],
      "expected": 11
    }
  ],
  "two-symbols-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        2,
        2,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        3,
        5,
        5,
        5,
        2,
        1
      ]
    },
    {
      "input": [
        [
          2,
          -1,
          -3,
          1,
          -1,
          3,
          3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        2,
        2,
        2,
        3,
        4,
        5,
        4,
        2
      ]
    }
  ],
  "two-symbols-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        4,
        3,
        1,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -2,
          2,
          2,
          1,
          -3,
          3,
          -3,
          2
        ]
      ],
      "expected": [
        0,
        7,
        3,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "two-symbols-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        3
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          -3,
          3,
          3,
          0,
          -1,
          -2,
          -1
        ]
      ],
      "expected": [
        0,
        4
      ]
    }
  ],
  "two-symbols-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        2,
        2,
        2,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        2,
        2,
        2,
        0,
        0
      ]
    },
    {
      "input": [
        [
          0,
          0,
          -3,
          -2,
          -3,
          -3,
          -3,
          1,
          1
        ]
      ],
      "expected": [
        3,
        2,
        2,
        2,
        4,
        3,
        2,
        0,
        0
      ]
    }
  ],
  "two-symbols-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          -2,
          -1,
          -2,
          -3,
          -1,
          -3,
          -1,
          -3,
          1
        ]
      ],
      "expected": 4
    }
  ],
  "three-symbols-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          -3,
          -1,
          3,
          0,
          1,
          -3,
          3,
          -1,
          3
        ]
      ],
      "expected": 7
    }
  ],
  "three-symbols-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        2,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        4,
        6,
        6,
        6,
        3
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          3,
          2,
          1,
          -3,
          -2,
          -2
        ]
      ],
      "expected": [
        1,
        2,
        3,
        3,
        3,
        4,
        3,
        2,
        1
      ]
    }
  ],
  "three-symbols-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0,
        3,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        0,
        1,
        2,
        2,
        1
      ]
    },
    {
      "input": [
        [
          -1,
          3,
          3,
          3,
          -1,
          -1,
          1,
          -3,
          -1
        ]
      ],
      "expected": [
        0,
        0,
        2,
        3,
        2,
        1,
        1,
        0,
        0
      ]
    }
  ],
  "three-symbols-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        2
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        5
      ]
    },
    {
      "input": [
        [
          2,
          -2,
          2,
          -1,
          2,
          3,
          -2,
          -3,
          0
        ]
      ],
      "expected": [
        0,
        4
      ]
    }
  ],
  "three-symbols-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        3,
        3,
        3,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        5,
        4,
        3,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          3,
          1,
          1,
          2,
          3,
          2,
          -1,
          2
        ]
      ],
      "expected": [
        3,
        4,
        4,
        3,
        4,
        3,
        0,
        0,
        0
      ]
    }
  ],
  "three-symbols-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          1,
          0,
          0,
          -2,
          1,
          -3,
          1,
          2,
          -1
        ]
      ],
      "expected": 2
    }
  ],
  "all-even-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          1,
          -3,
          2,
          -3,
          3,
          -3,
          -1,
          -2,
          0
        ]
      ],
      "expected": 4
    }
  ],
  "all-even-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        0,
        1,
        0,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        0,
        0,
        0,
        2,
        2
      ]
    },
    {
      "input": [
        [
          -2,
          1,
          3,
          -2,
          -2,
          2,
          0,
          1,
          1
        ]
      ],
      "expected": [
        1,
        0,
        0,
        4,
        6,
        6,
        4,
        0,
        0
      ]
    }
  ],
  "all-even-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        3,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          1,
          -3,
          1,
          1,
          -3,
          -3,
          2,
          -1,
          -2
        ]
      ],
      "expected": [
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "all-even-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        4,
        5
      ]
    },
    {
      "input": [
        [
          2,
          -1,
          3,
          2,
          0,
          2,
          -3,
          3,
          3
        ]
      ],
      "expected": [
        3,
        5
      ]
    }
  ],
  "all-even-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        0,
        1,
        0,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        0,
        0,
        0,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          1,
          -1,
          1,
          3,
          3,
          -3,
          0,
          -2
        ]
      ],
      "expected": [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1
      ]
    }
  ],
  "all-even-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          1,
          -1,
          -3,
          2,
          -1,
          -1,
          -2,
          -3,
          1
        ]
      ],
      "expected": 2
    }
  ],
  "alternating-parity-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 15
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 7
    },
    {
      "input": [
        [
          2,
          -2,
          -2,
          2,
          0,
          0,
          -3,
          -2,
          -3
        ]
      ],
      "expected": 15
    }
  ],
  "alternating-parity-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        8,
        9,
        8,
        5
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        2,
        2,
        1
      ]
    },
    {
      "input": [
        [
          -3,
          3,
          3,
          2,
          -2,
          -3,
          0,
          0,
          -1
        ]
      ],
      "expected": [
        1,
        1,
        2,
        2,
        3,
        4,
        3,
        2,
        2
      ]
    }
  ],
  "alternating-parity-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        4,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -1,
          2,
          3,
          -2,
          3,
          -2,
          -2,
          0,
          3
        ]
      ],
      "expected": [
        9,
        6,
        4,
        3,
        2,
        1,
        0,
        0,
        0
      ]
    }
  ],
  "alternating-parity-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        3,
        4
      ]
    },
    {
      "input": [
        [
          1,
          0,
          -1,
          -3,
          2,
          3,
          -2,
          -2,
          -3
        ]
      ],
      "expected": [
        3,
        6
      ]
    }
  ],
  "alternating-parity-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          1,
          3,
          -1,
          -3,
          -2,
          1,
          0,
          1
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "alternating-parity-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          2,
          -2,
          1,
          -1,
          2,
          -1,
          -2,
          -2,
          0
        ]
      ],
      "expected": 9
    }
  ],
  "strict-rise-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 15
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 8
    },
    {
      "input": [
        [
          3,
          -2,
          -2,
          -2,
          -1,
          -2,
          0,
          2,
          -1
        ]
      ],
      "expected": 13
    }
  ],
  "strict-rise-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        8,
        9,
        8,
        5
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        2,
        2,
        2,
        2,
        1
      ]
    },
    {
      "input": [
        [
          2,
          2,
          1,
          0,
          -3,
          0,
          1,
          -2,
          -1
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        3,
        4,
        3,
        2,
        2
      ]
    }
  ],
  "strict-rise-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        4,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        2,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          2,
          1,
          -3,
          1,
          2,
          2,
          -3,
          2,
          2
        ]
      ],
      "expected": [
        9,
        3,
        1,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "strict-rise-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        2
      ]
    },
    {
      "input": [
        [
          -3,
          1,
          1,
          -1,
          3,
          0,
          2,
          1,
          -2
        ]
      ],
      "expected": [
        0,
        1
      ]
    }
  ],
  "strict-rise-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          -2,
          2,
          3,
          -1,
          -2,
          1,
          -1,
          3,
          -1
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "strict-rise-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          3,
          0,
          -2,
          0,
          -3,
          1,
          1,
          -3,
          -1
        ]
      ],
      "expected": 9
    }
  ],
  "strict-fall-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 8
    },
    {
      "input": [
        [
          3,
          -1,
          2,
          -3,
          3,
          -1,
          3,
          2,
          -3
        ]
      ],
      "expected": 15
    }
  ],
  "strict-fall-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        2,
        2,
        2,
        1,
        1
      ]
    },
    {
      "input": [
        [
          2,
          0,
          3,
          -2,
          3,
          2,
          0,
          1,
          3
        ]
      ],
      "expected": [
        2,
        2,
        2,
        2,
        3,
        4,
        3,
        1,
        1
      ]
    }
  ],
  "strict-fall-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        2,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          -3,
          -1,
          3,
          0,
          -1,
          1,
          0
        ]
      ],
      "expected": [
        9,
        4,
        1,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "strict-fall-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        1
      ]
    },
    {
      "input": [
        [
          -2,
          0,
          1,
          0,
          3,
          0,
          1,
          -3,
          -2
        ]
      ],
      "expected": [
        2,
        3
      ]
    }
  ],
  "strict-fall-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          1,
          -2,
          -1,
          -2,
          -3,
          -1,
          2,
          0,
          1
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "strict-fall-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          -3,
          2,
          0,
          -3,
          1,
          0,
          1,
          -2,
          2
        ]
      ],
      "expected": 9
    }
  ],
  "unit-steps-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 15
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          -2,
          0,
          0,
          -1,
          0,
          -1,
          -2,
          -2,
          1
        ]
      ],
      "expected": 19
    }
  ],
  "unit-steps-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        8,
        9,
        8,
        5
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          -3,
          0,
          -3,
          -1,
          0,
          -1,
          3,
          -1,
          -2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        3,
        4,
        3,
        1,
        2,
        2
      ]
    }
  ],
  "unit-steps-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        4,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          2,
          0,
          0,
          3,
          -2,
          3,
          2,
          -2,
          0
        ]
      ],
      "expected": [
        9,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "unit-steps-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          2,
          -2,
          -1,
          2,
          3,
          -3,
          -3,
          0,
          -2
        ]
      ],
      "expected": [
        1,
        2
      ]
    }
  ],
  "unit-steps-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          -2,
          1,
          0,
          1,
          1,
          -3,
          0,
          -1,
          -3
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "unit-steps-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          -3,
          2,
          1,
          -1,
          -3,
          -1,
          3,
          -1,
          0
        ]
      ],
      "expected": 9
    }
  ],
  "flat-run-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 7
    },
    {
      "input": [
        [
          1,
          2,
          -3,
          3,
          0,
          1,
          1,
          -3,
          1
        ]
      ],
      "expected": 10
    }
  ],
  "flat-run-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        2,
        2
      ]
    },
    {
      "input": [
        [
          -3,
          1,
          -3,
          2,
          -3,
          -1,
          1,
          -2,
          1
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "flat-run-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        1,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -3,
          -2,
          -3,
          -3,
          -2,
          -3,
          0,
          -1,
          1
        ]
      ],
      "expected": [
        9,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "flat-run-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        4,
        5
      ]
    },
    {
      "input": [
        [
          0,
          -1,
          1,
          -3,
          2,
          2,
          0,
          -2,
          3
        ]
      ],
      "expected": [
        4,
        5
      ]
    }
  ],
  "flat-run-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          3,
          -2,
          1,
          -2,
          2,
          3,
          -2,
          3
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "flat-run-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          -2,
          3,
          -3,
          2,
          1,
          2,
          2,
          -1,
          -2
        ]
      ],
      "expected": 9
    }
  ],
  "mirror-values-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 9
    },
    {
      "input": [
        [
          2,
          2,
          -3,
          0,
          -2,
          -1,
          3,
          0,
          1
        ]
      ],
      "expected": 10
    }
  ],
  "mirror-values-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        3,
        3,
        2,
        2,
        2
      ]
    },
    {
      "input": [
        [
          3,
          3,
          2,
          3,
          -3,
          0,
          -1,
          -3,
          -1
        ]
      ],
      "expected": [
        2,
        3,
        2,
        2,
        1,
        1,
        2,
        2,
        2
      ]
    }
  ],
  "mirror-values-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        1,
        2,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          2,
          1,
          -3,
          -2,
          -1,
          1,
          3,
          -3,
          1
        ]
      ],
      "expected": [
        9,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "mirror-values-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        2
      ]
    },
    {
      "input": [
        [
          2,
          -3,
          -2,
          1,
          -2,
          -1,
          0,
          -3,
          -3
        ]
      ],
      "expected": [
        2,
        4
      ]
    }
  ],
  "mirror-values-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          -1,
          -3,
          1,
          0,
          -3,
          -2,
          2,
          1,
          1
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "mirror-values-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          -1,
          2,
          -1,
          1,
          -1,
          -2,
          -1,
          3,
          -2
        ]
      ],
      "expected": 9
    }
  ],
  "equal-ends-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 9
    },
    {
      "input": [
        [
          -2,
          3,
          0,
          0,
          0,
          -2,
          -1,
          -2,
          0
        ]
      ],
      "expected": 18
    }
  ],
  "equal-ends-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        3,
        3,
        2,
        2,
        2
      ]
    },
    {
      "input": [
        [
          3,
          -2,
          -1,
          -3,
          -2,
          3,
          0,
          -2,
          3
        ]
      ],
      "expected": [
        3,
        5,
        5,
        5,
        6,
        6,
        5,
        5,
        3
      ]
    }
  ],
  "equal-ends-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        1,
        2,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          0,
          -1,
          3,
          3,
          -2,
          1,
          -3,
          3
        ]
      ],
      "expected": [
        9,
        1,
        0,
        0,
        1,
        2,
        0,
        0,
        0
      ]
    }
  ],
  "equal-ends-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        2
      ]
    },
    {
      "input": [
        [
          -3,
          3,
          -2,
          -2,
          0,
          -2,
          2,
          2,
          -3
        ]
      ],
      "expected": [
        0,
        8
      ]
    }
  ],
  "equal-ends-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          0,
          1,
          1,
          0,
          -3,
          1,
          0,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "equal-ends-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          3,
          2,
          1,
          0,
          0,
          2,
          2,
          1,
          -3
        ]
      ],
      "expected": 9
    }
  ],
  "larger-finish-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 10
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          2,
          -2,
          -2,
          -2,
          1,
          2,
          3,
          1,
          2
        ]
      ],
      "expected": 21
    }
  ],
  "larger-finish-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        4,
        7,
        8,
        7,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        3,
        3,
        4,
        4,
        2
      ]
    },
    {
      "input": [
        [
          3,
          2,
          -2,
          -3,
          1,
          0,
          -3,
          -1,
          0
        ]
      ],
      "expected": [
        0,
        0,
        4,
        8,
        8,
        6,
        6,
        7,
        4
      ]
    }
  ],
  "larger-finish-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        2,
        1,
        1,
        1,
        0
      ]
    },
    {
      "input": [
        [
          0,
          -1,
          2,
          0,
          -2,
          -1,
          -2,
          -2,
          2
        ]
      ],
      "expected": [
        0,
        3,
        3,
        1,
        1,
        1,
        0,
        1,
        1
      ]
    }
  ],
  "larger-finish-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        5
      ]
    },
    {
      "input": [
        [
          -3,
          1,
          2,
          3,
          -3,
          3,
          1,
          -1,
          -3
        ]
      ],
      "expected": [
        0,
        7
      ]
    }
  ],
  "larger-finish-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        2,
        2,
        2,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        2,
        0,
        2,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -2,
          -3,
          -1,
          1,
          -1,
          1,
          3,
          -2
        ]
      ],
      "expected": [
        4,
        3,
        2,
        2,
        4,
        2,
        2,
        0,
        0
      ]
    }
  ],
  "larger-finish-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          2,
          1,
          -3,
          0,
          0,
          -2,
          -3,
          2,
          -3
        ]
      ],
      "expected": 2
    }
  ],
  "endpoint-peak-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 8
    },
    {
      "input": [
        [
          2,
          -1,
          -2,
          3,
          0,
          3,
          1,
          1,
          1
        ]
      ],
      "expected": 13
    }
  ],
  "endpoint-peak-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        2,
        2,
        1,
        2,
        2
      ]
    },
    {
      "input": [
        [
          0,
          -1,
          3,
          -1,
          1,
          -1,
          -3,
          -3,
          -1
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        2,
        3,
        3,
        2
      ]
    }
  ],
  "endpoint-peak-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        1,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -1,
          -2,
          -2,
          1,
          -3,
          -1,
          -2,
          -3,
          0
        ]
      ],
      "expected": [
        9,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "endpoint-peak-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        2
      ]
    },
    {
      "input": [
        [
          -2,
          -3,
          0,
          -3,
          -3,
          -2,
          0,
          2,
          2
        ]
      ],
      "expected": [
        2,
        6
      ]
    }
  ],
  "endpoint-peak-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          2,
          1,
          -1,
          -1,
          1,
          1,
          -1,
          3,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "endpoint-peak-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          1,
          -1,
          3,
          1,
          1,
          -2,
          -1,
          0,
          -2
        ]
      ],
      "expected": 9
    }
  ],
  "endpoint-valley-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 8
    },
    {
      "input": [
        [
          -1,
          -1,
          3,
          2,
          -1,
          -1,
          3,
          -3,
          -2
        ]
      ],
      "expected": 15
    }
  ],
  "endpoint-valley-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        2,
        2,
        2,
        2,
        2
      ]
    },
    {
      "input": [
        [
          3,
          1,
          1,
          1,
          1,
          3,
          1,
          1,
          -2
        ]
      ],
      "expected": [
        1,
        6,
        10,
        12,
        12,
        9,
        10,
        6,
        1
      ]
    }
  ],
  "endpoint-valley-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        1,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          2,
          -2,
          -1,
          -3,
          2,
          -2,
          0,
          -1,
          -3
        ]
      ],
      "expected": [
        9,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0
      ]
    }
  ],
  "endpoint-valley-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        3
      ]
    },
    {
      "input": [
        [
          -2,
          2,
          -3,
          -1,
          -2,
          -3,
          -3,
          0,
          3
        ]
      ],
      "expected": [
        2,
        6
      ]
    }
  ],
  "endpoint-valley-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          -1,
          0,
          0,
          0,
          -1,
          3,
          -1,
          1,
          -3
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "endpoint-valley-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          1,
          0,
          -1,
          2,
          0,
          -2,
          1,
          1,
          -2
        ]
      ],
      "expected": 9
    }
  ],
  "unique-maximum-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 15
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 15
    },
    {
      "input": [
        [
          -3,
          1,
          -1,
          -3,
          -1,
          2,
          3,
          2,
          -2
        ]
      ],
      "expected": 44
    }
  ],
  "unique-maximum-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        8,
        9,
        8,
        5
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        6,
        8,
        8,
        6,
        3
      ]
    },
    {
      "input": [
        [
          -2,
          2,
          3,
          2,
          -3,
          2,
          1,
          2,
          2
        ]
      ],
      "expected": [
        9,
        16,
        21,
        20,
        19,
        16,
        13,
        8,
        4
      ]
    }
  ],
  "unique-maximum-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        4,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        4,
        2,
        2,
        1,
        0
      ]
    },
    {
      "input": [
        [
          3,
          0,
          -1,
          -2,
          -3,
          0,
          2,
          0,
          2
        ]
      ],
      "expected": [
        9,
        8,
        6,
        5,
        3,
        3,
        2,
        1,
        1
      ]
    }
  ],
  "unique-maximum-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        5
      ]
    },
    {
      "input": [
        [
          -3,
          -1,
          1,
          -1,
          0,
          3,
          -1,
          0,
          0
        ]
      ],
      "expected": [
        0,
        8
      ]
    }
  ],
  "unique-maximum-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          1,
          3,
          0,
          2,
          -3,
          3,
          3,
          3,
          -1
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "unique-maximum-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          -1,
          1,
          0,
          -3,
          2,
          0,
          0,
          1,
          -2
        ]
      ],
      "expected": 9
    }
  ],
  "unique-minimum-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 15
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 14
    },
    {
      "input": [
        [
          2,
          3,
          -2,
          2,
          2,
          -1,
          1,
          -1,
          -3
        ]
      ],
      "expected": 41
    }
  ],
  "unique-minimum-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        8,
        9,
        8,
        5
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        3,
        4,
        6,
        6,
        5,
        3
      ]
    },
    {
      "input": [
        [
          -1,
          -3,
          1,
          3,
          1,
          -2,
          -2,
          0,
          3
        ]
      ],
      "expected": [
        9,
        16,
        17,
        17,
        15,
        12,
        9,
        8,
        5
      ]
    }
  ],
  "unique-minimum-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        5,
        4,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        6,
        4,
        3,
        1,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          1,
          1,
          2,
          1,
          -2,
          -2,
          2,
          -2
        ]
      ],
      "expected": [
        9,
        6,
        1,
        1,
        1,
        1,
        0,
        0,
        0
      ]
    }
  ],
  "unique-minimum-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        5
      ]
    },
    {
      "input": [
        [
          2,
          3,
          -1,
          3,
          2,
          1,
          0,
          -3,
          1
        ]
      ],
      "expected": [
        0,
        8
      ]
    }
  ],
  "unique-minimum-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          -2,
          1,
          0,
          3,
          -3,
          1,
          1,
          3,
          1
        ]
      ],
      "expected": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
    }
  ],
  "unique-minimum-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          -2,
          3,
          -2,
          -2,
          3,
          -1,
          -2,
          -3,
          -1
        ]
      ],
      "expected": 9
    }
  ],
  "centered-total-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          0,
          1,
          2,
          2,
          0,
          -2,
          -1,
          -2,
          3
        ]
      ],
      "expected": 4
    }
  ],
  "centered-total-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0,
        1,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        1,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          0,
          1,
          0,
          -3,
          2,
          -2,
          0,
          3
        ]
      ],
      "expected": [
        1,
        1,
        2,
        1,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "centered-total-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        0,
        1,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        0,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          1,
          2,
          3,
          3,
          1,
          2,
          -2,
          -2,
          -3
        ]
      ],
      "expected": [
        2,
        0,
        0,
        1,
        0,
        0,
        1,
        1,
        0
      ]
    }
  ],
  "centered-total-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        2
      ]
    },
    {
      "input": [
        [
          -2,
          2,
          -3,
          3,
          -2,
          0,
          -2,
          0,
          2
        ]
      ],
      "expected": [
        7,
        8
      ]
    }
  ],
  "centered-total-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        0,
        3,
        1,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        3,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          1,
          1,
          -3,
          3,
          -2,
          -2,
          -1,
          -3
        ]
      ],
      "expected": [
        0,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "centered-total-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          3,
          1,
          -3,
          1,
          -2,
          -3,
          3,
          -3,
          3
        ]
      ],
      "expected": 3
    }
  ],
  "even-negatives-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 10
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 11
    },
    {
      "input": [
        [
          3,
          -2,
          -2,
          -2,
          2,
          2,
          -2,
          -3,
          1
        ]
      ],
      "expected": 21
    }
  ],
  "even-negatives-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        4,
        4,
        6,
        6,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        4,
        6,
        7,
        6,
        6,
        4
      ]
    },
    {
      "input": [
        [
          0,
          2,
          0,
          -2,
          3,
          1,
          3,
          3,
          3
        ]
      ],
      "expected": [
        3,
        4,
        3,
        0,
        5,
        8,
        9,
        8,
        5
      ]
    }
  ],
  "even-negatives-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        3,
        3,
        2,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        4,
        1,
        1,
        2,
        2,
        1
      ]
    },
    {
      "input": [
        [
          0,
          3,
          -2,
          3,
          2,
          -3,
          1,
          -3,
          -3
        ]
      ],
      "expected": [
        5,
        3,
        2,
        2,
        3,
        2,
        2,
        1,
        1
      ]
    }
  ],
  "even-negatives-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        5
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          -2,
          -3,
          3,
          2,
          3,
          -3,
          -3
        ]
      ],
      "expected": [
        0,
        8
      ]
    }
  ],
  "even-negatives-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        2,
        0,
        1,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        3,
        1,
        0,
        1,
        1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          -1,
          -2,
          -2,
          -3,
          -1,
          -2,
          -1
        ]
      ],
      "expected": [
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        0
      ]
    }
  ],
  "even-negatives-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 4
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 4
    },
    {
      "input": [
        [
          -2,
          2,
          -3,
          -2,
          -2,
          0,
          2,
          -1,
          1
        ]
      ],
      "expected": 5
    }
  ],
  "one-zero-interval-count": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 9
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 6
    },
    {
      "input": [
        [
          -1,
          -3,
          0,
          -2,
          3,
          -2,
          1,
          -3,
          -2
        ]
      ],
      "expected": 21
    }
  ],
  "one-zero-coverage-profile": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        3,
        6,
        9,
        6,
        3
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        1,
        2,
        3,
        4,
        5,
        1
      ]
    },
    {
      "input": [
        [
          -1,
          3,
          2,
          -2,
          -2,
          3,
          0,
          -2,
          2
        ]
      ],
      "expected": [
        3,
        6,
        9,
        12,
        15,
        18,
        21,
        14,
        7
      ]
    }
  ],
  "one-zero-length-histogram": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        1,
        2,
        3,
        2,
        1
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        2,
        1,
        1,
        1,
        1,
        0
      ]
    },
    {
      "input": [
        [
          -2,
          1,
          -2,
          2,
          0,
          -2,
          -2,
          -1,
          2
        ]
      ],
      "expected": [
        1,
        2,
        3,
        4,
        5,
        4,
        3,
        2,
        1
      ]
    }
  ],
  "one-zero-earliest-longest": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        0,
        4
      ]
    },
    {
      "input": [
        [
          2,
          3,
          2,
          -3,
          1,
          -1,
          2,
          -1,
          -1
        ]
      ],
      "expected": [
        -1,
        -1
      ]
    }
  ],
  "one-zero-shortest-per-start": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        0
      ]
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": [
        3,
        2,
        1,
        0,
        0
      ]
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": [
        5,
        4,
        3,
        2,
        1,
        1
      ]
    },
    {
      "input": [
        [
          3,
          3,
          1,
          -1,
          0,
          -2,
          -2,
          2,
          3
        ]
      ],
      "expected": [
        5,
        4,
        3,
        2,
        1,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "one-zero-disjoint-packing": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 0
    },
    {
      "input": [
        [
          -2,
          -1,
          0,
          1,
          2
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          3,
          -3,
          3,
          -3,
          0,
          0
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          -2,
          -3,
          -1,
          1,
          -2,
          3,
          3,
          -1,
          -2
        ]
      ],
      "expected": 0
    }
  ],
  "parity-flip-gap-fixed-length-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 6
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 6
    },
    {
      "input": [
        [
          1,
          20,
          18,
          12,
          4,
          3,
          12,
          3,
          13,
          9,
          17
        ],
        4
      ],
      "expected": 12
    }
  ],
  "parity-flip-gap-fixed-length-maximum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 25
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 36
    },
    {
      "input": [
        [
          13,
          4,
          7,
          10,
          5,
          20,
          7,
          10,
          17,
          3,
          20
        ],
        4
      ],
      "expected": 70
    }
  ],
  "parity-flip-gap-fixed-length-minimum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 18
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 16
    },
    {
      "input": [
        [
          19,
          15,
          6,
          14,
          13,
          6,
          11,
          19,
          3,
          10,
          19
        ],
        4
      ],
      "expected": 28
    }
  ],
  "parity-flip-gap-target-sum-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 0
    },
    {
      "input": [
        [
          6,
          2,
          19,
          1,
          3,
          4,
          2,
          1,
          10,
          19,
          2
        ],
        25
      ],
      "expected": 4
    }
  ],
  "parity-flip-gap-target-sum-longest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 3
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": -1
    },
    {
      "input": [
        [
          5,
          8,
          9,
          15,
          5,
          14,
          6,
          1,
          6,
          11,
          6
        ],
        25
      ],
      "expected": 3
    }
  ],
  "parity-flip-gap-target-sum-shortest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 3
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": -1
    },
    {
      "input": [
        [
          16,
          15,
          5,
          4,
          6,
          9,
          2,
          17,
          14,
          13,
          14
        ],
        25
      ],
      "expected": 2
    }
  ],
  "parity-flip-gap-lexicographic-witness": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": [
        3,
        12,
        7
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": [
        1,
        8,
        3,
        16
      ]
    },
    {
      "input": [
        [
          13,
          11,
          8,
          7,
          8,
          15,
          12,
          16,
          2,
          19,
          17
        ],
        4
      ],
      "expected": [
        8,
        15,
        2,
        17
      ]
    }
  ],
  "parity-flip-gap-longest-multiplicity": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          18,
          10,
          19,
          14,
          17,
          3,
          14,
          1,
          12,
          7,
          9
        ]
      ],
      "expected": 4
    }
  ],
  "parity-flip-gap-length-census": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": [
        6,
        7,
        6,
        3,
        1,
        0
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": [
        7,
        8,
        8,
        6,
        4,
        2,
        1
      ]
    },
    {
      "input": [
        [
          18,
          16,
          19,
          3,
          9,
          14,
          12,
          15,
          11,
          12,
          18
        ]
      ],
      "expected": [
        11,
        24,
        32,
        19,
        15,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "rising-residue-fixed-length-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 2
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 0
    },
    {
      "input": [
        [
          10,
          15,
          17,
          12,
          3,
          1,
          5,
          8,
          5,
          11,
          6
        ],
        4
      ],
      "expected": 0
    }
  ],
  "rising-residue-fixed-length-maximum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 28
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": -1
    },
    {
      "input": [
        [
          14,
          1,
          17,
          20,
          2,
          13,
          20,
          17,
          19,
          7,
          15
        ],
        4
      ],
      "expected": 51
    }
  ],
  "rising-residue-fixed-length-minimum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 27
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": -1
    },
    {
      "input": [
        [
          14,
          18,
          1,
          12,
          11,
          18,
          2,
          2,
          11,
          11,
          7
        ],
        4
      ],
      "expected": -1
    }
  ],
  "rising-residue-target-sum-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 0
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 1
    },
    {
      "input": [
        [
          12,
          15,
          13,
          1,
          14,
          14,
          13,
          7,
          8,
          7,
          1
        ],
        25
      ],
      "expected": 2
    }
  ],
  "rising-residue-target-sum-longest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 3
    },
    {
      "input": [
        [
          15,
          3,
          7,
          16,
          1,
          16,
          6,
          15,
          3,
          19,
          12
        ],
        25
      ],
      "expected": 3
    }
  ],
  "rising-residue-target-sum-shortest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 3
    },
    {
      "input": [
        [
          4,
          17,
          9,
          14,
          6,
          3,
          13,
          16,
          10,
          10,
          5
        ],
        25
      ],
      "expected": 2
    }
  ],
  "rising-residue-lexicographic-witness": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": [
        5,
        10,
        12
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": []
    },
    {
      "input": [
        [
          16,
          10,
          13,
          15,
          5,
          18,
          17,
          3,
          14,
          6,
          6
        ],
        4
      ],
      "expected": []
    }
  ],
  "rising-residue-longest-multiplicity": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": 5
    },
    {
      "input": [
        [
          12,
          5,
          18,
          8,
          12,
          6,
          10,
          10,
          6,
          1,
          17
        ]
      ],
      "expected": 2
    }
  ],
  "rising-residue-length-census": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": [
        6,
        7,
        2,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": [
        7,
        9,
        5,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          6,
          3,
          10,
          17,
          4,
          20,
          3,
          12,
          11,
          18,
          20
        ]
      ],
      "expected": [
        11,
        28,
        31,
        19,
        5,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "falling-residue-fixed-length-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 0
    },
    {
      "input": [
        [
          6,
          2,
          20,
          8,
          11,
          13,
          11,
          17,
          3,
          5,
          18
        ],
        4
      ],
      "expected": 1
    }
  ],
  "falling-residue-fixed-length-maximum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 14
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": -1
    },
    {
      "input": [
        [
          14,
          7,
          5,
          12,
          18,
          2,
          9,
          4,
          8,
          10,
          14
        ],
        4
      ],
      "expected": 30
    }
  ],
  "falling-residue-fixed-length-minimum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 14
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": -1
    },
    {
      "input": [
        [
          16,
          1,
          1,
          12,
          8,
          18,
          17,
          14,
          9,
          7,
          14
        ],
        4
      ],
      "expected": 43
    }
  ],
  "falling-residue-target-sum-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 0
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 0
    },
    {
      "input": [
        [
          8,
          1,
          13,
          16,
          10,
          13,
          13,
          15,
          14,
          20,
          4
        ],
        25
      ],
      "expected": 0
    }
  ],
  "falling-residue-target-sum-longest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": -1
    },
    {
      "input": [
        [
          8,
          15,
          11,
          2,
          3,
          3,
          7,
          2,
          7,
          7,
          6
        ],
        25
      ],
      "expected": -1
    }
  ],
  "falling-residue-target-sum-shortest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          3,
          1,
          3,
          3,
          14,
          12,
          7,
          15,
          12,
          9
        ],
        25
      ],
      "expected": -1
    }
  ],
  "falling-residue-lexicographic-witness": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": [
        6,
        5,
        3
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": []
    },
    {
      "input": [
        [
          3,
          7,
          17,
          12,
          11,
          7,
          2,
          16,
          15,
          1,
          10
        ],
        4
      ],
      "expected": [
        11,
        7,
        2,
        1
      ]
    }
  ],
  "falling-residue-longest-multiplicity": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          3,
          12,
          14,
          2,
          13,
          18,
          14,
          12,
          16,
          13,
          16
        ]
      ],
      "expected": 3
    }
  ],
  "falling-residue-length-census": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": [
        6,
        4,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": [
        7,
        7,
        3,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          5,
          12,
          13,
          17,
          12,
          14,
          18,
          15,
          8,
          20,
          8
        ]
      ],
      "expected": [
        11,
        13,
        6,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "coprime-neighbors-fixed-length-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 6
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 14
    },
    {
      "input": [
        [
          8,
          5,
          7,
          7,
          14,
          16,
          14,
          11,
          15,
          9,
          3
        ],
        4
      ],
      "expected": 68
    }
  ],
  "coprime-neighbors-fixed-length-maximum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 24
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 36
    },
    {
      "input": [
        [
          9,
          12,
          18,
          14,
          17,
          10,
          10,
          9,
          19,
          9,
          1
        ],
        4
      ],
      "expected": 64
    }
  ],
  "coprime-neighbors-fixed-length-minimum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 14
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 10
    },
    {
      "input": [
        [
          14,
          18,
          1,
          15,
          15,
          14,
          18,
          6,
          16,
          20,
          3
        ],
        4
      ],
      "expected": 32
    }
  ],
  "coprime-neighbors-target-sum-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 2
    },
    {
      "input": [
        [
          8,
          13,
          18,
          20,
          2,
          15,
          5,
          4,
          7,
          7,
          14
        ],
        25
      ],
      "expected": 5
    }
  ],
  "coprime-neighbors-target-sum-longest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 3
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 4
    },
    {
      "input": [
        [
          13,
          9,
          14,
          16,
          15,
          17,
          5,
          16,
          3,
          6,
          11
        ],
        25
      ],
      "expected": 3
    }
  ],
  "coprime-neighbors-target-sum-shortest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 3
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 3
    },
    {
      "input": [
        [
          5,
          15,
          9,
          11,
          9,
          13,
          12,
          18,
          20,
          17,
          17
        ],
        25
      ],
      "expected": 2
    }
  ],
  "coprime-neighbors-lexicographic-witness": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": [
        5,
        3,
        7
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": [
        1,
        3,
        16,
        9
      ]
    },
    {
      "input": [
        [
          4,
          5,
          13,
          9,
          4,
          6,
          9,
          15,
          8,
          8,
          10
        ],
        4
      ],
      "expected": [
        4,
        5,
        4,
        9
      ]
    }
  ],
  "coprime-neighbors-longest-multiplicity": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          5,
          13,
          7,
          9,
          1,
          16,
          19,
          2,
          8,
          9,
          18
        ]
      ],
      "expected": 2
    }
  ],
  "coprime-neighbors-length-census": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": [
        6,
        9,
        6,
        2,
        0,
        0
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": [
        7,
        14,
        19,
        14,
        9,
        3,
        1
      ]
    },
    {
      "input": [
        [
          9,
          20,
          20,
          20,
          17,
          2,
          5,
          12,
          6,
          4,
          10
        ]
      ],
      "expected": [
        11,
        21,
        38,
        40,
        24,
        9,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "shared-factor-steps-fixed-length-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 3
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 1
    },
    {
      "input": [
        [
          12,
          7,
          1,
          19,
          7,
          13,
          2,
          3,
          19,
          18,
          18
        ],
        4
      ],
      "expected": 0
    }
  ],
  "shared-factor-steps-fixed-length-maximum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 28
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 30
    },
    {
      "input": [
        [
          4,
          5,
          17,
          4,
          9,
          2,
          8,
          7,
          19,
          14,
          11
        ],
        4
      ],
      "expected": 28
    }
  ],
  "shared-factor-steps-fixed-length-minimum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 21
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 30
    },
    {
      "input": [
        [
          6,
          14,
          5,
          16,
          20,
          13,
          18,
          1,
          15,
          11,
          19
        ],
        4
      ],
      "expected": 53
    }
  ],
  "shared-factor-steps-target-sum-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 1
    },
    {
      "input": [
        [
          17,
          6,
          3,
          19,
          5,
          17,
          7,
          11,
          11,
          15,
          2
        ],
        25
      ],
      "expected": 0
    }
  ],
  "shared-factor-steps-target-sum-longest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 2
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 2
    },
    {
      "input": [
        [
          12,
          15,
          16,
          16,
          19,
          5,
          10,
          19,
          12,
          10,
          17
        ],
        25
      ],
      "expected": 2
    }
  ],
  "shared-factor-steps-target-sum-shortest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 2
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 2
    },
    {
      "input": [
        [
          1,
          6,
          20,
          16,
          2,
          11,
          1,
          15,
          18,
          3,
          17
        ],
        25
      ],
      "expected": -1
    }
  ],
  "shared-factor-steps-lexicographic-witness": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": [
        5,
        10,
        12
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": [
        4,
        8,
        16,
        2
      ]
    },
    {
      "input": [
        [
          17,
          18,
          4,
          9,
          7,
          5,
          5,
          10,
          4,
          10,
          9
        ],
        4
      ],
      "expected": [
        4,
        10,
        4,
        10
      ]
    }
  ],
  "shared-factor-steps-longest-multiplicity": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          3,
          7,
          18,
          14,
          16,
          16,
          6,
          5,
          4,
          11,
          12
        ]
      ],
      "expected": 2
    }
  ],
  "shared-factor-steps-length-census": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": [
        6,
        6,
        3,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": [
        7,
        7,
        4,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          1,
          10,
          8,
          20,
          15,
          14,
          20,
          14,
          12,
          9,
          8
        ]
      ],
      "expected": [
        11,
        31,
        64,
        84,
        73,
        44,
        18,
        4,
        0,
        0,
        0
      ]
    }
  ],
  "bounded-rise-fixed-length-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 2
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 0
    },
    {
      "input": [
        [
          19,
          18,
          15,
          5,
          3,
          15,
          11,
          4,
          19,
          4,
          2
        ],
        4
      ],
      "expected": 0
    }
  ],
  "bounded-rise-fixed-length-maximum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 28
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": -1
    },
    {
      "input": [
        [
          18,
          18,
          12,
          20,
          19,
          3,
          1,
          19,
          15,
          20,
          3
        ],
        4
      ],
      "expected": -1
    }
  ],
  "bounded-rise-fixed-length-minimum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 27
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": -1
    },
    {
      "input": [
        [
          1,
          6,
          6,
          19,
          12,
          18,
          5,
          2,
          17,
          19,
          14
        ],
        4
      ],
      "expected": -1
    }
  ],
  "bounded-rise-target-sum-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 0
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 0
    },
    {
      "input": [
        [
          3,
          5,
          7,
          1,
          17,
          4,
          19,
          12,
          13,
          17,
          5
        ],
        25
      ],
      "expected": 0
    }
  ],
  "bounded-rise-target-sum-longest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": -1
    },
    {
      "input": [
        [
          14,
          9,
          16,
          6,
          11,
          5,
          16,
          8,
          19,
          18,
          7
        ],
        25
      ],
      "expected": -1
    }
  ],
  "bounded-rise-target-sum-shortest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": -1
    },
    {
      "input": [
        [
          9,
          19,
          4,
          19,
          5,
          16,
          1,
          7,
          4,
          5,
          9
        ],
        25
      ],
      "expected": -1
    }
  ],
  "bounded-rise-lexicographic-witness": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": [
        5,
        10,
        12
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": []
    },
    {
      "input": [
        [
          20,
          18,
          20,
          4,
          6,
          7,
          20,
          13,
          8,
          9,
          4
        ],
        4
      ],
      "expected": []
    }
  ],
  "bounded-rise-longest-multiplicity": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          19,
          2,
          6,
          16,
          13,
          18,
          11,
          19,
          18,
          20,
          11
        ]
      ],
      "expected": 6
    }
  ],
  "bounded-rise-length-census": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": [
        6,
        5,
        2,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": [
        7,
        3,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          9,
          15,
          1,
          14,
          13,
          12,
          20,
          20,
          1,
          5,
          13
        ]
      ],
      "expected": [
        11,
        8,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "large-zig-jumps-fixed-length-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 6
    },
    {
      "input": [
        [
          5,
          11,
          15,
          17,
          2,
          7,
          7,
          1,
          3,
          10,
          16
        ],
        4
      ],
      "expected": 16
    }
  ],
  "large-zig-jumps-fixed-length-maximum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 25
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 35
    },
    {
      "input": [
        [
          3,
          8,
          2,
          11,
          15,
          7,
          3,
          14,
          9,
          10,
          17
        ],
        4
      ],
      "expected": 47
    }
  ],
  "large-zig-jumps-fixed-length-minimum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 25
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 27
    },
    {
      "input": [
        [
          18,
          4,
          1,
          3,
          10,
          15,
          15,
          8,
          2,
          4,
          11
        ],
        4
      ],
      "expected": 24
    }
  ],
  "large-zig-jumps-target-sum-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 0
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 1
    },
    {
      "input": [
        [
          13,
          7,
          3,
          4,
          6,
          20,
          2,
          12,
          15,
          11,
          6
        ],
        25
      ],
      "expected": 2
    }
  ],
  "large-zig-jumps-target-sum-longest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 2
    },
    {
      "input": [
        [
          8,
          13,
          9,
          6,
          1,
          1,
          4,
          10,
          4,
          10,
          20
        ],
        25
      ],
      "expected": -1
    }
  ],
  "large-zig-jumps-target-sum-shortest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 2
    },
    {
      "input": [
        [
          4,
          2,
          3,
          5,
          2,
          8,
          13,
          11,
          16,
          2,
          17
        ],
        25
      ],
      "expected": 2
    }
  ],
  "large-zig-jumps-lexicographic-witness": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": [
        10,
        3,
        12
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": [
        1,
        8,
        16,
        2
      ]
    },
    {
      "input": [
        [
          10,
          19,
          7,
          14,
          8,
          16,
          6,
          16,
          10,
          2,
          2
        ],
        4
      ],
      "expected": [
        7,
        14,
        6,
        16
      ]
    }
  ],
  "large-zig-jumps-longest-multiplicity": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          19,
          5,
          3,
          19,
          2,
          1,
          1,
          17,
          13,
          17,
          18
        ]
      ],
      "expected": 24
    }
  ],
  "large-zig-jumps-length-census": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": [
        6,
        3,
        1,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": [
        7,
        9,
        11,
        6,
        1,
        0,
        0
      ]
    },
    {
      "input": [
        [
          4,
          4,
          2,
          3,
          12,
          19,
          15,
          8,
          1,
          13,
          11
        ]
      ],
      "expected": [
        11,
        30,
        41,
        51,
        30,
        8,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "square-pair-sums-fixed-length-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 0
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 0
    },
    {
      "input": [
        [
          11,
          8,
          12,
          20,
          9,
          9,
          18,
          7,
          10,
          4,
          1
        ],
        4
      ],
      "expected": 0
    }
  ],
  "square-pair-sums-fixed-length-maximum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": -1
    },
    {
      "input": [
        [
          7,
          1,
          12,
          12,
          20,
          9,
          20,
          2,
          8,
          2,
          17
        ],
        4
      ],
      "expected": -1
    }
  ],
  "square-pair-sums-fixed-length-minimum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": -1
    },
    {
      "input": [
        [
          9,
          17,
          11,
          20,
          19,
          8,
          19,
          12,
          2,
          11,
          20
        ],
        4
      ],
      "expected": -1
    }
  ],
  "square-pair-sums-target-sum-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 0
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 0
    },
    {
      "input": [
        [
          6,
          10,
          12,
          16,
          4,
          3,
          19,
          5,
          1,
          9,
          5
        ],
        25
      ],
      "expected": 2
    }
  ],
  "square-pair-sums-target-sum-longest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          5,
          18,
          7,
          10,
          4,
          20,
          7,
          17,
          2,
          1
        ],
        25
      ],
      "expected": 2
    }
  ],
  "square-pair-sums-target-sum-shortest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": -1
    },
    {
      "input": [
        [
          6,
          10,
          15,
          17,
          13,
          17,
          9,
          19,
          3,
          18,
          12
        ],
        25
      ],
      "expected": 2
    }
  ],
  "square-pair-sums-lexicographic-witness": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": []
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": []
    },
    {
      "input": [
        [
          19,
          20,
          14,
          13,
          3,
          11,
          4,
          4,
          11,
          14,
          16
        ],
        4
      ],
      "expected": []
    }
  ],
  "square-pair-sums-longest-multiplicity": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": 3
    },
    {
      "input": [
        [
          1,
          9,
          4,
          20,
          3,
          10,
          5,
          19,
          5,
          12,
          16
        ]
      ],
      "expected": 8
    }
  ],
  "square-pair-sums-length-census": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": [
        6,
        2,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": [
        7,
        3,
        0,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          7,
          1,
          5,
          5,
          7,
          9,
          7,
          11,
          19,
          12,
          6
        ]
      ],
      "expected": [
        11,
        6,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ],
  "disjoint-bits-fixed-length-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": 0
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 19
    },
    {
      "input": [
        [
          5,
          10,
          9,
          18,
          4,
          15,
          8,
          19,
          16,
          19,
          19
        ],
        4
      ],
      "expected": 35
    }
  ],
  "disjoint-bits-fixed-length-maximum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 37
    },
    {
      "input": [
        [
          20,
          6,
          16,
          20,
          10,
          18,
          1,
          2,
          11,
          8,
          3
        ],
        4
      ],
      "expected": 39
    }
  ],
  "disjoint-bits-fixed-length-minimum": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": 15
    },
    {
      "input": [
        [
          18,
          1,
          14,
          2,
          11,
          4,
          6,
          1,
          16,
          11,
          8
        ],
        4
      ],
      "expected": 8
    }
  ],
  "disjoint-bits-target-sum-count": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": 0
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 1
    },
    {
      "input": [
        [
          3,
          20,
          5,
          20,
          20,
          19,
          17,
          20,
          14,
          8,
          15
        ],
        25
      ],
      "expected": 1
    }
  ],
  "disjoint-bits-target-sum-longest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 2
    },
    {
      "input": [
        [
          16,
          15,
          2,
          5,
          14,
          11,
          20,
          8,
          20,
          18,
          9
        ],
        25
      ],
      "expected": 3
    }
  ],
  "disjoint-bits-target-sum-shortest": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        18
      ],
      "expected": -1
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        20
      ],
      "expected": 2
    },
    {
      "input": [
        [
          2,
          19,
          2,
          5,
          12,
          9,
          17,
          19,
          20,
          20,
          19
        ],
        25
      ],
      "expected": -1
    }
  ],
  "disjoint-bits-lexicographic-witness": [
    {
      "input": [
        [
          1
        ],
        1
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ],
        3
      ],
      "expected": []
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ],
        4
      ],
      "expected": [
        1,
        8,
        3,
        16
      ]
    },
    {
      "input": [
        [
          15,
          15,
          10,
          17,
          13,
          5,
          18,
          15,
          19,
          15,
          11
        ],
        4
      ],
      "expected": []
    }
  ],
  "disjoint-bits-longest-multiplicity": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": 2
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": 1
    },
    {
      "input": [
        [
          6,
          7,
          11,
          3,
          10,
          11,
          7,
          7,
          6,
          14,
          2
        ]
      ],
      "expected": 11
    }
  ],
  "disjoint-bits-length-census": [
    {
      "input": [
        [
          1
        ]
      ],
      "expected": [
        1
      ]
    },
    {
      "input": [
        [
          6,
          5,
          10,
          3,
          12,
          7
        ]
      ],
      "expected": [
        6,
        2,
        0,
        0,
        0,
        0
      ]
    },
    {
      "input": [
        [
          4,
          1,
          8,
          3,
          16,
          9,
          2
        ]
      ],
      "expected": [
        7,
        16,
        21,
        19,
        12,
        5,
        1
      ]
    },
    {
      "input": [
        [
          7,
          10,
          2,
          16,
          7,
          1,
          12,
          20,
          13,
          9,
          9
        ]
      ],
      "expected": [
        11,
        21,
        30,
        12,
        6,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ]
};
