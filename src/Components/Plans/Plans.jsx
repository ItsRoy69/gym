import React from 'react';
import "./Plans.css";
import plansData from "./../../data/plansData";
import tick from "./../../assets/tick.png";

const Plans = () => {
  return (
    <>
      <div className="plans_Container">
        <div className="blur plans_blur_1"></div>
        <div className="blur plans_blur_2"></div>
        
        <div className="Programs_headers">
                <span className='stroke_Text'>Ready to start</span>
                <span>your journey</span>
                <span className='stroke_Text'>now with us</span>
        </div>
        {/* Programs_headers end */}

        <div className="plans">
            {plansData.map((item,index)=>{
                return(
                    <>
                    <div className="plan" key={index}>
                        {item.icon}
                        <span>{item.name}</span>
                        <span>$ {item.price}</span>
                       

                        <div className="features">
                           {item.features.map((feature,i)=>{
                            return(
                                <>
                                <div className="feature" key={i}>
                                    <img src={tick} alt="" />
                                    <span>{feature}</span>
                                </div>
                                </>
                            )
                           })}
                        </div>

                        <div>
                            <span>see more benefits  </span>
                          
                        </div>

                        <div>
                            <button style={{width:'100%'}} className='btn'>Join Now</button>
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

export default Plans;
