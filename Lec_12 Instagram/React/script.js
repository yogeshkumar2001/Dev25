let names =["Berlin" , "Tokyo" , "Denver" , "Professor"]

function Hello(props){
    console.log(props);
    return <h1>Hello from {props.name} component😍😍</h1>
}


function BigHello(){
    return <React.Fragment>
        {names.map(function(name){
            return <Hello name = {name} key={name}></Hello>
        })}

          </React.Fragment>

}
ReactDOM.render(<BigHello/> ,document.getElementById("root"));