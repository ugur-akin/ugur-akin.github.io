import React from 'react';
import {createUseStyles} from 'react-jss';
import avatarImg from '../avatar.jpg';
const useStyles = createUseStyles({
  root: {
    flexBasis: '100%',

    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    height: '100%',
    boxSizing: 'border-box',
    paddingTop: '5%',
  },
  appendix: {
    flex: 1,
    boxSizing: 'border-box',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  article: {
    flex: 2,
    boxSizing: 'border-box',
    paddingRight: '10%',
    paddingLeft: '2rem',
    // Scrollable but hidden scrollbars:
    overflowX: 'hidden',
    overflowY: 'scroll',
    scrollbarWidth: 'none' /* Firefox */,
    '-ms-overflow-style': 'none' /* Internet Explorer 10+ */,
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0,
    },
  },
  avatarContainer: {
    display: 'inline-block',
    position: 'relative',
    width: '50%',
    // To set equal height to dynamic width:
    '&::before': {
      content: '""',
      display: 'block',
      marginTop: '100%',
    },
  },
  avatar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',

    objectFit: 'cover',
    objectPosition: '50% 0%',
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <aside className={classes.appendix}>
        <div className={classes.avatarContainer}>
          <img
            className={classes.avatar}
            src={avatarImg}
            alt="Ugur Akin's Avatar"
          />
        </div>
        <h5>Appendix</h5>
      </aside>
      <article className={classes.article}>
        <header>
          <h2>About Me</h2>
          <p>
            I’m a passionate Software Engineer with a good grasp of web
            technologies on top of a strong education in CS and a long history
            of programming. I’m keen on building dynamic and user-friendly
            solutions in the form of Web Apps, PWAs and Native Apps; and
            designing performant, scalable and easy-to-use APIs to support my
            solutions.
          </p>
        </header>
        <section>
          <h3>Technical Skills</h3>
          <p>
            <b>Programming Languages: </b> JavaScript (ES6/TS), C++, Python,
            Java.
            <br />
            <b>Frontend Tech: </b>HTML/CSS, React.js w/Hooks and Context, Redux,
            Material-UI, Jest, Bootstrap. <br />
            <b>Backend Tech:</b> Node.js, Express, Mongoose, MongoDB, SQL.{' '}
            <br />
            <b>Data Science </b>&amp; Analysis: Numpy, Pandas, Spark,
            Scikit-Learn, Jupyter, MATLAB.
            <br />
            <b>General:</b> Git, VS/VS Code, Chrome Dev Tools, ESLint/Prettier,
            Webpack, CMake, WSL, Linux Ubuntu.
            <br />
          </p>
        </section>
        <section>
          <h3>Education</h3>
          <p>
            <b>Simon Fraser University</b>, B. Sc.
            <span style={{float: 'right', fontSize: '80%'}}>
              Aug 2014 - Feb 2020
            </span>{' '}
          </p>
          <p
            style={{
              marginTop: 0,
              boxSizing: 'border-box',
              paddingLeft: '2rem',
              fontSize: '80%',
            }}
          >
            <b>Major:</b> Computing Science <br />
            <b>Minor:</b> Mathematics
          </p>
        </section>
        <section>
          <h4>Programming History</h4>
        </section>
        <section>
          <h4>Philosophies</h4>
        </section>
        <section>
          <h4>Fields of Interest</h4>
        </section>
        <section>
          <h4>Hobbies</h4>
        </section>
      </article>
    </section>
  );
};

export default About;
