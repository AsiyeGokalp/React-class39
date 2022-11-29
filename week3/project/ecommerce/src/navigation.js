import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to={`/`}>
        <Button style={{ float: "right" }}>
          Product List
        </Button>
      </Link>
      <Link to={`/favorite`}>
        <Button style={{ float: "right" }}>
          Favorite Products
        </Button>
      </Link>
    </div>
  );
}

export default Navigation;