import React, { useContext } from "react";
import { TitleContext } from '../../titleContext';

export function Dummy () { 
   const titleValue = useContext(TitleContext)
    return (
       <div><h1> Hello dummy data {titleValue} </h1></div>
    )
}

