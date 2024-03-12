import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import profileimg from "../../Assets/muz.jpg";
import logo from "../../Assets/download.png";
import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  const classes = useStyle();
  return (
    <Box className={classes.main}>
      <Box>
        <img className={classes.logo} src={logo} alt="logo" />
      </Box>
      <Box className={classes.links}>
        <Typography component={Link} to="/" className={classes.typographies}>
          Home
        </Typography>
        <Typography
          component={Link}
          to="/about"
          className={classes.typographies}
        >
          About
        </Typography>
        <Typography
          component={Link}
          to="/contact"
          className={classes.typographies}
        >
          Contacts
        </Typography>
        <Typography
          component={Link}
          to="/profile"
          className={classes.typographies}
        >
          Profile
        </Typography>
      </Box>
      <Box component={Link} to="./profile" className={classes.avatar}>
        <img className={classes.profileimg} src={profileimg} alt="profileimg" />
      </Box>
    </Box>
  );
};

export default Heading;

const useStyle = makeStyles(() => ({
  main: {
    padding: "10px 50px",
    display: "flex",

    background: "linear-gradient(8deg, #000000, #131a0e5c, #010006)",
    alignItems: "center",
    justifyContent: "space-between !important",
  },
  heading: {
    color: "red !important",
  },
  logo: {
    width: "50px",
    height: "40px",
  },
  profileimg: {
    objectFit: "contain",
    height: "100%",
    width: "100%",
    borderRadius: "50px",
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    border: "2px dotted red",
    "&:hover": {
      border: "2px solid green !important",
    },
    height: "40px",
    borderRadius: "50px",
  },
  links: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "650px",
  },
  typographies: {
    width: "100%",
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    "&:hover": { color: "black", fontWeight: 800 },
  },
}));
