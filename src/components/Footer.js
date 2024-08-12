import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


function openInNewTab(url) {
  const win = window.open(url, '_blank');
  if (win != null) {
    win.focus();
  }
}

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedInIcon />} value="LinkedIn" className={classes.root} href='https://www.linkedin.com/in/justin-foster-7a540356/' />
      <BottomNavigationAction icon={<GitHubIcon />} value='GitHub' className={classes.root} href="https://github.com/justin-foster-91"/>
    </BottomNavigation>
  );
};

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

export default Footer;
