module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1172px',
    },
    colors: {
      transperent: 'transperent',
      current: 'currentColor',
      green: {
        DEFAULT: "#7E22CE",
        light: "#E9D5FF",
        semilight: "#C084FC",
      },
      blue: '#84CC16',
      dark: {
        DEFAULT: "#272727",
        light: "#7D7D7D",
        semilight: "#686868",
      },
      yellow: '#581C87',
      muted: '#A9A9A9',
      light: '#DFDFDF',
      white: '#FFFFFF',
    },
    boxShadow: {
      "custom":
        "0px 16px 48px rgba(39, 39, 39, 0.1)",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "base",
    }),
  ],
}
