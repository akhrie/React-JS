import {useState, useEffect} from 'react';

const Myhook6 = () =>{
    let[itemlist, updateItem] = useState( [] );
    let[citylist, updateCity] = useState( [] );

    const getItem = () =>{
        fetch("item.json")
        .then(jsondata=> jsondata.json())
        .then(itemArray=>{
            updateItem(itemArray); // updating value under state
        })
    }

    const getCity = () =>{
        fetch("city.json")
        .then(response=>response.json())
        .then(cityArray=>{
            updateCity(cityArray);
        })
    }

    // it call on page load just like onload event
    useEffect(()=>{
        getItem();
       // getCity();
    }, [1])

    return(
        <div className='container'>
            <h1 align="center"> useState(), useEffect() Example </h1>
            <button onClick={getCity}> Show All City </button>
            <fieldset>
                  <legend> Available Items : {itemlist.length} </legend>
                  {
                    itemlist.map((itemname, index)=>{
                        return(
                            <p key={index}> {itemname} </p>
                        )
                    })
                  }
            </fieldset>
            <fieldset>
                <legend> Available City : {citylist.length} </legend>
                {

                    citylist.map((cityname, index)=>{
                        return(
                            <p key={index}> {cityname} </p>
                        )
                    })
                }
            </fieldset>
        </div>
    )
}

export default Myhook6;