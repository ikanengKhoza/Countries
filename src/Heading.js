const Heading = () => {

    function Search (event) {
        console.log(event.target.value)
    }



    return (
        <div>
            <header>
            <input type="text" id="lname" name="lname"></input>
            </header>
        </div>

    )
}


export default Heading;