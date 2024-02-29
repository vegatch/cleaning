import React, {useEffect} from "react";
import { Navigate } from "react-router-dom";
import FormInput from "../Input/Input";
import SelectItem from '../Select.jsx';
import Radio from "../RadioButton.jsx";
import Extra from '../Extra/Extra.jsx'

import Quote from '../utilities/Quote.jsx';
import quoteId from '../utilities/IgGenerator.jsx'
import DateToClean from '../utilities/DateConversion.jsx'

import './form.css'


// const headForm = 'Get your quote or booking today';

// const headFormDesc = `  
//                     The process is pretty straightforward. Fill out the form and 
//                     click the Get your quote button to have your personalized quote in the
//                     e-mail provided in the form in seconds. Or click the Book Now button 
//                     to book your cleaning preference. `;


const Booking = () =>{
  

    const initialState = {  
        
          firstname: "",
          middlename: "",
          lastname: "",
          email: "",
          phonenumber: "",
          streetAddress:'',
          apartNum:'',
          city:'',
          stateAddress:'',
          zipcode:'',
          selectBedNum: '',
          selectBathNum: '',
          selectCleanType:"",
          selectCleanTypeLabel:'',
          cleaningFrequency:"",
          cleaningFrequencyLabel:'',
          cleaningDate: "",
          selectCleanTime: "",
          oven: false,
          fridge: false,
          window: false,
          fan: false,
          blind: false,
          laundry: false,  
          numOven:'',
          numFridge: '',
          numWindow: '',
          numFan: '',
          numBlind: '',
          numLaundry: '',
          cleanSubTotal:'',
          cleanDiscount:'',
          cleanTotal:'',
          cleanId:'',
          requestDate:'',
          cleanDate:'',

             
      }
    const [formData, setFormData] = React.useState(initialState)
    const [formError, setFormError] = React.useState(initialState)
    const [redirect, setRedirect] = React.useState(false);
    const [serverError, setServerError] = React.useState(false);

    const personalArray = [
        {
          id: 1,
          name: "firstname",
          type: "text",
          placeholder: "first name",
          
          label: "First name",
          pattern: "/^[a-zA-,.'-]+$/u",
          required: true,
        },    
        {
          id: 2,
          name: "middlename",
          type: "text",
          placeholder: "middle name",

          label: "Middle name",
          pattern: "/^[a-z]{1}+$/i",
          maxLength: 1,
          required: true,
        },     
        {
          id: 3,
          name: "lastname",
          type: "text",
          placeholder: "last name",

          label: "Last name",
          pattern: "/^[a-zA-,.'-]+$/u",
          required: true,
        },    
  
        {
          id: 4,
          name: "email",
          type: "email",
          placeholder: "Ex: benskya@benskya.com",
          label: "email",
          pattern:"/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$/",
        },
        {
          id: 5,
          name: "phonenumber",
          type: "text",
          placeholder: "Ex: 000-000-0000",

          label: "phonenumber",
          pattern: `^[0-9]{3}-[0-9]{3}-[0-9]{4}$`,
          required: true,
        },
        
      ]

      const addressArray = [
        {
          id: 1,
          name: "streetAddress",
          type: "text",
          placeholder: "Street address",
          label: "Street address",
          required:true,
        },
        
        {
          id: 2,
          name: "apartNum",
          type: "text",
          placeholder: "Apartment number",

          label: "Apartment number",
          
        },
  
        {
          id: 3,
          name: "city",
          type: "text",
          placeholder: "City",
          label: "City",
          required: true,
        },
        {
          id: 4,
          name: "zipcode",
          type: "number",
          placeholder: "Ex 00000",
          label: "Zip code",
          maxLength:5,
          minLength:5,
          required: true,
        },
      ]

      // const radioElement = [    
      //   {
      //     label : `Weekly clean (-30%) ` ,
      //     name : 'cleaningFrequency',
      //     id : 'radio2',
      //     value:'0.7',    
      //     checked: '0.7',       
      //   },
      //   {
      //     label :'Biweekly clean (-25%)' ,
      //     name : 'cleaningFrequency',
      //     id : 'radio3',
      //     value:'0.75',   
      //     checked: '0.75',        
      //   },
      //   {
      //     label :'Monthly clean (-20%)' ,
      //     name : 'cleaningFrequency',
      //     id : 'radio4',
      //     value:'0.80',  
      //     checked: '0.8', 

      //   },
      //   {
      //     label :'One time clean ' ,
      //     name : 'cleaningFrequency',
      //     id : 'radio1',
      //     value:'1',   
      //     checked: '1',        
      //   },
    
      // ]

      
      const extraItem = [
        {
          label:'Inside the oven',
          name: "oven",
          id:'oven',
          price: 35,
          extraId: 1,
          myName:'numOven',
          myLabel: '# ',
        },
        {
          label:'Inside the fridge',
          name: "fridge",
          id:'fridge',
          price: 35,
          extraId: 2,
          myName:'numFridge',
          myLabel: '# ',
        },
        {
          label:'Inside the window',
          name: "window",
          id:'window',
          price: 5,
          extraId: 3,
          myName:'numWindow',
          myLabel: '# ',
        },
        {
          label:'Ceiling fan',
          name: "fan",
          id:'fan',
          price: 5,
          extraId: 4,
          myName:'numFan',
          myLabel: '# ',
        },
        {
          label:'Load of laundry',
          name: "laundry",
          id:'laundry',
          price: 35,
          extraId: 5,
          myName:'numLaundry',
          myLabel: '# ',
        },
        {
          label:'Blind',
          name: "blind",
          id:'blind',
          price: 5,
          extraId: 6,
          myName:'numBlind',
          myLabel: '# ',
        },
      ]

      const scheduleArray  = [
        {
          id: 8,
          name: "cleaningDate",
          type: "date",
          placeholder: "cleaningDate",

          label: "cleaning date",
          required: true,
        },
  
      ];


      const formValidation = () => {
        const errMsg = {}
        const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;
        const phoneFormat = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        const letterOnly = /[aA-zZ]/

        if (formData.firstname === "") {
            errMsg.firstname ='First name is required'
        }else if(formData.firstname.length > 30 || formData.firstname.length < 2){
          errMsg.firstname='Name maybe too short'          
        }else if(!formData.firstname.match(letterOnly)){
          errMsg.firstname='Alphatical character only expected'
        }

        if (formData.lastname === "") {
          errMsg.lastname ='Last name is required'
        }else if(formData.lastname.length > 30 || formData.lastname.length < 2){
          errMsg.lastname='Name maybe too short'          
        }else if(!formData.firstname.match(letterOnly)){
          errMsg.firstname='Alphatical character only expected'
        }
          
        if(formData.email === ''){
            errMsg.email ='Email is required'
            
        }else if(!validEmail.test(formData.email)){
          errMsg.email ='Email is incorrect'
            
        }

        if(formData.phonenumber === ''){
          errMsg.phonenumber ='Phone number is required'
          
        }else if(!phoneFormat.test(formData.phonenumber)){
          errMsg.phonenumber =' Format 000-000-0000 expected'
            
        }
        if (formData.streetAddress === "") {
          errMsg.streetAddress ='address is required'
        }
        if (formData.city === "") {
          errMsg.city ='city is required'
        }
        if (formData.selectBedNum === "") {
          errMsg.selectBedNum ='# bedroom is required'
        }
        if (formData.selectBathNum === "") {
          errMsg.selectBathNum ='# bathroom is required'
        }
        if (formData.zipcode === "") {
          errMsg.zipcode ='zipcode is required'
        }else if(formData.zipcode.length !== 5){
          errMsg.zipcode ='zipcode doesn\'t match'
        }else if(isNaN(formData.zipcode)){
          errMsg.zipcode ='only numbers acccepted'
        }

        if (formData.selectCleanType === '') {
          errMsg.selectCleanType ='Cleaning type is required'
        }

        if(formData.cleaningFrequency !=='1' 
          && formData.cleaningFrequency !=='0.7' 
          && formData.cleaningFrequency !=='0.75' 
          && formData.cleaningFrequency !=='0.8' ){
            errMsg.cleaningFrequency ='cleaning frequence is required'
        }
        
        if (formData.cleaningDate ==='') {
          errMsg.cleaningDate ='Cleaning date is required'
        }
        if (formData.selectCleanTime ==='') {
          errMsg.selectCleanTime ='Cleaning time is required'
        }

        return errMsg;
  }
     
  // end

      
      // const formError = formValidation()
      const handleFormChange = e => {
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;      
  
        setFormData((prev) =>{
          return { ...prev, [name]: value}
        })      
      }
      

      
      if(formData.selectCleanType ==='1'){
        formData.selectCleanTypeLabel='Standard cleaning'
      }
      if(formData.selectCleanType ==='2'){
        formData.selectCleanTypeLabel='Deep cleaning'
      }
      if(formData.selectCleanType ==='3'){
        formData.selectCleanTypeLabel='Move In / Move Out'
      }
      if(formData.selectCleanType ==='4'){
        formData.selectCleanTypeLabel='Post construction'
      }
      if(formData.selectCleanType ==='5'){
        formData.selectCleanTypeLabel='AirBnB'
      }
      


      if(formData.cleaningFrequency ==='1'){
        formData.cleaningFrequencyLabel='One time cleaning '
      }
      if(formData.cleaningFrequency ==='0.7'){
        formData.cleaningFrequencyLabel='Weekly cleaning (30% OFF) '
      }
      if(formData.cleaningFrequency ==='0.75'){
        formData.cleaningFrequencyLabel='Biweekly cleaning (25% OFF) '
      }
      if(formData.cleaningFrequency ==='0.8'){
        formData.cleaningFrequencyLabel='Monthly cleaning (20% OFF) '
      }
        
      const isChecked = (value) => formData.cleaningFrequency === value;     
      // console.log(formData.cleaningFrequency, formData.selectCleanType)

      
          
      const scrollTop = () =>{
        window.scrollTo(0,0)
      }
      
      useEffect(() =>{
        
        const  {subTotal, discount, total} = Quote(formData)
        formData.cleanId = quoteId(4)

        const {cleanDate, quoteDate} = DateToClean(formData.cleaningDate)
  
        // console.log('sub:',subTotal, 'Off:',discount, 'tot:',total, 'ID', formData.cleanId, DateToClean(formData.cleaningDate))  
        // console.log('FormSub',formData.cleanSubTotal, 'FormOff',formData.cleanDiscount, 'FormTot',formData.cleanTotal)  
        formData.cleanSubTotal = subTotal
        formData.cleanDiscount = (discount === 100 ? 1: 100 - (discount * 100))
        formData.cleanTotal = total
        formData.requestDate = quoteDate
        formData.cleanDate = cleanDate


    },[formData])
    
      const handleSubmit = async (e) =>{
        e.preventDefault()
        
        const myUrl = "http://localhost:3001/quote";
        setFormError(formValidation())
        if(Object.keys(formValidation()).length === 0){       
           
          
     // -----------START------------------
        await fetch(myUrl, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ formData }),
          
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            if (resData.status === "success") {           
              
              setRedirect(true)
            } else {
              throw new Error(`HTTP error! status: ${resData.status}`);
            }
          })
          .catch((error) => { 
            setServerError(error)
            console.log('name:', error.name, 'message:', error.message)
            console.log('server',serverError)
          })
          .finally(() => {
            console.log(initialState);
          })
        // -----------END------------------
        }else{
          scrollTop()
        }
        
      }
    return(
      <div className="booking-page">
         <div className="booking-container">
            <div className="booking-page-left">
              
              <form noValidate onSubmit={handleSubmit}>
              {/* I may remove the heaer from here */}  
                {/* <div className="header-content">
                  <div className='formHeader'>
                  <h1>{headForm}</h1>
                  <h2>{headFormDesc}</h2>
                  </div>                  
                </div> */}
              {/* I may remove the heaer from here */}
                <div className="errorContainer">
                {serverError.message && <p>{serverError.message}</p>}
                  <p> {formError.firstname} </p>
                  <p> {formError.middlename} </p>
                  <p> {formError.lastname} </p>
                  <p> {formError.email} </p>
                  <p> {formError.phonenumber} </p>
                  <p> {formError.streetAddress} </p>
                  <p> {formError.city} </p>
                  <p> {formError.zipcode} </p>
                  <p> {formError.selectBedNum} </p>
                  <p> {formError.selectBathNum} </p>
                  <p> {formError.cleaningDate} </p>
                  <p>{formError.selectCleanType}</p>
                  <p> {formError.selectCleanTime} </p>
                  <p>{formError.cleaningFrequency}</p> 

                </div>
              <h3>Personal Information:</h3>  
              <div>
                  {personalArray.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    type={input.type}
                    value={formData[input.name]}                    
                    onChange={handleFormChange}
                    
                  />
                ))}
              </div>
              <div>
                <h3>Property Information:</h3>    
                <SelectItem
                label="# of bedroom"
                options={[
                  {label: "One bedroom", value: 1},
                  {label: "Two bedrooms", value: 2},
                  {label: "Three bedrooms", value: 3},
                  {label: "Four bedrooms", value: 4},
                  {label: "Five bedrooms", value: 5},
              ]}
              value={FormData}
              name='selectBedNum'
              id='selectBedNum'
              required={true}
              onChange={handleFormChange}        
            /> 

            <SelectItem
              label="# of bathroom"
              options={[
                
                {label: "One bathroom", value: 1},
                {label: "Two bathrooms", value: 2},
                {label: "Three bathrooms", value: 3},
                {label: "Four bathrooms", value: 4},
                {label: "Five bathrooms", value: 5},
              ]}
              value={FormData}
              name='selectBathNum'
              id='selectBathNum'
              required={true}
              onChange={handleFormChange} 
            />        
          </div>
          <div>
            <h4>Address of the place to be cleaned:</h4>
              {addressArray.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={FormData[input.name]}
                  onChange={handleFormChange}
                />
              ))}
            
          <SelectItem
              label="State"
              options={[
                {label: "Indiana", value: "IN"},            
              ]}
              value={FormData}
              name='stateAddress'
              id='stateAddress'
              onChange={handleFormChange}       
          />
          </div>
          <div>      
              <div className='form-section-header'>
                <h3>Cleaning option and frequency</h3>
              </div>         
              <SelectItem
              label="Cleaning type"
              options={[
                {label: "Standard cleaning", value: 1},
                {label: "Deep cleaning", value: 2},
                {label: "Move In / Move Out", value: 3},
                {label: "Post construction", value: 4},
                {label: "AirBnB", value: 5},
              ]}
              value={formData}
              name='selectCleanType'
              id='selectCleanType'
              required={true}
              onChange={handleFormChange} 
            />  
            
          </div>
          <div  >
              <h4>Select your cleaning frequency</h4>  

              {/* {radioElement.map((input) => (
                <Radio
                  key={input.id}
                  {...input}
                  value={formData[input.name]}
                  required={true}
                  name={input.name}
                  text={input.label}
                  checked={input.checked}
                  id={input.id}
                  onChange={handleFormChange}
                />
              ))} */}

              <Radio          
                id="radio1"
                name="cleaningFrequency"
                value="0.7"
                text="Weekly clean (-30%) "
                onChange={handleFormChange}
                checked={isChecked("0.7")}
              />
            
            <Radio          
                id="radio2"
                name="cleaningFrequency"
                value="0.75"
                text="Biweekly clean (-25%) "
                onChange={handleFormChange}
                checked={isChecked("0.75")}
            />

            <Radio          
                id="radio3"
                name="cleaningFrequency"
                value="0.8"
                text="Monthly clean (-20%) "
                onChange={handleFormChange}
                checked={isChecked("0.8")}
            />
            <Radio          
                id="radio4"
                name="cleaningFrequency"
                value="1"
                text="One time clean  "
                onChange={handleFormChange}
                checked={isChecked("1")}
            />


            </div>  
            <div>
              <div>
                <h3>Extra services</h3>
              </div>
              <div >
                  <div>
                      {extraItem.map((input) => (
                        <Extra
                          key={input.id}
                          {...input}
                          price={input.price}
                          title={input.myName}
                          myLabel={input.myLabel}
                          value={formData[input.name]}
                          onChange={handleFormChange}
                        />
                      ))}
                  </div>


              </div>  

              
            </div>
            <div>
              <h3>Schedule your cleaning tine</h3>
            {scheduleArray.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={formData[input.name]}
                  onChange={handleFormChange}
                
                />
                ))}

              <SelectItem
              label="Time"
              options={[
                {label: "8:00 AM", value: "1"},   
                {label: "11:00 AM", value: "2"},  
                {label: "2:00 PM", value: "3"},           
              ]}
              value={formData}
              name='selectCleanTime'
              id='selectCleanTime'
              onChange={handleFormChange}       
          />
            </div>

                <button>Submit</button>
              </form>
              {
              redirect ? (
                  <Navigate replace to="/SuccessPage" />
                ) : null
              }
            </div> 
            <div className="booking-page-right">
              <h1>Right container</h1>
            </div>
         </div>
      </div>
    )
}

export default Booking;