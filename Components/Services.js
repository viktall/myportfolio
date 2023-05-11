import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SearchIcon from '@mui/icons-material/Search';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';

const Services=()=> {
  return(
    <Box sx={{'& .MuiSvgIcon-root':{fontSize:40}}}>
        <Box sx={{p:8, fontSize:42}}>
          MY SERVICES
        </Box>
        <Box sx={{display: 'flex', justifyContent:'center', flexWrap: 'wrap', '& > :not(style)': {m: 1, width: 328, height: 428}}}>
          <Paper elevation={3} sx={{px:5, py:4}}>
          <Box>
              <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', width:100, height:100, border:1, borderColor:'#aaa', borderRadius:'100%'}}><LaptopMacIcon/></Box>
              <Box sx={{fontWeight:'bold', fontSize:22, my:2}}>
                WEB DESIGN
              </Box>
              <Box> 
                  I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize.
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{px:5, py:4}}>
          <Box>
            <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', width:100, height:100, border:1, borderColor:'#aaa', borderRadius:'100%'}}><TrendingUpIcon/></Box>
              <Box sx={{fontWeight:'bold', fontSize:22, my:2}}>
                WEB DESIGN
              </Box>
              <Box> 
                  I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize.
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{px:5, py:4}}>
            <Box>
            <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', width:100, height:100, border:1, borderColor:'#aaa', borderRadius:'100%'}}><ScheduleIcon/></Box>
              <Box sx={{fontWeight:'bold', fontSize:22, my:2}}>
                WEB DESIGN
              </Box>
              <Box> 
                  I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize.
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{px:5, py:4}}>
            <Box>
            <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', width:100, height:100, border:1, borderColor:'#aaa', borderRadius:'100%'}}><SearchIcon/></Box>
              <Box sx={{fontWeight:'bold', fontSize:22, my:2}}>
                WEB DESIGN
              </Box>
              <Box> 
                  I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize.
              </Box>
            </Box>
          </Paper>
          
          <Paper elevation={3} sx={{px:5, py:4}}>
            <Box>
              <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', width:100, height:100, border:1, borderColor:'#aaa', borderRadius:'100%'}}><DevicesOutlinedIcon/></Box>
              <Box sx={{fontWeight:'bold', fontSize:22, my:2}}>
                WEB DESIGN
              </Box>
              <Box> 
                  I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize.
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{px:5, py:4}}>
            <Box>
              <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', width:100, height:100, border:1, borderColor:'#aaa', borderRadius:'100%'}}><DevicesOutlinedIcon/></Box>
              <Box sx={{fontWeight:'bold', fontSize:22, my:2}}>
                WEB DESIGN
              </Box>
              <Box> 
                  I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize in DOM manipution. Currently, 
                  i'm focused in buildng interactive and responsive webpage I specialize.
              </Box>
            </Box>
          </Paper>
        </Box>
    </Box>
  );
}

export default Services;
