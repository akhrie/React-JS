
const Mycustomer = () =>{
    let allcustomer=[
        {city:"Bangalore", account:['Satish', 'Rajesh']},
        {city:"Chennai", account:['Sumith', 'Ajit', 'Alex']},
        {city:"Pune", account:['Santosh', 'Sunil', 'Somya', 'Deepak']},
        {city:"Mumbai", account:['Subash', 'Karan', 'Raj', 'Mohit', 'Madhu']}
    ];
    return(
        <div className="container">
            <h1> Nested Map() on Nested Array of object </h1>
            {
                allcustomer.map((customer, index)=>{
                    return(
                        <fieldset key={index}>
                            <legend> {customer.city} - {customer.account.length} </legend>
                            {
                                customer.account.map((fullname, index2)=>{
                                    return(
                                        <p key={index2}> {fullname} </p>
                                    )
                                })
                            }
                        </fieldset>
                    )
                })
            }
        </div>
    )
}
export default Mycustomer;