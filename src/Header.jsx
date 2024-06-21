function HeaderBody() {
    return (
        <header>
        <div className="container">
          <a id="logolink" href="#">
            <span>Tigris</span>
          </a>
          <button id="logo">
            <span className="material-symbols-outlined">pets</span>
          </button>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }

  export default HeaderBody