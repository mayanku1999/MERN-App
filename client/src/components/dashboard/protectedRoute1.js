import React, { Component } from 'react';
// import { bindActionCreators } from "redux";


import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class ProtectedRoute1 extends Component {
    state = {  }
    render() { 
        return ( 
            <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem"
            }}
            onClick={this.props.logoutUser}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Logout
          </button>
         );
    }
}
// const mapDispatchToProps = (dispatch) =>
// bindActionCreators(
//   {
//     logoutUser,
//   },
//   dispatch
// );
 
const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,{ logoutUser }
  )(ProtectedRoute1);
