import React from 'react';
import {createUseStyles} from 'react-jss';
import CustomLink from './CustomLink';

const useStyles = createUseStyles({
  navItems: {
    flexGrow: 1,
    fontSize: '0.8rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
});

const FancyNav = () => {
  const classes = useStyles();

  return (
    <nav id="nav-items" className={classes.navItems}>
      <span id="active-bar" />
      <CustomLink to="/home" navLink>
        Home
      </CustomLink>
      <CustomLink to="/about" navLink>
        About
      </CustomLink>
      <CustomLink to="/projects" navLink>
        Projects
      </CustomLink>
      <CustomLink to="/blog" navLink>
        Blog
      </CustomLink>
    </nav>
  );
};

export default FancyNav;
