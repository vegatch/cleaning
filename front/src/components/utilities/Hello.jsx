// import React from "react";

const myPost = async (url, formState) => {
    let postResult ='';
    await fetch(url, {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ formState }),
            
          })
            .then((res) => res.json())
            .then(async (res) => {
              const resData = await res;
              if (resData.status === "success") {
                // alert("Message Sent");
                postResult = 'success'
                window.location.href ="/SuccessPage";
              } else if (resData.status === "fail") {
                postResult = 'something went wrong'
                alert("Message failed to send");
              }
            })
            // .then(() => {
            //   setMessageState(initialState);
            // });
        
 return postResult
}

export default myPost;