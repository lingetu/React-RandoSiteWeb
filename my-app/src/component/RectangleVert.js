import React from 'react';

export default function RectangleVert() {
   
        const myStyle = {
            backgroundColor: '#437603',
            height: '30px',
            left: '0px',
            position: 'absolute',
            top: 'calc(100vh - 30px)',
            width: '100%',
        };
    return (
        <div style={myStyle}></div >
    );
  }