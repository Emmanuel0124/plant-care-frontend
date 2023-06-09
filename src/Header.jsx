import { LogoutLink } from "./LogoutLink";


export function Header() {
  return(
    <header>
      <nav>
      <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link disabled">Plant Reminder</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Login">Login</a>
      </li>
      <li className="nav-item">
        <LogoutLink />
      </li>
    </ul>
      </nav>
    </header>
  )
}