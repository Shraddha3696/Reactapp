
import React, { useState, useEffect , useRef} from "react";

const arrObj = [
    {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
      },
      {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
      },
      {
        "color": "blue",
        "type": "Maruti",
        "registration": new Date('2018-03-03'),
        "capacity": 5
      },
]

export const Counter = () => {
    const [count, setCount] = useState({
        counter: 0,
        //title: 'The count is'
    });
const num = useRef(0);

    useEffect(() => {
        if(num.current != 0){
            console.log(num.current);
      console.log("counter is changed");
        }
    }, [count.counter]);
    
    // useEffect(() => {
    //     console.log("i am freshly mounted");
    // }, [])

    const handleReset = (e) => {
        setCount((prevState) => {
            return {
                ...prevState,
                counter: 0,
                title:'The Count is'
            }
        });
        //console.log(e);
    }
    
    const registerCounter = (action) => () => {
        if(action==="decrement"){
            setCount((prevState) => {
                return {
                    ...prevState,
                    counter: prevState.counter - 1,
                }
            });
        }
        else{
            setCount((prevState) => {
                return {
                    ...prevState,
                    counter: prevState.counter + 1,
                }
            });
        }

    }

    return (
        <>
      
        
      
        { count.title && <h1>{count.title}</h1> }
        <p>{count.counter}</p>
        <button onClick={registerCounter("increment")}>Increment</button> &nbsp;
        <button onClick={registerCounter("decrement")}>Decrement</button> &nbsp;
        <button onClick={handleReset}>Reset</button>
        {
            arrObj.map((item,index) => <p key={index}>{item.color}</p>)
        }
        </>
    );
    
}

 export default Counter;


