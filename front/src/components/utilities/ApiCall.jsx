// import React from "react";



const fetchPost = async (formData) => {
  try {
    const response = await fetch("http://localhost:3001/quoteRequest", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default fetchPost;