import { logIn, userMe, logOut } from "./actions/authActions";
import { connect } from "react-redux";

const Auth = props => {
    console.log('RE RENDERED AUTH')
    const logUser = () => {
      props.logIn()
      props.userMe({
        userName: 'BOB BOBSKY',
        password: '12345',
        age:23,
        mail: 'mail@gmail.com'
      })
    }
    const { auth } = props;
    return (
      <div>
        {
          !auth.loggedIn
            ? <button onClick={logUser }>LOG IN</button>
            : <div>
              {
                auth.user &&
                 <div>
                   <p>USER NAME: {auth.user.userName}</p>
                   <p>AGE: {auth.user.age}</p>
                   <p>MAIL: {auth.user.mail}</p>
                   <button onClick={() => props.logOut()}>LOGOUT</button>
                 </div>
              }
            </div>
        }
      </div>
    )
}

const mapStateToProps = state => {
    return {
        'auth': state.auth
    }
}

const mapDispatchToProps = {
    logIn,
    userMe,
    logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
  