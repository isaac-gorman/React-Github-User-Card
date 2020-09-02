import React from "react";
import Card from "./components/Card";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
      userSearch: "isaac-gorman",
    };
  }

  componentDidMount() {
    console.log("...component mounted");

    axios.get("https://api.github.com/users/isaac-gorman").then((res) => {
      console.log("Hi!", res.data);
      this.setState({
        user: res.data,
      });
    });
  }

  componentDidUpdate() {
    console.log("component updated!");
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  searchUser = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userSearch}`)
      .then((res) => {
        console.log("I am the searched user", res.data);
        this.setState({
          user: res.data,
        });
      });
  };

  getFollowers = (e) => {
    e.preventDefault();
    console.log("getfollowers clicked!");
    axios
      .get(`https://api.github.com/users/${this.state.userSearch}/followers`)
      .then((res) => {
        console.log("I am followers", res.data);
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => {
        console.log("I am error", err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h6>GitHub User Cards</h6>
        </header>
        <div>
          <input
            type="text"
            value={this.state.userSearch}
            name="userSearch"
            onChange={this.handleChange}
          />
          <button onClick={this.searchUser}>Search</button>
        </div>
        <div>
          {/* <Card
            avatar_url={this.state.user.avatar_url}
            name={this.state.user.name}
            followers={this.state.user.followers}
            following={this.state.user.following}
          /> */}
          <Card state={this.state.user} />
          <button onClick={this.getFollowers}>View Followers</button>
          {this.state.followers.length === 0 ? (
            <p>Look at the follwers</p>
          ) : (
            this.state.followers.map((item) => {
              return (
                <div>
                  <h5>{item.login}</h5>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default App;
