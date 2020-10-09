import React, { Component } from "react";
import BandInput from "./BandInput";
import Bands from "./Bands";

import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          <Bands bands={this.props.bands} delete={this.props.deleteBand}/>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });

const mapDispatchToProps = (dispatch) => ({
  addBand: (name) => dispatch({ type: "ADD_BAND", name }),
  deleteBand: (bandId) => dispatch({ type: "DELETE_BAND", id: bandId }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
