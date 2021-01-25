import React from 'react';
import {createUseStyles} from 'react-jss';
import avatarImg from '../avatar.jpg';
const useStyles = createUseStyles({
  root: {
    alignSelf: 'flex-start',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    height: '100%',
    paddingTop: '5%',
  },
  appendix: {
    flex: 1,
    boxSizing: 'border-box',
    textAlign: 'center',
    position: 'sticky',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  article: {
    flex: 2,
    boxSizing: 'border-box',
    paddingRight: '10%',
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
          {/* <img src="" /> */}
          <h4>About Me</h4>
        </header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          augue sit amet dui posuere hendrerit. Suspendisse sit amet auctor
          metus, sit amet ultricies ipsum. Fusce lectus ligula, accumsan vel
          bibendum id, fringilla at est. Nunc congue, turpis vitae blandit
          tempus, augue libero ultrices metus, at blandit felis lorem vel
          turpis. Quisque pulvinar risus eget placerat congue. Nulla et ex dui.
          Duis non ultrices neque, at vehicula metus. Maecenas neque elit,
          viverra sit amet magna quis, pretium tristique ipsum. Nullam pretium
          tempor quam, eu faucibus ex tincidunt quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          augue sit amet dui posuere hendrerit. Suspendisse sit amet auctor
          metus, sit amet ultricies ipsum. Fusce lectus ligula, accumsan vel
          bibendum id, fringilla at est. Nunc congue, turpis vitae blandit
          tempus, augue libero ultrices metus, at blandit felis lorem vel
          turpis. Quisque pulvinar risus eget placerat congue. Nulla et ex dui.
          Duis non ultrices neque, at vehicula metus. Maecenas neque elit,
          viverra sit amet magna quis, pretium tristique ipsum. Nullam pretium
          tempor quam, eu faucibus ex tincidunt quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          augue sit amet dui posuere hendrerit. Suspendisse sit amet auctor
          metus, sit amet ultricies ipsum. Fusce lectus ligula, accumsan vel
          bibendum id, fringilla at est. Nunc congue, turpis vitae blandit
          tempus, augue libero ultrices metus, at blandit felis lorem vel
          turpis. Quisque pulvinar risus eget placerat congue. Nulla et ex dui.
          Duis non ultrices neque, at vehicula metus. Maecenas neque elit,
          viverra sit amet magna quis, pretium tristique ipsum. Nullam pretium
          tempor quam, eu faucibus ex tincidunt quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          augue sit amet dui posuere hendrerit. Suspendisse sit amet auctor
          metus, sit amet ultricies ipsum. Fusce lectus ligula, accumsan vel
          bibendum id, fringilla at est. Nunc congue, turpis vitae blandit
          tempus, augue libero ultrices metus, at blandit felis lorem vel
          turpis. Quisque pulvinar risus eget placerat congue. Nulla et ex dui.
          Duis non ultrices neque, at vehicula metus. Maecenas neque elit,
          viverra sit amet magna quis, pretium tristique ipsum. Nullam pretium
          tempor quam, eu faucibus ex tincidunt quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          augue sit amet dui posuere hendrerit. Suspendisse sit amet auctor
          metus, sit amet ultricies ipsum. Fusce lectus ligula, accumsan vel
          bibendum id, fringilla at est. Nunc congue, turpis vitae blandit
          tempus, augue libero ultrices metus, at blandit felis lorem vel
          turpis. Quisque pulvinar risus eget placerat congue. Nulla et ex dui.
          Duis non ultrices neque, at vehicula metus. Maecenas neque elit,
          viverra sit amet magna quis, pretium tristique ipsum. Nullam pretium
          tempor quam, eu faucibus ex tincidunt quis.
        </p>
      </article>
    </section>
  );
};

export default About;
