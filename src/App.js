import images from './images.js';
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const sliderRef = useRef(); // don't use ref outside of useEffect
  let currentIndex = 0;

  useEffect(() => {
    const sliderWrapper = sliderRef.current;
    if (!sliderWrapper) return; // safety check

    const totalSlides = sliderWrapper.children.length;

    const slideImages = () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const intervalId = setInterval(slideImages, 3000);

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  return (
    <>
      {/* Header */}
      <header className="navbar">
        <div className="logo">
          <img
            src={images['Logo.png']}
            alt="Pixel Factory Logo"
            className="logo-img"
          />
        </div>
        <div className="hamburger" id="hamburger">☰</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Page</a>
          <a href="#">Blog</a>
          <a href="#">Our Work</a>
          <a href="#">About us</a>
        </nav>
        <div className="contact-btn">
          <button>
            <span>
              <img src={images['material-symbols_call.svg']} alt="Call" className="logo-img" />
            </span>
            Contact
          </button>
        </div>
      </header>

      {/* Image slider */}
      <div className="slider">
        <div ref={sliderRef} className="slider-wrapper" id="slider-wrapper">
          {[1, 2, 3, 4, 5].map((num) => (
            <img
              key={num}
              src={images[`Slider (${num}).jpg`]}
              className="slider-img"
              alt={`Slide ${num}`}
            />
          ))}
        </div>

        <div className="slider-content">
          <div className="hero-text">
            <h1>Pixel Factory</h1>
            <p>Photography</p>
            <button className="hero-btn">Book Your Order</button>
          </div>
        </div>
      </div>
      {/* after-image */}
      <hr style={{ margin: '2px', marginBottom: '10px' }} />
      {/* <!--info-text  --> */}
      <div className="info-text">
        <h1>“ A photograph is usually looked at -<br /> seldom looked into. ”</h1>
      </div>
      {/* <!--deni-text  --> */}
      <div className="deni-text">
        <p>Only Photography Has Been Able To Divide Human Life Into A Series Of Moments,<br /> Each Of Them Has The Value
          Of A Complete Existence.</p>
      </div>
      {/* <!--category-of-studio  --> */}
      <div className="category-of-studio">
        <div className="inside-category">
          <div className="studio-card">
            <img src={images['image10.png']} alt="Studio" className="category-img" />
            <h4 className="card-title">Best Background</h4>
          </div>
          <div class="studio-card">
            <img src={images['image11.png']} alt="Studio" className="category-img" />
            <h4 className="card-title">Best Camera</h4>
          </div>
          <div className="studio-card">
            <img src={images['image12.png']} alt="Studio" className="category-img" />
            <h4 className="card-title">Best Editors</h4>
          </div>
        </div>
      </div>
      {/* --info-text   */}
      <div className="info-text">
        <h1>“ Our Works ”</h1>
      </div>
      {/* --deni-text  */}
      <div className="deni-text">
        <p>Photography is just light and time</p>
      </div>
      {/* <!--category-of- gallery --> */}
      <div className="photo-gallery">
        {/* <!-- Row 1 --> */}
        <div className="photo-card item1">
          <img src={images['cpl.jpg']} alt="Couple Photography" />
          <p>Couple Photography</p>
        </div>
        <div className="photo-card item2">
          <img src={images['pre.jpg']} alt="Pre Wedding Photography" />
          <p>Pre Wedding Photography</p>
        </div>
        <div className="photo-card item3">
          <img src={images['model.jpg']} alt="Model Photography" />
          <p>Model Photography</p>
        </div>

        {/* <!-- Row 2 --> */}
        <div className="photo-card item4">
          <img src={images['proc.png']} alt="Product Photography" />
          <p>Product Photography</p>
        </div>
        <div className="photo-card item5">
          <img src={images['nau.png']} alt="Natural Photography" />
          <p>Natural Photography</p>
        </div>
        <div className="photo-card item6">
          <img src={images['dai.png']} alt="Diamond Photography" />
          <p>Diamond Photography</p>
        </div>

        {/* <!-- Row 3 --> */}
        <div className="photo-card item7">
          <img src={images['wed.jpg']} alt="Wedding Photography" />
          <p>Wedding Photography</p>
        </div>
        <div className="photo-card item8">
          <img src={images['Slider (3).jpg']} alt="Engagement Photography" />
          <p>Engagement Photography</p>
        </div>
        <div className="photo-card item9">
          <img src={images['pro.png']} alt="Professional Photography" />
          <p>Professional Photography</p>
        </div>
      </div>
      <hr style={{ margin: '2px', marginBottom: '10px' }} />
      {/* <!--info-text  --> */}
      <div className="info-text">
        <h1>“ Read Our latest Blog ”</h1>
      </div>
      {/* <!--deni-text  --> */}
      <div className="deni-text">
        <p>Only Photography Has Been Able To Divide Human Life Into A Series Of Moments,<br /> Each Of Them Has The Value
          Of A Complete Existencee</p>
      </div>
      {/* <!--blog  --> */}
      <div className="blog">
        <div className="blog">
          {/* <!-- Card 1 --> */}
          <div className="blog-card">
            <label className="upload-container">
              <img id="previewImage1" src={images['engment.png']} alt="Blog Image 1" className="blog-img" />
            </label>
            <h3>Engagement Photography</h3>
            <p>"It's Like My Life Isn't Even Real To Me Unless You're There And You're In It And I'm Sharing It With
              You."</p>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="blog-card">
            <label className="upload-container">
              <img id="previewImage2" src={images['dress.png']} alt="Blog Image 2" className="blog-img" />

            </label>
            <h3>Clothing Brand Photography</h3>
            <p>"The Best Fashion Show Is Definitely On The Street. Always Has Been, And Always Will Be."</p>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="blog-card">
            <label className="upload-container">
              <img id="previewImage3" src={images['family.png']} alt="Blog Image 3" className="blog-img" />
            </label>
            <h3>Family Moments</h3>
            <p>"The Best Thing About A Picture Is That It Never Changes, Even When The People In It Do."</p>
          </div>
        </div>
      </div>
      <hr style={{ margin: '1px', marginBottom: '10px' }} />
     <div className="enquire">
      <h1 className="love-text"> We Love Meeting New People. If<br /> You Want To Work With Us, Send A <br /> Message.</h1>
      <div className="btn-Enquire">
        <button className="Enquire-btn">Enquire Now</button>
      </div>
</div>
      {/* <!-- colgimg --> */}
      <div className="colgimg">
        {[1, 2, 3, 4, 5].map((num) => (
          <img
            key={num}
            src={images[`colge (${num}).png`]}
            className="colg-img"
            alt={`College Image ${num}`}
          />
        ))}
      </div>

      {/* <!-- Footer --> */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={images['footer.png']} alt="Pixel Factory Logo" />
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p><strong>Address</strong><br/>
              19, Ganapathi Raj Nagar Main Rd,<br/>
                Bhaskar Colony, Virugambakkam,<br/>
                  Chennai, Tamil Nadu 600092</p>
                <p><strong>Phone</strong><br/>+91 8807626457</p>
                <p><strong>Email</strong><br/>Pixelfactorystudio1@Gmail.Com</p>
              </div>

              <div className="footer-column">
                <h4>Service</h4>
                <ul>
                  <li><a href="#">Wedding Photography</a></li>
                  <li><a href="#">Professional Photographer</a></li>
                  <li><a href="#">Personal Photographer</a></li>
                  <li><a href="#">Pre Wedding Photoshoot</a></li>
                  <li><a href="#">Kids Photoshoot</a></li>
                </ul>
                <div className="footer-bottom">
                  <h4 className="footer-p">Follow Us On</h4>
                  <div className="footer-icons">
                    <a href="#"> <img src={images['insta.png']} alt="Pixel Factory insta" /></a>
                    <a href="#"><img src={images['twitter.png']} alt="Pixel Factory twitter"/></a>
                    <a href="#"><img src={images['whatsapp.png']} alt="Pixel Factory whatsapp"/></a>
                    <a href="#"><img src={images['youtube.png']} alt="Pixel Factory youtube"/></a>
                  </div>
                </div>
              </div>
            </div>
            </footer>

          </>

          );
}

          export default App;
