const FormValidation = (formState) =>{
    const validationError = {}
    const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;
    const phoneFormat = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    
    if(formState.fullname === ''){
        validationError.fullname ='Name is required'
        
    }else if(formState.fullname.length > 30 || formState.fullname.length < 5){
        validationError.fullname='Name should be between 5 abd 30'
        
    }

    if(formState.email === ''){
        validationError.email ='Email is required'
        
    }else if(!validEmail.test(formState.email)){
        validationError.email ='Email is incorrect'
        
    }

    if(formState.phonenumber === ''){
        validationError.phone_number ='Phone number is required'
        
    }else if(!phoneFormat.test(formState.phonenumber)){
        validationError.phonenumber =' Format 000-000-0000 expected'
        
    }

    if(formState.message === ''){
        validationError.message ='Message is required'
        
    }
    if( formState.message.length > 300){
        validationError.message =' message is too long. Max length is 300'
        
    }


    // Order function validation starts here
    
    if (formState.firstname === "") {
        validationError.firstname ='First name is required'
    }else if(formState.firstname.length > 30 || formState.firstname.length < 2){
      validationError.firstname='Name maybe too short'          
    }

    if (formState.lastname === "") {
      validationError.lastname ='Last name is required'
    }else if(formState.lastname.length > 30 || formState.lastname.length < 2){
      validationError.lastname='Name maybe too short'          
    }
  
  if(formState.email === ''){
    validationError.email ='Email is required'
    
}else if(!validEmail.test(formState.email)){
  validationError.email ='Email is incorrect'
    
}

if(formState.phonenumber === ''){
  validationError.phonenumber ='Phone number is required'
  
}else if(!phoneFormat.test(formState.phonenumber)){
validationError.phonenumber =' Format 000-000-0000 expected'
  
}
if (formState.streetAddress === "") {
validationError.streetAddress ='address is required'
}
if (formState.city === "") {
validationError.city ='city is required'
}
if (formState.selectBedNum === "0") {
validationError.selectBedNum ='# bedroom is required'
}
if (formState.selectBathNum === "0") {
validationError.selectBathNum ='# bathroom is required'
}
if (formState.zipcode === "") {
validationError.zipcode ='zipcode is required'
}else if(formState.zipcode.length !== 5){
validationError.zipcode ='zipcode doesn\'t match'
}else if(isNaN(formState.zipcode)){
validationError.zipcode ='only numbers acccepted'
}

if (formState.selectCleanType === "") {
validationError.selectCleanType ='cleaning type is required'
}
if (formState.cleaningDate ==='') {
validationError.cleaningDate ='Cleaning date is required'
}
if (formState.selectCleanTime ==='') {
validationError.selectCleanTime ='Cleaning time is required'
}
    // Order function validation ends here
    
    return validationError;
}

export default FormValidation