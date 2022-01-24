import React from "react";
export function Footer ({ children }) {

// const {a,x} = {a:20, b:30, x:50}
// console.log(a)
// eskp destructure bolte hai


// esko object spliding bolte hai


// const obj = {a:100, b:200, c:300,}
// const copy = obj
// copy.c = 15
// console.log(obj)

// const obj = {a:100, b:200, c:300,}
// const copy = {d:13,...obj}
// console.log(copy)


// ye aaray spliding hoti hai
const arr = [1,2,3,4,5]
const copyArr = [...arr,6,7]
console.log(copyArr)
    return (
       <div><h1>Hello {children}  </h1> 
       {/* <div>{children}</div>  */}
       
       </div> 
    )
}

