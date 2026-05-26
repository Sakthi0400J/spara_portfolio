import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope
} from 'react-icons/fa'

import { useNavigate } from 'react-router-dom'

function Footer() {

  const navigate = useNavigate()

  const goToSection = (sectionId) => {

    if (window.location.pathname !== '/') {

      navigate('/')

      setTimeout(() => {

        const section =
          document.getElementById(sectionId)

        if (section) {

          section.scrollIntoView({
            behavior: 'smooth'
          })

        }

      }, 200)

    }

    else {

      const section =
        document.getElementById(sectionId)

      if (section) {

        section.scrollIntoView({
          behavior: 'smooth'
        })

      }

    }

  }

  return (

    <footer className="footer">

      <div className="footer-container">


        <div className="footer-col logo-col">

          <img
            src="/sunraise logo white.png"
            alt="logo"
            className="footer-logo"
          />

          <div className="socials">

            <a
              href="https://www.facebook.com/share/1BDG7xpbpR/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaFacebookF />
            </a>

            

            <a
              href="https://www.instagram.com/sunraise_technotex_pvt_ltd_cbe?igsh=dWQyanMycHQwcmth"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaInstagram />
            </a>

          </div>

        </div>


        <div className="vertical-line"></div>


        <div className="footer-col">

          <h3>
            Quick Links
          </h3>

          <p onClick={() => goToSection('home')}>
            Home
          </p>

          <p onClick={() => goToSection('about')}>
            About Us
          </p>

          <p onClick={() => goToSection('products')}>
            Products
          </p>

          <p onClick={() => goToSection('blogs')}>
            Applications
          </p>

          <p onClick={() => goToSection('contact')}>
            Contact Us
          </p>

        </div>


        <div className="footer-col products-column">

          <h3>
            Products
          </h3>

          <p onClick={() => navigate('/products-page')}>
            Comforter
          </p>

          <p onClick={() => navigate('/products-page')}>
            Mesh Filter
          </p>

          <p onClick={() => navigate('/products-page')}>
            Muffler Headrest
          </p>

          <p onClick={() => navigate('/products-page')}>
            Quilt
          </p>

          <p onClick={() => navigate('/products-page')}>
            Winter Jacket
          </p>

        </div>


        <div className="footer-col contact">

          <h3>
            Contact Us
          </h3>

          <p>
            <FaMapMarkerAlt />
            Coimbatore, Tamil Nadu, India
          </p>

          <p>
            <FaPhone />
            9786005252
          </p>

          <p>
            <FaEnvelope />
            info@sunraise.co.in
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © Sunraise Technotex.
          All rights reserved.
        </p>

        <p>
          Made with TridentArc
        </p>

      </div>


      <style>{`

        .footer {

          background: #276842;

          color: white;

          padding: 60px 80px 20px;

          font-family:
            "Times New Roman",
            Times,
            serif;

          overflow: hidden;
        }

        .footer-container {

          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          gap: 50px;

          width: 100%;
        }

        .logo-col {

          min-width: 220px;
        }

        .footer-logo {

          height: 90px;

          margin-bottom: 25px;

          max-width: 100%;

          object-fit: contain;
        }

        .socials {

          display: flex;

          gap: 15px;
        }

        .icon {

          width: 38px;

          height: 38px;

          border:
            1px solid rgba(255,255,255,0.4);

          border-radius: 50%;

          display: flex;

          justify-content: center;

          align-items: center;

          color: white;

          text-decoration: none;

          transition: 0.3s;
        }

        .icon:hover {

          background: white;

          color: #276842;

          transform: scale(1.1);
        }

        .vertical-line {

          width: 1px;

          height: 170px;

          background:
            rgba(255,255,255,0.3);

          margin-top: 10px;

          flex-shrink: 0;
        }

        .footer-col {

          min-width: 180px;
        }

        .footer-col h3 {

          margin-bottom: 18px;

          font-size: 20px;

          font-weight: bold;

          color: white;

        }

        .footer-col p {

          margin: 10px 0;

          font-size: 16px;

          display: flex;

          align-items: center;

          gap: 10px;

          color: white;

          cursor: pointer;

          margin-left: 40px;

          transition: 0.3s ease;

          line-height: 28px;
        }

        .footer-col p:hover {

          text-decoration: underline;
        }

        .contact p {

          cursor: default;
        }

        .contact p:hover {

          text-decoration: none;
        }

        .products-column {

          margin-left: 20px;
        }
        
        .products-column h3 {
          text-align: left;
          margin-left: 40px;
        }

        .footer-bottom {

          border-top:
            1px solid rgba(255,255,255,0.2);

          margin-top: 45px;

          padding-top: 18px;

          display: flex;

          justify-content: space-between;

          align-items: center;

          gap: 20px;

          font-size: 16px;

          color: white;

          flex-wrap: wrap;
        }
        
        .contact h3 {
          text-align: left;
          margin-left: 40px;
        }

        /* TABLET */

        @media (max-width: 1024px) {

          .footer {

            padding:
              50px 40px 20px !important;
          }

          .footer-container {

            flex-wrap: wrap;

            gap: 40px !important;
          }

          .vertical-line {

            display: none;
          }

          .products-column {

            margin-left: 0 !important;
          }

        }

        /* MOBILE */

        @media (max-width: 768px) {

          .footer {

            padding:
              45px 20px 20px !important;

            text-align: center;
          }

          .footer-container {

            flex-direction: column;

            align-items: center;

            gap: 35px !important;
          }

          .logo-col {

            display: flex;

            flex-direction: column;

            align-items: center;

            width: 100%;
          }

          .footer-logo {

            height: 75px !important;

            margin-bottom: 20px !important;
          }

          .socials {

            justify-content: center;
          }

          .footer-col {

            width: 100%;
          }

          .footer-col h3 {

            margin-bottom: 15px !important;

            font-size: 20px !important;
          }

          .footer-col p {

            margin-left: 0 !important;

            justify-content: center;

            font-size: 15px !important;

            line-height: 26px !important;
          }

          .footer-bottom {

            flex-direction: column;

            text-align: center;

            font-size: 15px !important;

            gap: 10px !important;
          }

        }

        /* SMALL MOBILE */

        @media (max-width: 480px) {

          .footer {

            padding:
              40px 15px 18px !important;
          }

          .footer-logo {

            height: 68px !important;
          }

          .footer-col h3 {

            font-size: 18px !important;
          }

          .footer-col p {

            font-size: 14px !important;

            line-height: 24px !important;
          }

          .icon {

            width: 34px;

            height: 34px;
          }

          .footer-bottom {

            font-size: 14px !important;
          }

        }

      `}</style>

    </footer>

  )
}

export default Footer