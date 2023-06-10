import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import {
  Devices,
  Groups,
  Laptop,
  SupportAgent,
  TrendingUp,
  Tungsten,
} from "@mui/icons-material";

const Services = () => {
  return (
    <Box
      sx={{ "& .MuiSvgIcon-root": { fontSize: 40 }, bgcolor: "#282828", pb: 5 }}
    >
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
      <Box id='Services' sx={{ p: 8, fontSize: 42, color: "#fff" }}>MY SERVICES</Box>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Paper className="hov" elevation={0} square>
          <Box>
            <Box className="box">
              <Box className="outerbox">
                <Box className="innerbox1" />
                <Box className="innerbox2" />
              </Box>
              <Laptop sx={{ position: "absolute" }} />
            </Box>
            <Box className="title">Web Design & Development</Box>
            <Box className="content">
              I specialize in DOM manipution. Currently, i'm focused in buildng
              interactive and responsive webpage I specialize in DOM manipution.
              Currently, i'm focused in buildng interactive and responsive
              webpage I specialize.
            </Box>
          </Box>
        </Paper>
        <Paper className="hov" elevation={0} square>
          <Box>
            <Box className="box">
              <Box className="outerbox">
                <Box className="innerbox1" />
                <Box className="innerbox2" />
              </Box>
              <Devices sx={{ position: "absolute" }} />
            </Box>
            <Box className="title">Responsive Design</Box>
            <Box className="content">
              I specialize in DOM manipution. Currently, i'm focused in buildng
              interactive and responsive webpage I specialize in DOM manipution.
              Currently, i'm focused in buildng interactive and responsive
              webpage I specialize.
            </Box>
          </Box>
        </Paper>
        <Paper className="hov" elevation={0} square>
          <Box>
            <Box className="box">
              <Box className="outerbox">
                <Box className="innerbox1" />
                <Box className="innerbox2" />
              </Box>
              <TrendingUp sx={{ position: "absolute" }} />
            </Box>
            <Box className="title">Performance & SEO</Box>
            <Box className="content">
              I specialize in DOM manipution. Currently, i'm focused in buildng
              interactive and responsive webpage I specialize in DOM manipution.
              Currently, i'm focused in buildng interactive and responsive
              webpage I specialize.
            </Box>
          </Box>
        </Paper>
        <Paper className="hov" elevation={0} square>
          <Box>
            <Box className="box">
              <Box className="outerbox">
                <Box className="innerbox1" />
                <Box className="innerbox2" />
              </Box>
              <Groups sx={{ position: "absolute" }} />
            </Box>
            <Box className="title">Collaboration</Box>
            <Box className="content">
              I specialize in DOM manipution. Currently, i'm focused in buildng
              interactive and responsive webpage I specialize in DOM manipution.
              Currently, i'm focused in buildng interactive and responsive
              webpage I specialize.
            </Box>
          </Box>
        </Paper>

        <Paper className="hov" elevation={0} square>
          <Box>
            <Box className="box">
              <Box className="outerbox">
                <Box className="innerbox1" />
                <Box className="innerbox2" />
              </Box>
              <Tungsten sx={{ position: "absolute" }} />
            </Box>
            <Box className="title">Mentorship</Box>
            <Box className="content">
              I specialize in DOM manipution. Currently, i'm focused in buildng
              interactive and responsive webpage I specialize in DOM manipution.
              Currently, i'm focused in buildng interactive and responsive
              webpage I specialize.
            </Box>
          </Box>
        </Paper>
        <Paper className="hov" elevation={0} square>
          <Box>
            <Box className="box">
              <Box className="outerbox">
                <Box className="innerbox1" />
                <Box className="innerbox2" />
              </Box>
              <SupportAgent sx={{ position: "absolute" }} />
            </Box>
            <Box className="title">24/7 Support</Box>
            <Box className="content">
              I specialize in DOM manipution. Currently, i'm focused in buildng
              interactive and responsive webpage I specialize in DOM manipution.
              Currently, i'm focused in buildng interactive and responsive
              webpage I specialize.
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Services;
