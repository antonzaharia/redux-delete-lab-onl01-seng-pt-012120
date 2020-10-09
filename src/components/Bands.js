import React, { Component } from "react";
import Band from "./Band";

export default class Bands extends Component {
  render() {
    return (
      <div>
        {this.props.bands.map((band) => {
          return (
            <div>
              <Band key={band.id} band={band} />
              <button onClick={() => this.props.delete(band.id)}>
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
