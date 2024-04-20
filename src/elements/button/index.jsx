import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button({
  onClick,
  type = 'button',
  isExternal,
  href = '',
  className = '',
  style = {},
  target = '',
  children = ''
}) {
  const onClickHandler = useCallback(() => {
    if (onClick) onClick();
  }, [onClick]);

  if (type === 'link') {
    if (isExternal) {
      return (
        <a
          href={href}
          className={className}
          style={style}
          target={target === '_blank' ? '_blank' : undefined}
          rel="noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <NavLink
        to={href}
        className={className}
        style={style}
        onClick={onClickHandler}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      className={className}
      type={type}
      style={style}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'link', 'submit', 'reset']),
  isExternal: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  target: PropTypes.string,
  children: PropTypes.string
};
