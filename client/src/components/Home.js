import React from 'react';
import img from "./images.jpg";

function Home() {
    return (
        <div style = {{ 
            backgroundImage: `url(${img})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width:'100%',
            height: '100vh' 
            }}>
            
        </div>
    );
}

export default Home;
