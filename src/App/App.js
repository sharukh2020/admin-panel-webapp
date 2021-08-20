import { makeStyles, ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import MiniDrawer from '../components/drawer/drawer';
import { theme } from '../custom_theme/theme';

const useStyles=makeStyles({
 app:{
    width:'100%',
    height: '100vh',
    boxSizing:'border-box'
}
})
function App() {
  const classes=useStyles()
  return (
    <BrowserRouter>
     <ThemeProvider theme={theme}>
       <div className={classes.app}>
         <MiniDrawer/>
       </div>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
