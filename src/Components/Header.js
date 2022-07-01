import Logo from "../Images/trollface.png";
import "../Stylesheets/header.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { createTheme,ThemeProvider} from '@mui/material/styles';

const theme = createTheme({

  palette: {
    white: {
      main: '#FFFFFF '
    },
  },
});

export default function Header() {
  return (
    <header>
      <div className="rigth-container">
        <img src={Logo} className="logo" />
        <h1>Meme Generator</h1>
      </div>
      <div className="left-container">
      <ThemeProvider theme={theme}>
      <a href="https://github.com/ZenSeit?tab=repositories" target="_blank">
        <GitHubIcon sx={{ 
            fontSize: 40}} className="icons" color="white"/>
        </a>
        <a href="https://www.linkedin.com/in/diego-fernando-becerra-zambrano-52270717b/ " target="_blank">
        <LinkedInIcon sx={{ 
            fontSize: 40 }} className="icons" color="white"/>  
            </a>
        </ThemeProvider>
        
      </div>
    </header>
  );
}
