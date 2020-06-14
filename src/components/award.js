import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Award extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.awardName}</h4>
          <p>{this.props.awardDescription}</p>
          <p>{this.props.awardDescription2}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Award;