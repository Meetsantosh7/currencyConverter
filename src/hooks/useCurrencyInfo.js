import { useEffect, useEffectm, useState } from "react";

function useCurrencyInfo(currency) {
    const[data,setData]= useState({});
    useEffect(()=>{

        fetch("https://api.exchangerate-api.com/v4/latest/USD")
            .then(response => response.json())
            .then(resposnse =>setData(response[curremcy ])) 
            console.log(data)
         return data;
    },[currency])}

    export default useCurrencyInfo;