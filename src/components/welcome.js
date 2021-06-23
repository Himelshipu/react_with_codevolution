import React,{Component} from "react";
class Welcome extends Component{
    render(){
        return <h1>welcome   {this.props.heroName} and {this.props.name}</h1>
    }
}
export default Welcome