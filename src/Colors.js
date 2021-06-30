import React, { useState } from 'react'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function Colors() {
    const [ColorNames]=useState(['#12CBC4','#0652DD','#FFC312',"#FF0066",'#5758BB','#ff4757','#0abde3','#5f27cd','#00d2d3','#576574','#f368e0','#48dbfb','#222f3e','#4b4b4b','#1e90ff',"green","black","yellow","blue","cyan"])
    const colorCopy=(e)=>{
        let clickedColor= e.target.innerText;
        if (navigator.clipboard){
            navigator.clipboard.writeText(clickedColor)
            // navigator.clipboard.readText()
            toast.success(`${clickedColor} Copied to Clipboard`,{
                position:toast.POSITION.BOTTOM_CENTER
            })
        }

    }
    return (
        <div className="row">
            {ColorNames.map((color)=>{return(
                <div className="each">
                <div className="innereach" key={color} style={{background:color}} onClick={colorCopy}>
                    <div>
                        {color}
                    </div>
                </div>
                </div>
            )})}
        </div>
    )
}

export default Colors
