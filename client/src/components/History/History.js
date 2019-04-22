import React, { Component } from "react";

class History extends Component {
  render() {
    const { showHistory, history, clearHistory } = this.props;
    return (
      <div>
        <h3>Search History</h3>
        {showHistory}
        {clearHistory}
        {history.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    );
  }
}

export default History;
