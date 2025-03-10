import React from 'react';

import PropTypes from 'prop-types';

const Card = ({ src, title, text, link }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={src} className="card-img-top" alt="Card" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">Login</a>
      </div>
    </div>
  );
};

Card.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  link: PropTypes.string,
};

Card.defaultProps = {
  text: "Default card text",
  link: "#",
};

export default Card;
