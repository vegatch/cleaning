import React from 'react';
import  './ads.css';

const Ads = () =>{

    const standardCleaningList = [
        {
            id:1,
            desc:'Sweep and mop all floors'
        },
        {
            id:2,
            desc:'Dusting'
        },
        {
            id:3,
            desc:'Vacuum carpets'
        },
        {
            id:4,
            desc:'Empty bins'
        },
        {
            id:5,
            desc:'Clean Mirrors'
        },
        {
            id:6,
            desc:'Window sills'
        },
        {
            id:7,
            desc:'Outside kitchen cabinets'
        },
        {
            id:8,
            desc:'Outside fridge'
        },
        {
            id:9,
            desc:'Countertops'
        },
        {
            id:10,
            desc:'Appliances'
        },
        {
            id:11,
            desc:'Sinks'
        },
        {
            id:12,
            desc:'Stove'
        },
        {
            id:13,
            desc:'Dishes'
        },
        {
            id:14,
            desc:'Microwave'
        },
        {
            id:15,
            desc:'Outside Dishwasher'
        },
        {
            id:16,
            desc:'Outside oven'
        },
        {
            id:17,
            desc:'Toilets'
        },
        {
            id:18,
            desc:'Outside of bath cabinets'
        },
        {
            id:19,
            desc:'Showers'
        },
        {
            id:20,
            desc:'Bath tubs'
        },
        {
            id:20,
            desc:'Make beds'
        },
        {
            id:21,
            desc:'Table tops'
        },
        {
            id:22,
            desc:'Hallways'
        },
        {
            id:23,
            desc:'Staircases'
        },
        
        
        
        
    ]

    const deepCleaningList = [
        {
            id:1,
            desc:'Baseboard'
        },
        {
            id:2,
            desc:'Light switches and door knobs'
        },
        {
            id:3,
            desc:'Dust furniture'
        },
        {
            id:4,
            desc:'Walls\' spot clean'
        },
        {
            id:5,
            desc:'Doors'
        },
        {
            id:6,
            desc:'Sanitize all surfaces'
        },
        {
            id:7,
            desc:'Underneath furniture if accessible'
        },
        {
            id:8,
            desc:'Stainless'
        },
        {
            id:9,
            desc:'Chrome'
        },
               
        
        
    ]

    const MoveInOutCleaningList = [
        {
            id:1,
            desc:'Clean inside kitchen cabinets'
        },
        {
            id:2,
            desc:'Clean inside bath cabinets'
        },
        {
            id:3,
            desc:'Clean inside bedroom cabinets'
        },
        
    ]
        
    
    return(
        <div className='cleaning-option-container'>
            <div className='clean-standard'>
                <h3>Standard Cleaning</h3>
                <p>Book now</p>
                <div className='clean-list'>
                    {
                        standardCleaningList.map((list) =>{
                            return <li key={list.id}>{list.desc}</li>
                        })
                    }
                </div>
            </div>
            <div className='clean-deep'>
                <h3>Deep Cleaning</h3>
                <p>Book now</p>
                <div className='clean-list'>
                    {
                        deepCleaningList.map((list) =>{
                            return <li key={list.id}>{list.desc}</li>
                        })
                    }
                </div>
            </div>
            <div className='clean-moveInOut'>
                <h3>Move in/Move out Cleaning</h3>
                <p>Book now</p>
                <div className='clean-list'>
                    {
                        MoveInOutCleaningList.map((list) =>{
                            return <li key={list.id}>{list.desc}</li>
                        })
                    }
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Ads;