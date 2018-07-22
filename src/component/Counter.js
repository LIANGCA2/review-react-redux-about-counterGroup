import React,{Component} from "react";

class Counter extends Component{

    constructor(props){
        super(props);

    }
    add =()=>{
        console.log(this.props)
        this.props.add();
    }

    sub =()=>{

        this.props.sub();
    }

    render(){
        return(<div>
            <button onClick ={(this.add).bind(this)}>+</button>
            <button  onClick = {(this.sub).bind(this)}>-</button>
            <span>Count:{this.props.count}</span>

        </div>)
    }
}
export default Counter