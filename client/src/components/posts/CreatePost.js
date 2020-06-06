import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../../actions/postActions";
import classnames from "classnames";

class CreatePost extends Component {
    constructor() {
        super();
        this.state = {
            city: "",
            country: "",
            body: "",
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newPost = {
            city: this.state.city,
            country: this.state.country,
            body: this.state.body,
        };

        this.props.createPost(newPost, this.props.history);

    };
    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <div className="auth-wrapper auth-inner">
                    <h3>Add new trip</h3>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>city</label>
                            <span className="red-text">{errors.city}</span>
                            <input onChange={this.onChange}
                                value={this.state.city}
                                error={errors.city}
                                id="city"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.city
                                })} />
                        </div>
                        <div className="form-group">
                            <label>country</label>
                            <span className="red-text">{errors.country}</span>
                            <input onChange={this.onChange}
                                value={this.state.country}
                                error={errors.country}
                                id="country"
                                type="text"
                                className={classnames("", {
                                    invalid: errors.country
                                })} />
                        </div>

                        {/* <div className="form-group">
                            <label>body</label>
                            <span className="red-text">{errors.body}</span>
                            <input onChange={this.onChange}
                                value={this.state.body}
                                error={errors.body}
                                id="body"
                                type="body"
                                className={classnames("", {
                                    invalid: errors.body
                                })} />
                        </div> */}
                        <button type="submit" className="btn btn-outline-warning btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

CreatePost.propTypes = {
    createPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { createPost }
)(withRouter(CreatePost));