import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count1:1,
        }
    }
    render(){
        const{name,location,contact}=this.props;
        const{count,count1}=this.state;
        return(
            <div className="user-cont">
            <h1>count:{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:count+1
                })
            }}>count increase</button>

            <button onClick={()=>{
                this.setState({
                    count:count-1
                })
            }}>count decrease</button>
            <h2>name:{name}</h2>
            <h3>location:{location}</h3>
            <h3>contact:{contact}</h3>
            </div>
        )
    }
}
export default UserClass;