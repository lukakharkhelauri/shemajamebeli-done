import React, { useState } from "react";
import classes from './index.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGamepad, faKeyboard, faGamepad as faPs4Gamepad } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';


const Steps4 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showError, setShowError] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
 

  const errorHandler = () => {
    if (name === "" || email === "" || phoneNumber === "") {
      setShowError(true);
    } else {
      setShowError(false);
      goToNextStep()
    }
  };

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>

      {/* Content for Step 1 */}
      {currentStep === 1 && (
         <div className={classes['container']}>
         <div className={classes['white-block']}>
           <div className="left-side">
             <img className={classes['image']} src="bg-sidebar-desktop.svg" />
             <div className={classes['step-circles']}>
               <div className={classes['step-circle'] + ' ' + classes['active']}>1</div>
               <div className={classes['step-circle']}>2</div>
               <div className={classes['step-circle']}>3</div>
               <div className={classes['step-circle']}>4</div>
             </div>
           </div>
           <div className="right-side">
             <div className="form-content">
               <h1 className={classes['title']}>Personal info</h1>
               <h3 className={classes['under-title']}>Please provide name, email, and phone number</h3>
               <div className="form-input" style={{ marginLeft: '0px' }}>
                 <h4>Name</h4>
                 <input
                   className={classes['personal-info-input']}
                   placeholder="e.g. Stephen King"
                   type="text"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                 />
                 <div className="form-input" style={{ marginTop: '30px' }}>
                   <h4>Email address</h4>
                   <input
                     className={classes['personal-info-input']}
                     placeholder="e.g. stephenking@lorem.com"
                     type="text"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                   />
                 </div>
                 <div className="form-input" style={{ marginTop: '30px' }}>
                   <h4>Phone number</h4>
                   <input
                     className={classes['personal-info-input']}
                     placeholder="e.g. +1 234 567 890"
                     type="text"
                     value={phoneNumber}
                     onChange={(e) => setPhoneNumber(e.target.value)}
                   />
                 </div>
               </div>
   
               {showError && (
                 <div className={classes['error']}>
                   <span className={classes['error-message']}>
                     Please fill in all fields, (name, email and phone number).
                   </span>
                 </div>
               )}
               <button onClick={errorHandler} className={classes['next-step-btn']}>Next Step </button>
          </div>
        </div>
      </div>
    </div>
      )}


      {currentStep === 2 && (
         <div className={classes['container']}>
         <div className={classes['white-block']} >
           <div className="left-side" style={{ marginLeft: '30px'}}>
             <img className={classes['image']} src="bg-sidebar-desktop.svg" />
             <div className={classes['step-circles']}>
               <div className={classes['step-circle']}>1</div>
               <div className={classes['step-circle']+ ' ' + classes['active']}>2</div>
               <div className={classes['step-circle']}>3</div>
               <div className={classes['step-circle']}>4</div>
             </div>
             </div>
             <div className="right-side">
             <div className="form-content">
               <h1 className={classes['title']}>select your plan</h1>
               <h3 className={classes['under-title']}>you don't have options of monthly or yearly billing.</h3>
               <div className={classes["icon-boxes"]}>
                  <div className={classes["box"]}>
                    <FontAwesomeIcon icon={faGamepad} size="2x" style={{ marginTop: '10px', marginLeft:'10px' }} />
                    <p className={classes['icons-title']}>Arcade</p>
                    <p className={classes['pay-month']}>$9/mo</p>
                  </div>
                  <div className={classes["box"]}>
                    <FontAwesomeIcon icon={faKeyboard} size="2x" style={{ marginTop: '10px', marginLeft:'10px' }} />
                    <p className={classes['icons-title']}>Advanced</p>
                    <p className={classes['pay-month']}>$12/mo</p>
                  </div>
                  <div className={classes["box"]}>
                    <FontAwesomeIcon icon = {faPs4Gamepad} size="2x" style={{ marginTop: '10px', marginLeft:'10px' }} />
                    <p className={classes['icons-title']}>Pro</p>
                    <p className={classes['pay-month']}>$15/mo</p>
                  </div>
                </div>

               {showError && (
                 <div className={classes['error']}>
                   <span className={classes['error-message']}>
                     Please fill in all fields, (name, email and phone number).
                   </span>
                 </div>
               )}
              <button onClick={errorHandler} className={classes['next-step-btn2']}>Next Step </button>
          </div>
        </div>
        </div>
           </div>
      )}

{currentStep === 3 && (
           <div className={classes['container']}>
           <div className={classes['white-block']} >
             <div className="left-side" style={{ marginLeft: '30px'}}>
               <img className={classes['image']} src="bg-sidebar-desktop.svg" />
               <div className={classes['step-circles']}>
                 <div className={classes['step-circle']}>1</div>
                 <div className={classes['step-circle']}>2</div>
                 <div className={classes['step-circle']+ ' ' + classes['active']}>3</div>
                 <div className={classes['step-circle']}>4</div>
               </div>
               </div>
               <div className="right-side">
               <div className="form-content">
                 <h1 className={classes['title']}>Pick add-ons</h1>
                 <h3 className={classes['under-title']}>add-ons help enchance your gaming experience</h3>
                 <div className="step3">
                    <div className={classes['input-container']}>
                      <input type="checkbox" id="option1" />
                      <label htmlFor="option1">Online services</label>
                      <p className={classes['p']}>Access to multiplayer games</p>
                      <span className={classes["additional-cost"]} style={{ marginLeft:'200px' }}>+$1/mo</span>
                    </div>
                    <div className={classes['input-container']}>
                      <input type="checkbox" id="option2" />
                      <label htmlFor="option2">Large storage</label>
                      <p className={classes['p']}>Extra 1TB of cloud save</p>
                      <span className={classes["additional-cost"]} style={{  marginLeft:'210px' }}>+$1/mo</span>
                    </div>
                    <div className={classes['input-container']}>
                      <input type="checkbox" id="option3" />
                      <label htmlFor="option3">Customizable Profile</label>
                      <p className={classes['p']}>Custom theme on your profileg</p>
                      <span className={classes["additional-cost"]} style={{  marginLeft:'160px' }}>+$1/mo</span>
                    </div>
                  </div>
                 {showError && (
                   <div className={classes['error']}>
                     <span className={classes['error-message']}>
                       Please fill in all fields, (name, email and phone number).
                     </span>
                   </div>
                 )}
                <button onClick={errorHandler} className={classes['next-step-btn2']}>Next Step </button>
            </div>
          </div>
          </div>
             </div>
)}



    </div>
  );
}

export default Steps4;