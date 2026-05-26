import { useState, useEffect } from 'react'
import Footer from './components/footer'
import { FaWhatsapp } from 'react-icons/fa'

function AllProducts() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const products = [

    {
      image: "/public/products/sunraise image/all type of cushion.png",
      name: "All Types of Cushion",
      short:
        "Eco-friendly multi-layer cushioning solution for safe packaging.",
      details:
        "Advanced cushioning system designed for modern packaging needs, combining multiple protective layers to absorb shock, vibration, and compression during transport. Manufactured using lightweight, recyclable and eco friendly fiber-based materials, this solution ensures maximum protection for fragile goods such as electronics, glassware, machinery components, and industrial equipment. Its flexible structure allows it to adapt to different product shapes while maintaining durability and impact resistance across supply chains."
    },

    {
      image: "/public/products/sunraise image/Comforter.png",
      name: "Comforter",
      short:
        "Soft, breathable all-season comfort bedding solution.",
      details:
        "Premium comforter designed using high-quality non-woven fiber technology to deliver superior softness, breathability, and thermal balance. Engineered for year-round use, it maintains warmth during cold conditions while remaining lightweight and comfortable in warmer climates. The eco friendly fiber construction ensures long-lasting durability and hygiene, making it ideal for residential, hospitality, and healthcare bedding applications."
    },

    {
      image: "/public/products/sunraise image/hepafilteronly.png",
      name: "HEPA Air Filter",
      short:
        "High-efficiency air purification filtration media.",
      details:
        "Advanced HEPA-grade filtration material engineered for superior air purification performance. It effectively captures microscopic particles including dust, allergens, pollutants, and airborne contaminants while maintaining smooth airflow efficiency. Widely used in medical environments, HVAC systems, clean rooms, automotive air systems, and industrial air filtration units, it ensures cleaner and safer breathing environments with consistent long-term performance."
    },

    {
      image: "/public/products/sunraise image/Mesh Filter.png",
      name: "Mesh Filter",
      short:
        "Durable mesh-based filtration material for industrial use.",
      details:
        "Strong and flexible mesh filtration fabric designed for efficient separation of particles in air and liquid filtration systems. Its woven structure provides excellent airflow while effectively trapping dust, debris, and contaminants. Suitable for HVAC systems, industrial machinery protection, automotive filtration, and liquid straining applications, this material ensures durability, stability, and reliable filtration performance in demanding environments."
    },

    {
      images: [
        "/products/sunraise image/non-woven_needle_punched/Gemini_Generated_Image_2h6ato2h6ato2h6a.png",
        "/products/sunraise image/non-woven_needle_punched/Gemini_Generated_Image_exwwovexwwovexww.png",
        "/products/sunraise image/non-woven_needle_punched/non woven fab.png"
      ],
      image: "/products/sunraise image/non-woven_needle_punched/Gemini_Generated_Image_2h6ato2h6ato2h6a.png",
      name: "Non-Woven Needle Punched Fabrics",
      short: "A thick, industrial-grade non-woven fabric mechanically needle-punched from 100% organic plant fibers—engineered for heavy-duty upholstery padding, geotextiles, and insulation while remaining 100% compostable.",
      details:
        "Replace synthetic poly-felt sheets with a highly resilient, plant-based alternative. Our non-durable Non-Woven Needle Punched Fabric is crafted by mechanically interlocking thousands of raw hemp and jute fibers with barbed needles, creating a dense, binder-free matrix. It offers exceptional load-bearing support, shock absorption, and acoustic dampening, making it an excellent structural backing for eco-furniture, protective padding, or agricultural weed barriers. Free from chemical resins or petroleum plastics, this heavy-duty material breaks down cleanly in active soil conditions once retired."
    },

    {
      image: "/public/products/sunraise image/micro dust filter padding.jpg",
      name: "Micro Dust Filter Padding",
      short:
        "High-density padding for fine dust and particle filtration.",
      details:
        "Specialized micro dust filtration padding engineered to capture ultra-fine particles while maintaining airflow balance. Its dense fiber structure traps dust, lint, and airborne contaminants efficiently, making it suitable for air filtration systems, industrial equipment, automotive interiors, and protective ventilation units. Built using eco friendly fiber technology, it ensures consistent filtration efficiency and long operational lifespan."
    },

    {
      image: "/public/products/sunraise image/Muffler Headrest.png",
      name: "Muffler Headrest",
      short:
        "Ergonomic cushioned headrest with vibration control.",
      details:
        "Comfort-focused headrest designed with advanced cushioning materials to provide neck support, vibration reduction, and enhanced seating comfort. Ideal for automotive and transport interiors, it combines soft-touch surface materials with durable internal padding for long-term usability. Its structure improves passenger comfort while contributing to noise dampening and ergonomic seating support in vehicles and mobility systems."
    },

    

    {
      image: "/public/products/sunraise image/shoe-lining.jpg",
      name: "Shoe Lining",
      short:
        "Comfortable and durable inner lining material for footwear.",
      details:
        "High-quality shoe lining fabric engineered to provide comfort, breathability, and durability inside footwear products. It helps absorb moisture, reduce friction, and enhance wearer comfort during prolonged use. Widely used in sports shoes, formal footwear, safety shoes, and industrial boots, this material ensures long-lasting performance and improved shoe structure support."
    },

    {
      image: "/public/products/sunraise image/sunraise-padding-material.jpg",
      name: "Padding Material",
      short:
        "Versatile cushioning material for industrial applications.",
      details:
        "Multi-purpose padding material designed for cushioning, insulation, and protective applications across various industries. It offers excellent shock absorption, flexibility, and structural support while maintaining lightweight properties. Commonly used in packaging, automotive interiors, furniture, and protective wrapping, it ensures reliable performance and durability in both commercial and industrial environments."
    },

    {
      image: "/public/products/sunraise image/super-bright-sponge-wipes.jpg",
      name: "Super Bright Sponge Wipes",
      short:
        "Highly absorbent cleaning wipes for industrial and domestic use.",
      details:
        "Advanced sponge wipe material designed for superior absorption, cleaning efficiency, and durability. It effectively removes dust, liquid, and contaminants from surfaces without leaving residue. Suitable for household cleaning, industrial maintenance, automotive detailing, and commercial hygiene applications, this material ensures high performance with long-lasting usability."
    },

    {
      image: "/public/products/sunraise image/winter jacket (2).png",
      name: "Winter Jacket",
      short:
        "Insulated protective jacket for cold weather conditions.",
      details:
        "High-performance winter jacket engineered for protection against extreme cold conditions. Built using layered textile technology with thermal insulation, wind resistance, and breathable outer fabric, it ensures maximum comfort and warmth. The eco friendly material selection enhances durability while maintaining lightweight wearability, making it suitable for outdoor work, travel, and winter environments."
    },

    {
    image: "/products/sunraise image/poly waddling  fabric.png",
    name: "Poly Waddling Fabric",
    short: "A lightweight, highly breathable plant-biopolymer wadding fabric that provides a smooth, low-profile drape for summer quilts and light outerwear without a single strand of plastic.",
    details:
      "Perfect for delicate sewing projects, our Light-Loft Poly Wadding Fabric mimics the soft density of low-ounce polyester batting using 100% renewable corn starch biopolymers. It resists bunching and migration, allowing for intricate quilting patterns down to 1/4 inch apart. Because it is completely plant-derived and bound mechanically without chemical glues, it prevents microplastic pollution during laundry cycles and breaks down beautifully in a backyard compost heap at the end of its life cycle."
  },

    {
    images: [
      "/products/sunraise image/disposable_cleaning_towels/Gemini_Generated_Image_agek6oagek6oagek.png",
      "/products/sunraise image/disposable_cleaning_towels/Gemini_Generated_Image_hokmtbhokmtbhokm.png",
      "/products/sunraise image/disposable_cleaning_towels/Gemini_Generated_Image_k0cdfvk0cdfvk0cd.png",
      "/products/sunraise image/disposable_cleaning_towels/Gemini_Generated_Image_riu4y4riu4y4riu4.png"
    ],
    image: "/products/sunraise image/disposable_cleaning_towels/Gemini_Generated_Image_agek6oagek6oagek.png",
    name: "Disposable Cleaning Towels",
    short:
      "Heavy-duty, ultra-absorbent disposable cleaning towels made from 100% organic bamboo fibers that handle tough household spills and compost completely in your backyard.",
    details:
      "Designed for a truly circular home, our Eco Disposable Cleaning Towels prove that quick convenience doesn't have to leave a permanent footprint. We utilize a highly breathable, lint-free matrix of unbleached organic cotton and bamboo cellulose to create a towel that is incredibly soft yet highly durable. Perfect for wiping down glass, polishing stainless steel, or cleaning up messy kitchen countertops, they prevent microplastic pollution entirely. When their job is done, their fully biodegradable design ensures they return cleanly to nature without leaving a trace."
  },


  {
    image: "/products/sunraise image/non-wovenpolyesterfabric.png",
    name: "Non-Woven Polyster Fabric",
    short: "A high-performance, non-woven bio-polyester sheet engineered entirely from renewable plant starches, offering excellent structural tensile strength and 100% home compostability.",
    details:
      "Upgrade your manufacturing or crafting projects with a truly sustainable alternative to petroleum-based synthetic fabrics. Our non-durable Non-Woven Polyester Fabric is created using advanced spunbond technology that fuses 100% plant-derived PLA biopolymers into a lightweight, uniform sheet. It delivers exceptional tear resistance, smooth texture, and fluid barrier performance, making it ideal for eco-bags, protective packaging, filtration layers, or garment linings. Entirely free of plastic resins or chemical finishes, this circular material returns cleanly to nature at the end of its life cycle."
  },

  {
    image: "/products/sunraise image/polyester-green-eco-friendly-scrub-pad-for-utensils-cleaning-purpose-389.jpg",
    name: "Polyster Green Scrub Pad",
    short: "A heavy-duty, grease-cutting green scrub pad crafted from 100% plant-derived bio-polyester that tackles tough, baked-on food without shedding synthetic microplastics down your drain.",
    details:
      "This minimalist green scrub pad offers maximum grease extraction and scrubbing efficiency with a radically minimized environmental footprint. Designed as a direct drop-in replacement for standard synthetic low-density polyethylene (LDPE) scouring pads, it utilizes a wet-laid organic cellulose and bio-fiber grid that holds dish soaps beautifully. It maintains tough structural resistance against tearing across its multi-week operational lifespan. When it finally reaches the end of its usable lifecycle, the entire structure naturally degrades in any active compost setup, closing the loop entirely."
  }


  ]

  const [selectedProduct, setSelectedProduct] = useState(products[0])

  const [currentImage, setCurrentImage] = useState(0)

  return (
    <>
      <div
        className="all-products-wrapper"
      >

        <h1 className="products-title">
          Our Products
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
          Comprehensive range of non-woven and textile solutions built for performance and sustainability.
        </p>

        <div className="products-layout">

          <div className="products-grid">

            {products.map((product, index) => (

              <div
                key={index}
                className={`product-card ${
                  selectedProduct.name === product.name ? 'active' : ''
                }`}
                onClick={() => {
                  setSelectedProduct(product)
                  setCurrentImage(0)
                }}
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <h3>{product.name}</h3>

                <p>{product.short}</p>

              </div>

            ))}

          </div>

          <div className="product-details">

            <div className="details-image-wrapper">

              {selectedProduct.images && (

                <button
                  className="image-arrow left"
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === 0
                        ? selectedProduct.images.length - 1
                        : prev - 1
                    )
                  }
                >
                  ❮
                </button>

              )}

              <img
                src={
                  selectedProduct.images
                    ? selectedProduct.images[currentImage]
                    : selectedProduct.image
                }
                alt={selectedProduct.name}
              />

              {selectedProduct.images && (

                <button
                  className="image-arrow right"
                  onClick={() =>
                    setCurrentImage((prev) =>
                      prev === selectedProduct.images.length - 1
                        ? 0
                        : prev + 1
                    )
                  }
                >
                  ❯
                </button>

              )}

            </div>

            <h2>{selectedProduct.name}</h2>

            <p>{selectedProduct.details}</p>

          </div>

        </div>

      </div>

      <a
        href="https://wa.me/919786005252"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>

      <Footer />

      <style>{`

        .all-products-wrapper {

          min-height: 100vh;

          padding: 20px 60px 60px;

          background: #f5f5f2;
        }

        .products-title {

          color: #276842;

          margin-bottom: 45px;

          text-align: center;

          font-size: clamp(34px, 6vw, 50px);

          line-height: 1.2;
        }

        .products-layout {

          display: grid;

          grid-template-columns: 1.2fr 1fr;

          gap: 45px;

          align-items: flex-start;
        }

        .products-grid {

          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 28px;
        }

        .product-card {

          background: white;

          border-radius: 18px;

          overflow: hidden;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border 0.3s ease;

          border: 3px solid transparent;

          display: flex;

          flex-direction: column;

          min-height: 410px;
        }

        .product-card:hover {

          transform: translateY(-8px);

          box-shadow:
            0 12px 25px rgba(0,0,0,0.12);

          border: 3px solid #276842;
        }

        .product-card.active {

          border: 3px solid #276842;
        }

        .product-card img {

          width: 100%;

          height: 220px;

          object-fit: cover;
        }

        .product-card h3 {

          padding: 18px 18px 8px;

          color: #276842;

          font-size: 22px;
        }

        .product-card p {

          padding: 0 18px 20px;

          color: #555;

          font-size: 16px;

          line-height: 1.5;

          display: -webkit-box;

          -webkit-line-clamp: 3;

          -webkit-box-orient: vertical;

          overflow: hidden;
        }

        .product-details {

          position: sticky;

          top: 70px;

          background: white;

          border-radius: 22px;

          padding: 28px;

          box-shadow:
            0 10px 30px rgba(0,0,0,0.08);
        }

        .product-details img {

          width: 100%;

          height: 380px;

          object-fit: cover;

          border-radius: 18px;

          margin-bottom: 25px;
        }

        .details-image-wrapper {

          position: relative;
        }

        .image-arrow {

          position: absolute;

          top: 50%;

          transform: translateY(-50%);

          width: 48px;

          height: 48px;

          border: none;

          border-radius: 50%;

          background: rgba(39, 104, 66, 0.85);

          color: white;

          font-size: 28px;

          cursor: pointer;

          z-index: 5;

          display: flex;

          align-items: center;

          justify-content: center;

          transition: 0.3s ease;
        }

        .image-arrow:hover {

          background: #276842;

          transform: translateY(-50%) scale(1.08);
        }

        .image-arrow.left {

          left: 14px;
        }

        .image-arrow.right {

          right: 14px;
        }

        .product-details h2 {

          color: #276842;

          margin-bottom: 18px;

          font-size: 34px;
        }

        .product-details p {

          color: #444;

          line-height: 1.8;

          font-size: 17px;
        }

        /* TABLET */

        @media (max-width: 1200px) {

          .products-layout {

            grid-template-columns: 1fr;
          }

          .product-details {

            position: relative;

            top: 0;
          }

          .products-grid {

            grid-template-columns: repeat(2, 1fr);
          }

        }

        /* MOBILE */

        @media (max-width: 768px) {

          .all-products-wrapper {

            padding: 70px 20px 40px;
          }

          .products-grid {

            grid-template-columns: 1fr;

            gap: 22px;
          }

          .product-card {

            min-height: auto;

            border-radius: 16px;
          }

          .product-card img {

            height: 240px;
          }

          .product-card h3 {

            font-size: 20px;
          }

          .product-card p {

            font-size: 15px;
          }

          .product-details {

            padding: 20px;

            border-radius: 18px;
          }

          .product-details img {

            height: 260px;

            border-radius: 14px;
          }

          .product-details h2 {

            font-size: 28px;
          }

          .product-details p {

            font-size: 16px;

            line-height: 1.7;
          }

          .image-arrow {

            width: 40px;

            height: 40px;

            font-size: 22px;
          }

        }

        /* SMALL MOBILE */

        @media (max-width: 480px) {

          .all-products-wrapper {

            padding: 65px 14px 35px;
          }

          .product-card img {

            height: 220px;
          }

          .product-details img {

            height: 220px;
          }

          .products-title {

            margin-bottom: 35px;
          }

        }

        .whatsapp-float {

          position: fixed;

          bottom: 22px;

          right: 22px;

          width: 54px;

          height: 54px;

          background: #25D366;

          color: white;

          border-radius: 50%;

          display: flex;

          justify-content: center;

          align-items: center;

          font-size: 28px;

          text-decoration: none;

          z-index: 9999;

          box-shadow:
            0 0 10px rgba(37, 211, 102, 0.7),
            0 0 20px rgba(37, 211, 102, 0.5),
            0 0 30px rgba(37, 211, 102, 0.3);

          transition: 0.3s ease;
        }

        .whatsapp-float:hover {

          transform: scale(1.08);
        }

        @media (max-width: 768px) {

          .whatsapp-float {

            width: 48px;

            height: 48px;

            font-size: 24px;

            bottom: 18px;

            right: 18px;
          }

        }

      `}</style>
    </>
  )
}

export default AllProducts


/*  const products = [

  {
    image: "/public/products/sunraise image/all type of cushion.png",
    name: "All Types of Cushion",
    short:
      "Eco-friendly multi-layer cushioning solution for safe packaging.",
    details:
      "Advanced cushioning system designed for modern packaging needs, combining multiple protective layers to absorb shock, vibration, and compression during transport. Manufactured using lightweight, recyclable and eco friendly fiber-based materials, this solution ensures maximum protection for fragile goods such as electronics, glassware, machinery components, and industrial equipment. Its flexible structure allows it to adapt to different product shapes while maintaining durability and impact resistance across supply chains."
  },

  {
    image: "/public/products/sunraise image/Comforter.png",
    name: "Comforter",
    short:
      "Soft, breathable all-season comfort bedding solution.",
    details:
      "Premium comforter designed using high-quality non-woven fiber technology to deliver superior softness, breathability, and thermal balance. Engineered for year-round use, it maintains warmth during cold conditions while remaining lightweight and comfortable in warmer climates. The eco friendly fiber construction ensures long-lasting durability and hygiene, making it ideal for residential, hospitality, and healthcare bedding applications."
  },

  {
    image: "/public/products/sunraise image/hepafilteronly.png",
    name: "HEPA Air Filter",
    short:
      "High-efficiency air purification filtration media.",
    details:
      "Advanced HEPA-grade filtration material engineered for superior air purification performance. It effectively captures microscopic particles including dust, allergens, pollutants, and airborne contaminants while maintaining smooth airflow efficiency. Widely used in medical environments, HVAC systems, clean rooms, automotive air systems, and industrial air filtration units, it ensures cleaner and safer breathing environments with consistent long-term performance."
  },

  {
    image: "/public/products/sunraise image/Mesh Filter.png",
    name: "Mesh Filter",
    short:
      "Durable mesh-based filtration material for industrial use.",
    details:
      "Strong and flexible mesh filtration fabric designed for efficient separation of particles in air and liquid filtration systems. Its woven structure provides excellent airflow while effectively trapping dust, debris, and contaminants. Suitable for HVAC systems, industrial machinery protection, automotive filtration, and liquid straining applications, this material ensures durability, stability, and reliable filtration performance in demanding environments."
  },

  {
    images: [
      "/products/sunraise image/non-wovenpolyesterfabric.png",
      "/products/sunraise image/poly waddling  fabric.png",
      "/products/sunraise image/polyester-green-eco-friendly-scrub-pad-for-utensils-cleaning-purpose-389.jpg"
    ],
    image: "/products/sunraise image/non-wovenpolyesterfabric.png",
    name: "Non-Woven Polyster Fabric",
    short: "A high-performance, non-woven bio-polyester sheet engineered entirely from renewable plant starches, offering excellent structural tensile strength and 100% home compostability.",
    details:
      "Upgrade your manufacturing or crafting projects with a truly sustainable alternative to petroleum-based synthetic fabrics. Our non-durable Non-Woven Polyester Fabric is created using advanced spunbond technology that fuses 100% plant-derived PLA biopolymers into a lightweight, uniform sheet. It delivers exceptional tear resistance, smooth texture, and fluid barrier performance, making it ideal for eco-bags, protective packaging, filtration layers, or garment linings. Entirely free of plastic resins or chemical finishes, this circular material returns cleanly to nature at the end of its life cycle."
  },

  {
    image: "/public/products/sunraise image/micro dust filter padding.jpg",
    name: "Micro Dust Filter Padding",
    short:
      "High-density padding for fine dust and particle filtration.",
    details:
      "Specialized micro dust filtration padding engineered to capture ultra-fine particles while maintaining airflow balance. Its dense fiber structure traps dust, lint, and airborne contaminants efficiently, making it suitable for air filtration systems, industrial equipment, automotive interiors, and protective ventilation units. Built using eco friendly fiber technology, it ensures consistent filtration efficiency and long operational lifespan."
  },

  {
    image: "/public/products/sunraise image/Muffler Headrest.png",
    name: "Muffler Headrest",
    short:
      "Ergonomic cushioned headrest with vibration control.",
    details:
      "Comfort-focused headrest designed with advanced cushioning materials to provide neck support, vibration reduction, and enhanced seating comfort. Ideal for automotive and transport interiors, it combines soft-touch surface materials with durable internal padding for long-term usability. Its structure improves passenger comfort while contributing to noise dampening and ergonomic seating support in vehicles and mobility systems."
  },

  {
    image: "/public/products/sunraise image/quilt.png",
    name: "Quilt",
    short:
      "Lightweight insulated quilt for comfort and warmth.",
    details:
      "Soft and breathable quilt designed using high-quality fiber filling to provide balanced insulation and comfort. It offers excellent thermal regulation, ensuring warmth during cold conditions while remaining lightweight for daily use. The durable stitching and eco friendly textile construction make it suitable for home, hotel, and institutional bedding applications with long-lasting performance."
  },

  {
    image: "/public/products/sunraise image/shoe-lining.jpg",
    name: "Shoe Lining",
    short:
      "Comfortable and durable inner lining material for footwear.",
    details:
      "High-quality shoe lining fabric engineered to provide comfort, breathability, and durability inside footwear products. It helps absorb moisture, reduce friction, and enhance wearer comfort during prolonged use. Widely used in sports shoes, formal footwear, safety shoes, and industrial boots, this material ensures long-lasting performance and improved shoe structure support."
  },

  {
    image: "/public/products/sunraise image/sunraise-padding-material.jpg",
    name: "Padding Material",
    short:
      "Versatile cushioning material for industrial applications.",
    details:
      "Multi-purpose padding material designed for cushioning, insulation, and protective applications across various industries. It offers excellent shock absorption, flexibility, and structural support while maintaining lightweight properties. Commonly used in packaging, automotive interiors, furniture, and protective wrapping, it ensures reliable performance and durability in both commercial and industrial environments."
  },

  {
    image: "/public/products/sunraise image/super-bright-sponge-wipes.jpg",
    name: "Super Bright Sponge Wipes",
    short:
      "Highly absorbent cleaning wipes for industrial and domestic use.",
    details:
      "Advanced sponge wipe material designed for superior absorption, cleaning efficiency, and durability. It effectively removes dust, liquid, and contaminants from surfaces without leaving residue. Suitable for household cleaning, industrial maintenance, automotive detailing, and commercial hygiene applications, this material ensures high performance with long-lasting usability."
  },

  {
    image: "/public/products/sunraise image/winter jacket (2).png",
    name: "Winter Jacket",
    short:
      "Insulated protective jacket for cold weather conditions.",
    details:
      "High-performance winter jacket engineered for protection against extreme cold conditions. Built using layered textile technology with thermal insulation, wind resistance, and breathable outer fabric, it ensures maximum comfort and warmth. The eco friendly material selection enhances durability while maintaining lightweight wearability, making it suitable for outdoor work, travel, and winter environments."
  },

  {
  image: "/products/sunraise image/poly waddling  fabric.png",
  name: "Poly Waddling Fabric",
  short: "A lightweight, highly breathable plant-biopolymer wadding fabric that provides a smooth, low-profile drape for summer quilts and light outerwear without a single strand of plastic.",
  details:
    "Perfect for delicate sewing projects, our Light-Loft Poly Wadding Fabric mimics the soft density of low-ounce polyester batting using 100% renewable corn starch biopolymers. It resists bunching and migration, allowing for intricate quilting patterns down to 1/4 inch apart. Because it is completely plant-derived and bound mechanically without chemical glues, it prevents microplastic pollution during laundry cycles and breaks down beautifully in a backyard compost heap at the end of its life cycle."
},

  {
  images: [
    "/products/sunraise image/Comforter.png",
    "/products/sunraise image/quilt.png",
    "/products/sunraise image/winter jacket (2).png",
    "/products/sunraise image/Muffler Headrest.png"
  ],
  image: "/products/sunraise image/Comforter.png",
  name: "Comforter",
  short:
    "Soft, breathable all-season comfort bedding solution.",
  details:
    "Premium comforter designed using high-quality non-woven fiber technology to deliver superior softness, breathability, and thermal balance. Engineered for year-round use, it maintains warmth during cold conditions while remaining lightweight and comfortable in warmer climates. The eco friendly fiber construction ensures long-lasting durability and hygiene, making it ideal for residential, hospitality, and healthcare bedding applications."
},


{
  image: "/products/sunraise image/non-wovenpolyesterfabric.png",
  name: "Non-Woven Polyster Fabric",
  short: "A high-performance, non-woven bio-polyester sheet engineered entirely from renewable plant starches, offering excellent structural tensile strength and 100% home compostability.",
  details:
    "Upgrade your manufacturing or crafting projects with a truly sustainable alternative to petroleum-based synthetic fabrics. Our non-durable Non-Woven Polyester Fabric is created using advanced spunbond technology that fuses 100% plant-derived PLA biopolymers into a lightweight, uniform sheet. It delivers exceptional tear resistance, smooth texture, and fluid barrier performance, making it ideal for eco-bags, protective packaging, filtration layers, or garment linings. Entirely free of plastic resins or chemical finishes, this circular material returns cleanly to nature at the end of its life cycle."
},

{
  image: "/products/sunraise image/polyester-green-eco-friendly-scrub-pad-for-utensils-cleaning-purpose-389.jpg",
  name: "Polyster Green Scrub Pad",
  short: "A heavy-duty, grease-cutting green scrub pad crafted from 100% plant-derived bio-polyester that tackles tough, baked-on food without shedding synthetic microplastics down your drain.",
  details:
    "This minimalist green scrub pad offers maximum grease extraction and scrubbing efficiency with a radically minimized environmental footprint. Designed as a direct drop-in replacement for standard synthetic low-density polyethylene (LDPE) scouring pads, it utilizes a wet-laid organic cellulose and bio-fiber grid that holds dish soaps beautifully. It maintains tough structural resistance against tearing across its multi-week operational lifespan. When it finally reaches the end of its usable lifecycle, the entire structure naturally degrades in any active compost setup, closing the loop entirely."
}


]*/