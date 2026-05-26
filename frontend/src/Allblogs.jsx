import { useEffect, useState } from 'react'
import Footer from './components/footer'
import { FaWhatsapp } from 'react-icons/fa'

function Allblogs() {

  const images = [
    "/blogs2/1.png",
    "/blogs2/2.png",
    "/blogs2/3.png",
    "/blogs2/4.png",
    "/blogs2/5.png",
    "/blogs2/6.png",
    "/blogs2/7.png",
    "/blogs2/8.png",
    "/blogs2/9.png",
    "/blogs2/10.png",
    "/blogs2/11.png",
    "/blogs2/12.png",
    "/blogs2/13.png",
    "/blogs2/14.png",
    "/blogs2/15.png",
    "/blogs2/16.png",
    "/blogs2/17.png",
    "/blogs2/18.png",
    "/blogs2/19.png",
  ]

  const [loaded, setLoaded] = useState(false)

  const [selectedImage, setSelectedImage] =
    useState(null)

  useEffect(() => {

    window.scrollTo(0, 0)

    setTimeout(() => {

      setLoaded(true)

    }, 200)

  }, [])

  const nextImage = () => {

    const currentIndex =
      images.indexOf(selectedImage)

    const nextIndex =
      (currentIndex + 1) % images.length

    setSelectedImage(images[nextIndex])

  }

  const prevImage = () => {

    const currentIndex =
      images.indexOf(selectedImage)

    const prevIndex =
      (currentIndex - 1 + images.length)
      % images.length

    setSelectedImage(images[prevIndex])

  }

  return (
    <>

      <div
        className="allblogs-wrapper"
        style={{
          minHeight: '100vh',

          padding: '20px 60px 60px',

          background: '#f5f5f2',

          overflow: 'hidden'
        }}
      >


        <h1
          className="allblogs-title"
          style={{
            color: '#276842',

            marginBottom: '50px',

            fontSize: 'clamp(34px, 6vw, 50px)',

            textAlign: 'center',

            lineHeight: '1.2'
          }}
        >
          Blogs
        </h1>

        <p
          
          style={{
            fontSize: '18px',
            color: '#6c757d',
            lineHeight: '30px',
            maxWidth: '700px',
            margin: '0px auto',
            transform: 'translateY(-45px)'
          }}
        >
          Our materials serve diverse industries with reliable performance.
        </p>


        <div className="blogs-grid">

          {images.map((img, index) => (

            <div
              key={index}

              className={
                `blog-card ${
                  loaded ? 'show' : ''
                }`
              }

              style={{
                transitionDelay:
                  `${index * 0.08}s`
              }}

              onClick={() =>
                setSelectedImage(img)
              }
            >

              <img
                src={img}
                alt={`blog-${index}`}
              />

            </div>

          ))}

        </div>


        {selectedImage && (

          <div className="image-modal">

            <button
              className="nav-btn left-btn"
              onClick={prevImage}
            >
              ❮
            </button>

            <img
              src={selectedImage}
              alt="expanded-blog"
              className="modal-image"
            />

            <button
              className="nav-btn right-btn"
              onClick={nextImage}
            >
              ❯
            </button>

            <button
              className="close-btn"
              onClick={() =>
                setSelectedImage(null)
              }
            >
              ✕
            </button>

          </div>

        )}


        <a
          href="https://wa.me/919786005252"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
        >
          <FaWhatsapp />
        </a>

        {/* STYLES */}

        <style>{`

          .blogs-grid {

            display: grid;

            grid-template-columns:
              repeat(3, 1fr);

            gap: 35px;
          }

          .blog-card {

            overflow: hidden;

            border-radius: 16px;

            cursor: pointer;

            opacity: 0;

            transform:
              translateX(-120px)
              translateY(80px)
              rotate(-8deg);

            transition:
              transform 0.8s ease,
              opacity 0.8s ease,
              border 0.3s ease;

            border:
              4px solid transparent;

            background: white;
          }

          .blog-card.show {

            opacity: 1;

            transform:
              translateX(0)
              translateY(0)
              rotate(0deg);
          }

          .blog-card:nth-child(even) {

            transform:
              translateX(120px)
              translateY(-80px)
              rotate(8deg);
          }

          .blog-card.show:nth-child(even) {

            transform:
              translateX(0)
              translateY(0)
              rotate(0deg);
          }

          .blog-card:hover {

            border: 4px solid #276842;
          }

          .blog-card img {

            width: 100%;

            height: 320px;

            object-fit: cover;

            transition:
              box-shadow 0.4s ease;

            border-radius: 12px;

            display: block;
          }

          .blog-card:hover img {

            box-shadow:
              0 10px 30px
              rgba(0,0,0,0.20);
          }

          /* MODAL */

          .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            background: rgba(255, 255, 255, 0.08);

            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);

            display: flex;
            justify-content: center;
            align-items: center;

            z-index: 9999;

            animation: fadeIn 0.25s ease;

            padding: 20px;
          }

          .modal-image {

            max-width: 82%;

            max-height: 88%;

            border-radius: 18px;

            animation:
              zoomIn 0.35s ease;

            object-fit: contain;

            display: block;
          }

          .nav-btn {

            position: absolute;

            top: 50%;

            transform: translateY(-50%);

            width: 70px;

            height: 70px;

            border-radius: 50%;

            border:
              2px solid
              rgba(255,255,255,0.35);

            background:
              rgba(255,255,255,0.12);

            backdrop-filter: blur(8px);

            -webkit-backdrop-filter: blur(8px);

            color: #276842;

            font-size: 38px;

            cursor: pointer;

            transition: 0.3s ease;

            z-index: 10000;

            display: flex;

            justify-content: center;

            align-items: center;
          }

          .nav-btn:hover {

            background:
              rgba(255,255,255,0.22);

            border-color: #276842;

            transform:
              translateY(-50%)
              scale(1.05);
          }

          .left-btn {

            left: 40px;
          }

          .right-btn {

            right: 70px;
          }

          .close-btn {

            position: absolute;

            top: 25px;

            right: 70px;

            width: 62px;

            height: 62px;

            border: none;

            border-radius: 50%;

            background:
              rgba(255,255,255,0.15);

            backdrop-filter: blur(6px);

            color: white;

            font-size: 22px;

            cursor: pointer;

            transition: 0.3s ease;

            z-index: 10001;

            display: flex;

            justify-content: center;

            align-items: center;

            color: #276842;
          }

          .close-btn:hover {

            background:
              rgba(255,255,255,0.25);

            transform: scale(1.05);
          }

          /* WHATSAPP */

          .whatsapp-float {

            position: fixed;

            bottom: 25px;

            right: 25px;

            width: 52px;

            height: 52px;

            background: #25D366;

            color: white;

            border-radius: 50%;

            display: flex;

            justify-content: center;

            align-items: center;

            font-size: 28px;

            text-decoration: none;

            z-index: 99999;

            box-shadow:
              0 0 10px
              rgba(37,211,102,0.7),

              0 0 20px
              rgba(37,211,102,0.5),

              0 0 30px
              rgba(37,211,102,0.3);
          }

          /* ANIMATIONS */

          @keyframes zoomIn {

            from {

              transform: scale(0.7);

              opacity: 0;
            }

            to {

              transform: scale(1);

              opacity: 1;
            }

          }

          @keyframes fadeIn {

            from {

              opacity: 0;
            }

            to {

              opacity: 1;
            }

          }

          /* TABLET */

          @media (max-width: 1000px) {

            .allblogs-wrapper {

              padding:
                100px 35px 50px !important;
            }

            .blogs-grid {

              grid-template-columns:
                repeat(2, 1fr);

              gap: 25px !important;
            }

            .blog-card img {

              height: 280px;
            }

            .left-btn {

              left: 15px;
            }

            .right-btn {

              right: 35px;
            }

            .close-btn {

              right: 35px;
            }

          }

          /* MOBILE */

          @media (max-width: 700px) {

            .allblogs-wrapper {

              padding:
                80px 20px 40px !important;
            }

            .blogs-grid {

              grid-template-columns: 1fr;

              gap: 22px !important;
            }

            .blog-card {

              border-radius: 14px !important;
            }

            .blog-card img {

              height: 250px;
            }

            .nav-btn {

              width: 50px;

              height: 50px;

              font-size: 26px;
            }

            .left-btn {

              left: 8px;
            }

            .right-btn {

              right: 70px;
            }

            .close-btn {

              width: 42px;

              height: 42px;

              font-size: 18px;

              top: 15px;

              right: 15px;
            }

            .modal-image {

              max-width: 78%;

              max-height: 82%;
            }

            .whatsapp-float {

              width: 48px;

              height: 48px;

              font-size: 24px;

              bottom: 20px;

              right: 20px;
            }

          }

          /* SMALL MOBILE */

          @media (max-width: 480px) {

            .allblogs-wrapper {

              padding:
                75px 15px 35px !important;
            }

            .blog-card img {

              height: 220px;
            }

            .allblogs-title {

              margin-bottom: 35px !important;
            }

            .nav-btn {

              width: 44px;

              height: 44px;

              font-size: 22px;
            }

            .left-btn {

              left: 5px;
            }

            .right-btn {

              right: 40px;
            }

            .close-btn {

              right: 30px;

              top: 12px;
            }

            .modal-image {

              border-radius: 12px;

              max-width: 75%;
            }

          }

        `}</style>

      </div>

      <Footer />

    </>
  )
}

export default Allblogs