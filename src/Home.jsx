import React from 'react';
import {createUseStyles} from 'react-jss';
import {Link} from 'react-router-dom/cjs/react-router-dom.min';
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
    border: {
      style: 'solid',
      thickness: 2,
      color: 'white',
    },
    boxSizing: 'borderBox',
    padding: '1rem',
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
      <Link to="/projects" className={classes.link}>
        View my work
      </Link>
    </section>
  );
};

export default Home;
