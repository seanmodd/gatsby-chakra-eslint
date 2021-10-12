import '@fontsource/barlow'
import { createTheme } from '@material-ui/core/styles'
import './theme.css'
// const green = '#7920ff'
// const darkGreen = '#7920ff'
const tan = '#FECEA8'
const lightRed = '#FF847C'
const red = '#E84A5F'
const offBlack = '#2A363B'
const grey = '#747474'

export const LightMode = createTheme({
  palette: {
    type: 'light',

    primary: {
      main: '#7920ff',
    },
    secondary: {
      main: '#000033',
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    fontFamily: 'Barlow',
    h1: {
      fontSize: '4.5rem',
      fontFamily: 'Barlow',
      fontStyle: 'normal',
      fontWeight: 500,
      color: '#7920ff',
    },
    h2: {
      fontFamily: 'Barlow',
      fontSize: '3rem',
      fontWeight: 500,
      color: '#fff',
    },
    h3: {
      fontFamily: 'Barlow',
      fontSize: '2rem',
      fontWeight: 300,
      color: '#7920ff',
    },
    h4: {
      fontFamily: 'Barlow',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '3rem',
      color: '#fff',
    },
    h5: {
      fontFamily: 'Barlow',
      fontSize: '2rem',
      fontWeight: 500,
      fontStyle: 'normal',
      color: '#fff',
    },
    body1: {
      fontFamily: 'Barlow',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: grey,
    },
    body2: {
      fontFamily: 'Barlow',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: '#fff',
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: '#000033',
      },
      label: {
        fontFamily: 'Barlow',
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 400,
      },
    },
    AutoComplete: {
      // The default props to change
      PaperComponent: {
        backgroundColor: '#ff0000',
      },
      popupIndicator: {
        backgroundColor: '#ff0000',
      },
      paper: {
        backgroundColor: '#ff0000',
      },
    },
  },
})

export const DarkMode = createTheme({
  palette: {
    type: 'dark',

    primary: {
      main: '#7920ff',
    },
    secondary: {
      main: '#000033',
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  typography: {
    fontFamily: 'Barlow',
    h1: {
      fontSize: '4.5rem',
      fontFamily: 'Barlow',
      fontStyle: 'normal',
      fontWeight: 500,
      color: '#7920ff',
    },
    h2: {
      fontFamily: 'Barlow',
      fontSize: '3rem',
      fontWeight: 500,
      color: '#fff',
    },
    h3: {
      fontFamily: 'Barlow',
      fontSize: '2rem',
      fontWeight: 300,
      color: '#7920ff',
    },
    h4: {
      fontFamily: 'Barlow',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '3rem',
      color: '#fff',
    },
    h5: {
      fontFamily: 'Barlow',
      fontSize: '2rem',
      fontWeight: 500,
      fontStyle: 'normal',
      color: '#fff',
    },
    body1: {
      fontFamily: 'Barlow',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: grey,
    },
    body2: {
      fontFamily: 'Barlow',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: '#fff',
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: '#000033',
      },
      label: {
        fontFamily: 'Barlow',
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 400,
      },
    },
    AutoComplete: {
      // The default props to change
      PaperComponent: {
        backgroundColor: '#ff0000',
      },
      popupIndicator: {
        backgroundColor: '#ff0000',
      },
      paper: {
        backgroundColor: '#ff0000',
      },
    },
  },
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#7920ff',
    },
    secondary: {
      main: '#000033',
    },
    common: {
      tan,
      lightRed,
      red,
      offBlack,
    },
  },
  props: {
    // Name of the component ⚛️
    AutoComplete: {
      // The default props to change
      PaperComponent: {
        backgroundColor: '#ff0000',
      },
      popupIndicator: {
        backgroundColor: '#ff0000',
      },
      paper: {
        backgroundColor: '#ff0000',
      },
    },
  },
  typography: {
    fontFamily: 'Barlow',
    h1: {
      fontSize: '4.5rem',
      fontFamily: 'Barlow',
      fontStyle: 'normal',
      fontWeight: 500,
      color: '#7920ff',
    },
    h2: {
      fontFamily: 'Barlow',
      fontSize: '3rem',
      fontWeight: 500,
      color: '#fff',
    },
    h3: {
      fontFamily: 'Barlow',
      fontSize: '2rem',
      fontWeight: 300,
      color: '#7920ff',
    },
    h4: {
      fontFamily: 'Barlow',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '3rem',
      color: '#fff',
    },
    h5: {
      fontFamily: 'Barlow',
      fontSize: '2rem',
      fontWeight: 500,
      fontStyle: 'normal',
      color: '#fff',
    },
    body1: {
      fontFamily: 'Barlow',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: grey,
    },
    body2: {
      fontFamily: 'Barlow',
      fontWeight: 400,
      fontSize: '1.5rem',
      color: '#fff',
    },
  },
  overrides: {
    MuiChip: {
      root: {
        backgroundColor: '#000033',
      },
      label: {
        fontFamily: 'Barlow',
        fontSize: '1.5rem',
        color: '#fff',
        fontWeight: 400,
      },
    },
    AutoComplete: {
      // The default props to change
      PaperComponent: {
        backgroundColor: '#ff0000',
      },
      popupIndicator: {
        backgroundColor: '#ff0000',
      },
      paper: {
        backgroundColor: '#ff0000',
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: `
    /* barlow-100 - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 100;
      src: url('../fonts/barlow-v5-latin-100.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-100.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-100.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-100italic - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: italic;
      font-weight: 100;
      src: url('../fonts/barlow-v5-latin-100italic.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-100italic.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-100italic.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-200italic - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: italic;
      font-weight: 200;
      src: url('../fonts/barlow-v5-latin-200italic.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-200italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-200italic.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-200italic.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-200italic.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-200 - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 200;
      src: url('../fonts/barlow-v5-latin-200.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-200.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-200.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-300 - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 300;
      src: url('../fonts/barlow-v5-latin-300.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-300.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-300.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-300italic - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: italic;
      font-weight: 300;
      src: url('../fonts/barlow-v5-latin-300italic.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-300italic.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-300italic.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-italic - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: italic;
      font-weight: 400;
      src: url('../fonts/barlow-v5-latin-italic.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-italic.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-italic.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-regular - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 400;
      src: url('../fonts/barlow-v5-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-regular.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-regular.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-500 - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 500;
      src: url('../fonts/barlow-v5-latin-500.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-500.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-500.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-600 - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 600;
      src: url('../fonts/barlow-v5-latin-600.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-600.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-600.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-500italic - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: italic;
      font-weight: 500;
      src: url('../fonts/barlow-v5-latin-500italic.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-500italic.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-500italic.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-600italic - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: italic;
      font-weight: 600;
      src: url('../fonts/barlow-v5-latin-600italic.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-600italic.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-600italic.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-700 - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 700;
      src: url('../fonts/barlow-v5-latin-700.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-700.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-700.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-700italic - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: italic;
      font-weight: 700;
      src: url('../fonts/barlow-v5-latin-700italic.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-700italic.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-700italic.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-800italic - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: italic;
      font-weight: 800;
      src: url('../fonts/barlow-v5-latin-800italic.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-800italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-800italic.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-800italic.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-800italic.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-800 - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 800;
      src: url('../fonts/barlow-v5-latin-800.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-800.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-800.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-900 - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: normal;
      font-weight: 900;
      src: url('../fonts/barlow-v5-latin-900.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-900.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-900.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    /* barlow-900italic - latin */
    @font-face {
      font-family: 'Barlow';
      font-style: italic;
      font-weight: 900;
      src: url('../fonts/barlow-v5-latin-900italic.eot'); /* IE9 Compat Modes */
      src: local(''),
           url('../fonts/barlow-v5-latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
           url('../fonts/barlow-v5-latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
           url('../fonts/barlow-v5-latin-900italic.woff') format('woff'), /* Modern Browsers */
           url('../fonts/barlow-v5-latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
           url('../fonts/barlow-v5-latin-900italic.svg#Barlow') format('svg'); /* Legacy iOS */
    }
    `,
  },
})

export default theme
