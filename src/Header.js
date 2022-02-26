import React from "react";
import PropTypes from "prop-types";

export default function Header({ title, children }) {
  return (
    <header>
      <h1>{title}</h1>
      {children}
      <hr />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: "JStack's Blog",
};
