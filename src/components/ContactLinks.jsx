import React from 'react';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {
  faAddressBook,
  faEnvelope,
  faLocationArrow,
  faMapMarker,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import ContactLink from './ContactLink';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const ContactLinks = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContactLink icon={faGithub} />
      <ContactLink icon={faLinkedin} />
      <ContactLink icon={faEnvelope} />
      <ContactLink icon={faMapMarkerAlt} />
    </div>
  );
};

export default ContactLinks;
