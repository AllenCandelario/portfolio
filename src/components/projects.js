import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Pdf from './Sample School Work.pdf'


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#0B0000', height: '250px', background: 'url(https://teamblindstatics.s3.ap-northeast-1.amazonaws.com/img/companyPage/logo_b86c5a03.png) center / cover'}} >HackerRank</CardTitle>
            <CardText>
              To practice coding
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://www.hackerrank.com/AllenCandelario?hr_r=1" rel="noopener noreferrer" target="_blank">HackerRank Profile</a>
              </Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#0B0000', height: '250px', background: 'url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/100742775/original/520182975cffab4671bf53f137b124059d3bc71d/program-a-basic-python-program-with-tkinter-gui.png) center / cover'}} >Tkinter</CardTitle>
            <CardText>
              Created basic apps with Tkinter
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/AllenCandelario/Python-Tkinter/blob/master/Basic%20Calculator" rel="noopener noreferrer" target="_blank">Calculator</a>
              </Button>
              <Button colored>
              <a href="https://github.com/AllenCandelario/Python-Tkinter/blob/master/Basic%20Pong%20Game" rel="noopener noreferrer" target="_blank">Pong</a>
              </Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#0B0000', height: '280px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxrIFBQmjBJh6hVV28MtDdUh8gD8IWXn0qoobJGfzZ48v9dF2G&usqp=CAU) center / cover'}} >Data Manipulation</CardTitle>
            <CardText>
              Experimented with data manipulation tools such as Pandas, Openpyxl, XlsxWriter
            </CardText>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#0B0000', height: '250px', background: 'url(https://libraries.ou.edu/sites/default/files/styles/300_x_200_focus/public/Tableau%20Logo.png?itok=qmJmBAYr) center / cover'}} >Tableau</CardTitle>
            <CardText>
              Experimented with Data Visualisations
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://public.tableau.com/profile/chrisdaleallen#!/" rel="noopener noreferrer" target="_blank">Tableau Profile</a>
              </Button>
            </CardActions>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#0B0000', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >React</CardTitle>
            <CardText>
              Used ReactJS to create this portfolio
            </CardText>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#0B0000', height: '250px', background: 'url(https://cdn4.vectorstock.com/i/1000x1000/35/68/homework-icon-simple-element-from-school-icons-vector-27723568.jpg) center / cover'}} >School Work</CardTitle>
            <CardText>
              Some sample school work
            </CardText>
            <CardActions border>
              <Button colored>
                <a href= {Pdf} target = "_blank">Download Sample School Work</a>
              </Button>
            </CardActions>
          </Card>

        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Python</Tab>
          <Tab>Tableau</Tab>
          <Tab>React</Tab>
          <Tab>School Work</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;