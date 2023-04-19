import React,{useState} from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import rangoli3 from "./rangoli3.png";
import diya2 from "./diya2.png";
import diyagif from "./diyagif.gif";
import diwalii from "./diwalii.png";
import circle1 from "./circle1.png";
import circle2 from "./circle2.png";
import chakri from "./chakri.png";
import diya from "./diya.png";
import patakha from "./patakha.png";
import diwaliimg from "./diwaliimg.png";



function Section1() {

  const [name,setName]=useState("")

  return (
    <>
      <Box sx={{ width: "100%", height: "900px" }}>
        <div className="container" id="Home">
          <nav>
            <div class="navbar">
              <div class="logo">
                <a href="#" class="blink ">
                  Css Design
                </a>
              </div>
              <ul class="menu">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#Wishes">Wishes</a>
                </li>
                <li>
                  <a href="#Card">Card</a>
                </li>
              </ul>
            </div>
          </nav>
          <img src={circle1} alt="" className="layer layer-1"></img>
          <img src={circle2} alt="" className="layer layer-2"></img>
          <img
            src="https://i.pinimg.com/originals/0c/89/cb/0c89cb3c1fdb66f6833fc6e0dfb04ba4.png"
            height="40%"
            alt=""
            className="layer layer-3"
          ></img>
          <img src={diya} height="40%" alt="" className="layer layer-4"></img>
          <img src={diya} height="40%" alt="" className="layer layer-5"></img>
        </div>
      </Box>

      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(131,58,180,1) 7%, rgba(253,29,97,1) 75%, rgba(252,176,69,1) 100%)",
          marginTop: "-178px",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            style={{ justifyContent: "center", margin: "auto" }}
          >
            <Box>
              <img
                src={patakha}
                className="layer-6"
                width="100%"
                height="auto"
                id="Wishes"
              ></img>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            style={{ justifyContent: "center", margin: "auto" }}
          >
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Bai Jamjuree",
                  fontWeight: 900,
                  textAlign: "left",
                  color: "white",
                  marginBottam: "30px",
                  padding:"30px"
                }}
              >
                Your Wishes
              </Typography>
              <Typography
                variant="body 3"
                style={{
                  fontSize: "15px",
                  textAlign: "center",
                  color: "black",
                  letterSpacing: "3px",
                  fontWeight: 300,
                }}
              >
                {" "}
                " Light a lamp of love!
Blast a chain of sorrow!
Shoot a rocket of prosperity!
Fire a flowerpot of happiness!
Wish you and your family SPARKLING DIWALI"
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(131,58,180,1) 7%, rgba(253,29,97,1) 75%, rgba(252,176,69,1) 100%)",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            style={{ justifyContent: "center", margin: "auto" }}
          >
            <Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    textAlign: "left",
                    color: "Gold",
                    fontSize: "40px",
                    letterSpacing: "5px",
                    padding:"30px"
                  }}
                >
                  Your Wishes
                </Typography>
              </Box>
              <Typography
                variant="body 3"
                sx={{
                  fontSize: "15px",
                  textAlign: "center",
                  color: "white",
                  letterSpacing: "3px",
                  fontWeight: 300,
                }}
              >
                {" "}
                " Shine like sparkles, glow like candles and burn all the
                negativity like crackles. Wish you all a very lovely & cheerful
                Diwali "
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            style={{ justifyContent: "center", margin: "auto" }}
          >
            <Box>
              <img
                src={diwalii}
                className="layer-7"
                width="80%"
                height="auto"
                class="zoom-in-out-box"
              ></img>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} style={{ margin: "auto" }} id="Card">
          <Box
            sx={{
              background: "purple",
              width: "100%",
              height: "320px",
              backgroundImage: `url(https://html.design/demo/diwali/images/bg_counter.png)`,
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
            }}
            className="container2"
          >
            <Box sx={{ marginTop: "50px" }}>
              <center>
                <h1
                  style={{
                    color: "white",
                    letterSpacing: "5px",
                    backgroundImage:
                      "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
                  }}
                >
                  Diwali is Coming!
                </h1>
              </center>
              <br />
              <center>
                <h2 style={{ color: "white", letterSpacing: "4px" }}>
                  Let's Celebrate Diwali On <big>23 OCT 2022</big> !
                </h2>
              </center>
              <center>
                <img
                  src="https://media0.giphy.com/media/3ohzdJcbaLHr1kyF8s/giphy.gif"
                  width="10%"
                  height="10%"
                ></img>
              </center>{" "}
            </Box>
          </Box>
          <center>
                <h1
                  style={{
                    color: "yellow",
                    letterSpacing: "5px",
                    backgroundImage:
                      "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
                  }}
                >
                 Greeting Card
                </h1>
              </center>
              <br />
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{disply:"flex"}}
          >
            <Grid item xs={12} md={12} lg={6}>
           
              <Box>
                <img src={diwaliimg} height="100%" width="100%"></img>
                {" "}
             
              
              <center><Box sx={{ marginTop: "-260px", marginLeft: "380px" }}><h3 style={{ color: "white" }}>Wishing You</h3></Box></center>
              <center><h1 style={{color:"white", marginTop:"-100px", marginLeft:"380px", color:"yellow"}}  class="zoom-in-out-box">{name}</h1></center>
              </Box></Grid> 
            <Grid item xs={12} md={12} lg={6}>
              <Box sx={{ marginTop: "50px", height:"300px" }}>
                <center>
                  <h1 style={{color:"white"}}>Enter Your Name Below</h1>
                </center>
                <br />
                <center>
                  <input type="text" style={{ height: "40px" }} onChange={(e)=>{setName(e.target.value)}}></input>
                </center>
                <br />
                <br />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <footer>
      <div class="footer-content">
<h4>Diwali Wishing 2022</h4>
</div>
</footer>
    </>
  );
}

export default Section1;
