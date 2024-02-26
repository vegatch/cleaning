import {useState, useEffect, React} from 'react';
// import moment from"moment";
// import FormInput from '../components/Input.jsx';
import FormInput from '../components/Input/Input.jsx';
import SelectItem from '../components/Select.jsx';
import Extra from '../components/Extra.jsx'
import Radio from '../components/RadioButton.jsx'
// import FormValidation from '../components/utilities/Validation.jsx';
// import fetchPost from '../components/utilities/ApiCall.jsx';
import '../CSS/order.css'
// import '../CSS/extra.css';

const Order = () => {  

  const initialState = {  
    cleaningFrequency:'',
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      phonenumber: "",
      streetAddress:'',
      apartNum:'',
      city:'',
      stateAddress:'',
      selectBedNum: 0,
      selectBathNum: 0,
      selectCleanType:"",
      frequenceClean:"",
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
      // dateErr:null,
         
  }

  const [formValues, setFormValues] = useState(initialState);
  const [total, setTotal] = useState(0)
  

  const headForm = 'Get your quote or booking today';

  const headFormDesc = `  
                      The process is pretty straightforward. Fill out the form and 
                      click the Get your quote button to have your personalized quote in the
                      e-mail provided in the form in seconds. Or click the Book Now button 
                      to book your cleaning preference. 

                          `
  

  const radioElement = [    
    {
      label : `Weekly clean (-30%) ` ,
      name : 'cleaningFrequency',
      id : 'radio2',
      value:'0.7',          
    },
    {
      label :'Biweekly clean (-25%)' ,
      name : 'cleaningFrequency',
      id : 'radio3',
      value:'0.75',          
    },
    {
      label :'Monthly clean (-20%)' ,
      name : 'cleaningFrequency',
      id : 'radio4',
      value:'0.80',          
    },
    {
      label :'One time clean ' ,
      name : 'cleaningFrequency',
      id : 'radio1',
      value:'1',          
    },

  ]
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
    
    const personalArray = [
      {
        id: 1,
        name: "firstname",
        type: "text",
        placeholder: "first name",
        label: "First name",
        required: true,
      },    
      {
        id: 2,
        name: "middlename",
        type: "text",
        placeholder: "middle name",
        label: "Middle name",
        required: true,
      },     
      {
        id: 3,
        name: "lastname",
        type: "text",
        placeholder: "last name",
        label: "Last name",
        // pattern: "/^[aA-zZ]+$/i",
        required: true,
      },    

      {
        id: 4,
        name: "email",
        type: "email",
        placeholder: "Ex: benskya@benskya.com",
        label: "email",
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
        id: 4,
        name: "streetAddress",
        type: "text",
        placeholder: "Street address",
        label: "Street address",
        required:true,
      },
      
      {
        id: 5,
        name: "apartNum",
        type: "text",
        placeholder: "Apartment number",
        label: "Apartment number",
        
      },

      {
        id: 6,
        name: "city",
        type: "text",
        placeholder: "City",
        label: "City",
        required: true,
      },
    ]

    const scheduleArray  = [
      {
        id: 8,
        name: "cleaningDate",
        type: "date",
        placeholder: "cleaningDate",
        label: "cleaning date",
        // pattern: values.password,
        required: true,
      },

    ];


    const handleFormChange = e => {
      const name = e.target.name;
      const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;      

      setFormValues((prev) =>{
        return { ...prev, [name]: value}
      })      
    }
  
    
    useEffect(() => {    
      const quote = () =>{
       
        let bath = Number(formValues.selectBathNum);
        let oven = ''
        if(formValues.oven === true){
          oven = isNaN(formValues.numOven) ? 0:  Number(formValues.numOven) * 40 
        }else{
          // formValues.numOven = 0
          oven = 0
        }
  
        let fridge = ''
        if(formValues.fridge === true){
          fridge = isNaN(formValues.numFridge) ? 0:  Number(formValues.numFridge) * 20
        }else{
          fridge = 0
        }
  
        let window = ''
        if(formValues.window === true){
          window = isNaN(formValues.numWindow) ? 0:  Number(formValues.numWindow) * 5 
        }else{
          window = 0
        }
        
        let fan = ''
        if(formValues.fan === true){
          fan = isNaN(formValues.numFan) ? 0:  Number(formValues.numFan) * 5
        }else{
          fan = 0
        }
        
        let laundry = ''
        if(formValues.laundry === true){
          laundry = isNaN(formValues.numLaundry) ? 0:  Number(formValues.numLaundry) * 40 
        }else{
          laundry = 0
        }
        
        let blind = ''
        if(formValues.blind === true){
          blind = isNaN(formValues.numBlind) ? 0:  Number(formValues.numBlind) * 5
        }else{
          blind = 0
        }
  
        let priceByRoom = 0  
         if(formValues.selectBedNum === '0'){
            priceByRoom = 0
         }else if(formValues.selectBedNum === '1'){
            priceByRoom = 120
         }else if(formValues.selectBedNum === '2'){
            priceByRoom = 140
         }else if(formValues.selectBedNum === '3'){
            priceByRoom = 175
         }else if(formValues.selectBedNum === '4'){
            priceByRoom = 212
         }else if(formValues.selectBedNum === '5'){
            priceByRoom = 260
         }else if(formValues.selectBedNum === '6'){
            priceByRoom = 300
         }
         
         
         
         
        let cleanType = 0
        if(formValues.selectCleanType === "2" ){ //deep cleaning
          cleanType = 100
            console.log('red')
        }else if(formValues.selectCleanType === "3"){ //move in/move out cleaning
          cleanType = 150
            console.log('blue')
        }else if(formValues.selectCleanType === "4"){ //Post construction cleaning
          cleanType = 220
          console.log('yellow')
        }else{
          cleanType = 0
          console.log('black')
        }
  
        
  
        let priceSquareFeet = Number(formValues.squareFootage) > 1000 ?  Math.round((formValues.squareFootage - 1000) * 0.04) : 0
        
        let discount = isNaN(formValues.cleaningFrequency) ? 1 : formValues.cleaningFrequency
        
        let sum = priceByRoom + (bath * 30) + priceSquareFeet + oven + fridge  + 
                  window + fan + laundry + blind + cleanType 
        
       
                  // console.log('clean type',formValues.selectCleanType)   
        
        setTotal((prev)=>{  
          console.log('sum In Settotal',sum)     
              
          return Math.round(Number(sum * discount))
        })     
       
      
  
      }; 
      quote()
    }, [formValues])
   
    
  
  
  const handleSubmit = async (e) => {
      e.preventDefault();         
      const myUrl = "http://localhost:4001/api/employees";
     
      
      // start
      await fetch(myUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formValues }),
        
      })
        .then((res) => res.json())
        .then(async (res) => {
          const resData = await res;
          if (resData.status === "success") {            
            window.location.href ="/SuccessPage";
          } else if (resData.status === "fail") {
            throw new Error(`HTTP error! status: ${resData.status}`);
          }
        })
        .catch((error) => { console.log(error)})
        .finally(() => {
          console.log(initialState);
        })
      
    // END
      
    
  }
      

    

    
   
  
    
    console.log(total)

    return (
      <div className=" booking-container">        
        
        <form onSubmit={handleSubmit} className='bookingForm'>   
                
          <div className='form-container'>
            <div className='formHeader'>
              <h1>{headForm}</h1>
              <h2>{headFormDesc}</h2>
            </div>
          <h3>Personal Information:</h3>  
          {personalArray.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              type={input.type}
              value={formValues[input.name]}
              onChange={handleFormChange}
            />
          ))}
        {/* select items */}
        
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
          // option = {data}
          value={formValues}
          name='selectBedNum'
          id='selectBedNum'
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
          value={formValues}
          name='selectBathNum'
          id='selectBathNum'
          onChange={handleFormChange} 
        />
        <h4>Address of the place to be cleaned:</h4>
          {addressArray.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={formValues[input.name]}
              onChange={handleFormChange}
            />
          ))}
        
      <SelectItem
          label="State"
          options={[
            {label: "Indiana", value: "IN"},            
          ]}
          value={formValues}
          name='stateAddress'
          id='stateAddress'
          onChange={handleFormChange}       
      />

      </div>
      <div className='form-section'>
          <div className='form-section-header'>
              <h3>Cleaning option and frequency</h3>
            <div>
              <h5>Deep clean recommended</h5>
            </div> 
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
          value={formValues}
          name='selectCleanType'
          id='selectCleanType'
          onChange={handleFormChange} 
        />    
               
        </div>
        <div  >
          <h4>Select your cleaning frequency</h4>  

          {radioElement.map((input) => (
            <Radio
              key={input.id}
              {...input}
              value={formValues[input.name]}
              onChange={handleFormChange}
            />
          ))}
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
                      value={formValues[input.name]}
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
              value={formValues[input.name]}
              onChange={handleFormChange}
            
            />
            ))}

          <SelectItem
          label="Time"
          options={[
            {label: "8:00 AM", value: "1"},   
            {label: "11:00 AM", value: "2"},  
            {label: "1:00 PM", value: "3"},           
          ]}
          value={formValues}
          name='selectCleanTime'
          id='selectCleanTime'
          onChange={handleFormChange}       
      />
        </div>

          <button onClick={handleSubmit}>Submit</button>
          </div>
         
        </form>   
        <div>
          <p>I am here</p>
        </div>   
      </div>
    );
  };
  

export default Order;