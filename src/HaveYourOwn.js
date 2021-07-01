import { useState } from 'react'
import { ChromePicker } from "react-color";
// import {Button} from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HaveYourOwn() {
    const[color,setColor]=useState("#fff")
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
        <div className="flexpart">
        <div>
         

                <ChromePicker
                color={color}
                onChange={newColor =>setColor(newColor.hex)}
                />
 
        </div>
            <h2><ArrowForwardIcon style={{fontSize:100}}/></h2>
            <div className="downsingle" onClick={colorCopy} style={{height:150,alignItems:"center",boxShadow:"5px 0px 5px #000",borderRadius:"20px",background:color}}>
               <h2 style={{paddingTop:60,textAlign:"center",filter: "invert(100%)"
            }}>

                {color}
               </h2>
            </div>
            </div>
    )
}

export default HaveYourOwn
