import React, { Component } from "react";
import axios from "axios";

export class Fibs extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: ""
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get("/api/values/current");
    console.log("values:");
    console.log(JSON.stringify(values.data));
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get("/api/values/all");
    this.setState({ seenIndexes: seenIndexes.data });
  }

  renderSeenIndexes() {
    if (this.state.seenIndexes)
      return this.state.seenIndexes.map(({ number }) => number).join(", ");
    return null;
  }

  renderValues() {
    const entries = [];
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[{ key }]}
        </div>
      );
    }
    return entries;
  }

  onSubmit = async event => {
    event.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index
    });
    this.setState({ index: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Enter index</label>
          <input
            value={this.state.index ? this.state.index : ""}
            onChange={event => this.setState({ index: event.target.value })}
          />
          <button type="submit">submit</button>
        </form>
        <h3>Indexes seen:</h3>
        {this.renderSeenIndexes()}
        <h3>Calculated values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fibs;
