import { Padding } from '@mui/icons-material';
import React from 'react';

export const Css = () => {
    return (
    <div align="center">
        <h1>Notes :</h1>
        you can make an image folder in your project to put all your images in one folder - you can also rename them -  <br />
        One of the property of border : border-bottom: 5px dashed black;
        <br />
       <h2>Padding :</h2>
       padding: 10px(all sides);
       <br />
       *remember we cannot use px in here and also have to give one more curly brace
       <div style={{backgroundColor:"red", padding:10 , width:500}}>
        <p style={{backgroundColor:"orange" }}>All round padding</p>
       </div>
       {/* padding:10px(top) 20px(right) 30px(bottom) 40px(left) ; */}
    </div>
    );
};
