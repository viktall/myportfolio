import Image from 'next/image'
import {Box} from "@mui/material"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


const About=()=>{

return(

    <Box sx={{display:{md:'flex', xs:'block'}, py:2, zIndex:-1}}>
        
            <Box flex={1} sx={{display:'flex', alignItems:'center', justifyContent:'center', px:1}}>
            <Box sx={{width:540, height:560, position:'relative'}}>
            <Image 
                src="/whiteback5.png" 
                alt="victor ugwu" fill sizes='100%' priority 
                style={{objectFit:"cover"}}
                />
            </Box>

            </Box>
            <Box flex={1}>
                <Box sx={{textAlign:'center', py:4.7}}><h1>ABOUT ME</h1></Box>
                <Box sx={{px:3}}>
                    <Box>
                    <Box sx={{bgcolor:'#ccc', fontWeight:'bold', py:1, pl:3}}>WORK EXPERIENCE</Box>
                       <Box sx={{display:'flex', alignItems:'center', pl:6}}>
                        <Box>
                                <WorkIcon/>
                        </Box>
                       <Box>
                            <Box sx={{pl:2, pt:3, fontWeight:'bold'}}>Frontend Developer</Box>
                            <Box sx={{pl:2, pb:3}}> Encentric solutions | 3years</Box>
                       </Box>
                       </Box>
                    </Box>

                    <Box>
                    <Box sx={{bgcolor:'#ccc', fontWeight:'bold', py:1, pl:3}}>EDUCATIONAL BACKGROUND</Box>
                    <Box sx={{display:'flex', alignItems:'center', pl:6}}>
                        <Box>
                            <SchoolIcon/>
                        </Box>
                        <Box>
                            <Box sx={{pl:2, pt:3, fontWeight:'bold'}}> BSc. Chemical Engineering</Box>
                            <Box sx={{pl:2, pb:3}}>Instiitution: Obafemi Awolowo University, Nigeria.</Box>
                        </Box>
                    </Box>
                    </Box>

                    <Box>
                    <Box sx={{bgcolor:'#ccc', fontWeight:'bold', py:1, pl:3}}> RELEVANT SKILLS</Box>
                    <Box sx={{pl:7, py:3}}> 
                        <Box sx={{display:'flex', alignItems:'center', py:0.5, gap:3}}>
                            <Box sx={{bgcolor:'#000', width:7, height:7, borderRadius:'50%'}}/><Box>HTML and CSS</Box>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'center', py:0.5, gap:3}}>
                            <Box sx={{bgcolor:'#000', width:7, height:7, borderRadius:'50%'}}/><Box>JavaScript and typeScript</Box>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'center', py:0.5, gap:3}}>
                            <Box sx={{bgcolor:'#000', width:7, height:7, borderRadius:'50%'}}/><Box>material UI</Box>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'center', py:0.5, gap:3}}>
                            <Box sx={{bgcolor:'#000', width:7, height:7, borderRadius:'50%'}}/><Box>ReactJs and NextJs</Box>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'center', py:0.5, gap:3}}>
                            <Box sx={{bgcolor:'#000', width:7, height:7, borderRadius:'50%'}}/><Box>Git/Github</Box>
                        </Box>
                        <Box sx={{display:'flex', alignItems:'center', py:0.5, gap:3}}>
                            <Box sx={{bgcolor:'#000', width:7, height:7, borderRadius:'50%'}}/><Box>Adobe Xd</Box>
                        </Box>
                    </Box>
                    </Box>

                </Box>
            </Box>


    </Box>

)

}
export default About