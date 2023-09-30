import { useState, useEffect } from 'react';
import swal from 'sweetalert';
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

    // adding new user 
    let[name, pickName] = useState("");
    let[usercity, pickCity] = useState("");
    let[userage, pickAge] = useState("");
    let[useredu, pickEdu] = useState("");

    const save = () =>{
        if( userid >0 )
        {
            updatemyuser();
        }else{
            let url = "http://localhost:1234/user";
            let newuser = {fullname:name, age:userage, city:usercity, edu:useredu};
            let postdata = {
                headers:{'Content-Type':'application/json'},
                method:"POST",
                body:JSON.stringify(newuser)
            };
            fetch(url, postdata)
            .then(response=>response.json())
            .then(serverres=>{
                swal(name , " Save Successfully ... ", "success");
                getUser();// call to reload the list
                pickName("");
                pickCity("");
                pickAge("");
                pickEdu("");
            })
        }
    }

    const deluser = (id, name) =>{
        let url = "http://localhost:1234/user/"+id;
        let postdata = { method:"DELETE" };
        fetch(url, postdata)
        .then(response=>response.json())
        .then(emptyres=>{
            swal(name, " Deleted Successfully...", "success");
            getUser();// call to reload the list
        })
    }

       let[userid, updateid] = useState(0);
       let[btntext, updatebtn] = useState("Save User");

    const edituser = (index) =>{
        pickName( userlist[index].fullname );
        pickCity( userlist[index].city );
        pickAge( userlist[index].age );
        pickEdu( userlist[index].edu );
        updateid( userlist[index].id );
        updatebtn(" Update User ");
    }

    const updatemyuser = () =>{
        let url = "http://localhost:1234/user/"+userid;
        let newuser = {fullname:name, age:userage, city:usercity, edu:useredu};
        let postdata = {
            headers:{'Content-Type':'application/json'},
            method:"PATCH",
            body:JSON.stringify(newuser)
        };
        fetch(url, postdata)
        .then(response=>response.json())
        .then(serverres=>{
            swal(name , " Updated Successfully ... ", "success");
            getUser();// call to reload the list
            pickName("");
            pickCity("");
            pickAge("");
            pickEdu("");
            updateid( 0 ); // reset to default value
            updatebtn(" Save User "); // reset to default value
        })
    }

    return(
        <section className='container'>
            <h1 align="center"> User id is : {userid} : Available Api Users : { userlist.length } </h1>
            <table align="center" cellPadding="10">
                <tbody>
                    <tr>
                        <td> Full Name </td>
                        <td> 
                            <input type="text" onChange={obj=>pickName(obj.target.value)} value={name}/>
                        </td>
                    </tr>
                    <tr>
                        <td> Age </td>
                        <td> <input type="text" onChange={obj=>pickAge(obj.target.value)} value={userage}/></td>
                    </tr>
                    <tr>
                        <td> Education </td>
                        <td> <input type="text" onChange={obj=>pickEdu(obj.target.value)} value={useredu}/></td>
                    </tr>
                    <tr>
                        <td> City </td>
                        <td> <input type="text" onChange={obj=>pickCity(obj.target.value)} value={usercity}/></td>
                    </tr>
                    <tr>
                        <th colSpan="2">
                            <button onClick={save}> {btntext} </button>
                        </th>
                    </tr>
                </tbody>
            </table>

            <table align="center" cellPadding="12">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Full Name</th>
                        <th>Age</th>
                        <th>Education</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th> Delete </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userlist.map((user, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {user.id} </td>
                                    <td> {user.fullname} </td>
                                    <td> {user.age} </td>
                                    <td> {user.edu} </td>
                                    <td> {user.city} </td>
                                    <td> <button onClick={edituser.bind(this, index)}>Edit</button> </td>
                                    <td> <button onClick={deluser.bind(this, user.id, user.fullname)}>Delete</button> </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Myapi2;