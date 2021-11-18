import { createTheme} from '@mui/material/styles';

const CSSBaseline = {
  palette: {
    primary: {
      main: "#DA3035",
      light:'#FDF8F8'
    },
    secondary: {
      main: '#2F4047',
      light: '#CFBFBF'
    },
    surface:{
        main:'#fffff'
    },
    error: {
        main:"#D42600"
    },
    success: {
        main:"#00611B"
    },
    neutral: {
        main:"#3B3F4E"
    }
  },
  typography: {
    fontSize:14,
    fontFamily: [
     'Inter',
     '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1:{
      fontWeight:'bold'
    },
    h2: {
      fontWeight:'bolder',
      marginBottom:32
    },
    h3: {
      fontWeight:'bolder'
    },
    h4 :{
      fontWeight:'bold',
      marginBottom:24
    },
    h5: {
      fontWeight:'bold'
    },
    h6: {
      fontWeight:'bold'
    },
    body1:{
      fontWeight:400
    }
  }
};
export default createTheme(CSSBaseline);