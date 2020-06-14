import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/inclusiveness-vivid-vol-1/256/Staff-male-512.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Aspiring Software Engineer</h1>

            <hr/>

          <p>Python | Tableau | Microsoft Office | React | Basic JavaScript | Basic Matlab |</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://sg.linkedin.com/in/allen-candelario-a37273168" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/AllenCandelario" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Instagram */}
          <a href="https://www.facebook.com/ChrisdaleAllen" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

          {/* Facebook */}
          <a href="https://www.instagram.com/chrisdaleallen/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;