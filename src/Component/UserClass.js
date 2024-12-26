import React from "react";
class UserClass extends React.Component{
    
    constructor(props){
      console.log("Parent Constructor is called");
      
        super(props);
        this.state={
            userInfo:{
              login:"Loading...",
              id:"Loading....",
              type:"Loading...."
            },
            name:"suren"
        }
       
        
    }

    async componentDidMount(){
      console.log("Parent componentDidMount is called"); 
            const data=await fetch("https://api.github.com/users/suren2111")
            const json=await data.json();
            // this.setState({
            //   userInfo:json
            // })
      }

      componentWillUnmount(){
        console.log("parent componentWillUnmount is called"); 
    }
     render(){
      console.log("Parent render is called");
      const handleOnClickEvent=()=>{
        this.setState({
         suren:"lokesh"
        })
      }
      
     const{login,id,type}=this.props;
      return(
        <div>
            <h2>name:{this.state.userInfo.login}</h2>
            <h3>location:{this.state.userInfo.id}</h3>
            <h4>contact:{this.state.userInfo.type}</h4>
            <button onClick={handleOnClickEvent}>Click Me</button>
            {/* <userContext.Consumer>
              {
               
                (data)=>{
                  console.log(data.loggedInUser);
                  return <h1>{data.loggedInUser}</h1>
                }
              }
            </userContext.Consumer> */}
          
        </div>
      )
     }
}

export default UserClass;