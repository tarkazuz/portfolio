import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import CodeIcon from '@material-ui/icons/Code';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  myOwn: {
      fontFamily: "orbitronlight"
  }
}));

export default function MyTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate" style={useStyles.myOwn}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <CastForEducationIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeRight">
            <h3>
              Education
            </h3>
            <p>I have studied Sociology and German at University of Glasgow where I developed my interest in digital literacy, graduating with a dissertation on the topic of gender digital divide.</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeLeft">
            <h3>
              Work Experience
            </h3>
            <p>I was a Media Planner in a Costumer Data Science company. Working on delivering the best product to the clients I have collaborated with Technical Mangers, Designers, Developers and UX.</p>
            <br/>
            <p>In this role I have learnt the importance of technology in providing innovative, scalable solutions for business, and becoming excited about its great potential, gained confidence to pursue my interest in web development. 
            </p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent className="timeRight">
            <h3>Web Development</h3>
            <p>Deciding to focus on my passion for Web Development I started to learn on my own using online ressources. I have gained solid basics with Harvard's CS50 Introduction to Computer Science and University of Michigan Specialization for Web Development .</p>
            <br/>
            <p>Wanting to learn more, I entered a 6-month bootcamp program, where I learnt about React and had a chance to put my skills to test developing a Covid-19 restrictions dashboard application as a final group project.</p>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <AssistantPhotoIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent className="timeLeft">
            <h3>Future Plans</h3>
            <p>Now I am here.<p>
              </p> Excited to get involved in new projects, develop my skill set further and grow as a Frontend Web Developer!</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}