import { useState, useEffect } from 'react';
const Myapi2 = () =>{
    
    let[userlist, updateUser] = useState( [] );
    const getUser = () =>{
        fetch("http://localhost:1234/user")
        .then(response=>response.json())
        .then(userArray=>{
            updateUser(userArray);
        })
    }

    useEffect(()=>{
        getUser(); 
    }, [1]);

    return(
        <section className='container'>
            <h1> Available Api Users : { userlist.length } </h1>
        </section>
    )
}

export default Myapi2;