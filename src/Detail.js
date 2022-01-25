import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail(props) {

  let [count, setCount] = useState(0);
  let [uncount, setUncount] = useState(5);
  let [fullcircle, setFull] = useState("🟡")
  let [emptycircle, setEmptycircle] = useState("⚪")

  let score_count = Array.from({ length: count }, (num, i) => i);
  let score_uncount = Array.from({ length: uncount }, (num, i) => i);

  const getScore = (e) => {
    let currentNum = e.target.id;
    if (count === 0) {
      setCount(currentNum);
      setUncount(uncount - currentNum);
    } else {
      setCount(0)
      setUncount(5)
    }
  }

  let history = useNavigate();

  let today = useParams();

  return (
    <div className="App">
      <div className="reviewweek">
        <h2><span>{today.day}요일</span> 평점 남기기</h2>
        <div className="review">
            {score_count.map((item, i) => {
              return (
                <div id={i + 1} onClick={getScore}>{fullcircle}</div>
              )
            })}
            {score_uncount.map((item, i) => {
              return (
                <div id={i + 1} onClick={getScore}>{emptycircle}</div>
              )
            })}
        </div>
        <button onClick={() => {
          history('/')
        }
        }>평점 남기기</button>
      </div>
    </div>
  );
}

export default Detail;

