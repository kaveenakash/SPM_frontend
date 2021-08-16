import { createTheme } from '@material-ui/core/styles';

const seaBlue = '#48A7E6'
const seaYellow = '#EBAC26'
const seaGray = '#A6A8A9'
const darkGray = '#9e9e9e'
const lightGray = '#F2F2F2'
const seaWhite = '#FFFFFF'
const borderColor = `#DDDDDD`
const pureBlack = `#000000`
export default createTheme({
  palette: {
    common:{
      seaBlue:`${seaBlue}`,
      seaYellow:`${seaYellow}`,
      seaGray:`${seaGray}`,
      seaWhite:`${seaWhite}`,
      darkGray:`${darkGray}`,
      lightGray:`${lightGray}`,
      borderColor:`${borderColor}`,
      pureBlack:`${pureBlack}`
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