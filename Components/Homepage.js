import {Box, Button} from "@mui/material";
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'


const Homepage=()=>{
const pages = ['Home', 'About', 'Services', 'Projects', 'Contact']
return(
      
        <Box sx={{position:"relative", display:'flex'}}>
      
            <Image 
                src="/coding1.jpg" 
                alt="victor ugwu" fill sizes='100%' priority 
                style={{objectFit:"cover" , zIndex:-1, opacity:0.6, transform:'scaleX(-1)'}}/>
    
    <Box sx={{height:55, display:'flex', position:'fixed', right:0, left:0, alignItems:'center', px:5, bgcolor:'#000', zIndex:1, opacity:0.6}}>
        
        <Box sx={{flexGrow:1, color:'#fff'}}>
          MUI
        </Box>
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

<Box sx={{pl:{sm:'25%', xs:'15%'}, py:{sm:20, xs:14}, height:'100vh'}}>
          
            <Box sx={{py:1, color:'red'}}>Hi, My name is</Box>
            <Box sx={{fontSize:{sm:40, xs:32}, fontWeight:'bold', color:'white', bgcolor:'black', opacity:0.6, display:'inline-flex'}}>VICTOR UGWU</Box>
            <Box sx={{fontSize:{sm:30, xs:24}, color:'#333'}}>I'm a <TypeAnimation
                                                sequence={['Frontend developer.', 4000 , 'Web designer.', 4000]} 
                                                wrapper="span" 
                                                cursor={true} 
                                                repeat={Infinity} 
                                                style={{color:'#09b0e4', backgroundColor:'#000', opacity:0.6, fontWeight:'bold', fontSize:65}}
                                                />
            </Box>
            <Box sx={{bgcolor:'black', opacity:0.6, color:'#fff', py:1, width:{sm:'50%', xs:'80%'}}}> 
                  I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize.
            </Box>
                

            <Box sx={{display:'flex', gap:4.5, my:4}}>
            <Box>   
                <a href="https://www.instagram.com/_codewithreact/" target="_blank" rel="noopener noreferrer">
                  <Image src="/insta.svg" alt="victor ugwu" width={24} height={24} priority/>
                </a>
            </Box> 
            <Box>
	              <a href="https://www.linkedin.com/in/victorugwu/" target="_blank" rel="noopener noreferrer">
                  <Image src="/linkedInAlt.svg" alt="victor ugwu" width={24} height={24} priority/>
                </a>
            </Box>
            <Box>
	              <a href="https://twitter.com/vhillz_c" target="_blank" rel="noopener noreferrer">
                  <Image src="/twitter.svg" alt="victor ugwu" width={24} height={24} priority/>
                </a>
            </Box>  
            </Box>
                <Button variant='contained' size='large'> contact me</Button>
          
        </Box>
      
      </Box>
      
)}

export default Homepage;