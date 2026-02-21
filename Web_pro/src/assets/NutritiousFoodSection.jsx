// NutritiousFoodSection.jsx
import React from 'react';

const NutritiousFoodSection = () => {
  const features = [
    {
      title: "Nutritious Food",
      description: "Every meal is packed with essential nutrients to support growth, energy, and healthy development.",
      icon: "🍎",
      color: "#ff6b81",
      image: "https://healthyfamilyproject.com/wp-content/uploads/2017/01/WEB-Rainbow-Fruit-Tray-landscape.jpg",
    },
    {
      title: "Fruits Incorporated In Meals",
      description: "Fresh, colorful fruits are part of every meal — making eating fun and naturally delicious.",
      icon: "🍓🍊",
      color: "#48bb78",
      image: "https://healthyfamilyproject.com/wp-content/uploads/2017/01/Rainbow-Fruit-Tray-8.jpg",
    },
    {
      title: "Food Prepared In-House",
      description: "Freshly cooked daily in our hygienic kitchen by caring staff — just like home.",
      icon: "👩‍🍳",
      color: "#f6ad55",
      image: "https://kidsusamontessori.org/wp-content/uploads/2025/11/healthy-cooking-activities-for-preschoolers.jpg",
    },
    {
      title: "Menu Designed by Nutritionists",
      description: "Balanced, age-appropriate menus crafted by expert nutritionists for optimal child health.",
      icon: "📋",
      color: "#4299e1",
      image: "https://cdn.prod.website-files.com/5f6906f7746ebfbc453b9250/66c5d19ea4c97085d7009bc0_Hero%20Image%20(1)%20(1).webp",
    },
    {
      title: "No Junk Food",
      description: "Zero processed snacks, sugary treats, or unhealthy items — only wholesome, real food.",
      icon: "🚫🍟",
      color: "#ed64a6",
      image: "https://www.sph.umn.edu/sph/wp-content/uploads/2020/08/berger-kids-school-meals-fb.jpg",
    },
  ];

  return (
    <>
      <style>{`
        .nutritious-section {
          padding: 4rem 1.5rem;
          background: linear-gradient(135deg, #fffaf0 0%, #f0f9ff 100%);
          font-family: 'Segoe UI', system-ui, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .title {
          text-align: center;
          font-size: clamp(2.2rem, 6vw, 3.8rem);
          font-weight: 800;
          color: #ff6b81;
          margin-bottom: 1rem;
          text-shadow: 0 2px 10px rgba(255,107,129,0.2);
        }

        .subtitle {
          text-align: center;
          font-size: clamp(1.1rem, 3vw, 1.4rem);
          color: #4a5568;
          max-width: 800px;
          margin: 0 auto 3rem;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 640px) {
          .features-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (min-width: 1024px) {
          .features-grid { grid-template-columns: repeat(5, 1fr); }
        }

        .feature-card {
          background: white;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.35s ease;
          text-align: center;
          position: relative;
        }

        .feature-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }

        .feature-image {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-bottom: 4px solid;
        }

        .feature-content {
          padding: 1.5rem 1rem;
        }

        .feature-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .feature-title {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .feature-desc {
          font-size: 0.95rem;
          color: #4a5568;
          line-height: 1.5;
        }

        @media (max-width: 1023px) {
          .feature-image { height: 180px; }
        }
      `}</style>

      <section className="nutritious-section">
        <div className="container">
          <h2 className="title">Healthy & Nutritious Meals</h2>
          <p className="subtitle">
            At Apeksha Play School, we nourish growing minds and bodies with love and care — every bite counts!
          </p>

          <div className="features-grid">
            {features.map((item, index) => (
              <div className="feature-card" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="feature-image"
                  style={{ borderBottomColor: item.color }}
                />
                <div className="feature-content">
                  <span className="feature-icon">{item.icon}</span>
                  <h3 className="feature-title" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="feature-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NutritiousFoodSection;
