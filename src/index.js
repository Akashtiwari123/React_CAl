import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      opr: 0,
      cal: ""
    };
  }
  handleClick = event => {
    if (this.state.total >= 0 && this.state.opr === 0) {
      this.state.total = this.state.total.toString() + event;

      this.state.cal = this.state.cal + event;
      document.getElementById("calc").innerHTML = this.state.cal;
      console.log(this.state.total);
    } else if (this.state.opr === "+") {
      //Setting up calc
      this.state.cal = this.state.cal + event;
      console.log(this.state.total);
      document.getElementById("calc").innerHTML = this.state.cal;
      //Calculating total
      this.state.total = this.state.total + event;
      this.setState({ opr: 0 });
    } else if (this.state.opr === "-") {
      //Setting up calc
      this.state.cal = this.state.cal + event;
      document.getElementById("calc").innerHTML = this.state.cal;
      //Calculating total
      this.state.total = this.state.total - event;
      this.setState({ opr: 0 });
    } else if (this.state.opr === "*") {
      //Setting up calc
      this.state.cal = this.state.cal + event;
      document.getElementById("calc").innerHTML = this.state.cal;
      //Calculating total
      this.state.total = this.state.total * event;
      this.setState({ opr: 0 });
    } else if (this.state.opr === "/") {
      //Setting up calc
      this.state.cal = this.state.cal + event;
      document.getElementById("calc").innerHTML = this.state.cal;
      //Calculating total
      this.state.total = this.state.total / event;
      this.setState({ opr: 0 });
    } else if (event.target.name === "x") {
      this.state.cal = "";
      document.getElementById("calc").innerHTML = "";
      //Calculating total
      this.state.total = 0;
      this.setState({ opr: 0 });
    } else {
      document.getElementById("calc").innerHTML = this.state.cal;
      console.log(this.state.total);
    }
    //console.log(this.state.total);
  };

  handleOpr = c2 => {
    this.setState({ opr: c2.target.value });
    this.state.cal = this.state.cal + c2.target.value;
    document.getElementById("calc").innerHTML = this.state.cal;
  };
  handleOpr1 = c2 => {
    this.setState({ opr: c2.target.value });
    this.state.cal = this.state.cal + c2.target.value;

    this.state.cal = this.state.cal + this.state.total;
    document.getElementById("calc").innerHTML = this.state.cal;
    console.log(this.state.cal);
  };

  render() {
    return (
      <div className="App">
        <h1 className="he"> Funny isn't it :-)</h1>
        <div id="screen">
          <span id="calc" />
        </div>

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
          onClick={() => this.handleClick(4)}
          className="in"
          name="4"
          value="4"
        />
        <input
          type="button"
          onClick={() => this.handleClick(5)}
          className="in"
          name="5"
          value="5"
        />
        <input
          type="button"
          onClick={() => this.handleClick(6)}
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
          onClick={() => this.handleClick(7)}
          className="in"
          name="7"
          value="7"
        />
        <input
          type="button"
          onClick={() => this.handleClick(8)}
          className="in"
          name="8"
          value="8"
        />
        <input
          type="button"
          onClick={() => this.handleClick(9)}
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
          onClick={() => this.handleClick(0)}
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
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
