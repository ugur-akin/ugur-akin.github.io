import React from 'react';
import avatar from './avatar.jpg';
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom';

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#041D25',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  home: {
    color: '#FFD470',
  },
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    color: 'white',
    backgroundColor: '#EF436B',
    width: '100%',
    padding: {
      top: '1rem',
      left: '2rem',
      right: '2rem',
      bottom: '1rem',
    },
  },
  navItems: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    '& > *': {
      margin: {
        left: '0.5rem',
        right: '0.5rem',
      },
    },
  },
  footer: {
    height: 50,
    backgroundColor: 'coral',
  },
});

const Layout = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <Link id="home" to="/home" className={classes.home}>
          {/* <img src={avatar} className={classes.avatar} alt="Avatar"></img> */}
          UGUR AKIN
        </Link>
        <div id="nav-items" className={classes.navItems}>
          <div>About</div>
          <div>Projects</div>
          <div>Blog</div>
        </div>
        <div>Contact Links</div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
