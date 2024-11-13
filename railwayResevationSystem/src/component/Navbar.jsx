
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary"  >
      {/* <div class="container">
    <a class="navbar-brand" href="#">
      <img src="./images/logo.png" alt="Bootstrap" width="80" height="48"></img>
    </a>
  </div> */}
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="./images/logo.png"
            alt="Logo"
            width="80"
            height="48"
            class="d-inline-block align-text-top "
            id="logo1"
          ></img>
          TrainLink
        </a>
      </div>
      <div class="container-fluid">
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
