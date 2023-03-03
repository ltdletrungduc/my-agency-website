function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <a href="#" className="header-logo">
            LOGO HERE
          </a>
          <ul className="header-navigation">
            <li className="header-navigation-item">
              <a href="#" className="header-navigation-link">
                Home
              </a>
            </li>
            <li className="header-navigation-item">
              <a href="#" className="header-navigation-link">
                Service
              </a>
            </li>
            <li className="header-navigation-item">
              <a href="#" className="header-navigation-link">
                Our Project
              </a>
            </li>
            <li className="header-navigation-item">
              <a href="#" className="header-navigation-link">
                About us
              </a>
            </li>
          </ul>
          <a href="#" className="button-contact button-secondary">
            Contact us
          </a>
        </div>
      </header>
      <main className="main-content">
        <section className="section-banner">
          <div className="container">
            <div className="baner-content">
              <h1 className="banner-heading">Lorem, ipsum dolor.</h1>
              <p className="banner-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
                hic.
              </p>
              <a href="#" className="banner-button button-primary">
                Our Service
              </a>
            </div>
            <div className="banner-decor">
              <img src="" alt="Banner Image" />
            </div>
          </div>
        </section>
        <section className="section-video">
          <div className="container">
            <div className="video-introduction">
              <h2 className="video-heading">Lorem ipsum dolor sit amet.</h2>
              <p className="video-description">Lorem ipsum dolor sit amet.</p>
              <div className="video-container">
                {/* <video src=""></video> */}
                VIDEO HERE
              </div>
            </div>
          </div>
        </section>
        <section className="section-service">
          <div className="container">
            <h2 className="service-heading">Lorem, ipsum.</h2>
            <ul className="service-list">
              <li className="service-item">
                <h3 className="service-title">Lorem.</h3>
                <p className="service-description">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="service-item">
                <h3 className="service-title">Lorem.</h3>
                <p className="service-description">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="service-item">
                <h3 className="service-title">Lorem.</h3>
                <p className="service-description">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="service-item">
                <h3 className="service-title">Lorem.</h3>
                <p className="service-description">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="service-item">
                <h3 className="service-title">Lorem.</h3>
                <p className="service-description">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li className="service-item">
                <h3 className="service-title">Lorem.</h3>
                <p className="service-description">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-porfolio">
          <div className="container">
            <h2 className="porfolio-heading">Lorem, ipsum.</h2>
            <div className="porfolio-content">
              <div className="porfolio-slider">
                <a className="porfolio-project" href="#">
                  <img src="" alt="" />
                  <h3 className="porfolio-project-title">Lorem, ipsum.</h3>
                </a>
                <a className="porfolio-project" href="#">
                  <img src="" alt="" />
                  <h3 className="porfolio-project-title">Lorem, ipsum.</h3>
                </a>
                <a className="porfolio-project" href="#">
                  <img src="" alt="" />
                  <h3 className="porfolio-project-title">Lorem, ipsum.</h3>
                </a>
                <a className="porfolio-project" href="#">
                  <img src="" alt="" />
                  <h3 className="porfolio-project-title">Lorem, ipsum.</h3>
                </a>
                <a className="porfolio-project" href="#">
                  <img src="" alt="" />
                  <h3 className="porfolio-project-title">Lorem, ipsum.</h3>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section-contact">
          <div className="container">
            <div className="contact-content">
              <h2 className="contact-heading">Lorem, ipsum dolor.</h2>
              <a href="#" className="button-contact button-primary">
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <a href="#" className="footer-logo">
            LOGO HERE
          </a>
          <ul className="footer-navigation">
            <li className="footer-navigation-item">
              <a href="#" className="footer-navigation-link">
                Support
              </a>
            </li>
            <li className="footer-navigation-item">
              <a href="#" className="footer-navigation-link">
                Privacy Policy
              </a>
            </li>
            <li className="footer-navigation-item">
              <a href="#" className="footer-navigation-link">
                Terms and Conditions
              </a>
            </li>
          </ul>
          <small className="footer-copyright">Lorem, ipsum dolor.</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
