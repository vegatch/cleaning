// import React from "react";


const Quote = (formData) =>{
  
  // const [total, setTotal]  = React.useState(0);   
  // const [subTotal, setSubTotal]  = React.useState(0) ;
  // const [discount, setDiscount]  = React.useState(0) ;

  let total = 0;
  let subTotal = 0;
  let discount = 0;
  
  
    
  
    const ovenPrice = 35;
    const fridgePrice = 35;
    const windowPrice = 5;
    const fanPrice = 5;
    const laundryPrice = 35;
    const blindPrice = 5;
  
  
  
    let bath = Number(formData.selectBathNum);
    let oven = ''
    if(formData.oven === true){
      oven = isNaN(formData.numOven) ? 0:  Number(formData.numOven) * ovenPrice 
    }else{
     
      oven = 0
    }
  
    let fridge = ''
    if(formData.fridge === true){
      fridge = isNaN(formData.numFridge) ? 0:  Number(formData.numFridge) * fridgePrice
    }else{
      fridge = 0
    }
  
    let window = ''
    if(formData.window === true){
      window = isNaN(formData.numWindow) ? 0:  Number(formData.numWindow) * windowPrice 
    }else{
      window = 0
    }
    
    let fan = ''
    if(formData.fan === true){
      fan = isNaN(formData.numFan) ? 0:  Number(formData.numFan) * fanPrice
    }else{
      fan = 0
    }
    
    let laundry = ''
    if(formData.laundry === true){
      laundry = isNaN(formData.numLaundry) ? 0:  Number(formData.numLaundry) * laundryPrice 
    }else{
      laundry = 0
    }
    
    let blind = ''
    if(formData.blind === true){
      blind = isNaN(formData.numBlind) ? 0:  Number(formData.numBlind) * blindPrice
    }else{
      blind = 0
    }
  
    let priceByRoom = 0  
     if(formData.selectBedNum === '0'){
        priceByRoom = 0
     }else if(formData.selectBedNum === '1'){
        priceByRoom = 120
     }else if(formData.selectBedNum === '2'){
        priceByRoom = 140
     }else if(formData.selectBedNum === '3'){
        priceByRoom = 175
     }else if(formData.selectBedNum === '4'){
        priceByRoom = 212
     }else if(formData.selectBedNum === '5'){
        priceByRoom = 260
     }else if(formData.selectBedNum === '6'){
        priceByRoom = 300
     }
        
     
    let cleanType = 0
    if(formData.selectCleanType === "2" ){ //deep cleaning
      cleanType = 100
    }else if(formData.selectCleanType === "3"){ //move in/move out cleaning
      cleanType = 150
    }else if(formData.selectCleanType === "4"){ //Post construction cleaning
      cleanType = 220
    }else{
      cleanType = 0
    }
  
    
  
    let priceSquareFeet = Number(formData.squareFootage) > 1000 ?  Math.round((formData.squareFootage - 1000) * 0.04) : 0
    
    // let discount = isNaN(formData.cleaningFrequency) ? 1 : formData.cleaningFrequency
    discount = isNaN(formData.cleaningFrequency) ? 1 : formData.cleaningFrequency
    
    let sum = priceByRoom + (bath * 30) + priceSquareFeet + oven + fridge  + 
              window + fan + laundry + blind + cleanType 
    
   
    // subTotal = Math.round(sum)        
    
    subTotal = (Math.round(sum * 100) / 100).toFixed(2);
    
    total =  isNaN(discount)  ? subTotal : Math.round((subTotal * discount *100) / 100).toFixed(2);
   


    return {subTotal, discount, total}

   
 

}; 

export default Quote;