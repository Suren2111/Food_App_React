import User from "./User"
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{

  constructor(){
    super();
    console.log("parent constructor");
  }

  componentDidMount(){
    console.log("parent componentDidMount");
  }

  render(){
    console.log("parent render")
    return(
      <>

     <UserClass name={"first"} location={"chennai"} contact={"suren_1999"}/>
     <UserClass name={"second"} location={"chennai"} contact={"suren_1999"}/>
     <UserClass name={"third"} location={"chennai"} contact={"suren_1999"}/>
      
      </>
      
    )
  }

}

export default About;