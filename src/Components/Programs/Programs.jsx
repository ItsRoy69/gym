import React from 'react';
import "./Programs.css";
import programData from "./../../data/programsData";
import RightArrow from "./../../assets/rightArrow.png"
const Programs = () => {
  return (
    <>
      <div className="programs" id="program">
        <div className="Programs_headers">
            <span className='stroke_Text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke_Text'>to shape you</span>
        </div>

        <div className="program_categories">
          {programData.map((program)=>{
            return (
              <>
                <div className="category">
                 
                 <h6> {program.image}</h6>
                  <span>{program.heading}</span>
                  <span>{program.details}</span>

                  <div className="join_now">
                    <span>Join Now</span>
                    <img src={RightArrow} alt="" />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Programs;
