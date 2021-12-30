import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Web3 from "web3";
import Identicon from "identicon.js";
import "./App.css";
import CrpytoSocialWorld from "./abis/CryptoSocialWorld.json";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
    };
  }

  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
        {this.state.loading ? (
          <div id="loader" className="text-center mt-5">
            <p>Loading...</p>
          </div>
        ) : (
          <Main />
        )}
      </div>
    );
  }
}

export default App;
