import { useNavigate } from 'react-router-dom'

function Blogs() {

  const navigate = useNavigate()

  const images = [
    "/carosel/, Dynamic Technomedics.png",
    "/carosel/, Theni Gurukrishna.jpg",
    "/carosel/Amba Technotech.png",
    "/carosel/ikea logo.png",
    "/carosel/KARAM.png",
    "/carosel/Keen Shoes.webp",
    "/carosel/KH_Logo.png",
    "/carosel/kkpgroup_logo-1.png",
    "/carosel/Mohan Spindex.png",
    "/carosel/Premiere Fine Linens.png",
    "/carosel/Raenco.webp",
    "/carosel/Saint Goblin, logo.png",
    "/carosel/Screenshot 2026-05-05 144805.png",
  ]

  return (
    <section
      id="blogs"
      className="section"
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",

        padding: "95px 0px 40px",

        overflow: "hidden",

        marginTop: '0px',

        position: 'relative',
        zIndex: 1
      }}
    >


      <div
        className="blogs-top-section"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          alignItems: "center",
          gap: "30px",
          width: "100%",

          marginTop: "0px",

          padding: "0 80px"
        }}
      >


        <div className="blogs-left-content">

          <h1
            className="blogs-main-title"
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              lineHeight: "1.2",
              color: "#276842",
              marginBottom: "18px",
              fontWeight: "bold",
              marginTop: '0px',
            }}
          >
            Technical Textile Blogs
          </h1>

          <p
            className="blogs-paragraph"
            style={{
              fontSize: "22px",
              lineHeight: "38px",
              color: "#444",
              marginBottom: "18px",
              maxWidth: "750px"
            }}
          >
            Explore insights, innovations, and industry applications
            in non-woven fabrics, polyester felt, filtration systems,
            automotive textiles, sustainable materials, and technical
            textile manufacturing.
          </p>

          <p
            className="blogs-paragraph"
            style={{
              fontSize: "22px",
              lineHeight: "38px",
              color: "#444",
              marginBottom: "28px",
              maxWidth: "750px"
            }}
          >
            From industrial solutions to eco-friendly developments,
            our blogs showcase the latest trends, technologies,
            and practical applications powering modern textile industries.
          </p>


          <button
            onClick={() => navigate('/blogs-page')}
            style={{
              padding: '16px 42px',
              fontSize: '18px',
              background: '#276842',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: '0.3s ease',
              fontWeight: 'bold',
              minHeight: '52px'
            }}
            onMouseOver={(e) => {

              if (window.innerWidth > 768) {

                e.target.style.transform = 'scale(1.08)'
                e.target.style.background = '#1f5635'

              }

            }}
            onMouseOut={(e) => {

              e.target.style.transform = 'scale(1)'
              e.target.style.background = '#276842'

            }}
          >
            View All Blogs
          </button>

        </div>


        <div
          className="blogs-image-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: '0px',
          }}
        >

          <img
            src="/degradable fabric chatrt.png"
            alt="blogs"
            className="blogs-main-image"
            style={{
              width: "150%",
              maxWidth: "800px",
              objectFit: "contain",
              transform: "scale(1.05)"
            }}
          />

        </div>

      </div>


      <div
        className="clients-section"
        style={{
          width: "100%",
          marginTop: "35px"
        }}
      >

        <h2
          className="clients-title"
          style={{
            color: "#276842",
            marginBottom: "14px",
            fontSize: "clamp(28px, 5vw, 38px)",
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
            marginTop: '0px',
            lineHeight: '1.3'
          }}
        >
          Our Clients
        </h2>

        <div className="slider">

          <div className="slide-track">

            {images.map((img, index) => (
              <img key={index} src={img} alt="logo" />
            ))}

            {images.map((img, index) => (
              <img key={`dup-${index}`} src={img} alt="logo" />
            ))}

          </div>

        </div>

      </div>

      <style>{`

        .slider {
          overflow: hidden;
          width: 100%;
          padding: 10px 0;
        }

        .slide-track {
          display: flex;
          width: max-content;
          animation: scroll 22s linear infinite;
          align-items: center;
        }

        .slide-track img {
          height: 85px;
          object-fit: contain;
          flex-shrink: 0;
          padding: 0 45px;
          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
          opacity: 0.9;
          max-width: 220px;
        }

        .slide-track img:hover {
          transform: scale(1.12);
          opacity: 1;
        }

        @keyframes scroll {

          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }

        }

        /* TABLET */

        @media (max-width: 1100px) {

          .blogs-top-section {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 20px !important;
            padding: 0 40px !important;
          }

          .blogs-main-title {
            font-size: 50px !important;
            line-height: 60px !important;
          }

          .blogs-paragraph {
            margin-left: auto;
            margin-right: auto;
            font-size: 20px !important;
            line-height: 34px !important;
          }

          .blogs-image-wrapper {
            margin-top: 20px !important;
          }

          .blogs-main-image {
            width: 55% !important;
          }

        }

        /* MOBILE */

        @media (max-width: 768px) {

          #blogs {

            padding: 80px 0px 40px !important;

            min-height: auto !important;
          }

          .blogs-top-section {
            padding: 0 20px !important;
            gap: 10px !important;
          }

          .blogs-main-title {
            font-size: 36px !important;
            line-height: 46px !important;
            margin-bottom: 20px !important;
          }

          .blogs-paragraph {
            font-size: 16px !important;
            line-height: 30px !important;
            margin-bottom: 22px !important;
          }

          .blogs-main-image {
            width: 85% !important;
            max-width: 340px !important;
            transform: scale(1) !important;
          }

          .clients-section {
            margin-top: 50px !important;
          }

          .slide-track img {
            height: 60px;
            padding: 0 25px;
            max-width: 140px;
          }

        }

        /* SMALL MOBILE */

        @media (max-width: 480px) {

          #blogs {
            padding: 75px 0px 35px !important;
          }

          .blogs-top-section {
            padding: 0 15px !important;
          }

          .blogs-main-title {
            font-size: 30px !important;
            line-height: 40px !important;
          }

          .blogs-paragraph {
            font-size: 15px !important;
            line-height: 28px !important;
          }

          .slide-track img {
            height: 52px;
            padding: 0 18px;
            max-width: 120px;
          }

        }

      `}</style>

    </section>
  )
}

export default Blogs