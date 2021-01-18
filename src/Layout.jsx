import React from 'react';
import avatar from './avatar.jpg';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  nav: {
    position: 'absolute',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    color: 'white',
    backgroundColor: 'brown',
    width: '100%',
    padding: '1rem',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: '50%',
    objectFit: 'cover',
    verticalAlign: 'middle',
  },
  name: {
    color: 'cornflowerblue',
  },
  react: {
    color: 'rgb(97, 218, 251)',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
  },
  footer: {
    height: 50,
    backgroundColor: 'coral',
  },
});

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <div>
          {/* <img src={avatar} className={classes.avatar} alt="Avatar"></img> */}
          UGUR AKIN
        </div>
        <div>
          <span>About</span>
          <span>Projects</span>
          <span>Blog</span>
        </div>
        <div>Contact Links</div>
      </nav>
      <section className={classes.header}>
        <h2>
          Hello, I'm <span className={classes.name}> Ugur Akin</span>.
        </h2>
        <h1>
          I'm a full-stack <span className={classes.react}>ReactJS</span>{' '}
          developer.
        </h1>
        <p>View my work</p>
      </section>
    </div>
  );
};

export default Layout;
