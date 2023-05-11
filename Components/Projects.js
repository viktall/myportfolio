import { Box, Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material"
import Image from "next/image"

const Project=()=>{

    return(
        <Box sx={{pb:9}}>
        <Box sx={{height:54.8, position:'relative'}}>
        <Image 
                src="/coding1.jpg" 
                alt="victor ugwu" fill sizes='100%' priority 
                style={{objectFit:"cover"}}
                />
        </Box>
<Box>
<Box sx={{p:8, fontSize:42}}>MY PROJECTS</Box>
<Box sx={{gap:5, px:3, display:'flex', justifyContent:'center', flexWrap:'wrap'}}>

    <Card sx={{ maxWidth: 425 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/whiteback5.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          website design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Live </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 425 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/whiteback5.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          website design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Live </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    

    <Card sx={{ maxWidth: 425 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/twitter.svg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          App creation
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Live </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    <Card sx={{ maxWidth: 425 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/coding1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          video editing
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Live </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </Box>
    </Box>
        </Box>
    )
}

export default Project