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
    '& > section > p': {
      marginTop: 0,
      boxSizing: 'border-box',
      paddingLeft: '2rem',
      fontSize: '80%',
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
          <p>
            <b>Major:</b> Computing Science <br />
            <b>Minor:</b> Mathematics
          </p>
        </section>
        <section>
          <h4>Why Programming?</h4>
          <p>
            I started programming when I was 16. A friend who was experienced in
            programming showed me the fundamentals of{' '}
            <code>Visual Basic 6</code> and we went over how to make form
            applications. I loved it so much that I spent most of my summer
            staying inside and programming ridiculous and barely-functioning
            apps such as calculators and stopwatches.{' '}
          </p>
          {/** TODO(Ugur): Emoticon for smiley. */}
          <p>
            But the first program I was proud of making, was a game. It looked
            really silly, but it was kind of fun! I made everyone in my family
            play it, and they were both impressed and mildly annoyed :). It
            looked like this:
          </p>
          {/* <TrainGame /> */}
          <p>
            I placed several <code>TextBox</code> form controls back-to-back and
            filled one with <code>'|'</code> characters. When players hit{' '}
            <code>Start</code>, the <code>'|'</code> characters would start
            moving from one <code>TextBox</code> to another and that was
            supposed to simulate a moving train. The goal was to stop the train
            by the marker placed under one of the middle{' '}
            <code>TextBox Control</code>.
          </p>
          {/** TODO(Ugur): Link to periodic table. */}
          <p>
            I was always drawn to programming &mdash; thanks Hollywood for all
            the "Hacker" portrayals. But after that summer, I finally understood
            what programming really was and I liked it now, more than before. I
            continued to study programming on my own throughout high-school.
            Eventually made a periodic table app for one of my year projects, it
            was inspired by this website.
          </p>
          {/**TODO(Ugur): Links to websites, books, etc. */}
          <p>
            To this day, I continue to study programming with the same passion
            and eagerness. After graduating, I learned ReactJS from scratch (and
            still learning) with Pluralsight courses and individual projects, I
            often hop onto <code>LeetCode</code>, solve some coding problems,
            learn about new algorithms or new ways to use common
            data-structures, I read about UI/UX on the web, I especially read
            articles on CSS-Tricks to broaden my perspective and understanding
            of design and styling, I'm a big fan of modern <code>c++</code> so
            I've been reading Scott Meyers' renowned Effective Modern
            C++&hellip;
          </p>
          <p>
            Within this field, there is always something more to learn; whether
            it is a new technology or a detail about an existing one. And while
            I don't think it's necessary (or possible) to know everything, I
            think it's the number one sign of a passionate programmer to keep up
            with the changes and updating one's stale methods and knowledge.
          </p>
        </section>
        {/* <section>
          <h4>Philosophies</h4>
        </section> */}
        {/* <section>
          <h4>Fields of Interest</h4>
        </section> */}
        <section>
          <h4>Hobbies</h4>
          <p>
            My hobbies are a big part of who I am; I believe having hobbies is
            important because they often come with useful transferable skills. I
            love playing sports – exercising not only helps keeping healthy, but
            I find also increases productivity throughout the day. I played
            several different branches like soccer and swimming, but I pursued
            tennis especially my whole life. I played competitively as a kid and
            in college, and I continue to play regularly.{' '}
          </p>
          <p>
            Furthermore, I’m passionate about music; just listening to it,
            discovering new songs, or even producing here and there. I love
            playing instruments as well – I want to master more instruments one
            day but currently, I play the piano and practice regularly with an
            instructor.
          </p>
          <p>
            Apart from that, you can often find me solving coding challenges,
            studying French, playing chess or video games, and occasionally
            reading books in my free time.
          </p>
        </section>
      </article>
    </section>
  );
};

export default About;
