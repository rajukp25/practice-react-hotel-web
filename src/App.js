import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="navbar">
            <div className="sidebar">
              <ul className="social-icons-list">
                <li>
                  <a href="#" className="social-link">
                    facebook
                    <i className="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    twitter
                    <i className="twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    googleplus
                    <i className="google-plus" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    instagram
                    <i className="instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <nav class="navigation">
            <div class="navigation-header">
              <h1 class="navigation-heading">Grand Hotel</h1>

              <form class="navigation-search">
                <input
                  type="text"
                  class="navigation-search-input"
                  placeholder="Search..."
                />
                <button class="navigation-search-btn">
                  <i class="search"></i>
                </button>
              </form>
            </div>

            <ul class="navigation-list">
              <li class="navigation-item">
                <a href="#" class="navigation-link">
                  home
                </a>
              </li>
              <li class="navigation-item">
                <a href="#" class="navigation-link">
                  about us
                </a>
              </li>
              <li class="navigation-item">
                <a href="#" class="navigation-link">
                  rooms
                </a>
              </li>
              <li class="navigation-item">
                <a href="#" class="navigation-link">
                  events
                </a>
              </li>
              <li class="navigation-item">
                <a href="#" class="navigation-link">
                  customers
                </a>
              </li>
              <li class="navigation-item">
                <a href="#" class="navigation-link">
                  contact
                </a>
              </li>
            </ul>

            <div class="copyright">
              <p>&copy; 2021. Grand Hotel. All Rights Reserved</p>
            </div>
          </nav>
        </div>

        <header class="header">
          <div class="brand">
            <div>
              <img src="img/crown.png" width="80" />
            </div>
            <h3 class="hotel-heading">Grand Hotel</h3>
          </div>

          <div class="banner">
            <h1 class="banner-heading">Welcome to Grand Hotel</h1>
            <p class="banner-paragraph">Make your life luxurious</p>
            <button class="banner-button">Check Out</button>
          </div>
        </header>

        <section class="about-us">
          <div class="about-us-content">
            <h1 class="about-us-heading">About Us</h1>
            <div class="underline">
              <div class="small-underline"></div>
              <div class="big-underline"></div>
            </div>
            <h3 class="sub-heading">Grand Hotel</h3>
            <p class="about-us-paragraph">
              we are grand hotel. we are grand hotel. we are grand hotel. we are
              grand hotel. we are grand hotel. we are grand hotel. we are grand
              hotel.
            </p>
            <button class="about-us-btn">
              Read More
              <i class="angle-double-right btn-arrow"></i>
            </button>
          </div>

          <div class="about-us-images">
            <img src="img/about-us-img-1.jpeg" class="image image-1" />
            <img src="img/about-us-img-2.jpeg" class="image image-2" />
            <img src="img/about-us-img-3.jpeg" class="image image-3" />
            <img src="img/about-us-img-4.jpeg" class="image image-4" />
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
