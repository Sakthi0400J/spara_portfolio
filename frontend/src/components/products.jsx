import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Products() {

  useEffect(() => {

    document.documentElement.scrollTop = 120
    document.body.scrollTop = 120

  }, [])

  const navigate = useNavigate()

  const featuredProducts = [
    {
      image: "/public/products/sunraise image/hepafilteronly.png",
      name: "HEPA Air Filter",
      short:
        "Medical-grade biodegradable HEPA filter with advanced air purification performance."
    },

    {
      image: "/products/sunraise image/Comforter.png",
      name: "Comforter",
      short:
        "Luxuriously soft all-season comforter crafted with eco-friendly organic fibers."
    },

    {
      image: "/products/sunraise image/winter jacket (2).png",
      name: "Winter Jacket",
      short:
        "Heavy-duty winter jacket designed for warmth, comfort, and durability."
    }
  ]

  return (
    <section
      id="products"
      className="section"
      style={{
        background: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',

        padding: '200px 80px 60px',

        minHeight: '100vh',

        marginTop: '0px',

        position: 'relative',
        zIndex: 1
      }}
    >


      <h1
        className="products-title"
        style={{
          color: '#276842',
          marginBottom: '8px',
          fontSize: 'clamp(28px, 5vw, 34px)',
          textAlign: 'center',
          marginTop: '-110px',
          lineHeight: '1.2'
        }}
      >
        Featured Products
      </h1>

      <p
        className="products-subtitle"
        style={{
          fontSize: '16px',
          color: '#555',
          marginBottom: '30px',
          textAlign: 'center',
          maxWidth: '700px',
          lineHeight: '28px',
          padding: '0 10px'
        }}
      >
        Explore some of our premium non-woven textile and industrial
        fabric solutions
      </p>


      <div
        className="products-grid"
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '22px',
          marginBottom: '28px'
        }}
      >

        {featuredProducts.map((product, index) => (

          <div
            key={index}
            style={{
              background: '#fff',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 6px 16px rgba(0,0,0,0.06)',
              transition: '0.3s ease',
              cursor: 'pointer',
              border: '2px solid transparent',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
            onMouseOver={(e) => {

              if (window.innerWidth > 768) {

                e.currentTarget.style.transform =
                  'translateY(-6px)'

                e.currentTarget.style.border =
                  '2px solid #276842'

                e.currentTarget.style.boxShadow =
                  '0 10px 22px rgba(0,0,0,0.10)'
              }

            }}
            onMouseOut={(e) => {

              e.currentTarget.style.transform =
                'translateY(0)'

              e.currentTarget.style.border =
                '2px solid transparent'

              e.currentTarget.style.boxShadow =
                '0 6px 16px rgba(0,0,0,0.06)'

            }}
          >

            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover'
              }}
            />

            <div
              style={{
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}
            >

              <h2
                style={{
                  color: '#276842',
                  marginBottom: '10px',
                  fontSize: '20px',
                  minHeight: '48px',
                  lineHeight: '1.4'
                }}
              >
                {product.name}
              </h2>

              <p
                style={{
                  color: '#555',
                  fontSize: '16px',
                  lineHeight: '28px',
                  flexGrow: 1
                }}
              >
                {product.short}
              </p>

            </div>

          </div>

        ))}

      </div>


      <div
        className="button-row"
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '90px'
        }}
      >

        <button
          onClick={() => navigate('/products-page')}
          style={{
            padding: '13px 30px',
            fontSize: '15px',
            background: '#276842',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.3s ease',
            fontWeight: 'bold',
            minHeight: '48px'
          }}
          onMouseOver={(e) => {

            if (window.innerWidth > 768) {

              e.target.style.transform = 'scale(1.05)'
              e.target.style.background = '#1f5635'

            }

          }}
          onMouseOut={(e) => {

            e.target.style.transform = 'scale(1)'
            e.target.style.background = '#276842'

          }}
        >
          View All Products
        </button>

      </div>


      <h2
        className="supplier-title"
        style={{
          color: '#276842',
          fontSize: 'clamp(24px, 4vw, 30px)',
          marginBottom: '30px',
          textAlign: 'center',
          marginTop: '0px',
          lineHeight: '1.3'
        }}
      >
        Our Raw Material Suppliers
      </h2>


      <div
        className="supplier-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          width: '100%',
          maxWidth: '1200px',
          justifyItems: 'center',
          alignItems: 'center'
        }}
      >


        <img
          src="/raw_material_suppliers/Screenshot 2026-05-24 130824.png"
          alt="supplier"
          style={{
            ...logoStyle,
            width: '200px',
            height: '100px'
          }}
        />

        <img
          src="/raw_material_suppliers/Screenshot 2026-05-24 113747.png"
          alt="supplier"
          style={{
            ...logoStyle,
            width: '150px',
            height: '80px'
          }}
        />

        <img
          src="/raw_material_suppliers/Screenshot 2026-05-24 113904.png"
          alt="supplier"
          style={logoStyle}
        />


        <div
          className="bottom-suppliers"
          style={{
            gridColumn: '1 / 4',
            display: 'flex',
            justifyContent: 'center',
            gap: '80px',
            width: '100%',
            flexWrap: 'wrap'
          }}
        >

          <img
            src="/raw_material_suppliers/Screenshot 2026-05-24 114044.png"
            alt="supplier"
            style={{
              ...logoStyle,
              width: '200px',
              height: '100px'
            }}
          />

          <img
            src="/raw_material_suppliers/Screenshot 2026-05-24 114131.png"
            alt="supplier"
            style={{
              ...logoStyle,
              width: '150px',
              height: '80px'
            }}
          />

        </div>

      </div>


      <style>
        {`

          /* TABLET */

          @media (max-width: 1024px) {

            #products {
              padding: 100px 40px 50px !important;
            }

            .products-grid {
              grid-template-columns:
                repeat(auto-fit, minmax(240px, 1fr)) !important;
            }

            .supplier-grid {
              gap: 25px !important;
            }

            .bottom-suppliers {
              gap: 50px !important;
            }

          }

          /* MOBILE */

          @media (max-width: 768px) {

            #products {

              /* IMPORTANT FIX */
              margin-top: 0 !important;

              padding: 80px 20px 50px !important;

              min-height: auto !important;
            }

            .products-title {
              margin-top: 0 !important;
            }

            .products-subtitle {
              font-size: 15px !important;
              line-height: 26px !important;
              margin-bottom: 24px !important;
            }

            .products-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }

            .button-row {
              justify-content: center !important;
              margin-bottom: 70px !important;
            }

            .supplier-grid {
              grid-template-columns: 1fr !important;
              gap: 30px !important;
            }

            .bottom-suppliers {
              grid-column: auto !important;
              flex-direction: column !important;
              align-items: center !important;
              gap: 30px !important;
            }

          }

          /* SMALL MOBILE */

          @media (max-width: 480px) {

            #products {
              padding: 75px 15px 45px !important;
            }

          }

        `}
      </style>

    </section>
  )
}

export default Products

const logoStyle = {
  width: '180px',
  height: '70px',
  objectFit: 'contain',
  opacity: 0.85,
  transition: '0.3s ease',
  cursor: 'pointer',
  maxWidth: '100%'
}