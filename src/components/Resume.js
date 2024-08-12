import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


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
            software developer associates
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Bates Technical College
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Aug 2023 – Aug 2024
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <p>
              Associates Degree in two separate tracks.
            </p>
            <li>Software Development AAS-T </li>
            <li>Business and Data Analytics AAS-T </li>

            <br/>
            <code>
              <b>Technologies:</b> JavaScript, React, Python, Java, C#, SQL, Tableau, Unity, Excel, MySQL, HTML, CSS
            </code>
          </Typography>
        </Box>


        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2023
        </Typography>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            software engineer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Kitsap Dev
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Feb 2022 – Aug 2023
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <li>
              Developed application used by 90,000+ employees at one of the nation's largest healthcare providers. Client successfully launched the finished application in the Fall of 2023, saving more than $1.4 million in costs from in-person events and allowing more than 12 times as many employees to experience the training conference.
            </li>
            <li>
              Resolved over 100 tickets and 20 high-priority tickets, reducing the estimated time to finish the product by 4 months.
            </li>
            <li>
              Developed a digital conference game interface as a replacement for large, in-person events. This created a gamified platform to promote culture change at hospitals that could reach more employees across the country.
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
            software engineer
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
              Designed and created a Full Stack social-media styled web app for over 200 students around the country to share code they've written with each other. The students were able to instantly share their code with one another.
            </li>
            <li>
              Lead a team of 5 developers to continually develop and deploy new updates based on student feedback. We were able to finish the project ahead of schedule and with customized designs based on provided feedback.
            </li>
            <li>
              Designed and styled web pages to reflect attractive and user-friendly designs. The feedback we received on the design and interface was overwhelmingly positive.
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
            video game developer
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
              Created new 3D assets for game development, resulting in an increase of video game assets by over 40%.
            </li>
            <li>
              Rapidly prototyped a moddable video game, iterating over a dozen initial designs before finalizing the best one.
            </li>
            <li>
              Employment and exceptional performance resulting in promotion to Software Engineer.
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
              <b>Core Technologies:</b> JavaScript, React, Node.js, Express.js, PostgreSQL
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

export default Resume;
