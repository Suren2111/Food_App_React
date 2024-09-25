import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count:0
        }
    }

     render(){
     const{name,location,contact}=this.props;
      return(
        <div>
            <h1>count:{this.state.count}</h1>
            <h2>{name}</h2>
            <h3>{location}</h3>
            <h4>{contact}</h4>
        </div>
      )
     }
}

export default UserClass;