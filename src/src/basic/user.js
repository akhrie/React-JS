
function Myser() {
    let alluser = ['Alex', 'Mahesh', 'Mohit', 'Sumit', 'Shayam', 'Krish', 'Raj','Santosh', 'Sunil'];

    return (
        <div className="container">
            <h1> User List : {alluser.length} </h1>
            {
                alluser.map((fullname, index) => {
                    return (
                        <p key={index} className="four"> {fullname} </p>
                    )
                })
            }

        </div>
    )
}

export default Myser;

/*
  { = <script>
  
  } = </script>
*/

