import React from "react";
class UserClass extends React.Component{
    
    constructor(props){
      
        super(props);
        this.state={
            count:0
        }
        console.log(this.props.name + "Child constructor")
       
        
    }

    componentDidMount(){
        console.log(this.props.name + "child componentDidMount");
      }
     render(){
    console.log(this.props.name + "Child render")
     const{name,location,contact}=this.props;
      return(
        <div>
            <h1>count:{this.state.count}</h1>
            <button onClick={()=>{
              this.setState({
                count:this.state.count+1
              })
            }}>Count: {this.state.count}</button>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>{contact}</h4>
        </div>
      )
     }
}

export default UserClass;