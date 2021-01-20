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

const ContactLink = ({icon, src, color, ...other}) => {
  const classes = useStyles({color});
  return (
    <a href={src} className={classes.root}>
      <FontAwesomeIcon icon={icon} color={color} />
    </a>
  );
};

export default ContactLink;
