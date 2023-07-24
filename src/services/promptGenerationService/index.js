import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const promptsService = async () => {
  
  try {
    const apiUrl = 'http://localhost:8080/prompt/generatePrompts';
    const requestBody = {
      category: "",
      subCategory: "",
      inputText: "write junit test case",
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
