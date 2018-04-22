import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <form id="chat">
          <input id="message" type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
