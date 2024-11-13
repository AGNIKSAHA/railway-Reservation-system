
const NavBbar = () => {
    return (
        <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div class="col-md-3 mb-2 mb-md-0">
          <a class="navbar-brand logo1" href="#">
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
    
          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="#" class="nav-link px-2">Contact Us</a></li>
            <li><a href="#" class="nav-link px-2">Meals</a></li>
            <li><a href="#" class="nav-link px-2">Train Details</a></li>
            <li><a href="#" class="nav-link px-2">Complain</a></li>
          </ul>
    
          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-primary me-2">Login</button>
            <button type="button" class="btn btn-primary">Sign-up</button>
          </div>
        </header>
      </div>
    );
  };
  
  export default NavBbar;
  