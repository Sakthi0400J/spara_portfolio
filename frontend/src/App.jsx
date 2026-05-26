import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { useState, useEffect } from 'react'

import {
  FaWhatsapp,
  FaBars,
  FaTimes
} from 'react-icons/fa'

import Home from './components/home'
import Products from './components/products'
import About from './components/about'
import Contact from './components/contact'
import Blogs from './components/blogs'
import Footer from './components/footer'

import AllProducts from './AllProducts'
import Allblogs from './Allblogs'

function MainWebsite() {

  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  return (
    <>
      <style>{`

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Times New Roman", Times, serif;
        }

        html {
          scroll-behavior: smooth;
          overflow-x: hidden;
        }

        body {
          overflow-x: hidden;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 72px;
          background: #fefefe;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 40px;
          z-index: 3000;
          border-bottom: 2px solid black;
        }

        .logo img {
          height: 60px;
        }

        .desktop-nav {
          display: flex;
        }

        .desktop-nav a {
          margin-left: 25px;
          text-decoration: none;
          font-size: 18px;
          font-weight: bold;
          color: #616569;
        }

        .desktop-nav a:hover {
          color: #276842;
        }

        .menu-btn {
          display: none;
          background: transparent;
          border: none;
          font-size: 28px;
          color: #276842;
          cursor: pointer;
        }

        .menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 2500;
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 260px;
          height: 100vh;
          background: white;
          display: flex;
          flex-direction: column;
          padding-top: 80px;
          z-index: 2600;
          box-shadow: -10px 0 30px rgba(0,0,0,0.15);
          animation: slideIn 0.25s ease;
        }

        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .mobile-menu a {
          padding: 16px 22px;
          text-decoration: none;
          font-size: 17px;
          font-weight: bold;
          color: #616569;
          border-bottom: 1px solid #eee;
        }

        .mobile-menu a:hover {
          background: #f5f5f5;
          color: #276842;
        }

        .section {
          min-height: 100vh;
          padding: 100px 60px 40px;
        }

        

      .whatsapp-float {
        position: fixed;
        bottom: 25px;
        right: 25px;
        width: 60px;
        height: 60px;
        background: #25D366;
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        z-index: 9999;
        cursor: pointer;

        box-shadow:
          0 0 8px rgba(37, 211, 102, 0.8),
          0 0 18px rgba(37, 211, 102, 0.6),
          0 0 30px rgba(37, 211, 102, 0.4);

        transition: all 0.3s ease;
      }

      .whatsapp-float:hover {
        transform: scale(1.12);
        box-shadow:
          0 0 12px rgba(37, 211, 102, 1),
          0 0 25px rgba(37, 211, 102, 0.9),
          0 0 45px rgba(37, 211, 102, 0.7);
      }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        .whatsapp-float:hover {
          transform: scale(1.12);
          transition: 0.3s ease;
        }

        /* MOBILE */
        @media (max-width: 768px) {

          .desktop-nav {
            display: none;
          }

          .menu-btn {
            display: block;
          }

          .navbar {
            padding: 10px 18px;
          }

          .logo img {
            height: 52px;
          }

          .section {
            padding: 85px 20px 30px;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu {
            width: 260px;
            height: 100vh;
          }
        }

      `}</style>

      {/* NAVBAR */}
      <header className="navbar">

        <div className="logo">
          <a href="#home" onClick={closeMenu}>
            <img src="/Screenshot 2026-05-03 144338.png" />
          </a>
        </div>

        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#blogs">Blogs</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </header>

      {menuOpen && (
        <>
          <div className="menu-overlay" onClick={closeMenu} />

          <div className="mobile-menu">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About Us</a>
            <a href="#products" onClick={closeMenu}>Products</a>
            <a href="#blogs" onClick={closeMenu}>Blogs</a>
            <a href="#contact" onClick={closeMenu}>Contact Us</a>
          </div>
        </>
      )}

      <Home />
      <About />
      <Products />
      <Blogs />
      <Contact />
      <Footer />

    </>
  )
}

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainWebsite />} />
        <Route path="/products-page" element={<AllProducts />} />
        <Route path="/blogs-page" element={<Allblogs />} />
      </Routes>

      <a
        href="https://wa.me/919786005252"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>

    </BrowserRouter>
  )
}

export default App