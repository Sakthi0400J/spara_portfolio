import { useState, useEffect } from 'react'
import {
  FaLeaf,
  FaShieldAlt,
  FaRecycle
} from 'react-icons/fa'

function About() {

  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [featureHover, setFeatureHover] = useState(null)

  const [experience, setExperience] = useState(0)
  const [products, setProducts] = useState(0)
  const [clients, setClients] = useState(0)

  useEffect(() => {

    let exp = 0
    let prod = 0
    let cli = 0

    const interval = setInterval(() => {

      if (exp < 10) {
        exp += 1
        setExperience(exp)
      }

      if (prod < 5000) {
        prod += 100
        setProducts(prod)
      }

      if (cli < 200) {
        cli += 10
        setClients(cli)
      }

      if (exp >= 10 && prod >= 5000 && cli >= 200) {
        clearInterval(interval)
      }

    }, 40)

    return () => clearInterval(interval)

  }, [])

  return (
    <section
      id="about"
      className="section"
      style={{
        background: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"Times New Roman", Times, serif',
        color: '#2f2c2c',
        paddingBottom: '50px'
      }}
    >

      <div
        className="full-width about-container"
        style={{
          transform: 'translateY(-40px)',
          fontFamily: '"Times New Roman", Times, serif',
          width: '100%'
        }}
      >


        <h1
          className="about-title"
          style={{
            fontSize: 'clamp(28px, 5vw, 36px)',
            marginBottom: '25px',
            textAlign: 'center',
            color: '#276842',
            lineHeight: '1.2'
          }}
        >
          About Us
        </h1>

        

        <p className="about-paragraph">
          Spara Technotex Private Limited is a one of the leading needle punched fabrics manufacturer company in india located  in Coimbatore, Tamil Nadu
        </p>

        <p className="about-paragraph">
          Established in 2018, we specialize in delivering durable,
          customizable, and industry-grade non-woven fabric solutions
          designed to meet global quality standards. With advanced
          manufacturing infrastructure and a production capacity exceeding
          <b> 200,000 meters per month</b>, we ensure consistent supply,
          precision, and performance.
        </p>

        <p className="about-paragraph">
          Our products are widely used across industries such as
          automotive textiles, filtration fabrics, footwear materials,
          packaging solutions, and home furnishing textiles.
        </p>

        <p
          className="about-paragraph"
          style={{ marginBottom: '70px' }}
        >
          We combine innovation, technical expertise, and strict quality
          control to deliver solutions that perform reliably in demanding
          environments.
        </p>

        <h2 style={sectionHeading}>
          Our Promise
        </h2>

        <p className="about-paragraph">
          We are committed to delivering premium non-woven textile solutions
          that combine quality, consistency, and cost efficiency.
        </p>


        <p
          className="about-paragraph"
          style={{ marginBottom: '40px' }}
        >
          We ensure reliable product performance, on-time delivery,
          transparent communication, and continuous innovation.
        </p>


        <h2 style={sectionHeading}>
          Our Expertise
        </h2>

        <p
          className="about-paragraph"
          style={{
            marginBottom: '40px'
          }}
        >
          Non-woven fabric manufacturers in India, Polyester felt manufacturers,
          Technical textile manufacturers, Industrial non-woven fabric suppliers,
          Automotive textile suppliers, Filtration fabric manufacturers,
          Non-woven fabric exporters India, High-performance textile solutions,
          Coimbatore textile manufacturers, Custom non-woven fabric solutions.
        </p>


        <h2 style={sectionHeading}>
          Let’s Work Together
        </h2>

        <p className="about-paragraph">
          Looking for a reliable partner for non-woven textiles or
          polyester felt solutions?
        </p>

        <p className="about-paragraph">
          Our organization delivers precision, scalability,
          and performance you can trust.
        </p>

        <p className="about-paragraph">
          Contact us today to discuss your requirements
          and get customized solutions.
        </p>


        <div
          className="feature-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '22px',
            marginBottom: '70px'
          }}
        >


          <div
            onMouseEnter={() => {
              if (window.innerWidth > 768) {
                setFeatureHover(0)
              }
            }}
            onMouseLeave={() => setFeatureHover(null)}
            style={{
              background: '#fff',
              borderRadius: '14px',
              padding: '28px 20px',
              textAlign: 'center',
              border: '1px solid #e5e5e5',
              transition: 'all 0.35s ease',
              transform:
                featureHover === 0
                  ? 'scale(1.05)'
                  : 'scale(1)',
              boxShadow:
                featureHover === 0
                  ? '0 15px 35px rgba(0,0,0,0.15)'
                  : '0 5px 15px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }}
          >

            <div style={iconCircle}>
              <FaLeaf />
            </div>

            <h2 style={featureHeading}>
              Eco-Friendly
            </h2>

            <p style={featureText}>
              Sustainable manufacturing processes with
            </p>
            <p style={featureText}>
              minimal environmental impact.
            </p>

          </div>


          <div
            onMouseEnter={() => {
              if (window.innerWidth > 768) {
                setFeatureHover(1)
              }
            }}
            onMouseLeave={() => setFeatureHover(null)}
            style={{
              background: '#fff',
              borderRadius: '14px',
              padding: '28px 20px',
              textAlign: 'center',
              border: '1px solid #e5e5e5',
              transition: 'all 0.35s ease',
              transform:
                featureHover === 1
                  ? 'scale(1.05)'
                  : 'scale(1)',
              boxShadow:
                featureHover === 1
                  ? '0 15px 35px rgba(0,0,0,0.15)'
                  : '0 5px 15px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }}
          >

            <div style={iconCircle}>
              <FaShieldAlt />
            </div>

            <h2 style={featureHeading}>
              Quality Assured
            </h2>

            <p style={featureText}>
              Rigorous quality control at every step of production.
            </p>

          </div>


          <div
            onMouseEnter={() => {
              if (window.innerWidth > 768) {
                setFeatureHover(2)
              }
            }}
            onMouseLeave={() => setFeatureHover(null)}
            style={{
              background: '#fff',
              borderRadius: '14px',
              padding: '28px 20px',
              textAlign: 'center',
              border: '1px solid #e5e5e5',
              transition: 'all 0.35s ease',
              transform:
                featureHover === 2
                  ? 'scale(1.05)'
                  : 'scale(1)',
              boxShadow:
                featureHover === 2
                  ? '0 15px 35px rgba(0,0,0,0.15)'
                  : '0 5px 15px rgba(0,0,0,0.05)',
              cursor: 'pointer'
            }}
          >

            <div style={iconCircle}>
              <FaRecycle />
            </div>

            <h2 style={featureHeading}>
              Recyclable Materials
            </h2>

            <p style={featureText}>
              Products designed with recyclability and longevity in mind.
            </p>

          </div>

        </div>


        <div
          className="stats-wrapper"
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginBottom: '80px',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >

          <div style={statsBox}>
            <h1 style={statsNumber}>
              {experience}+
            </h1>

            <p style={statsText}>
              Years of Experience
            </p>
          </div>

          <div style={statsBox}>
            <h1 style={statsNumber}>
              {products.toLocaleString()}+
            </h1>

            <p style={statsText}>
              Products Delivered
            </p>
          </div>

          <div style={statsBox}>
            <h1 style={statsNumber}>
              {clients}+
            </h1>

            <p style={statsText}>
              Happy Clients
            </p>
          </div>

        </div>


        <h2 style={sectionHeading}>
          What Sets Us Apart
        </h2>

        <div
          className="apart-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '50px'
          }}
        >

          {[
            "Consistent Quality Assurance – Every product undergoes strict quality checks to ensure durability, uniformity, and high performance.",
            "Advanced Non-Woven Technology – We manufacture polyester non-woven felt and technical textiles with features like anti-static properties, waterproofing, and specialized coatings.",
            "Customized Textile Solutions – We deliver tailor-made fabric solutions to meet specific industrial requirements.",
            "High-Volume Production Capacity – Scalable manufacturing supports bulk orders and long-term supply needs.",
            "Multi-Industry Expertise – Serving automotive, filtration, footwear, packaging, and home décor sectors."
          ].map((item, i) => (

            <div
              key={i}
              onMouseEnter={() => {
                if (window.innerWidth > 768) {
                  setHoveredIndex(i)
                }
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow:
                  hoveredIndex === i
                    ? '0 6px 20px rgba(0,0,0,0.15)'
                    : '0 2px 10px rgba(0,0,0,0.05)',
                transform:
                  hoveredIndex === i
                    ? 'scale(1.05)'
                    : 'scale(1)',
                border:
                  hoveredIndex === i
                    ? '2px solid #276842'
                    : '2px solid transparent',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                lineHeight: '28px',
                fontSize: '16px'
              }}
            >
              {item}
            </div>

          ))}

        </div>


        

      </div>


      <style>
        {`

          .about-paragraph {
            font-size: 18px;
            margin-bottom: 20px;
            line-height: 32px;
            word-break: break-word;
          }

          /* TABLET */

          @media (max-width: 1024px) {

            .about-container {
              transform: translateY(-20px) !important;
            }

            .about-paragraph {
              font-size: 17px !important;
              line-height: 30px !important;
            }

          }

          /* MOBILE */

          @media (max-width: 768px) {

            #about {
              padding-bottom: 80px !important;
            }

            .about-container {
              transform: translateY(0px) !important;
            }

            .about-title {
              margin-bottom: 22px !important;
            }

            .about-paragraph {
              font-size: 16px !important;
              line-height: 30px !important;
              margin-bottom: 18px !important;
              text-align: left;
            }

            .feature-grid {
              grid-template-columns: 1fr !important;
              gap: 18px !important;
              margin-bottom: 55px !important;
            }

            .stats-wrapper {
              gap: 30px !important;
              margin-bottom: 60px !important;
            }

            .apart-grid {
              grid-template-columns: 1fr !important;
            }

          }

          /* SMALL MOBILE */
         

          @media (max-width: 480px) {

            .about-paragraph {
              font-size: 15px !important;
              line-height: 28px !important;
            }

          }

        `}
      </style>

    </section>
  )
}

export default About


const iconCircle = {
  width: '55px',
  height: '55px',
  borderRadius: '50%',
  background: '#edf3ee',
  color: '#276842',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '22px',
  margin: '0 auto 18px'
}

const featureHeading = {
  fontSize: '18px',
  marginBottom: '12px',
  color: '#1e1e1e',
  lineHeight: '1.4'
}

const featureText = {
  fontSize: '15px',
  lineHeight: '26px',
  color: '#6c757d'
}

const statsBox = {
  textAlign: 'center',
  minWidth: '180px'
}

const statsNumber = {
  fontSize: 'clamp(28px, 5vw, 34px)',
  color: '#276842',
  marginBottom: '8px',
  fontWeight: 'bold'
}

const statsText = {
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '1.5'
}

const sectionHeading = {
  fontSize: 'clamp(24px, 4vw, 28px)',
  marginBottom: '20px',
  color: '#276842',
  lineHeight: '1.3'
}