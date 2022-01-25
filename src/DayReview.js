import React from "react";
import { useNavigate } from 'react-router-dom';

function DayReview({day}) {
    let {id, score, title} = day

    const Good = () => {
        let scoreArr1 =[];
        for(let i=0; i<score; i++){
        scoreArr1.push(<div>🟡</div>)
    }
     
    return scoreArr1; 
    }

    const Bad =() => {
        let scoreArr2 =[];
        for(let j=0; j<5-score; j++){
            scoreArr2.push(<div>⚪</div>)
        }
        return scoreArr2;
    }

    let history = useNavigate()
    const onClick=()=>{
        history("/"+ title)
    }


    return (
            <div className="weekmain" key={id}>
                <p>{title}</p>
                    {Good()}
                    {Bad()}
                <div className="triangle" onClick={onClick}></div>
            </div>
    )
}





export default DayReview;
