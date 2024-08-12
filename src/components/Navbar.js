import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import self from "../images/me.jpeg";
import Footer from "../components/Footer";
// import Backdrop from '@mui/material/Backdrop';

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <AssignmentInd />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Portfolio", listPath: "/portfolio" },
  { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },
];

const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div"  onClick={toggleDrawer(false)}>
      <Avatar className={classes.avatar} src={self} alt="Justin Foster" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav" >
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={open && classes.toolHeader}>
            <IconButton onClick={toggleDrawer(true)}>
              <ArrowBack className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={toggleDrawer(false)}
      > */}
        <Drawer open={open} anchor="left" hideBackdrop="true" onClose={toggleDrawer(false)}>
          {sideList()}
          <Footer />
        </Drawer>
      {/* </Backdrop> */}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "#222",
    margin: 0,
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "tan",
  },
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
  toolHeader: {
    display: 'flex',
    justifyContent: 'left',
    marginLeft: '250px',
    transition: 'margin .5s',
  }
}));

export default Navbar;
