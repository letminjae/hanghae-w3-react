import React, { useState } from "react";
import './App.css'
import { Link, Route, Switch, Routes } from 'react-router-dom'
import Detail from './Detail.js';
import Data from './Data.js'
import DayReview from "./DayReview";

function App() {

  let [day, setday] = useState(Data)

  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/:day" element={<Detail />} />
      </Routes>
    </div>
  );
}


export default App;
