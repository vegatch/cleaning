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
        
    }else if(!validEmail.test(formState.client_email)){
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
    if(formState.cleaningFrequency === ''){
        validationError.cleaningFrequency ='cleaning frequency is required'
        
    }

    if(formState.streetAddress === ''){
        validationError.streetAddress ='Address is required'        
    }
    if(formState.city === ''){
        validationError.city ='City is required'        
    }
    if(formState.state === ''){
        validationError.state ='State is required'        
    }
    if(formState.selectBedNum === ''){
        validationError.selectBedNum ='Number of bed is required'        
    }
    if(formState.selectBathNum === ''){
        validationError.selectBathNum ='Number of bath is required'        
    }
    if(formState.selectCleanType === ''){
        validationError.selectCleanType ='Cleaning type is required'        
    }
    if(formState.frequenceClean === ''){
        validationError.frequenceClean ='Cleaning frequency is required-'        
    }
    if(formState.cleaningDate === ''){
        validationError.cleaningDate ='Cleaning date is required-'        
    }
    if(formState.selectCleanTime === ''){
        validationError.selectCleanTime ='Cleaning time is required-'        
    }
    // Order function validation ends here
    
    return validationError;
}

export default FormValidation