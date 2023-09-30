

const Myproduct = () =>{
    let allproduct=[
        {name:"Printer", price:12000, qty:10},
        {name:"Scanner", price:15000, qty:5},
        {name:"Laptop",  price:60000, qty:56},
        {name:"Mouse",   price:800, qty:22},
        {name:"Keyboard", price:1000, qty:77},
        {name:"Network Card", price:1500, qty:11}
    ];

    return(
        <div className="container">
            <h1> Product List : {allproduct.length} </h1>
            <table className="mytable">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Quantity</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allproduct.map((product, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {product.name} </td>
                                    <td> {product.price} </td>
                                    <td> {product.qty} </td>
                                    <td> {product.qty * product.price} </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Myproduct;