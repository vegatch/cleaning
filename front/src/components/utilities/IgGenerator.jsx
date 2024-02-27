const idGenerator = (lengthOfId) => { 
    const myVariable = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~@!#$%^&*()_+:"?><|[]{}';
    let numberOfChar = 0
    let firstId = ''
    let secondId = ''
    let myId =''
    while (numberOfChar < lengthOfId) {
      firstId += myVariable.charAt(Math.floor(Math.random() * myVariable.length));
      secondId += myVariable.charAt(Math.floor(Math.random() * myVariable.length));
      numberOfChar += 1;
    }
    let currentDate = String(Date.now()).substr(7)
    
    myId = firstId+ '-'+ currentDate +'-'+ secondId ;
    
    return myId
}

export default idGenerator