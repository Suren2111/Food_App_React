const User=(props)=>{
    const{name,location,contact}=props;
    return(
        <div className="user-cont">
            <h2>name:{name}</h2>
            <h3>location:{location}</h3>
            <h3>contact:{contact}</h3>
        </div>
    )
}
export default User;
