import {Box, Typography, Button} from "@mui/material";
import Home from "./Home";
import Image from 'next/image'
import About from './About'
import Skills from './Skills'

const Header=()=>{
    const pages = ['Home', 'About', 'Skills', 'Projects', 'Contact']
    return(
      <>
    <Box sx={{position:'relative', height:'100vh', bgcolor:'#fff'}}>
      
    <Image 
        src="/coding1.jpg" 
        alt="victor ugwu" fill sizes='100%' priority 
        style={{objectFit:"cover" , opacity:0.6, transform:'scaleX(-1)'}}/>
    
    <Box sx={{ height:55, display:'flex', alignItems:'center', px:5, borderBottom:1, bgcolor:'#000'}}>
        
        <Typography variant="h6" component="div" sx={{flexGrow:1, color:'#fff'}}>
          MUI
        </Typography>
        <Box sx={{display:'flex'}}>
          {pages.map((item) => (
            <Box key={item}>
            <Button sx={{color:'#fff'}}>
              {item}
            </Button>
            </Box>
          ))}
        </Box>
    </Box>

      <Home/>
      </Box>
      <About/>
      <Skills/>
      </>

)}

export default Header;