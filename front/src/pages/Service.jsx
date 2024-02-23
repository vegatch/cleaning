import React from "react";
import ServOffered from '../components/Service/ServOffered.jsx'
import cleaner from '../pics/barbara.png'

const Service = () => {
    const offer = [
        {
            id:1,
            title:` Apartment cleaning`,
            desc:`
            Landlords ofentimes struggle to find a cleaner to clean their apartments.
            Benskya offers this service so now landlords just need to contact us
            and arrange the cleaning time. 
            `
        },
        {
            id:2,
            title:` Airbnb cleaning`,
            desc:`
            A clean and tidy place will definitely delight your guest and grow your business.
            Bwnskya can help you grow in maintaining your place exceptionally clean and 
            spotless. Talk to us today.
            `
        },
        {
            id:3,
            title:` Office cleaning`,
            desc:`
            Working in a clean place is not a luxury is must for your business prestige.
            Clean office attracts new customers and increase significantly your
            conversion and retention rate. Benskya has the solution, talk to us today             
            `
        },
        {
            id:4,
            title:` Post construction cleaning`,
            desc:`
            Construction site is ofentimes messy. Keep up with cleaning while
            focus on your construction task can be challenging. Benskya 
            understands that and provide a hors classe service to constructors
            and homeowners alike to clean construction site. 
            `
        },
        {
            id:5,
            title:` Residential cleaning`,
            desc:`
            Landlords ofentimes struggle to find a cleaner to clean their apartments.
            Benskya offers this service so now landlords just need to contact us
            and arrange the cleaning time. 
            `
        },
        {
            id:6,
            title:` Church cleaning`,
            desc:`
            Landlords ofentimes struggle to find a cleaner to clean their apartments.
            Benskya offers this service so now landlords just need to contact us
            and arrange the cleaning time. 
            `
        },

    ]
    console.log(offer)
    return (
        <div className="page-container">
            <img src={cleaner} alt='cleaner' />
            {
                offer.map( (listOffer) =>{
                    return(
                        <ServOffered 
                        key={listOffer.id}
                        serviceTitle={listOffer.title}
                        serviceDesc={listOffer.desc}
                        />
                    )
                })
            }
            <ServOffered />
        </div>
        
        )
}

export default Service;