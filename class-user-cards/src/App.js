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
      });
    });
  }

  // src={props.avatar_url} />
  // <UserName>{props.name}</UserName>
  // <Followers>{props.followers}</Followers>
  // <Following>{props.following}</Following>

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h6>GitHub User Cards</h6>
        </header>
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
