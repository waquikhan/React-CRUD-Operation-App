import React from 'react'

function Navbar() {
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light  bg-light my-0 ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Home</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Address</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Courses</a>
        </li>
        </ul>
        <form class="d-flex">
        <button class="btn btn-outline-success" type="submit">Enroll For the Courses</button>
      </form>
    </div>
  </div>
</nav>
</>
  );
}
export default Navbar;