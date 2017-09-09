import React from 'react';
import Icon from '../../components/Icon/Icon';

import './Logout.scss';

class Logout extends React.Component {
  componentDidMount() {
    Meteor.logout();
  }

  render() {
    return (
      <div className="Logout">
        <img
          src="peas.png"
          alt="Podly"
        />
        <h1>Stay safe out there.</h1>
        <p>{'Don\'t forget to like and follow Podly elsewhere on the web:'}</p>
        <ul className="FollowUsElsewhere">
          <li><a href="#"><Icon icon="facebook-official" /></a></li>
          <li><a href="#"><Icon icon="twitter" /></a></li>
          <li><a href="#"><Icon icon="github" /></a></li>
        </ul>
      </div>
    );
  }
}

Logout.propTypes = {};

export default Logout;
