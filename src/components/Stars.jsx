import React from "react";
import PropTypes from "prop-types";
import Star from "./Star";


export default function  Stars (props) {
  const {count} = props;
  let arrStars = [];

  function getListStars(count){
    while (count > 0 && count < 6) {
      arrStars.push(count);
      count--;
    }

    return arrStars;
  }

  return (
    <>
    
      <ul className="card-body-stars u-clearfix">
          {getListStars(count)}
          {arrStars.map((item, index) => (
              <Star key={index}/>
        ))}

      </ul>
    </>
  )
}


Stars.propTypes = {
  count: PropTypes.number,
};

Stars.defaultProps = {
  count: 0,
};