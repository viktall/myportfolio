import { Box, Button, Divider } from "@mui/material"
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'


const Home=()=>{
    return(
      <>
        <Box component="main"  sx={{height:`calc(100vh - ${56}px)`}}>
          <Box sx={{width:'48%', position:'relative', top:120, left:250}}>
            <Box>Hi, My name is</Box>
            <Box sx={{fontSize:36}}>VICTOR UGWU</Box>
            <Box sx={{fontSize:54}}>I'm a <TypeAnimation
                                                sequence={['frontend developer', 2000,'graphics designer', 2000]} 
                                                wrapper="span" 
                                                cursor={true} 
                                                repeat={Infinity} 
                                                style={{color:'red'}}
                                                />
            </Box>
            <Box sx={{width:400, mb:2}}> 
                  I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage 
            </Box>
                

            <Box sx={{display:'flex', gap:4}}>
            <Box>   
                <a href="https://www.instagram.com/_codewithreact/" target="_blank" rel="noopener noreferrer">
                  <Image src="/insta.svg" alt="victor ugwu" width={20} height={20} priority/>
                </a>
            </Box> 
            <Box>
	              <a href="https://www.linkedin.com/in/victorugwu/" target="_blank" rel="noopener noreferrer">
                  <Image src="/linkedInAlt.svg" alt="victor ugwu" width={20} height={20} priority/>
                </a>
            </Box>
            <Box>
	              <a href="https://twitter.com/vhillz_c" target="_blank" rel="noopener noreferrer">
                  <Image src="/twitter.svg" alt="victor ugwu" width={20} height={20} priority/>
                </a>
            </Box>  
            </Box>
                <Divider sx={{ width:420, my:3}}/>
                <Button variant='contained'> contact me</Button>
          </Box>
        </Box>
        
        </>
    )
}

export default Home