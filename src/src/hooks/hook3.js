import {useState} from 'react';

const Myhook3 = () =>{
    let[fullname, pickName] = useState("");
    let[edu, pickEdu] = useState("");
    let[city, pickCity] = useState("");
    let[mobile, pickMobile] = useState("");
    let[state, pickState] = useState("");

    return(
        <div className='container'>
            <h1> React input & output using useState() </h1>
            <table align="center" cellPadding="20">
                <tbody>
                    <tr>
                        <td> 
                            <input type="text" placeholder='Enter Your Name' 
                            onChange={obj=>pickName(obj.target.value)}/> 
                        </td>
                        <td>  {fullname} </td>
                    </tr>
                    <tr>
                        <td> 
                            <input type="text" placeholder='Enter Your Education'
                            onChange={obj=>pickEdu(obj.target.value)}/> 
                        </td>
                        <td>  {edu} </td>
                    </tr>
                    <tr>
                        <td> 
                            <input type="text" placeholder='Enter Your City'
                            onChange={obj=>pickCity(obj.target.value)}/> 
                        </td>
                        <td>  {city} </td>
                    </tr>
                    <tr>
                        <td> 
                            <input type="number" placeholder='Enter Your Mobile No'
                            onChange={obj=>pickMobile(obj.target.value)}/> 
                        </td>
                        <td>  {mobile} </td>
                    </tr>
                    <tr>
                        <td>
                            <select onChange={obj=>pickState(obj.target.value)}>
                                <option value=""> Choose </option>
                                <option value="Karnataka"> Karnataka </option>
                                <option value="Tamilnadu"> Tamilnadu </option>
                                <option value="UP"> UP </option>
                                <option value="Bihar"> Bihar </option>
                            </select>
                        </td>
                        <td> {state} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Myhook3;