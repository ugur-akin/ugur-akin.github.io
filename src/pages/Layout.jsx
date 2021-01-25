import React from 'react';
// import avatar from './avatar.jpg';
import {createUseStyles} from 'react-jss';
import ContactLinks from '../components/ContactLinks';
import CustomLink from '../components/CustomLink';
import FancyNav from '../components/FancyNav';

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#041D25',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  header: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    color: 'white',
    backgroundColor: '#F58EA6',
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
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    flexBasis: '100%',
    overflow: 'hidden',
  },
});

const Layout = ({children}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <CustomLink id="title" to="/home" className={classes.title}>
          UGUR AKIN
        </CustomLink>
        <FancyNav />
        <ContactLinks />
      </header>
      <div className={classes.contentContainer}>{children}</div>
    </div>
  );
};

export default Layout;
