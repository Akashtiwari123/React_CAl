import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      opr: 0
    };
  }
  handleClick = event => {
    if (this.state.total === 0) {
      this.state.total = event;
      document.getElementById("one").innerHTML = event;
      console.log(this.state.total);
    } else if (this.state.opr === "+") {
      document.getElementById("two").innerHTML = event;
      this.state.total = this.state.total + event;
      this.setState({ opr: 0 });
    } else {
      document.getElementById("tot").innerHTML = this.state.total;
    }
    console.log(this.state.total);
    //this.setState({total:event.target.value});

    // console.log(this.state.opr);
  };

  handleOpr = c2 => {
    this.setState({ opr: c2.target.value });
    document.getElementById("opr").innerHTML = c2.target.value;
  };
  handleOpr1 = c2 => {
    this.setState({ opr: c2.target.value });
    document.getElementById("tot").innerHTML = c2.target.value;
    document.getElementById("ans").innerHTML = this.state.total;
  };

  render() {
    return (
      <div className="App">
        <h1
          style={{
            color: "green",
            fontFamily: "Psychedelic",
            fontStyle: "bold"
          }}
        >
          Fun with the weirdest Yantra of your own Mantra
        </h1>
        <form>
          <div className="cal">
            <hr />
            <label id="screen">
              <span id="one" />
              <span id="opr" />
              <span id="two" />
              <span id="tot" />
              <span id="ans" />
            </label>
            <hr />
            <br />

            <input
              type="button"
              onClick={() => this.handleClick(1)}
              className="in"
              name="1"
              value="1"
            />
            <input
              type="button"
              onClick={() => this.handleClick(2)}
              className="in"
              name="2"
              value="2"
            />
            <input
              type="button"
              onClick={() => this.handleClick(3)}
              className="in"
              name="3"
              value="3"
            />
            <input
              type="button"
              onClick={this.handleOpr}
              className="in"
              name="/"
              value="/"
            />
            <br />
            <input
              type="button"
              onClick={this.handleClick}
              className="in"
              name="4"
              value="4"
            />
            <input
              type="button"
              onClick={this.handleClick}
              className="in"
              name="5"
              value="5"
            />
            <input
              type="button"
              onClick={this.handleClick}
              className="in"
              name="6"
              value="6"
            />
            <input
              type="button"
              onClick={this.handleOpr}
              className="in"
              name="*"
              value="*"
            />
            <br />
            <input
              type="button"
              onClick={this.handleClick}
              className="in"
              name="7"
              value="7"
            />
            <input
              type="button"
              onClick={this.handleClick}
              className="in"
              name="8"
              value="8"
            />
            <input
              type="button"
              onClick={this.handleClick}
              className="in"
              name="9"
              value="9"
            />
            <input
              type="button"
              onClick={this.handleOpr}
              className="in"
              name="-"
              value="-"
            />
            <br />
            <input
              type="button"
              onClick={this.handleClick}
              className="in"
              name="x"
              value="X"
            />
            <input
              type="button"
              onClick={this.handleClick}
              className="in"
              name="0"
              value="0"
            />
            <input
              type="button"
              onClick={this.handleOpr1}
              className="in"
              name="="
              value="="
            />
            <input
              type="button"
              onClick={this.handleOpr}
              className="in"
              name="+"
              value="+"
            />
          </div>
        </form>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
