import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ className, name, ...rest }) => (
  <span className={classNames('nui-icon', className)} {...rest}>
    {name}
  </span>
);

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default Icon;