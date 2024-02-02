import { useState } from "react";
import React from "react";

function Favcolor(){
    const [color, setColor] = useState("red");
    return (
        <div>
            <h1>Favorite color is {color}</h1>
            <button onClick={() => setColor("blue")}>Change color</button>
        </div>
    )
}
export default Favcolor