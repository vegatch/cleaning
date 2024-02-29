import React, {useEffect}from "react";
import Path from '../Path/Path.jsx'
import './faq.css'

// const Faq = ({  index, open, question, answer}) => {
const Faq = () => {
    
    const [category, setCategory] = React.useState(false)
     
    const [isChecked, setIsChecked] = React.useState('')
    


    const handleCheck = (event) => {
        // let name = event.target.name;
        // let value = event.target.value;
        let name = event.target.checked
        setIsChecked((prevalue) => {
          return {
            ...prevalue,   // Spread Operator               
            name
          }
        })
      }

    const toggleService = () =>{    
        if(category==='service'){
            setCategory('')
            // setIcon('+')
        }else{
            setCategory('service')
            // setIcon('-')
        }
    
    }

    const toggleCleaner = () =>{    
        if(category==='cleaner'){
            setCategory('')
            // setIcon('+')
        }else{
            setCategory('cleaner')
            // setIcon('-')
        }
    
    }

    const toggleBooking = () =>{    
        if(category==='booking'){
            setCategory('')
            // setIcon('+')
        }else{
            setCategory('booking')
            // setIcon('-')
        }
    
    }

    const toggleReferral = () =>{    
        if(category==='referral'){
            setCategory('')
            // setIcon('+')
        }else{
            setCategory('referral')
            // setIcon('-')
        }
    
    }

    const togglePrice = () =>{    
        if(category==='price'){
            setCategory('')
            // setIcon('+')
        }else{
            setCategory('price')
            // setIcon('-')
        }
    
    }
    
    
    const faqCollection = {
        
        "service":[
            {
                "question":"Are you guys insured and bonded?",
                "answer": `Benskya is fully insured and bonded`
            },
            {
                "question":`Are you available in my area?`,
                "answer": `Benskya currently covers indianapolis, Greenwood, Whiteland,
                Franklin, Plainfield, Fishers and Carmel`
            },
            {
                "question":`Will I be satisfy`,
                "answer": `Benskya strives to make you happy with its hors classe cleaning.
                However, if not satisfy just point the area you are not satisfied and Benskya 
                will clean it at your convenience at no cost to you. Your satisfaction is our 
                goal.`
            },
            {
                "question":`How many types of cleaning do you offer?`,
                "answer": `Benskya offers deep, move in/ move out, post construction and standard 
                cleaning`
            },
            {
                "question":`Do I have to be present during the cleaning?`,
                "answer": `Benskya doesn't require you to be present during the cleaning
                process but you are welcome to decide what works best for you. Our end 
                goal is your satisfaction`
            },
            {
                "question":`Will I have the same cleaner every time?`,
                "answer": `Benskya cannot guarantee to send the same cleaner every time
                to your office however Benskya will try to match you with the same cleaner
                every time if workload permits`
            },
            {
                "question":`What is not covered?`,
                "answer": `
                Benskya license doesn't allow him to clean home with biohazards,
                animal waste and insect or rodent cleanup. For safety reason we won't wipe light 
                bulbs, resurfacing, waxing,refinishing floors. We won't be able to move large 
                furniture or large scale trash disposal.`
            },
            {
                "question":`Will you repair or replace if something break during cleaning?`,
                "answer": `
                Our satisfaction is our utmost priority. In the event of breakage during 
                cleaning, Benskya will repair or replace the item or something similar with same
                quality and/or value.
                `
            },
        ],
        
        "cleaner":[
            {
                "question":`Who are your cleaners?`,
                "answer": `
                Benskya's cleaners are professional cleaners with extensive experience. 
                Every cleaner is hand pick selected after result of their background
                `
            },
            {
                "question":`Can I tip my cleaner?`,
                "answer": `
                You absolutely can if you choose to.
                `
            },
        ],
        "booking":[
            {
                "question":`How can I contact you?`,
                "answer": `
                You can call or text us at 786-247-2127 and a human will assist you with your
                booking or any other matter you may have. You can also email us at 
                benskyallc@gmail.com or fill out the form in the contact page and press submit.
                Benskya usually answer (missed calls, text or email) in the next 6 hours
                 upon reception.
                `
            },
            {
                "question":`How do I book?`,
                "answer": `
                You can book online using our booking page or call at 786-247-2127 to book 
                your clean.
                `
            },
            {
                "question":`How late can I book?`,
                "answer": `
                Benskya offers last-minute quick cleaning (see cleaning type page) which be 
                booked 6 hours prior. For the rest it is  still possible but you are 
                required to call us so we can arrange your cleaning
                `
            },
            {
                "question":`How many cleaners will come to my place?`,
                "answer": `
                Depending on the complexity of the job but we usually send one cleaner
                `
            },
            {
                "question":`Can I cancel a booking?`,
                "answer": `
                Yes. Any cancelation within 24 hours after your booking is free of charge. 
                However a cancelation fee of 30 dollars will be applied after any cancelation
                after the 24 hours period.
                `
            },
        ],
        "price":[
            {
                "question":`How can I pay?`,
                "answer": `
                For now you can pay by money transfer and by using cashApp and Zelle
                `
            },
            {
                "question":`When can I pay?`,
                "answer": `
                Payment is required 24h before cleaning
                `
            },
            {
                "question":`What is the cost of your service?`,
                "answer": `
                See our pricing page. We charge on bedroom and bathroom
                `
            },
        ],
        "referral":[
            {
                "question":`Can I refer a friend?`,
                "answer": `
                You strongly encourage you to refer us your friends and you be gratified for 
                doing so. 
                `
            },
            {
                "question":`What do I get if refer someone?`,
                "answer": `
                for each person referred who book one time cleaning, you will receive
                $50. if books a recurring cleaning you will receive $150. And that person
                will get a $50 off of his first cleaning
                `
            },
            {
                "question":`How can I refer a friend?`,
                "answer": `
                Head to our referral page and fill out the form. You will receive a coupon 
                code to your email which you will need to hand to your friend for both of you
                to receive your money.
                `
            },
        ],


    };
    useEffect((e) => {    
            
          }, [category]);

    return (
        <div className="section-container">  
            <div className="faq-outer-container">
                <div className="faq-wrapper">
                    
                    <div>
                        <div className="categ-container first-row">
                            <label>  
                                <input type="checkbox"  className="btn-faq" onClick={toggleService}
                                    onChange={handleCheck} />                            
                                Service  
                            </label>
                                <div onClick={toggleService}>{isChecked && category ==='service' ? '-' : '+'}</div>
                        </div>    
                        <div className="faq-answer-container">
                        {
                        category==='service' &&
                            faqCollection.service.map((faq) =>{
                            return (
                                <div key={faq.answer} className="questionAnswer-wrapper">
                                    <li key ={faq.answer}>
                                        <p>{faq.question}</p>
                                        <p>{faq.answer}</p>
                                    </li> 
                                </div>
                                
                            )
                        })
                        
                        
                    }
                        
                        </div>                   
                    </div>

                    <div>
                        <div className="categ-container">
                                <label >  
                                <input type="checkbox"  className="btn-faq" onClick={toggleCleaner}
                                    onChange={handleCheck} />                            
                                    Cleaner                            
                                </label>
                                <div onClick={toggleCleaner}>{isChecked && category ==='cleaner' ? '-' : '+'}</div>
                        </div>
                        <div className="faq-answer-container">
                        {                           
                            category ==='cleaner' &&
                            faqCollection.cleaner.map((faq, index) =>{
                                return (
                                <div key={faq.answer} className="questionAnswer-wrapper">
                                    <li key ={faq.answer}>
                                        <p>{faq.question}</p>
                                        <p>{faq.answer}</p>
                                    </li> 
                                </div>                            
                                )
                            })
                        
                        }   
                        </div>                    
                    </div>
                    <div>
                        <div className="categ-container">
                            <label  >  
                                <input type="checkbox"  className="btn-faq" onClick={toggleBooking}
                                onChange={handleCheck} />                            
                                Booking 
                            </label>
                            <div onClick={toggleBooking}>{isChecked && category ==='booking' ? '-' : '+'}</div>                        
                        </div>
                        <div className="faq-answer-container">
                        {                           
                            category ==='booking' &&
                            faqCollection.booking.map((faq, index) =>{
                                return (                                
                                    <div key={faq.answer} className="questionAnswer-wrapper">
                                        <li key ={faq.answer}>
                                            <p>{faq.question}</p>
                                            <p>{faq.answer}</p>
                                        </li> 
                                    </div>                                
                                )
                            })
                        
                        }   
                        </div>                    
                                
                        
                    </div>
                    <div>
                        <div className="categ-container">
                            <label  >  
                            <input type="checkbox"  className="btn-faq" onClick={togglePrice}
                                onChange={handleCheck} />                            
                                Pricing 
                            </label>
                            <div onClick={togglePrice}>{isChecked && category ==='price' ? '-' : '+'}</div>                        
                        </div>
                        <div className="faq-answer-container">
                            {                           
                                category ==='price' &&
                                faqCollection.price.map((faq, index) =>{
                                    return (
                                        <div key={faq.answer} className="questionAnswer-wrapper">
                                            <li key ={faq.answer}>
                                                <p>{faq.question}</p>
                                                <p>{faq.answer}</p>
                                            </li> 
                                        </div>
                                    )
                                })
                            
                            }
                        </div>
                        
                                    
                        
                    </div>
                    <div>
                        <div className="categ-container referral">
                            <label  >  
                                <input type="checkbox"  className="btn-faq" onClick={toggleReferral}
                                onChange={handleCheck} />                            
                                Referral 
                            </label>
                            <div onClick={toggleReferral}>{isChecked && category ==='referral' ? '-' : '+'}</div>                        
                        </div>
                        <div className="faq-answer-container">
                            {                           
                                category ==='referral' &&
                                faqCollection.referral.map((faq, index) =>{
                                    return (
                                        <div key={faq.answer} className="questionAnswer-wrapper">
                                            <li key ={faq.answer}>
                                                <p>{faq.question}</p>
                                                <p>{faq.answer}</p>
                                            </li> 
                                        </div>
                                    )
                                })
                            
                            }   
                        </div>
                                
                        
                    </div> 
                    
                
                </div>
                <div className="more-help-container">
                        <p> Do you still have a question?</p>
                        <p> We have the answer. Talk to us now</p>
                        <div className="box-to-contact">
                        <Path goToPage='/Contact' labelForLink='Send your question'/>
                            <p>And receive answers right away</p>
                        </div>
                </div>
            </div>            

        </div>
        
    )
}
export default Faq;