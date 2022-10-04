import { Link } from "react-router-dom";
import React from 'react';
import font from "../../images/font1.jpg";
import "./landing.css";
const Landing=() => {
  return (
    <>
      <div className='landing'>
        <div className="frontimg">
            <img src={font} alt="landing" />
        </div>
        <div className="ftext">
            <div className='text'><h1>10x Team 04</h1></div>
            <Link to="/post">
             <div className="lbutton">
                <button>Enter</button>
             </div>
             </Link>
        </div>
      </div>
    </>
  )
}
export default Landing;
