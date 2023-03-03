import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Present
        </Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            full stack developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Kitsap Dev
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Feb 2022 – Present
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <li>
              Worked on an application rolled out to 90,000+ employees at one of the nation's largest healthcare providers.
            </li>
            <li>
              Developed a digital conference game interface as replacement for large, in-person events.
            </li>
            <li>
              Produced a gamified platform to promote culture change at hospitals.
            </li>
            <br/>
            <code>
              <b>Tech Stack:</b> JavaScript, React, Node.js, Express.js, Unity3D, C#, MySQL
            </code>
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            junior full stack developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Thought STEM
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Jan 2021 – Feb 2022
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <li>
              Managed the complete application development process from conception to deployment.
            </li>
            <li>
              Independently created the full-stack web app and set up the environment for later modifications.
            </li>
            <br/>
            <code>
              <b>Tech Stack:</b> JavaScript, React, Node.js, Express.js, PostgreSQL, Docker
            </code>
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            game development internship
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Thought STEM
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Nov 2020 – Jan 2021
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <li>
              Created new 3D assets for game development.
            </li>
            <li>
              Rapidly prototyped a moddable video game.
            </li>
            <br/>
            <code>
              <b>Tech Stack:</b> JavaScript, React, Node.js, Express.js, PostgreSQL, Unreal Engine
            </code>
          </Typography>
        </Box>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Training: Full Stack Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Thinkful
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            June 2020 – Nov 2020
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <p>
              A crash course bootcamp to train participants on best practices in the industry and prepare them for full stack development using a wide range of technologies.
            </p>

            <code>
              <b>Tech Stack:</b> JavaScript, React, Node.js, Express.js, PostgreSQL
            </code>
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>

      </Box>
    </Box>
  );
};

export default Resume;
