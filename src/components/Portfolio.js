import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logbookImage from "../images/Logbook.png";
import repetitionImage from "../images/Spaced_Repetition.jpg";
import goatImage from "../images/GOAT.png";
import codeSpellsUnrealImage from "../images/CodeSpells.png";
import codeSharingImage from "../images/CodeSharingApp.PNG";
import Starfinder_Demo from "../images/Starfinder_Demo.PNG";
import RailShooter from "../images/RailShooter.png";


const projects = [
  {
    name: "Rail Shooter Game",
    description: 'This is a demo game with a single level. The player is on an animation track with horizontal and vertical movement controls but no input on speed or direction. The objective is to shoot down as many alien ships as possible during the level to increase your score.',
    technologies: 'Unity, C#',
    image: RailShooter,
    demo: 'https://www.youtube.com/watch?v=FPyWH6qF3Ug',
    clientRepo: 'https://github.com/justin-foster-91/Argon_Assault',
    serverRepo: '',
    date: '',
    internal: false,
  },
  {
    name: "Starfinder Ship Builder",
    description: 'This is a revision of the Starfinder Logbook app I made when I was first learning to code. It allows users to create spaceships based on the rules of the game system and customize the various ship parts. It is still in progress but has a drastically cleaner UI and much more functionality.',
    technologies: 'JavaScript, React, HTML, CSS',
    image: Starfinder_Demo,
    demo: '',
    clientRepo: 'https://github.com/justin-foster-91/Logbook_Client_v2',
    serverRepo: '',
    date: '',
    internal: false,
  },
  {
    name: "Code Sharing App",
    description: `Developing a web app that allows users to code “spells” which can be used both within the associated CodeSpells games, but also called within Twitch chat to affect the game being hosted live. This web app stores all spells and enables users to share spells with one another while also displaying spells recently created or modified by other users.`,
    technologies: 'React, Node.js, PostgresSQL, JavaScript, Docker, Express',
    image: codeSharingImage,
    demo: '',
    clientRepo: 'https://github.com/justin-foster-91/code_sharing',
    serverRepo: '',
    date: '',
    internal: false,
  },
  {
    name: "CodeSpells Internship",
    description: `This was an internship at a startup that turned into a full-time position. I assisted with the development of an educational video game by creating new Unreal assets on my own GitHub profile that are being integrated into the official game.`,
    technologies: 'Lisp, Unreal Engine',
    image: codeSpellsUnrealImage,
    demo: '',
    clientRepo: 'https://github.com/justin-foster-91/cabin-items',
    serverRepo: '',
    date: 'December - January, 2020',
    internal: false,
  },
  {
    name: "GOAT Goal Tracker",
    description: `GOAT allows you to create, track, and share your personal and professional goals! The goal creation process allows the user to create goals on their own time frame tailored to their needs. The user can add new goals, update existing goals, and archive goals that don't suit them anymore. Users can also give goals a personal point value. Making progress on a goal earns the user points for redemption in our GOAT store. Users can share mutual goals for friendly competition or keep their goals private behind our secure server.`,
    technologies: 'React, Node.js, PostgresSQL, JavaScript, JWT',
    image: goatImage,
    demo: '',
    clientRepo: 'https://github.com/thinkful-ei-quail/goat-client.git',
    serverRepo: 'https://github.com/thinkful-ei-quail/goat-api',
    date: 'October, 2020',
    internal: false,
  },
  {
    name: "Spaced Repetition",
    description: `This is a language learning app based on spaced repetition using data structures to increase the frequency of words that the user has gotten wrong and to decrease the frequency of correct words.`,
    technologies: 'React, Node.js, PostgresSQL, JavaScript, JWT',
    image: repetitionImage,
    demo: '',
    clientRepo: 'https://github.com/thinkful-ei-quail/SR-Client-Sonali-Justin.git',
    serverRepo: 'https://github.com/thinkful-ei-quail/SR-server-SonaliN-JustinF.git',
    date: 'August, 2020',
    internal: false,
  },
  {
    name: "Starfinder Logbook",
    description: `This is an aid for the tabletop role-playing game, Starfinder. 
    It allows users to create spaceships based on the rules of the game system and customize the various ship parts. 
    The system supports individual logins. `,
    technologies: 'React, Node.js, PostgresSQL, JavaScript, JWT',
    image: logbookImage,
    demo: '',
    clientRepo: 'https://github.com/justin-foster-91/Logbook_Client',
    serverRepo: 'https://github.com/justin-foster-91/Logbook_Server',
    date: 'June, 2020',
    internal: false,
  },
];

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                  <br/>
                  <Typography variant="body2" color="textSecondary">
                    <b>Technologies:</b> {project.technologies}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.links}>
                {project.demo 
                &&  <Button size="small" color="primary" href={`${project.demo}`}>
                    Demo
                    </Button>
                }

                {project.internal 
                ? <Button size="small" color="primary" href={`${project.link}`} target="_blank">
                    Demo
                  </Button>
                : <Button size="small" color="primary" href={`${project.clientRepo}`} target="_blank">
                    {project.serverRepo 
                      ? 'Client Repo' 
                      : 'Repo'}
                  </Button>
                }


                {project.serverRepo 
                &&  <Button size="small" color="primary" href={`${project.serverRepo}`} target="_blank">
                      Server Repo
                    </Button>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    background: 'rgb(178,190,181)',
  },
  links: {
    justifyContent: "center",
  }
}));

export default Portfolio;
