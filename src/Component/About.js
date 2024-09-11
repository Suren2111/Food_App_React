import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return(
        <div>
            <h1>This is About US Page</h1>
            <User name={"suren"} location={"trichy"} contact={"suren2111"}/>
            <UserClass name={"suren"} location={"trichy"} contact={"suren2111"}/>
        </div>
    )
}
export default About;