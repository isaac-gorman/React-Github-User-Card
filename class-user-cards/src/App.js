import React from "react";
import Card from "./components/Card";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    console.log("...component mounted");

    axios.get("https://api.github.com/users/isaac-gorman").then((res) => {
      console.log("Hi!", res.data);
      this.setState({
        user: res.data,
        userSearch: "",
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
        </div>
      </div>
    );
  }
}

export default App;
