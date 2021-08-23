module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        xs: ["0.625rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      colors: {
        black: "#000",
        ghost: {
          10: "rgba(10, 10, 10, 0.1)",
          20: "rgba(10, 10, 10, 0.2)",
          30: "rgba(10, 10, 10, 0.3)",
          40: "rgba(10, 10, 10, 0.4)",
          50: "rgba(10, 10, 10, 0.5)",
          60: "rgba(10, 10, 10, 0.6)",
          70: "rgba(10, 10, 10, 0.7)",
          80: "rgba(10, 10, 10, 0.8)",
          90: "rgba(10, 10, 10, 0.9)",
          100: "rgba(10, 10, 10, 1)",
        },
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        yellow: "#f5df4d",
        purple: "#8b4df5",
      },
      spacing: {
        px: "1px",
        0: "0px",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        13: "3.125rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        17: "4rem",
        18: "4.375rem",
        19: "4.875rem",
        20: "5rem",
        24: "6rem",
        25: "6.563rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        37: "9.375rem",
        40: "10rem",
        44: "11.25rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        65: "16.25rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        screenH: "100vh",
        halfScreenH: "50vh",
      },
      strokeWidth: {
        0: "0",
        0.5: "0.5",
        1: "1",
        1.5: "1.5",
        2: "2",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      zIndex: {
        auto: "auto",
        0: "0",
        1: "1",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
