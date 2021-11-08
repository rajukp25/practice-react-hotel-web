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

        <section className="rooms">
        <div className="common-header">
          <h1 className="common-heading">Rooms In Grand Hotel</h1>
          <div className="underline">
            <div className="small-underline" />
            <div className="big-underline" />
          </div>
        </div>
        <div className="rooms-cards-wrapper">
          <div className="room-card">
            <img src="img/single-room.jpeg" className="room-img" />
            <div className="room-card-content">
              <h4 className="room-card-heading">Single Room</h4>
              <p className="room-card-paragraph">single room one bed.</p>
              <p className="room-price">$99.00</p>
              <button className="room-card-btn">
                Book Now
                <i className="fas fa-angle-double-right btn-arrow" />
              </button>
            </div>
          </div>
          <div className="room-card">
            <img src="img/double-room.jpeg" className="room-img" />
            <div className="room-card-content">
              <h4 className="room-card-heading">Double Room</h4>
              <p className="room-card-paragraph">double room two beds.</p>
              <p className="room-price">$199.00</p>
              <button className="room-card-btn">
                Book Now
                <i className="fas fa-angle-double-right btn-arrow" />
              </button>
            </div>
          </div>
          <div className="room-card">
            <img src="img/lux.jpeg" className="room-img" />
            <div className="room-card-content">
              <h4 className="room-card-heading">Lux</h4>
              <p className="room-card-paragraph">lux rooms king bed.</p>
              <p className="room-price">$299.00</p>
              <button className="room-card-btn">
                Book Now
                <i className="fas fa-angle-double-right btn-arrow" />
              </button>
            </div>
          </div>
          <div className="room-card">
            <img src="img/vip.jpeg" className="room-img" />
            <div className="room-card-content">
              <h4 className="room-card-heading">VIP</h4>
              <p className="room-card-paragraph">VIP room double king.</p>
              <p className="room-price">$399.00</p>
              <button className="room-card-btn">
                Book Now
                <i className="fas fa-angle-double-right btn-arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="rooms-btn-wrapper">
          <button className="rooms-btn">Check All Rooms</button>
        </div>
      </section>
      </header>
    </div>
  );
}

export default App;
