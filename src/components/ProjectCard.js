import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 500,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function ProjectCard({title, content, expand, technologies, image, projectLink, deployLink}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className= "elem-border project">
      <CardMedia
        className={classes.media}
        image= {image}
        title={title}
      />
      <div className="hello">
      <CardContent > 
      <h2>{title}</h2>
        <p>{content}</p>
      </CardContent>
      <CardActions disableSpacing>
        <div
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <p>{expand}</p>
            <br/>
            <p>Tech stack: {technologies}</p>
            <div className="projectLinks">
              <div className="gitProject">
                    <GitHubIcon />
                     <a href={projectLink} target="_blank" rel="noreferrer">View project on GitHub</a>
                </div>
                {deployLink ? 
                <div className="webProject">
                <WebIcon />
                 <a href={deployLink} target="_blank" rel="noreferrer">See deployment</a>
              </div> : null
              }
                
                </div>
        </CardContent>
      </Collapse>
      </div>
    </Card>
  );
}
