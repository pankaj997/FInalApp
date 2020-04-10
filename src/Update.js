import React from "react";
import { connect } from "react-redux";
import auth from "./auth.js";
import "./Update.css";
class Update extends React.Component {
  state = {
    name: "",
    password: "",
    email: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    alert("Updated");
    const hasAdmins = this.state;
    auth.update(() => {
      this.props.history.push({
        pathname: "/table",
        state: { details: hasAdmins }
      });
    });
  };

  render() {
    const what = this.props.location.state.detail;
    const id = what.id;
    const values = this.props;
    const val = values.pros[id - 1];
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>USER DETAILS</h1>
            <div className="id">
              <label htmlFor="id"> Id</label>
              <input
                name="id"
                type="text"
                defaultValue={val.id}
                onChange={this.handleChange}
              />
            </div>
            <div className="name">
              <label htmlFor="name"> Full Name</label>
              <input
                name="name"
                type="text"
                defaultValue={val.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="username">
              <label htmlFor="username">UserName</label>
              <input
                name="username"
                type="text"
                defaultValue={val.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password"> Password</label>
              <input
                name="password"
                type="text"
                defaultValue={val.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email"> Email</label>
              <input
                name="email"
                type="email"
                defaultValue={val.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="address">
              <label htmlFor="address">Address</label>
              <input
                name="address"
                type="textarea"
                defaultValue={
                  val.address.street +
                  " " +
                  val.address.city +
                  " " +
                  val.address.zipcode
                }
                onChange={this.handleChange}
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone no</label>
              <input
                name="phone"
                type="text"
                defaultValue={val.phone}
                onChange={this.handleChange}
              />
            </div>
            <div className="website">
              <label htmlFor="website">Website</label>
              <input
                name="website"
                type="text"
                defaultValue={val.website}
                onChange={this.handleChange}
              />
            </div>
            <div className="update">
              <button type="submit" onSubmit={this.handleSubmit}>
                Update
              </button>
            </div>
            <div className="logout">
              <button
                onClick={() => {
                  auth.logout(() => {
                    this.props.history.push("/");
                  });
                }}
              >
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    pros: state.users
  };
};

export default connect(mapStateToProps)(Update);
