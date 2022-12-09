import 'typeface-montserrat';

export const MantineTheme = {
  baseTheme: {
    // colorScheme: 'light',
    colors: {
      light: ["#bfd9f2", "#b3cde6", "#99b3cc", "#809ab3", "#668099", "#4d6780", "#334d66", "#1a344d", "#001a33", "#000000"],
      dark: ['#d5d7e0', '#acaebf', '#8c8fa3', '#666980', '#4d4f66', '#34354a', '#2b2c3d', '#1d1e30', '#0c0d21', '#01010a'],
    },
    // primaryColor: "light",
    fontSizes: {
      xxs:10,
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 26,
      xxxl: 30,
      xxxxl: 50
    },

    radius: {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 16,
      xl: 32,
    },

    spacing: {
      xxxs: 0,
      xxs: 8,
      xs: 10,
      sm: 12,
      md: 18,
      lg: 22,
      xl: 28,
      xxl: 38,
      xxxl:50
    },

    breakpoints: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400,
    },

    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',

    headings: {
      fontFamily:
        'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
      fontWeight: 700,
      sizes: {
        h1: { fontSize: 44, lineHeight: 1.3 },
        h2: { fontSize: 36, lineHeight: 1.35 },
        h3: { fontSize: 26, lineHeight: 1.4 },
        h4: { fontSize: 22, lineHeight: 1.45 },
        h5: { fontSize: 18, lineHeight: 1.5 },
        h6: { fontSize: 16, lineHeight: 1.5 },
      },
    },
    
    other: {
      primaryButton: {
        color: '#0080FF'
      }
    },

    defaultProps: {
      Container: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1300,
        }
      }
  },

  }
}
