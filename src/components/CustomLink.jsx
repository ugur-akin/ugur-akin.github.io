import React from 'react';
import clsx from 'clsx';
import {createUseStyles} from 'react-jss';
import {Link as RouterLink, NavLink} from 'react-router-dom';

const useStyles = createUseStyles({
  overrides: {
    textDecoration: 'none',
    color: 'inherit',
    position: 'relative',
    boxSizing: 'border-box',
  },
  alignment: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLink: {
    padding: {
      left: '0.5rem',
      top: '0.5rem',
      bottom: '0.5rem',
      right: '0.5rem',
    },
    // NOTE(Ugur):
    // The main reason we use psuedo elements
    // is because applying/removing borders cause
    // an unpleasant vertical movement.
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      transform: 'scale(0,1)',
      borderBottom: '1.5px solid white',
      transformOrigin: '100%',
      transition: [['transform', '0.5s', 'ease']],
    },
  },
  active: {
    '&::before': {
      transformOrigin: '0%',
      transform: 'scale(1,1)',
    },
  },
});

const CustomLink = React.forwardRef(
  (
    {to, className, children, navLink = false, activeClassName, ...other},
    ref,
  ) => {
    const classes = useStyles();
    const LinkComponent = navLink ? NavLink : RouterLink;
    const navLinkProps = navLink && {
      activeClassName: clsx(classes.active, activeClassName),
    };
    return (
      <LinkComponent
        ref={ref}
        to={to}
        className={clsx(
          classes.overrides,
          classes.alignment,
          navLink && classes.navLink,
          className,
        )}
        {...navLinkProps}
        {...other}
      >
        {children}
      </LinkComponent>
    );
  },
);

export default CustomLink;
