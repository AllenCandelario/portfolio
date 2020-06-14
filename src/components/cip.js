import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Cip extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.cipName}</h4>
          <p>{this.props.cipDescription}</p>
          <p>{this.props.cipDescription2}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Cip;