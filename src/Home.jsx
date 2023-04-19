import React from 'react';
import circle1 from "./circle1.png";
import circle2 from "./circle2.png";
import diya from "./diya.png";
import {Box } from '@mui/material';
function Home() {
    return (
        <>
            <Box sx={{width:"100%", height:"900px"}}>
            <div className='container'>
                <img src={circle1} alt='' className='layer layer-1'></img>
                <img src={circle2} alt='' className='layer layer-2'></img>
                <img src="https://i.pinimg.com/originals/0c/89/cb/0c89cb3c1fdb66f6833fc6e0dfb04ba4.png" height= "40%" alt='' className='layer layer-3'></img>
                <img src={diya} height="40%" alt='' className='layer layer-4'></img>
                <img src={diya} height= "40%" alt='' className='layer layer-5'></img>

                </div>
                </Box>
            </>
    );
}

export default Home;