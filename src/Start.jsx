import React from 'react';
import {Box } from '@mui/material';
import './App.css';

function Start() {
    return (
        <>
            <Box sx={{ width: "100%", height: "900px", background: "black" }}>


                <img src="https://i.gifer.com/WS2k.gif" width="20%"></img>
                <img src="https://i.gifer.com/WS2k.gif" width="10%"  style={{float:"left"}}></img>
                <center><div id="divTAReviews" style={{ color: "	#ff0080", fontSize: "30px" }}><h1>Happy Diwali</h1>
                <h1 style={{color:"#00ff00"}}>2022</h1></div></center>
                <img src="https://i.gifer.com/74US.gif" width="20%" style={{ float: "right" }} ></img>
                <img src="https://i.gifer.com/74US.gif" width="10%" style={{ float: "right" }} ></img>
            </Box>
        </>
    );
}

export default Start;