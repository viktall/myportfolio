import Image from 'next/image'
import {Box} from "@mui/material"


const About=()=>{

return(

    <Box sx={{display:'flex', height:'100vh'}}>
            <Box sx={{width:'50%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Image 
                src="/whiteback5.png" 
                alt="victor ugwu" width={400} height={400} priority 
                />
            </Box>

            <Box sx={{width:'50%'}}>
                <Box sx={{textAlign:'center', py:2}}><h1>ABOUT</h1></Box>
                <Box sx={{px:10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </Box>
            </Box>


    </Box>

)

}
export default About