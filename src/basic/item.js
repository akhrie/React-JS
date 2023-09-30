import Details from "./itemdetails";

const Itemlist = () =>{
    return(
        <div className="container">
            <h1> What is Component Re-use in React ? </h1>
            <Details itemname="Mouse" cost="300" brand="HP" seller="Alex" stock="Yes"/>
            <Details itemname="Keyboard" cost="5000" brand="HP" seller="Alex" stock="No"/>
            <Details itemname="Apple" cost="300" brand="DP" seller="Alex" stock="Yes"/>
            <Details itemname="Mango" cost="200" brand="CP" seller="Alex" stock="No"/>
            <Details itemname="Milk" cost="30" brand="NP" seller="Alex" stock="Yes"/>
        </div>
    )
}
export default Itemlist;

//let xyz = { name:"Scanner", brand:"HP", cost:20000, seller:'alex', stock:'No' }