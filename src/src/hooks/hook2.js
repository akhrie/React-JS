import { useState } from "react";

const Myhook2 = () =>{
    let[booklist, updateBook] = useState( ['html','css', 'javascript'] );
    let[newbook, pickBook] = useState("React");

    const save = () =>{
        updateBook( booklist = [...booklist, newbook]);
        // updateBook( a = a+b );
        pickBook(""); // reset empty to newbook variable 
        // newbook ? 
    }

    return(
        <div className="container">
            <h1> useState()-hooks, onChange - Event, [...]spread operation </h1>
            <p> How to use spread operator[...] </p>
            <p> How to communicate with input fields in react functional component </p>
            <p> How to handle array data using useState() </p>

            <h2> Total Books : { booklist.length } </h2>
            <p> Your value is : { newbook } </p>
            <p>
                Enter Book Name : 
                <input type="text"
                 onChange={ obj=>pickBook( obj.target.value ) } 
                 value={newbook} /> 

                <button onClick={ save }> Save Book </button>
            </p>
            {
                booklist.map((bookname, index)=>{
                    return(
                        <div className="four" key={index}>
                            <p> {bookname} </p>
                            <button> Delete </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Myhook2;