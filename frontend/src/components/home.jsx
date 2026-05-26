import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Home() {

  const [slideIndex, setSlideIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {

    window.history.scrollRestoration = 'manual'

    setTimeout(() => {

      window.scrollTo(0, 0)

    }, 0)

  }, [])

  const slides = [
    "/wallpapers/number1.png",
    "/fabric-rolls.png",
    "/wallpapers/number3.png"
  ]

  const texts = [
    "Durable Non-Woven Solutions",
    "Efficient Industrial Materials",
    "Premium Technical Textile Solutions"
  ]

  useEffect(() => {

    const interval = setInterval(() => {
      nextSlide()
    }, 30000)

    return () => clearInterval(interval)

  }, [slideIndex])

  useEffect(() => {

    const textInterval = setInterval(() => {

      setFade(false)

      setTimeout(() => {

        setTextIndex((prev) =>
          (prev + 1) % texts.length
        )

        setFade(true)

      }, 400)

    }, 3000)

    return () => clearInterval(textInterval)

  }, [])

  const nextSlide = () => {

    setSlideIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    )

  }

  const prevSlide = () => {

    setSlideIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    )

  }

  return (

    <section
      id="home"
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        margin: '0',
        padding: '0',
        marginTop: '20px'
      }}
    >


      <div
        style={{
          display: 'flex',
          width: `${slides.length * 100}%`,
          height: '100%',
          transform: `translateX(-${slideIndex * (100 / slides.length)}%)`,
          transition: 'transform 1s ease-in-out'
        }}
      >

        {slides.map((image, i) => (

          <div
            key={i}
            style={{
              width: `${100 / slides.length}%`,
              height: '100%',
              position: 'relative',
              flexShrink: 0
            }}
          >

            <img
              src={image}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />


            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.45)'
              }}
            />

          </div>

        ))}

      </div>


      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#fff',
          zIndex: 5,
          padding: '0 20px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >

        <h1
          style={{
            fontSize: 'clamp(26px, 5vw, 42px)',
            marginBottom: '15px',
            letterSpacing: '1px',
            maxWidth: '1100px',
            lineHeight: '1.2',
            padding: '0 10px'
          }}
        >
          SUNRAISE TECHNOTEX PRIVATE LIMITED
        </h1>

        <h2
          style={{
            fontSize: 'clamp(20px, 4vw, 38px)',
            marginBottom: '20px',
            opacity: fade ? 1 : 0,
            transition: 'opacity 0.4s ease-in-out',
            minHeight: '50px',
            lineHeight: '1.3',
            padding: '0 10px'
          }}
        >
          {texts[textIndex]}
        </h2>

        <p
          style={{
            fontSize: 'clamp(14px, 2vw, 20px)',
            maxWidth: '650px',
            lineHeight: '1.8',
            padding: '0 10px'
          }}
        >
          Leading manufacturer of high-quality non-woven felt &
          textile solutions for diverse industrial needs.
        </p>

        <button
          style={{
            marginTop: '30px',
            padding: '14px 30px',
            fontSize: '15px',
            backgroundColor: '#276842',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: '0.3s',
            minHeight: '48px'
          }}
          onMouseEnter={(e) => {
            if (window.innerWidth > 768) {
              e.target.style.transform = 'scale(1.05)'
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)'
          }}
          onClick={() => {
            document
              .getElementById('contact')
              ?.scrollIntoView({
                behavior: 'smooth'
              })
          }}
        >
          Get in Touch
        </button>

      </div>


      <button
        onClick={prevSlide}
        style={leftArrow}
      >
        <FaChevronLeft />
      </button>

      {/* RIGHT BUTTON */}

      <button
        onClick={nextSlide}
        style={rightArrow}
      >
        <FaChevronRight />
      </button>


      <div style={dotsContainer}>

        {slides.map((_, i) => (

          <div
            key={i}
            onClick={() => setSlideIndex(i)}
            style={{
              ...dotStyle,
              opacity: i === slideIndex ? 1 : 0.5,
              transform:
                i === slideIndex
                  ? 'scale(1.2)'
                  : 'scale(1)'
            }}
          />

        ))}

      </div>


      <style>
        {`
          @media (max-width: 1024px) {

            #home {
              height: 90vh;
            }

          }

          @media (max-width: 768px) {

            #home {
              height: 85vh;
              margin-top: 0;
            }

          }

          @media (max-width: 600px) {

            #home {
              height: 100vh;
            }

          }

          @media (max-width: 768px) {

            .slider-arrow {
              width: 42px !important;
              height: 42px !important;
              font-size: 15px !important;
            }

          }

          @media (max-width: 480px) {

            .slider-arrow {
              width: 38px !important;
              height: 38px !important;
              font-size: 13px !important;
            }

          }

          @media (max-width: 768px) {

            .slider-arrow-left {
              left: 10px !important;
            }

            .slider-arrow-right {
              right: 10px !important;
            }

          }

          @media (max-width: 480px) {

            .slider-dots {
              bottom: 20px !important;
              gap: 8px !important;
            }

            .slider-dot {
              width: 10px !important;
              height: 10px !important;
            }

          }

        `}
      </style>

    </section>

  )
}

export default Home

const leftArrow = {
  position: 'absolute',
  left: '25px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: 'none',
  background: 'rgba(255,255,255,0.15)',
  color: '#fff',
  cursor: 'pointer',
  backdropFilter: 'blur(5px)',
  fontSize: '18px',
  transition: '0.3s'
}

leftArrow.className = 'slider-arrow slider-arrow-left'

const rightArrow = {
  position: 'absolute',
  right: '25px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: 'none',
  background: 'rgba(255,255,255,0.15)',
  color: '#fff',
  cursor: 'pointer',
  backdropFilter: 'blur(5px)',
  fontSize: '18px',
  transition: '0.3s'
}

rightArrow.className = 'slider-arrow slider-arrow-right'

const dotsContainer = {
  position: 'absolute',
  bottom: '30px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '12px',
  zIndex: 10
}

dotsContainer.className = 'slider-dots'

const dotStyle = {
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  background: '#fff',
  cursor: 'pointer',
  transition: '0.3s'
}

dotStyle.className = 'slider-dot'