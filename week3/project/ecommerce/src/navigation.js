import React from "react";
import { Link } from "react-router-dom";

function Navigation() {

  return (
    <div>
      <Link to={`/`}>
        <button style={{ float: "right" }}>
          Products
        </button>
      </Link>
      <Link to={`/favorite`}>
        <button style={{ float: "right" }}>
          Favorites
        </button>
      </Link>
    </div>
  );
}

export default Navigation;