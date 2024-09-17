import React from "react";
import axios from "axios";

export const submitRequest =async () =>{
      const data =await  axios.post("http://localhost:4200/auth/login")
      return data;
}
       