import React from 'react';
import PropTypes from 'prop-types';

const defaultLogoStyles = { fontSize: '24px' };
export const DefaultLogo = () => <div style={defaultLogoStyles}>Some Logo</div>;

export const DefaultItem = ({ text }) => <div>{text}</div>;

DefaultItem.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};
