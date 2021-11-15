import "./App1.css";

var App = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Grand Hotel</title>
          <link rel="shortcut icon" type="image/png" href="img/crown.png" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i" rel="stylesheet" />
          <link rel="stylesheet" href="css/style.css" />
          {/* navbar  */}
          <div className="navbar">
            <input type="checkbox" className="checkbox" id="click" hidden />
            {/* sidebar */}
            <div className="sidebar">
              <label htmlFor="click">
                <div className="menu-icon">
                  <div className="line line-1" />
                  <div className="line line-2" />
                  <div className="line line-3" />
                </div>
              </label>
              <ul className="social-icons-list">
                <li>
                  <a href="#" className="social-link"><i className="fab fa-facebook-f" /></a>
                </li>
                <li>
                  <a href="#" className="social-link"><i className="fab fa-twitter" /></a>
                </li>
                <li>
                  <a href="#" className="social-link"><i className="fab fa-google-plus-g" /></a>
                </li>
                <li>
                  <a href="#" className="social-link"><i className="fab fa-instagram" /></a>
                </li>
              </ul>
              <div className="year">
                <p>2018</p>
              </div>
            </div>
            {/* end of sidebar */}
            {/* navigation */}
            <nav className="navigation">
              <div className="navigation-header">
                <h1 className="navigation-heading">Grand Hotel</h1>
                <form className="navigation-search">
                  <input type="text" className="navigation-search-input" placeholder="Search..." />
                  <button className="navigation-search-btn">
                    <i className="fas fa-search" />
                  </button>
                </form>
              </div>
              <ul className="navigation-list">
                <li className="navigation-item">
                  <a href="#" className="navigation-link">home</a>
                </li>
                <li className="navigation-item">
                  <a href="#" className="navigation-link">about us</a>
                </li>
                <li className="navigation-item">
                  <a href="#" className="navigation-link">rooms</a>
                </li>
                <li className="navigation-item">
                  <a href="#" className="navigation-link">events</a>
                </li>
                <li className="navigation-item">
                  <a href="#" className="navigation-link">customers</a>
                </li>
                <li className="navigation-item">
                  <a href="#" className="navigation-link">contact</a>
                </li>
              </ul>
              <div className="copyright">
                <p>© 2018. Grand Hotel. All Rights Reserved</p>
              </div>
            </nav>
            {/* end of navigation */}
          </div>
          {/* end of navbar  */}      
          {/* header */}
          <header className="header">
            <div className="brand">
              <div>
                <img src="img/crown.png" width={80} />
              </div>
              <h3 className="hotel-heading">Grand Hotel</h3>
            </div>
            <div className="banner">
              <h1 className="banner-heading">Welcome to Grand Hotel</h1>
              <p className="banner-paragraph">Make your life luxurious</p>
              <button className="banner-button">Check Out</button>
            </div>
          </header>
          {/* end of header */}
          {/* about us */}
          <section className="about-us">
            <div className="about-us-content">
              <h1 className="about-us-heading">About Us</h1>
              <div className="underline">
                <div className="small-underline" />
                <div className="big-underline" />
              </div>
              <h3 className="sub-heading">Grand Hotel</h3>
              <p className="about-us-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus accusantium exercitationem qui quis perspiciatis totam dolores. Numquam inventore temporibus recusandae? Eos eaque quia eius culpa nulla vitae, cumque enim voluptates!</p>
              <button className="about-us-btn">
                Read More
                <i className="fas fa-angle-double-right btn-arrow" />
              </button>
            </div>
            <div className="about-us-images">
              <img src="img/about-us-img-1.jpeg" className="image image-1" />
              <img src="img/about-us-img-2.jpeg" className="image image-2" />
              <img src="img/about-us-img-3.jpeg" className="image image-3" />
              <img src="img/about-us-img-4.jpeg" className="image image-4" />
            </div>
          </section>
          {/* end of about us */}
          {/* rooms */}
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
                  <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
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
                  <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
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
                  <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
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
                  <p className="room-card-paragraph">Lorem ipsum dolor sit amet.</p>
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
          {/* end of rooms */}
          {/* customers */}
          <section className="customers">
            <div className="common-header">
              <h1 className="common-heading">Our Customers</h1>
              <div className="underline">
                <div className="small-underline" />
                <div className="big-underline" />
              </div>
            </div>
            <p className="customers-paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, aspernatur sint! Esse aliquam explicabo aperiam eos, ipsum nam consectetur ipsa!</p>
            <div className="customers-card-wrapper">
              <div className="customer-card">
                <div className="customer-image-wrapper">
                  <img src="img/customer-1.jpeg" className="customer-image" />
                </div>
                <div className="customer-info">
                  <h3 className="customer-fullname">Helen Doe</h3>
                  <p className="customer-paragraph-1">Happy Customer</p>
                  <p className="customer-paragraph-2">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore magni assumenda laboriosam nesciunt animi dolorem inventore mollitia nihil, possimus, vitae odio. Veniam alias, mollitia ab rem tenetur sint ex."</p>
                </div>
              </div>
              <div className="customer-card">
                <div className="customer-image-wrapper">
                  <img src="img/customer-2.jpeg" className="customer-image" />
                </div>
                <div className="customer-info">
                  <h3 className="customer-fullname">Monica Smith</h3>
                  <p className="customer-paragraph-1">Happy Customer</p>
                  <p className="customer-paragraph-2">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore magni assumenda laboriosam nesciunt animi dolorem inventore mollitia nihil, possimus, vitae odio. Veniam alias, mollitia ab rem tenetur sint ex."</p>
                </div>
              </div>
            </div>
          </section>
          {/* end of customers */}
          {/* footer */}
          <footer className="footer">
            <div className="main-part">
              <div className="footer-list-wrapper">
                <h3 className="footer-heading">Grand Hotel</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      support@grandhotel.com
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      New York, Main Street 123
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Tel: +123 456 789
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-list-wrapper">
                <h3 className="footer-heading">Explore</h3>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Home
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      About Us
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Rooms
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Events
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Customers
                    </a>
                  </li>
                  <li className="footer-list-item">
                    <a href="#" className="footer-list-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="contact">
                <h3 className="footer-heading">Contact</h3>
                <p>Sign Up for News</p>
                <form className="footer-form">
                  <input type="text" className="footer-input" placeholder="Your email..." />
                  <button className="footer-btn">Sign Up</button>
                </form>
              </div>
              <div className="gallery">
                <h3 className="footer-heading">Gallery</h3>
                <div className="gallery-images">
                  <div className="image-wrapper">
                    <img src="img/gallery-img-1.jpeg" className="footer-image" />
                  </div>
                  <div className="image-wrapper">
                    <img src="img/gallery-img-2.jpeg" className="footer-image" />
                  </div>
                  <div className="image-wrapper">
                    <img src="img/gallery-img-3.jpeg" className="footer-image" />
                  </div>
                  <div className="image-wrapper">
                    <img src="img/gallery-img-4.jpeg" className="footer-image" />
                  </div>
                  <div className="image-wrapper">
                    <img src="img/gallery-img-5.jpeg" className="footer-image" />
                  </div>
                  <div className="image-wrapper">
                    <img src="img/gallery-img-6.jpeg" className="footer-image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="creator-part">
              <div className="copyright-text">
                <p>Copyright © 2018. Grand Hotel. All Rights Reserved</p>
              </div>
              <div className="text-right">
                <p>Made With <i className="fas fa-heart" /> by <span>CodeAndCreate</span></p>
              </div>
            </div>
          </footer>
          {/* end of footer */}
        </div>
      );
    }
  });

  