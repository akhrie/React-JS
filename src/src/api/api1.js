import {useState, useEffect} from 'react';

const Myapi1 = () =>{
    const[commentlist, updateComment] = useState( [] );
    const getcomment = () =>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response=>response.json())
        .then(commentArray=>{
            updateComment( commentArray );
        })
    }

    useEffect(()=>{
        getcomment();
    },[1]); 

    return(
        <div className='container'>
            <h1 align="center"> fetch(), useState(), useEffect() with live url </h1>
            <p> Total Comments from Server : {commentlist.length} </p>
            {
                commentlist.map((comment, index)=>{
                    return(
                        <div className='two' key={index}>
                            <h4> {comment.name} </h4>
                            <small> {comment.email} </small>
                            <p> {comment.body} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Myapi1;

