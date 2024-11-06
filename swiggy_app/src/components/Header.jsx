import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary mt-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Swiggy</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to={'/'} className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
          </li> */}
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Header;