
const Details = (info) =>{

    return(
        <fieldset>
            <legend> {info.itemname} </legend>
            <p> Cost : {info.cost}/unit </p>
            <p> Brand : {info.brand} </p>
            <p> Seller : {info.seller} </p>
            <p> in Stock : {info.stock} </p>
        </fieldset>
    )
}

export default Details;