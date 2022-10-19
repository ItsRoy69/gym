import React,{ useRef } from 'react';
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hppszkm', 'service_hppszkm', form.current, 'M0vhnRDt4gJo3jq_5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <>
      <div className="join" id="join_us">
        <div className="left_j">
            <hr />
            <div>
                <span className='stroke_Text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>

            <div>
                <span>YOUR BODY </span>
                <span className='stroke_Text'>WITH US ?</span>
            </div>
        </div>
        {/* end of left_j */}
        <div className="right_j">
            <form onSubmit={sendEmail} ref={form} className="email_container">
                <input type="email" name='user_email' placeholder="Enter you Email address" />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
        {/* end of right_j */}

      </div>
    </>
  );
};

export default Join;
