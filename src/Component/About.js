import User from "./User"
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{

  constructor(){
    super();
    // console.log("parent constructor");
  }

  componentDidMount(){
    // console.log("parent componentDidMount");
  }

  render(){
    // console.log("parent render")
    return(
      <div className="dark:bg-gray-800 text-black dark:text-white">

     <UserClass />
      
      </div>
      
    )
  }

}

export default About;