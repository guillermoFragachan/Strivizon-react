import { Link, withRouter } from "react-router-dom"

const RegistrationButton = () => {
    return (

        <Link to="/registration">
        <button className="btn light-btn">Registration</button>
        </Link>
    )
}
export default withRouter(RegistrationButton)