import { createTheme } from '@material-ui/core/styles';

const seaBlue = '#48A7E6'
const seaYellow = '#EBAC26'
const seaGray = '#A6A8A9'
const seaWhite = '#FFFFFF'
export default createTheme({
  palette: {
    common:{
      seaBlue:`${seaBlue}`,
      seaYellow:`${seaYellow}`,
      seaGray:`${seaGray}`,
      seaWhite:`${seaWhite}`
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