import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Textarea from "../Textarea/TextArea.jsx";
import Button from '../Button/Button.jsx';
import { HiMail } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import Phone from '../Phone/Phone.jsx';
import Input from '../Input/Input.jsx';
import FormValidation from '../utilities/Validation.jsx';
// import SuccessPage from '../../pages/SuccessPage.jsx'
import './contactUs.css';


// https://simplefrontend.com/redirect-to-another-page-in-react/
// very helpful to redirect to successpage

const ContactUs = () => {

    const initialState = {
        fullname: "",
        email: "",
        phonenumber:'',
        message: "",
    }
    const [messageState, setMessageState] = useState(initialState);
    const [formError, setFormError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState(null);
    const [redirect, setRedirect] = React.useState(false);

    
     
      const handleFormChange = (e) => {
        setMessageState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
          
        }));
         
      }
      
      useEffect(() =>{



      },[messageState])
      
      const handleSubmit = async (e) => {
        e.preventDefault();         
        const myUrl = "http://localhost:3001/contact";
        setFormError( FormValidation(messageState))
       console.log(formError)
       if(Object.keys(FormValidation(messageState)).length === 0){
        
        // start
        setIsLoading(true)
        await fetch(myUrl, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ messageState }),
          
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            if (resData.status === "success") {
              // alert("Message Sent");
              setIsLoading(false)
              setRedirect(true)
            } else if (resData.status === "fail") {
              // alert("Message failed to send");
              setServerError('Something went wrong') 
              throw new Error(`HTTP error! status: ${resData.status}`);
            }
          })
          .catch((error) => {setServerError(error); console.log(error)})
          .finally(() => {
            setMessageState(initialState);
          })
        
      // END
         
       }
    }
     

    
        

    const contactArray = [
        {
          id: 1,
          name: "fullname",
          type: "text",
          placeholder: "First and Last name",
          label: "Fullname",
          maxLength:'40',
          required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "text",     
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ,
            label: "Email",
            maxLength:'',
            required: true,
          },
          {
            id: 3,
            name: "phonenumber",
            type: "text",
            placeholder: "000-000-0000",
            label: "Phone number",
            pattern: `^[0-9]{3}-[0-9]{3}-[0-9]{4}$` ,
            maxLength:'13',
            required: true,
          },
          {
            id: 4,
            name: "message",
            type: "textarea",
            placeholder: "please enter your message",
            label: "Message",
            maxLength:'300',
            minLength:'10',
            required: true,
          }
    ]
    return(
        <div className="contact-wrapper">
            <div className="contact_left_container">
                <h3>Let's have a conversation</h3>
                <div className="contact-flex">
                    <HiMail/> <p>Benskyallc@gmail.com</p>
                </div>
                <div className="contact-flex">
                    <BsFillTelephoneFill/> <div className="phone-contact-wrapper"><Phone className='dark' /></div>
                </div>
                <div className="contact-flex">
                    <ImLocation/> <p>Indianapolis, IN</p>
                </div>
            </div>
            <div className="form-container">
              <form  onSubmit={handleSubmit} className="contact_right_container">
                <div>
                
                  {isLoading && <span> Submitting...</span>}
                  {serverError && <span>Something went wrong </span>}
                  <p className="errorDisplay"> {formError.fullname} </p>
                  <p className="errorDisplay"> {formError.email} </p>
                  <p className="errorDisplay"> {formError.phonenumber} </p>
                  <p className="errorDisplay"> {formError.message} </p>
                
                  {/* {formError.email && <p>{formError.email}</p>} */}
                </div>
                  <div>
                    {/* {fetchError && <p>{fetchError}</p>} */}
                      {contactArray.slice(0,-1).map((input) => (
                          <Input
                          key={input.id}
                          {...input}
                          value={messageState[input.name]}
                          pattern={input.pattern}
                          onChange={handleFormChange}
                          maxLength={input.maxLength}
                          minLength={input.minLength}
                          // onBlur={handleValidation} 
                          
                          />                        
                      ))}
                  </div>            
                  <div>
                      {contactArray.slice(-1).map((input) => (
                          <Textarea
                          key={input.id}
                          {...input}            
                          value={messageState[input.name]}
                          onChange={handleFormChange}
                          maxLength={input.maxLength}
                          minLength={input.minLength}
                          />
                      ))}
                  </div>
                  <Button className='main-btn'   onClick ={handleSubmit} label='Send us your message'/>
                  {/* <button className='main-btn'>send</button> */}
              </form>
              {
                redirect ? (
                    <Navigate replace to="/SuccessPage" />
                  ) : null
              }
            </div>
        </div>
    )
  
}

export default ContactUs;