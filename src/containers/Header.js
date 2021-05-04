import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h1>
          <Link to="/">AGA Shop!</Link>
        </h1>
        <div class="ui secondary right menu">
          <Link to="/" class="active item">
            Home
          </Link>
          <a
            href="https://github.com/patricktunez123/aga-shop-with-react-redux"
            target="_blank"
            rel="noreferrer"
            class="item"
          >
            Source code
          </a>
          <a
            href="https://www.linkedin.com/in/patrick-tunezerwane-0a901ba8/"
            class="item"
            target="_blank"
            rel="noreferrer"
          >
            Developer
          </a>
          <div class="right menu">
            <div class="item">
              <div class="ui icon input">
                <input type="text" placeholder="Search..." />
                <i class="search link icon"></i>
              </div>
            </div>
            <a href="/" class="ui item disabled">
              Create account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
