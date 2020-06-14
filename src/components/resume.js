import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Cip from './cip';
import Award from './award'

import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/inclusiveness-vivid-vol-1/256/Staff-male-512.png"
                alt="avatar"
                style={{height: '300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Chrisdale Allen Lau Candelario</h2>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Physics graduate with a keen interest in pursuing a career as a Software Engineer. Sound problem solving and analytical skills from research experience in laboratories. A team player with strong communication and interpersonal skills. Able to excel in a fast-paced environment, with strengths in time management.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Blk 895C Woodlands Dr 50 #05-52 Singapore 732895</p>
            <h5>Phone</h5>
            <p>+65 97538294</p>
            <h5>Email</h5>
            <p>chrisallen1394@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            
            <h2>Education</h2>

            <Education
              startYear={"Jan " + 2015}
              endYear={"Dec " + 2019}
              schoolName="National University of Singapore"
              schoolDescription="Bachelor of Science (Physics)"
               />

              <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Work Experience</h2>

            <Experience
              startYear={"Jul " + 2017}
              endYear={"Aug " + 2017}
              jobName="Amazon Prime Warehouse Shopper"
              jobDescription="Shopped for customers’ Amazon Prime orders within a given time limit."
              />

            <Experience
              startYear={"Jun " + 2015}
              endYear={"Sep " + 2015}
              jobName="Certis Cisco Security Personnel"
              jobDescription="Underwent training to be a certified part-time security personnel."
              jobDescription2="Provided services such as security screening and ushering during the 2015 Southeast Asian Games and the 2015 Formula 1 Singapore Grand Prix."
              />

            <Experience
              startYear={"Apr " + 2015}
              endYear={"May " + 2015}
              jobName="Bright Manpower Employment Temp Admin"
              jobDescription="Converted entire company’s hard-copy documents into a database in Excel. Utilized Excel’s functions and formulas to speed up this conversion."
              />

            <Experience
              startYear={"Feb " + 2015}
              endYear={"Mar " + 2015}
              jobName="NCS Temp Support"
              jobDescription="Set up new laptops and installed software for clients with no issues and complaints of lost data."
              jobDescription2="Wiped out data in old PCs."
              />
              
            <Experience
              startYear={"Jan " + 2013}
              endYear={"Jan " + 2015}
              jobName="National Service"
              jobDescription="Assisted in the planning and executing of the SAF Presidential Garden Reception 2014 and the Transport Workplan Seminar 2013/2014. Managed the registration of attendees, discussed seating plans with senior officers, and directing ushers to ensure a smoother flow of human traffic."
              jobDescription2="Administrative duties as an Admin Supervisor in Transport Command HQ."
              />

              <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Co-Curricular / Community Involvement Activities</h2>

            <Cip
              startYear={"Sep " + 2019}
              cipName="Nielsen Case Competition 2019"
              cipDescription="Participant; worked with a team to study data and documents from a case story and presented our analysis after."
              />

            <Cip
              startYear={"Feb " + 2019}
              endYear = {" - May " + 2019}
              cipName="Volunteer for YMCA"
              cipDescription="Worked with YMCA volunteers and Association for Persons with Special Needs’
              trainees to bake and distribute food to the elderly."
              />

            <Cip
              startYear={"Jun " + 2017}
              endYear = {" - Present"}
              cipName="Basic Photography"
              cipDescription="Casual landscape photography."
              cipDescription2="Basic experience in editing software Adobe Lightroom."
              />
            
            <Cip
              startYear={"Nov " + 2011}
              cipName="Citizens' Consultative Committee Family Learning Project"
              cipDescription="Organized interactive and educational activities for children, with wet weather
              plans and safety plans in place. Activities went smoothly with positive feedback
              from parents."
              />

              <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Achievements/Awards</h2>

            <Award
              startYear={2019}
              awardName="Hackwagon Academy: Introduction to Python Programming "
              awardDescription="Distinction"
              />
            
            <Award
              startYear={2014}
              awardName="Transport Formation Sergeant Major Coin"
              />

            <Award
              startYear={2011}
              awardName="National Youth Achievement Award"
              awardDescription="Silver"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />

            <h2>Skills</h2>
              <Skills
                skill="Python"
                progress={60}
                />
              <Skills
                skill="JavaScript"
                progress={20}
                />
              <Skills
                skill="Matlab"
                progress={20}
                />
              <Skills
                skill="Tableau"
                progress={40}
              />
              <Skills
                skill="React"
                progress={20}
              />
              <Skills
                skill="Word, PPT, Excel"
                progress={80}
              />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;