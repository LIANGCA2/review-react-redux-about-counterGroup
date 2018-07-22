import React,{Component} from "react"
import Counter from "../container/CounterContainer";



class CounterGroup extends Component{
    constructor(props){
        super(props)



    }


    render(){

return(<div>


    {this.generateCounter()}

</div>)
    }
    generateCounter = ()=>{
        let list = []
        for(let i = 1;i<=this.props.amount;i++){
            list.push(<Counter  index={i} />)
        }
        return list
    }
}


export default CounterGroup