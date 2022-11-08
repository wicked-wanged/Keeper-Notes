import React from "react";
import MaterialIcon from "../../material-icon/MaterialIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGear,
  faLightbulb,
  faRotateRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Header() {
  return (
    <header className="flex-row">
      <div className="header-left flex-row">
        <MaterialIcon title="Main Menu" color="#5F6368">
          <FontAwesomeIcon icon={faBars} size="xl" />
        </MaterialIcon>
        <div className="brand-container flex-row">
          <span className="brand-logo">
            <FontAwesomeIcon icon={faLightbulb} size="xl" />
          </span>
          <h1 className="brand-name">Keeper</h1>
        </div>
      </div>
      <div className="header-right">
        <ul className="nav-menu-list flex-row">
          <li className="nav-menu-list-item">
            <MaterialIcon title="Main Menu" color="#5F6368">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </MaterialIcon>
          </li>
          <li className="nav-menu-list-item">
            <MaterialIcon title="Main Menu" color="#5F6368">
              <FontAwesomeIcon icon={faRotateRight} size="lg" />
            </MaterialIcon>
          </li>
          <li className="nav-menu-list-item">
            <MaterialIcon title="Main Menu" color="#5F6368">
              <FontAwesomeIcon icon={faGear} size="lg" />
            </MaterialIcon>
          </li>
          <li className="nav-menu-list-item">
            <MaterialIcon title="Main Menu" color="#5F6368">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </MaterialIcon>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
