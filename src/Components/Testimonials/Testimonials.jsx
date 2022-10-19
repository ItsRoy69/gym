import React, { useState }  from 'react';
import "./Testimonials.css";
import testimonialsData from '../../data/testimonialsData';
import leftArrow from "./../../assets/leftArrow.png";
import rightArrow from "./../../assets/rightArrow.png";


const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <>
    <div className="testimonial">
        <div className="left_t">
            <span>Testimonials</span>
            <span className='stroke_Text'>What They</span>
            <span>Say About Us</span>
            <span>
                {testimonialsData[selected].review}
            </span>

            <span>
              <span style={{color:'var(--orange'}}>
                {testimonialsData[selected].name}
              </span>{" "}

              -
              {" "}
              {testimonialsData[selected].status}
            </span>
        </div>
        {/* end of left_t */}

        <div className="right_t">
          <div></div>
          <div></div>
            <img className='right_t_F_image' src={testimonialsData[selected].image} alt="" />

            <div className="arrows">
              <img src={leftArrow} onClick={()=>{
                  selected===0? setSelected(tLength-1):setSelected((prev)=>prev-1)
              }} alt="" />

              <img src={rightArrow} onClick={(e)=>{
                selected===tLength-1 ? setSelected(0):setSelected((prev)=>prev+1)
              }} alt="" />
            </div>
        </div>
        {/* end of  right_t*/}
    </div>
    </>
  );
};

export default Testimonials;
