module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'poppins': ['Poppins'],
          'inter': ['Inter', 'sans-serif'],
          'sans': ['Poppins', 'ui-sans-serif', 'system-ui'],
          'serif': ['ui-serif', 'Georgia'],
          'mono': ['ui-monospace', 'SFMono-Regular'],
          'display': ['Oswald'],
          'body': ['"Open Sans"'], 
        },
        colors: {
          'regal-blue': '#243c5a',
          'home-background': '#d8ecff',
          'dark-blue': '#0d112d',
          'login-button': '#6788ff',
          'dashboard-color': '#141f45',
          'chat-background': '#f4f3fb',
          'grey-color': '#707C97',
          'blue-color': '#2A8BF2',
        },
        borderRadius: {
          '50': '50px',
          '20': '20px',
          '15': '15px',
        },
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '36px',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
          '11': '11px',
        },
        maxWidth: {
          '1/2': '50%',
        },
        minWidth: {
          '1/2': '50%',
        },
        spacing: {
          '850': '850px',
        },
      },
    },
    plugins: [require('tailwindcss-font-inter')],
}