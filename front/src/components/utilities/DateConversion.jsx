const dateConvert = (formDate) => {
    let cleanDate ='';
    let quoteDate ='';



const myDate = new Date()



  let month = (month)=>{
    switch(month){
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
    default:
      return 'n/a';
  }
}

     quoteDate = `
  ${myDate.getDate()}-${month(myDate.getMonth())}-${myDate.getFullYear()}`;



  let dateToClean = new Date(formDate)
   if(dateToClean !== null){
    
       cleanDate = `
     ${dateToClean.getUTCDate()}-${month(dateToClean.getUTCMonth())}-${dateToClean.getUTCFullYear()}`;
   }

    
  return {cleanDate, quoteDate}
}


export default dateConvert