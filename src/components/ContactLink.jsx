import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    margin: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ContactLink = ({icon, src, ...other}) => {
  const classes = useStyles();
  return (
    <a href={src} className={classes.root}>
      <FontAwesomeIcon icon={icon} color="white" />
    </a>
  );
};

export default ContactLink;
