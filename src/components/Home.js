import { Button } from '@mui/material';
import React from 'react';

function Home() {
  return (
    <div className='home'>
      <div className='main'>
      <h1 style={{color:"blue"}}>Welcome To Shopping Website</h1>
      <h3 style={{color:"red",fontFamily:"Cursive"}}>Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them.</h3>
      </div>
      <div className='main1'>
        <img src="https://img.freepik.com/free-psd/3d-rendering-fashion-sales-background_23-2150903910.jpg?t=st=1717131581~exp=1717135181~hmac=c0a4b014e2f6fec9a5bf4aeb6dceb68b98f4e870d66768f1827431de397e2121&w=996" width={500} height={500}/>
      </div>
    </div>
  );
}

export default Home;