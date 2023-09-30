import {useState} from 'react';

const Myhook4 = () =>{
    let[userlist, updateUser] = useState( ['Ramesh', 'Ganesh'] );

    let[fullname, pickName] = useState("");

    const save = () =>{
        updateUser( userlist = [...userlist, fullname] );  // a = a+b;
        pickName(""); // to clear fullname 
    }


    // a = a - b
    const deluser = (index) =>{
        userlist.splice(index, 1);  // a - b  delete from state array
        updateUser( userlist = [...userlist] ); // a = a;   inform to state that 1 element is deleted
        alert("Deleted Successfully...");
    }

    return(
        <div className='container'>
            <h1 align="center"> React input & output using useState() </h1>

            <p align="center">
                <input type="text" 
                    placeholder='Enter Customer Name' 
                    onChange={obj=>pickName(obj.target.value)}
                    value={fullname}
                />
                <button onClick={save}> Save Customer </button> 
            </p>

            <table align="center" cellPadding="20">
                <thead>
                    <tr>
                        <th> Sl No </th>
                        <th> Customer Name </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((name, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {name} </td>
                                    <td> 
                                        <button onClick={ deluser.bind(this, index) }> Delete </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Myhook4;