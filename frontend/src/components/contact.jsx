import { useState } from 'react'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa'

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.phone.length !== 10) {
      alert("Phone number must be exactly 10 digits");
      setLoading(false);
      return;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/contact/submit/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (data.status === 'success') {
        setShowSuccess(true);

        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });

        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Backend may not be running.");
    }

    setLoading(false);
  };

  return (

    <section
      id="contact"
      className="section"
      style={{
        background: '#f5f5f2',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Times New Roman", Times, serif',
        position: 'relative',

        /* FIXED SPACING */
        marginTop: '  0px',

        padding: '120px 80px 70px',

        overflow: 'hidden',
        scrollMarginTop: '-40px'
      }}
    >


      {showSuccess && (

        <div className="success-popup" style={popupStyle}>

          Thank you for reaching out.
          Your message has been successfully submitted.
          Our team will get back to you shortly.

        </div>

      )}

      {/* TITLE */}

      <div
        className="contact-title-section"
        style={{
          textAlign: 'center',
          marginBottom: '80px',
          transform: 'translateY(0px)',
          width: '100%'
        }}
      >

        <h1
          className="contact-main-title"
          style={{
            fontSize: 'clamp(32px, 5vw, 40px)',
            marginBottom: '15px',
            color: '#276842',
            lineHeight: '1.2'
          }}
        >
          Contact Us
        </h1>

        <p
          className="contact-subtitle"
          style={{
            fontSize: '18px',
            color: '#6c757d',
            lineHeight: '30px',
            maxWidth: '700px',
            margin: '0 auto'
          }}
        >
          We'd love to hear from you.
          Reach out for inquiries, quotes, or partnerships.
        </p>

      </div>


      <div
        className="contact-main-wrapper"
        style={{
          display: 'flex',
          gap: '60px',
          width: '100%',
          maxWidth: '1100px',
          transform: 'translateY(0px)',
          alignItems: 'flex-start'
        }}
      >


        <div
          className="contact-info-side"
          style={{
            flex: 1
          }}
        >


          <div
            className="contact-info-box"
            style={{
              display: 'flex',
              marginBottom: '35px'
            }}
          >

            <div style={iconBox}>
              <FaMapMarkerAlt />
            </div>

            <div>

              <h3 style={{heading,
                color: '#276842',
                textAlign: 'left'

              }}>
                Address
              </h3>

              <div style={text}>
                <div>Sunraise Technotex Pvt Ltd</div>
                <div>#1/84 P-5, Kallapalayam</div>
                <div>to Peedampalli Road</div>
                <div>Kallapalayam Village</div>
                <div>Coimbatore – 641201</div>
                <div>Tamilnadu, India</div>
              </div>

            </div>

          </div>


          <div
            className="contact-info-box"
            style={{
              display: 'flex',
              marginBottom: '35px'
            }}
          >

            <div style={iconBox}>
              <FaPhoneAlt />
            </div>

            <div>

              <h3 style={{heading,
                color: '#276842',
                textAlign: 'left'

              }}>
                Phone
              </h3>

              <p style={text}>
                9786005252,
              </p>
              <p style={text}>
                7702711109
              </p>

            </div>

          </div>


          <div
            className="contact-info-box"
            style={{
              display: 'flex'
            }}
          >

            <div style={iconBox}>
              <FaEnvelope />
            </div>

            <div>

              <h3 style={{heading,
                color: '#276842',
                textAlign: 'left'
              }}>
                Email
              </h3>

              <p style={text}>
                info@sunraise.co.in
              </p>

            </div>

          </div>

        </div>


        <div
          className="contact-form-side"
          style={{
            flex: 1
          }}
        >

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={inputStyle}
              required
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value) && value.length <= 10) {
                  setFormData({
                    ...formData,
                    phone: value
                  });
                }
              }}
              placeholder="Phone Number"
              style={inputStyle}
              required
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              style={inputStyle}
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              style={textareaStyle}
              required
            />

            <button
              type="submit"
              style={buttonStyle}
              disabled={loading}
            >

              {loading
                ? "Sending..."
                : "Send Message"}

            </button>

          </form>

        </div>

      </div>


      <style>
        {`

          /* TABLET */

          @media (max-width: 1024px) {

            #contact {
              padding: 100px 40px 60px !important;
            }

            .contact-main-wrapper {
              gap: 40px !important;
            }

          }

          /* MOBILE */

          @media (max-width: 768px) {

            #contact {

              /* IMPORTANT FIX */
              margin-top: 0 !important;

              padding: 80px 20px 50px !important;

              min-height: auto !important;
            }

            .contact-title-section {
              margin-bottom: 50px !important;
            }

            .contact-main-wrapper {

              flex-direction: column !important;

              gap: 45px !important;

              width: 100% !important;
            }

            .contact-main-title {
              font-size: 34px !important;
            }

            .contact-subtitle {
              font-size: 16px !important;
              line-height: 28px !important;
            }

            .contact-info-side,
            .contact-form-side {
              width: 100% !important;
            }

            .contact-info-box {
              align-items: flex-start !important;
            }

            .success-popup {

              width: calc(100% - 40px) !important;

              left: 20px !important;

              right: 20px !important;

              top: 20px !important;

              text-align: center !important;

              font-size: 14px !important;

              padding: 14px 18px !important;
            }

          }

          /* SMALL MOBILE */

          @media (max-width: 480px) {

            #contact {
              padding: 75px 15px 45px !important;
            }

            .contact-main-title {
              font-size: 30px !important;
            }

            .contact-subtitle {
              font-size: 15px !important;
              line-height: 26px !important;
            }

          }

        `}
      </style>

    </section>

  )
}

export default Contact



const popupStyle = {

  position: 'absolute',

  top: '120px',

  background: '#276842',

  color: '#fff',

  padding: '15px 25px',

  borderRadius: '8px',

  fontSize: '16px',

  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',

  zIndex: 1000,

  maxWidth: '700px'

}

const iconBox = {

  width: '50px',

  height: '50px',

  background: '#e6f0ea',

  borderRadius: '10px',

  display: 'flex',

  justifyContent: 'center',

  alignItems: 'center',

  marginRight: '15px',

  color: '#276842',

  flexShrink: 0,

  fontSize: '18px'

}

const heading = {

  fontSize: '22px',

  marginBottom: '8px',

  color: '#222'

}

const text = {

  fontSize: '16px',

  color: '#6c757d',

  lineHeight: '30px',
  textAlign: 'left'

}

const inputStyle = {

  padding: '15px',

  borderRadius: '10px',

  border: '1px solid #ccc',

  fontSize: '16px',

  width: '100%',

  backgroundColor: '#fff',

  color: '#000',

  fontFamily: '"Times New Roman", Times, serif',

  outline: 'none',

  minHeight: '52px'

}

const textareaStyle = {

  padding: '15px',

  borderRadius: '10px',

  border: '1px solid #ccc',

  fontSize: '16px',

  width: '100%',

  backgroundColor: '#fff',

  color: '#000',

  fontFamily: '"Times New Roman", Times, serif',

  outline: 'none',

  resize: 'vertical',

  minHeight: '140px'

}

const buttonStyle = {

  padding: '15px',

  backgroundColor: '#276842',

  color: 'white',

  border: 'none',

  borderRadius: '10px',

  fontSize: '18px',

  cursor: 'pointer',

  minHeight: '54px',

  fontWeight: 'bold',

  transition: '0.3s ease'

}