import React, { useEffect, useState, useContext  } from 'react';
import axios from 'axios';


export const promptsService = async (event) => {
 

  
  try {
    const apiUrl = 'http://localhost:8080/prompt/generatePrompts';
    const requestBody = {
      category: "",
      subCategory: "",
      inputText: event.UseCase,
      userId: "6437ee95d90f4e73c32fa281",
      lang: "",
      isSafeMode: true
    };
    const response = await axios.post(apiUrl , requestBody);
    return response;
  } catch (err) {
    throw err;
  }
};
export const imageGeneration = async (event) => {
 
  
  try {
    const apiUrl = 'http://localhost:8080/image/getImageFromText';
    const requestBody = {
   
      userId: "6437ee95d90f4e73c32fa281",
     prompt:event.Prompt
    };
    const response = await axios.post(apiUrl , requestBody);
    return response;
  } catch (err) {
    throw err;
  }
};
