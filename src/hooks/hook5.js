import { useState } from "react";
import swal from "sweetalert";


const Myhook5 = () =>{
    let[itemlist, updateItem] = useState( [ {name:"Laptop", price:30000, qty:10} ] );
    let[itemname, pickName] = useState("");
    let[itemprice, pickPrice] = useState("");
    let[itemqty, pickQty] = useState("");

    const save = () =>{
        let newitem = {name:itemname, price:itemprice, qty:itemqty};
        updateItem( itemlist = [...itemlist, newitem] );
        swal(itemname ,  "Added Successfully...", "success");
        pickName("");
        pickPrice("");
        pickQty("");
    }

    const delitem = (index, name) =>{
        itemlist.splice(index, 1);
        updateItem( itemlist = [...itemlist] );
        swal(name ,  "Deleted Successfully...", "success");
    }

    return(
        <div className="container">
            <h1 align="center"> 
                Array Object Add, list, delete , using [...] spread & useState() 
            </h1>
            <table cellPadding="12" align="left">
                 <tbody>
                    <tr>
                        <td> Item Name </td>
                        <td> 
                            <input type="text" 
                                onChange={obj=>pickName(obj.target.value)} 
                                value={itemname}/> 
                        </td>
                    </tr>
                    <tr>
                        <td> Item Price </td>
                        <td> 
                            <input type="number" 
                            onChange={obj=>pickPrice(obj.target.value)} 
                            value={itemprice}/> 
                        </td>
                    </tr>
                    <tr>
                        <td> Item Quantity </td>
                        <td> 
                            <input type="number" 
                            onChange={obj=>pickQty(obj.target.value)} 
                            value={itemqty}/> 
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center"> 
                            <button onClick={save}> Save Item </button>
                        </td>
                    </tr>
                </tbody>   
            </table>

            <table align="right" cellPadding="12" width="50%">
                <thead>
                    <tr>
                        <th> Index </th>
                        <th> Item Name </th>
                        <th> Price </th>
                        <th> Quantity </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemlist.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {item.name} </td>
                                    <td> {item.price} </td>
                                    <td> {item.qty} </td>
                                    <td>
                                        <button onClick={delitem.bind(this, index, item.name)}> Delete </button>
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

export default Myhook5;