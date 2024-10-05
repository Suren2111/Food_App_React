import React from "react";
class UserClass extends React.Component{
    
    constructor(props){
      
        super(props);
        this.state={
            userInfo:{
              login:"Loading...",
              id:"Loading....",
              type:"Loading...."
            }
        }
        console.log(this.props.name + "Child constructor")
       
        
    }

    async componentDidMount(){
      // console.log("child componentDidMount");
            const data=await fetch("https://api.github.com/users/suren2111")
            const json=await data.json();
            console.log(json);
            this.setState({
              userInfo:json
            })
      }
     render(){
    // console.log(this.props.name + "Child render")
     const{login,id,type}=this.props;
      return(
        <div>
            <h2>name:{this.state.userInfo.login}</h2>
            <h3>location:{this.state.userInfo.id}</h3>
            <h4>contact:{this.state.userInfo.type}</h4>
        </div>
      )
     }
}

export default UserClass;