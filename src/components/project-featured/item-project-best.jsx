import React, { Component } from 'react';
import PropTypes from 'prop-types';


const ItemProjectBestComponent = ({

  href,
  srcImg,
  isActive,
  onClick,


  ...props
}) => {
  return (

    <li onClick={onClick} className={isActive ? "active" : ''}><a href={href}>
      <figure><img src={srcImg} alt="project" /></figure></a></li>


  );
}
ItemProjectBestComponent.prototype = {
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func.isRequired
  ]),
  srcImg: PropTypes.oneOfType([
    PropTypes.string.isRequired,
  ]),
  isActive: PropTypes.bool
};




export default ItemProjectBestComponent;