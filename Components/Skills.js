import Image from 'next/image'
import {Box} from '@mui/material'


const Skills=()=>{

    return(
        <Box sx={{height:'100vh'}}>
            <Image 
                src="/coding1.jpg" 
                alt="victor ugwu" width={1348} height={85} priority 
                style={{objectFit:"cover"}}
                />
        <Box sx={{p:8, fontSize:42}}>
            SKILLS
        </Box>
        <Box sx={{display:'flex', gap:12, width:'80%', flexWrap:'wrap', justifyContent:'center', mx:'auto'}}>
            <Box sx={{textAlign:'center'}}>   
                
                  <Image src="/html.svg" alt="html" width={75} height={75} priority/>
                  <Box>HTML</Box>
                
            </Box> 
            <Box sx={{textAlign:'center'}}>
	             
                  <Image src="/css.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>CSS</Box>
                
            </Box>
            <Box sx={{textAlign:'center'}}>
	              
                  <Image src="/tailwind.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>TAILWIND</Box>
                
            </Box>  
            <Box sx={{textAlign:'center'}}>   
                
                  <Image src="/js.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>JAVASCRIPT</Box>
                
            </Box> 
            <Box sx={{textAlign:'center'}}>
	              
                  <Image src="/ts.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>TYPESCRIPT</Box>
                
            </Box>
            <Box sx={{textAlign:'center'}}>
	              
                  <Image src="/react.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>REACTJs</Box>
                
            </Box>  
            <Box sx={{textAlign:'center'}}>   
                
                  <Image src="/next.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>NEXTJs</Box>
                
            </Box> 
            <Box sx={{textAlign:'center'}}>
	              
                  <Image src="/node.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>NODEJs</Box>
                
            </Box>
            <Box sx={{textAlign:'center'}}>
	              
                  <Image src="/mongodb.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>MONGODB</Box>
                
            </Box>  
            <Box sx={{textAlign:'center'}}>   
                
                  <Image src="/postman.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>POSTMAN</Box>
                
            </Box> 
            <Box sx={{textAlign:'center'}}>
	              
                  <Image src="/git.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>GIT</Box>
                
            </Box>
            <Box sx={{textAlign:'center'}}>
	              
                  <Image src="/github.svg" alt="victor ugwu" width={75} height={75} priority/>
                  <Box>GITHUB</Box>
                
            </Box>  
            </Box>
    </Box>
    )
}
export default Skills