import React from 'react';
// import avatar from './avatar.jpg';
import {createUseStyles} from 'react-jss';
import ContactLinks from '../components/ContactLinks';
import CustomLink from '../components/CustomLink';
import FancyNav from '../components/FancyNav';

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
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    color: 'white',
    backgroundColor: '#F58EA6',
    width: '100%',
    padding: {
      top: '1rem',
      left: '2rem',
      right: '2rem',
      bottom: '1rem',
    },
  },
  title: {
    fontSize: '1.5rem',
  },
  footer: {
    height: 50,
    backgroundColor: 'coral',
  },
});

const Layout = ({children}) => {
  const classes = useStyles();
  console.log(classes);
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <CustomLink id="title" to="/home" className={classes.title}>
          UGUR AKIN
        </CustomLink>
        <FancyNav />
        <ContactLinks />
      </header>
      {children}
    </div>
  );
};

export default Layout;
