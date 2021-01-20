import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {createUseStyles} from 'react-jss';
import CustomLink from '../components/CustomLink';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    '& h1': {
      textAlign: 'center',
    },
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: '50%',
    objectFit: 'cover',
    verticalAlign: 'middle',
  },
  link: {
    fontSize: '90%',
    border: {
      style: 'solid',
      thickness: 2,
      color: 'white',
    },
    padding: '1rem',
    borderRadius: '0.2rem',
    // transition: 'transform 0.5s, background-color 0.5s',
    transition: [
      ['transform', '0.5s'],
      ['backgroundColor', '0.5s'],
    ],
    '&:hover': {
      transform: 'scale(1.05, 1.05)',
      backgroundColor: 'white',
      color: '#041D25',
    },
  },
  rightArrow: {
    margin: {
      left: '1.5rem',
    },
  },
  name: {
    color: '#FFD470',
  },
  react: {
    color: '#57C9EF',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <section className={classes.header}>
      <h1>
        Hello, I'm <span className={classes.name}> Ugur Akin</span>.
        <br />
        I'm a full-stack <span className={classes.react}>ReactJS</span>{' '}
        developer.
      </h1>
      <CustomLink to="/projects" className={classes.link}>
        View my work{' '}
        <FontAwesomeIcon
          icon={faLongArrowAltRight}
          className={classes.rightArrow}
          size="2x"
        />
      </CustomLink>
    </section>
  );
};

export default Home;
