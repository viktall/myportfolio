import { useState } from "react";
import { Box, Button, Drawer, IconButton } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Menu } from "@mui/icons-material";
import { Link } from "react-scroll";


const Homepage = () => {
  const pages = ["Home", "About", "Services", "Projects", "Contact"];
  const [state, setState]=useState(false);

  const toggleDrawer = (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "shift")) {
      return;
    }
    setState(true);
  };

  return (
    <Box id='Home' sx={{position: "relative"}}>
      <Image
        src="/coding1.jpg"
        alt="victor ugwu"
        fill
        sizes="100%"
        priority
        style={{
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.6,
          transform: "scaleX(-1)",
        }}
      />

      <Box
        sx={{
          display: "flex",
          position: "fixed",
          right: 0,
          left: 0,
          alignItems: "center",
          px: 3,
          bgcolor: "#000",
          zIndex: 1,
          opacity: 0.6,
          height: 48,
        }}
      >
        <Box sx={{ flexGrow: 1}}>
          <Image
            src="/MYLOGO.svg"
            alt="victor ugwu"
            width={30}
            height={30}
            priority
          />
        </Box>
        <Box sx={{display: {md:"flex", xs:"none"} }}>
          {pages.map((item) => (
            <Box key={item} sx={{color:"#fff", my:3}}>
              <Link to={item} smooth={true} offset={-68} duration={500}>{item}</Link>
            </Box>
          ))}
        </Box>
        <Box sx={{display: {md: "none", xs:"block"}}}>
          <IconButton size='large' edge='end' sx={{color:'#fff'}} aria-label='icon' onClick={toggleDrawer}>
            <Menu />
          </IconButton>
          <Drawer
            anchor="right"
            sx={{ "& .MuiDrawer-paper": {bgcolor: "#303030"}}}
            open={state}
            onClose={()=>setState(false)}
          >
            <Box
              sx={{ width: "60vw" }}
              role="presentation"
              onClick={()=> setState(false)}
              onKeyDown={()=> setState(false)}
            >
              <Box sx={{textAlign: "center", pt:12}}>
                <Image
                  src="/MYLOGO.svg"
                  alt="victor ugwu"
                  width={54}
                  height={54}
                  priority
                  style={{marginBottom:24}}
                />
                {pages.map((item) => (
                  <Box key={item}>
                    <Link to={item} smooth={true} offset={-200} duration={500} sx={{color:"#fff", my:3}}>{item}</Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Drawer>
        </Box>
      </Box>

      <Box
        sx={{
          pl: { sm: "25%", xs: "15%" },
          py: { sm: 20, xs: 14 },
        }}
      >
        <Box sx={{ p: 1, color: "red" }}>Hi, My name is</Box>
        <Box
          sx={{
            fontSize: "clamp(20px, 5vw, 40px)",
            fontWeight: "bold",
            color: "white",
            bgcolor: "#000",
            opacity: 0.6,
            display: "inline-flex",
            p: 1,
          }}
        >
          VICTOR UGWU
        </Box>
        <Box sx={{ fontSize: "clamp(12px, 5vw, 28px)", color: "#333" }}>
          I'm a
          <TypeAnimation
            sequence={["Frontend developer.", 4000, "Web designer.", 4000]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              color: "#09b0e4",
              backgroundColor: "#000",
              opacity: 0.6,
              fontWeight: "bold",
              fontSize: "clamp(20px, 7vw, 65px)",
              marginLeft: 8,
            }}
          />
        </Box>
        <Box
          sx={{
            bgcolor: "#000",
            opacity: 0.6,
            color: "#fff",
            p: 1,
            width: { sm: "50%", xs: "80%" },
          }}
        >
          I specialize in building visual appealing, interactive, responsive and
          search engine optimized user interface to take your business over per,
          implementing best practices.
        </Box>

        <Box sx={{ display: "flex", gap: 4.5, my: 4 }}>
          <Box>
            <a
              href="https://www.instagram.com/_codewithreact/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/insta.svg"
                alt="victor ugwu"
                width={24}
                height={24}
                priority
              />
            </a>
          </Box>
          <Box>
            <a
              href="https://www.linkedin.com/in/victorugwu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedInAlt.svg"
                alt="victor ugwu"
                width={24}
                height={24}
                priority
              />
            </a>
          </Box>
          <Box>
            <a
              href="https://twitter.com/vhillz_c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter.svg"
                alt="victor ugwu"
                width={24}
                height={24}
                priority
              />
            </a>
          </Box>
        </Box>
        <Button variant="contained" size="large">
          {" "}
          contact me
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
