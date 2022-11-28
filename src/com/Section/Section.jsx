import React from "react";
import '../Section/Section.css';
import Elleps from '../images/img/ellips5.png'


function Section() {
  return (
    <div className="section__contents">
       <div className="section__bar">
         <div className="section__main">
          <div className="section__titles">
          <img src={Elleps} alt="icon" />
          </div>
          <div className="section__title">
            <h3>Get New Friends</h3>
            <p>You will meet new friends in some 
        of classes <br /> that you take. Say hello to them and
        make <br /> friends, it will be so much warm friendship!</p>

        </div>
        </div>
        <div className="section__main">
        <div className="section__titles">
        <img src={Elleps} alt="icon" />
        </div>
        <div className="section__title">
            <h3>Expert and Fun Mentor</h3>
            <p>You will meet new friends in some 
        of classes <br /> that you take. Say hello to them and
        make <br /> friends, it will be so much warm friendship!</p>
        </div>
        </div>
       <div className="section__main">
        <div className="section__titles">
        <img src={Elleps} alt="icon" />
        </div>
        <div className="section__title">
            <h3>Flexible Access</h3>
            <p>You will meet new friends in some 
        of classes <br /> that you take. Say hello to them and
        make <br /> friends, it will be so much warm friendship!</p>
        </div>
     </div>
   </div>
   {/* <div className="section__lines">
     <div className="section__content">
      <p>You will meet new friends in some 
        of classes <br /> that you take. Say hello to them and
        make <br /> friends, it will be so much warm friendship!</p>
     </div>
     <div className="section__content">
      <p>You will meet new friends in some 
        of classes <br /> that you take. Say hello to them and
        make <br /> friends, it will be so much warm friendship!</p>
     </div>
     <div className="section__content">
      <p>You will meet new friends in some 
        of classes <br /> that you take. Say hello to them and
        make <br /> friends, it will be so much warm friendship!</p>
     </div>
   </div> */}
   
</div>
  )
}

export default Section