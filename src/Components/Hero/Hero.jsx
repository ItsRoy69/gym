import React from 'react';
import "./Hero.css";
import Header from '../Header/Header';
import hero_image from "./../../assets/hero_image.png";
import hero_image_back from "./../../assets/hero_image_back.png";
import heart from "./../../assets/heart.png";
import calories from "./../../assets/calories.png";
import {motion} from 'framer-motion';
import CountUp from 'react-countup';

const Hero = () => {


 

  return (
    <>
      <div className="hero">
        <div className="blur blur_hero"></div>
            <div className="left-h">
                <Header/>

                <div className="the_best_Ad">
                    <motion.div
                     animate={{x:190}}
                     transition={{ ease: "easeIn", duration: 1 }}
                    ></motion.div>

                    
                    <span>The Best Fitness Club In Town</span>
                </div>
{/* the best ad end */}
                
                <div className="hero_text">
                    <div>
                      <span className='stroke_Text'>Shape </span>
                      <span>Your</span>
                    </div>

                    <div>
                      <span>Ideal Body</span>
                    </div>

                    <div>
                      <span>In here we will help you to shape and build your ideal body and live up
                        your life to fullest
                      </span>
                    </div>
                </div>
                {/* heading hero */}


                <div className="figures">
                  <div>
                  <CountUp start={0} suffix="+" end={140} duration={1}></CountUp>
                    <span>expert coaches</span>
                  </div>

                  <div>
                  <CountUp start={0} suffix="+" end={978} duration={1}></CountUp>
                    
                    <span>members joined</span>
                  </div>

                  <div>
                  <CountUp start={0} suffix="+" end={50} duration={1}></CountUp>
                    <span>fitness programs</span>
                  </div>

                </div>
                {/* figures end */}

                <div className="hero_buttons">
                  <button className='btn'>Get Started</button>
                  <button className='btn'>Learn More</button>
                </div>
                {/* hero buttons */}


            </div>
{/* left-h end */}


            <div className="right-h">
              <button className='btn'>Join Now</button>

              <div className="heart_Rate">
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                 <span>116 bpm</span>
              </div>
              {/* heart_Rate end */}

              <img src={hero_image} alt="" className='hero_image' />
              <img src={hero_image_back} alt="" className='hero_image_back' />

              {/* hero image end */}


              <div className="calories">
                <img src={calories} alt="" />
                <div>
                  <span>Calories Burned</span>
                  <span>220 kcal</span>
                </div>
              </div>


            </div>
{/* right-h end  */}
      </div>
    </>
  );
};

export default Hero;
