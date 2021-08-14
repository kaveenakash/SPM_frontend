import { createTheme } from '@material-ui/core/styles';

const seaBlue = '#48A7E6'
const seaYellow = '#EBAC26'
export default createTheme({
  palette: {
    common:{
      seaBlue:`${seaBlue}`,
      seaYellow:`${seaYellow}`
    },
    primary: {
      main: `${seaBlue}`,
    }, 
    secondary: {
      main: `${seaYellow}`,
    },
  },
  typography:{
    h3:{
      fontWeight:300
    }
  }
});