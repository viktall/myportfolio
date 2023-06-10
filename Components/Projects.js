import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";

const Project = () => {
  return (
    <Box sx={{ bgcolor: "#202020" }}>
      <Box sx={{ width: "100vw", height: 20, position: "relative" }}>
        <Image
          src="/topDiv.svg"
          alt="victor ugwu"
          fill
          sizes="100%"
          priority
          style={{ objectFit: "cover", display: "block" }}
        />
      </Box>

      <Box>
        <Box id='Projects' sx={{ p: 8, fontSize: 42, color: "#fff" }}>MY PROJECTS</Box>
        <Box
          sx={{
            gap: 5,
            px: 3,
            pb: 8,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Card sx={{ maxWidth: 425, bgcolor: "#282828" }}>
            <CardMedia
              sx={{ height: 200 }}
              image="/whiteback5.png"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#fff"
              >
                Todolist App
              </Typography>
              <Typography variant="body2" color="#fff">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except
                AntarcticaLizards are a widespread group of squamate reptiles,
                with over 6,000 species, ranging across all continents except
                Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Live </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 425, bgcolor: "#282828" }}>
            <CardMedia
              sx={{ height: 200 }}
              image="/whiteback5.png"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#fff"
              >
                Quiz App
              </Typography>
              <Typography variant="body2" color="#fff">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except
                AntarcticaLizards are a widespread group of squamate reptiles,
                with over 6,000 species, ranging across all continents except
                Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Live </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 425, bgcolor: "#282828" }}>
            <CardMedia
              sx={{ height: 200 }}
              image="/twitter.svg"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#fff"
              >
                E-commerce App
              </Typography>
              <Typography variant="body2" color="#fff">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Live </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 425, bgcolor: "#282828" }}>
            <CardMedia
              sx={{ height: 200 }}
              image="/coding1.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="#fff"
              >
                Portfolio App
              </Typography>
              <Typography variant="body2" color="#fff">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Live </Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
      <Box sx={{ width: "100vw", height: 20, position: "relative" }}>
        <Image
          src="/bottomDiv.svg"
          alt="victor ugwu"
          fill
          sizes="100%"
          priority
          style={{ objectFit: "cover", display: "block" }}
        />
      </Box>
    </Box>
  );
};

export default Project;
