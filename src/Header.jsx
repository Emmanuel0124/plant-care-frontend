import { LogoutLink } from "./LogoutLink";
import React from "react";
import './header.css';
import HomeIcon from "./HomeIcon";
import LoginIcon from "./LoginIcon";
import CalendarIcon from "./CalendarIcon";
// import LogoutIcon from "./LogoutIcon";

export function Header() {
  return (
    <header>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link disabled">
              Plant Reminder
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/">
              <HomeIcon className="icon" />
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/schedules">
              <CalendarIcon className="icon" />
              Schedules
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Login">
              <LoginIcon className="icon" />
              Login
            </a>
          </li>
          <li className="nav-item">
            <LogoutLink />
          </li>
        </ul>
      </nav>
    </header>
  );
}