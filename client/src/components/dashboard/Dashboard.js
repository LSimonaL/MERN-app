import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h4>
                            <b>Hey there,</b> {user.name.split(" ")[0]}
                        </h4>
                        <button
                            onClick={this.onLogoutClick}
                            className="btn btn-danger mt-3 mr-3">Logout
                            
                        </button>
                        <button className="btn btn-primary btn-form mt-3">                       
                            <Link to={"/"} style={{ color:"white" }}>
                                View My Trips
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);