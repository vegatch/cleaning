import React, { useState, useEffect } from "react";
import formValidation from '../utilities/Validation'
const useCallToApi = (url, formData) =>{
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [data, setData] = useState(null);
    const [backEndError, setBackEndError] = useState(null);
    const [formError, setFormError] = useState(null);
    
    useEffect(() =>{
        setIsSubmitting(true);
        setFormError( formValidation(formData))
        if(Object.keys(formValidation(formData)).length === 0){
            const response = fetch(url, {
                method: 'Post',
                headers:{"content-type": "application/json"},
                body: JSON.stringify({formData})    
                })
                .then((res) => res.json())
                .then(async (res) => {
                    const resData = await res;
                    if (resData.status === "success") {
                        setData(resData.status)
                      window.location.href ="/SuccessPage";
                    } 
                    })
                    console.log(response)
                .catch((err) => {
                    setBackEndError(err);
                })
                .finally(() => setIsSubmitting(false))
        }
    }, [url, formData])
        
    return { isSubmitting, data, formError, backEndError };
}

export default useCallToApi;







    





// import { useEffect, useState } from "react";


// const useCallToApi = async (url, formState) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [data, setData] = useState(null);
//     const [dataError, setDataError] = useState(null)
//     useEffect(() =>{
//         setIsLoading(true);
//         fetch( url,{
//             method: 'Post',
//             headers:{
//                 "Content-type": "application/json",
//             },
//             body: JSON.stringify({ formState }),
//         })
//         .then((res) => res.json())
//         .then(async (res) => {
//             const resData = await res;
//             if (resData.status === "success") {
//                 setData(resData.status)
//             //   window.location.href ="/SuccessPage";
//             } else if (resData.status === "fail") {
//                 setDataError(resData.status)
//             }
//           })
//           .finally(() => {
//             setIsLoading(false);
//           });

          
//     }, [url, formState])

//     const Call = async (url, formState)=>{
//         setIsLoading(true);
//         await fetch( url,{
//             method: 'Post',
//             headers:{
//                 "Content-type": "application/json",
//             },
//             body: JSON.stringify({ formState }),
//         })
//         .then((res) => res.json())
//         .then(async (res) => {
//             const resData = await res;
//             if (resData.status === "success") {
//                 setData(resData.status)
//             //   window.location.href ="/SuccessPage";
//             } else if (resData.status === "fail") {
//                 setDataError(resData.status)
//             }
//           })
//           .finally(() => {
//             setIsLoading(false);
//           });

//       }
//     return {isLoading, data, dataError}
// }

// export default useCallToApi;