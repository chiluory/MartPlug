import React from "react";
import "./Sections/Quantity.css"


const Quantity = (props) =>{
    const num = props.num;
    const setNum = props.setNum;
 
    const upNum = ()=>{
        setNum(num+1);
    }

    const downNum = ()=>{
        if(num>1){
            setNum(num-1);
        }
       
    }

    return(
        <>
        
            <span className="Quantity">
                <div className="DownBtn" onClick={()=>{downNum()}} ></div>
                <div className="Num" type="number" readonly="readonly" value={num}></div>
                <div className="UpBtn" onClick={()=>{upNum()}} ></div>
            </span>
        </>
    )
}

export default Quantity;