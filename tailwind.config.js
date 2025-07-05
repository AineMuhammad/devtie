/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9D5CFF",
          hover: "#B794FF",
        },
        secondary: {
          DEFAULT: "#6D28D9",
          hover: "#8B5CF6",
        },
        background: "#0A0118",
        foreground: "#F8F9FA",
        muted: "#110226",
        "muted-foreground": "rgba(248, 249, 250, 0.7)",
        border: "rgba(157, 92, 255, 0.12)",
        card: "#170533",
        "card-foreground": "#F8F9FA",
        accent: "rgba(157, 92, 255, 0.1)",
        "accent-foreground": "#B794FF",
        input: "rgba(157, 92, 255, 0.2)",
      },
      boxShadow: {
        "primary-glow": "0 0 2em rgba(157, 92, 255, 0.6)",
        "card-hover":
          "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(157, 92, 255, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-primary":
          "linear-gradient(135deg, #170533 0%, #110226 50%, #0A0118 100%)",
      },
    },
  },
  plugins: [],
};
