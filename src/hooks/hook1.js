import { useState } from "react";

const Myhook1 = () =>{

    // array Destructuring 
    let city = ["Bangalore", "Mumbai", "Chennai"];

    const[Bangalore, Mumbai, x] = city; // city array got Destructured now 

    console.log( useState() );
    // let[abc , xyz] = useState();  [undefined, ƒ()]
    // let[abc , xyz] = [100, ƒ()]
    // 
    let[counter,  updateCounter] = useState(1000);
    let[msg, updatemsg] = useState("Click On Buttons To See Magic");

    const one = () =>{
        updateCounter( counter+10 );
        updatemsg("Hi, The Click was on + button ......");
    }

    const two = () =>{
        updateCounter( counter - 5 );
        updatemsg("Sorry, The Click Was on - button !");
    }

    return(
        <div className="container">
            <h1> How to use the useState() hook function ? </h1>
            <p> { Bangalore } </p>
            <p> { Mumbai } </p>
            <p> { x } </p>
            <h2> { counter } </h2>

            <p> {msg} </p>

            <button onClick={ one }> Click To + By 10 </button>

            <button onClick={ two }> Click To - By 5 </button>
        </div>
    )
}

export default Myhook1;