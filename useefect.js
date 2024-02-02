import { useState, useEffect  } from "react";
import React from "react";

function Timer(){
    const [time, setTime] = useState(0);
    useEffect(() => {
        const Timer = setInterval(() => {
            setTime(time => time + 1);
        }, 1000);
        return () => clearInterval(Timer);
    }, []);
    return (
        <div>
            <h1>Time is:  {time}</h1>
        </div>
    )
}
export default Timer;