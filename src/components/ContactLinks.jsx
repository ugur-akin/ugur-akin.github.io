import React from 'react';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import ContactLink from './ContactLink';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
const ContactLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContactLink icon={faGithub} color="#020E12" />
      <ContactLink icon={faLinkedin} color="#139FCD" />
      <ContactLink icon={faEnvelope} color="#095771" />
    </div>
  );
};

export default ContactLinks;
