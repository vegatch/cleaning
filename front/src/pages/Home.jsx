import React, {useEffect} from "react";
import Banner from '../components/Banner/Banner.jsx'
import Hero from '../components/HeroBanner/Hero.jsx'
import Ads from '../components/Ads/Ads.jsx'
import Work from '../components/WorkWithUs/WorkWithUs.jsx'
import Faq from '../components/FAQ/Faq.jsx'
import ContactUS from '../components/Contact/ContactUs.jsx'
import HeroImg from '../pics/pain.jpg'
import '../CSS/home.css'
// import { useEffect } from 'react';

const Home = () => {

    
    const messageImporant = `
     Enjoy a clean, tidy and healthy home or office without having to do it yourself.
    `
    const intro = `
    Cleaning is a time consuming task and can be very challenging for many because of the constant kneeling 
    and bending. Cleaning can also put a massive pressure on your joints and your back. Get your life and 
    freedom back. Let's Benskya do this strenous job for you.
    `
    
    const imgdesc = 'cleaning picture'

    const workBenefit =[
        {
            id:1,
            title:'Save you time',
            titleDesc:`
            Cleaning is a time-consuming task that requires significant effort and time
            which you don't have. Stop stressing yourself out, leave the cleaning to us 
            and enjoy and healthier environment. 
            `,

        },
        {
            id:2,
            title:'Save you money',
            titleDesc:`
            Having a clean and tidy space can prevent dirt and rodents from housing your
            place and improve the longevity of your items, saving you money on repairs 
            and replacements in the long run.
            `,

        },
        {
            id:3,
            title:'Always available for you',
            titleDesc:`
            Conscious that the need for a clean can arise at anytime
            Benskya make sure is always have a staff available to help
            you with you cleaning need.
            `,

        },
    ]

    useEffect((e) => {    
    //  setCategory('')
        
      }, []);
    
    return (
        <div className="page-container">
            <div className="hero-section">
                <Hero mainMessage= {messageImporant} message={intro} picture={HeroImg} picturedesc={imgdesc} lblbtn='Get a quote'/>
            </div>
            {/* ads, lblforPhone, lblforbtn */}
            
            {/* People I work with */}
            <div className="benefit-section">
                <h3>Why working with us</h3>
                {
                    workBenefit.map((benefit) =>{
                        return <Work 
                        key={benefit.id}
                        {...benefit}
                        title={benefit.title}
                        titleDesc={benefit.titleDesc}
                        />
                    })
                }
            </div>
            <div>
                <Banner /> 
            </div>
            {/* FAQ section */}
            <div className="faq-section">
                <h3>Frequently asked questions</h3>
                <Faq />         
            
            </div>
            {/* Serives and Products */}
            <div>
                <Ads />
            </div>
            {/* Contact us Section */}
            <div className="contact-section">
                <h3>Still have a question? 
                </h3>
                <div>
                    <ContactUS />
                </div>
            </div>
            <div>
                <Banner 
                    lblforbtn='Get quote or book online' 
                    lblforPhone='Call us at ' 
                    ads='Your search for cleaning service ends here.'
                /> 
            </div>
        </div>
        
        )
}

export default Home;