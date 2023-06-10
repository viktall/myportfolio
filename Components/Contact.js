import { EmailOutlined, WhatsApp, LocationOn } from "@mui/icons-material";
import { Box, Paper, Button, TextField } from "@mui/material";
import Image from "next/image";

const Contact = () => {
  return (
    <Box sx={{ bgcolor: "#282828", color: "#fff" }}>
      <Box sx={{ display: { md: "flex", xs: "block" }, pt:10, pb:6}}>
        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", mb:5
          }}
        >
          <Box>
            <Box sx={{ px: 2 }}>
              <Box id='Contact' sx={{pb:5, fontSize:25}}>
                Contact<span style={{ color: "red" }}>ME</span>
              </Box>
              <Box sx={{ fontSize: 38, color: "brown" }}>Let's chat</Box>
              <Box sx={{ fontSize: 38, color: "brown" }}>
                Tell me about your project
              </Box>
              <Box sx={{ py: 1, color: "#000" }}>
                let create something together
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: 60,
                  pl: 2,
                  gap: 1,
                  my: 1,
                  bgcolor: "#202020"
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    bgcolor: "#303030",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                  }}
                >
                  <EmailOutlined />
                </Box>
                <Box>
                  <Box>Email me at</Box>
                  <Box>viktall007@gmail.com</Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: 60,
                  pl: 2,
                  gap: 1,
                  mb: 1,
                  bgcolor: "#202020",
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    bgcolor: "#303030",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                  }}
                >
                  <WhatsApp />
                </Box>
                <Box>
                  <Box>Chat me up on</Box>
                  <Box>07026219913</Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: 60,
                  pl: 2,
                  gap: 1,
                  mb: 1,
                  bgcolor: "#202020",
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    bgcolor: "#303030",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                  }}
                >
                  <LocationOn />
                </Box>
                <Box>
                  <Box>Chat me up on</Box>
                  <Box>07026219913</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            sx={{
              width: 425,
              "& .MuiTextField-root": {
                width: "100%",
                bgcolor: "#303030",
                my: 1,
              },
              "& .MuiInputBase-root": { color: "#fff" },
            }}
            noValidate
            autoComplete="off"
          >
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%",
                bgcolor: "#202020",
                p: 6,
              }}
            >
              <Box sx={{ color: "#fff" }}>
                <Box sx={{ fontSize: 22 }}>Send me a message</Box>
                <TextField label="Full name" variant="outlined" />
                <TextField label="Email" variant="outlined" />
                <TextField label="Subject" variant="outlined" />
                <TextField label="Message" multiline rows={2} />
                <Box>
                  <Button variant="contained"> contact me</Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#202020", py:8 }}>

      <Box sx={{display:'flex', justifyContent:'center', mb:6}}>
            <Image
                src="/MYLOGO.svg"
                alt="victor ugwu"
                width={50}
                height={50}
                priority
            />
        </Box>
        <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#303030",
            }}
          >
            <a
              href="https://www.instagram.com/_codewithreact/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/insta.svg"
                alt="victor ugwu"
                width={18}
                height={18}
                priority
              />
            </a>
          </Box>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#303030",
            }}
          >
            <a
              href="https://www.linkedin.com/in/victorugwu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedInAlt.svg"
                alt="victor ugwu"
                width={18}
                height={18}
                priority
              />
            </a>
          </Box>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#303030",
            }}
          >
            <a
              href="https://twitter.com/vhillz_c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/twitter.svg"
                alt="victor ugwu"
                width={18}
                height={18}
                priority
              />
            </a>
          </Box>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#303030",
            }}
          >
            <a
              href="https://twitter.com/vhillz_c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                alt="victor ugwu"
                width={18}
                height={18}
                priority
              />
            </a>
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", pt: 2 }}>
          @copyright 2022 vhillz. All rights reserved
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
