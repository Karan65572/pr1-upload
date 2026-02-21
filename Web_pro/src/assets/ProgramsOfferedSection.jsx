// ProgramsOfferedSection.jsx - Professional Premium Design
import React from 'react';

const ProgramsOfferedSection = () => {
  const programs = [
    {
      title: "Toddlers",
      age: "1.5 – 2.5 years",
      desc: "Gentle introduction to group play, sensory exploration, and first social steps in a cozy, nurturing space.",
      icon: "👶",
      gradient: "linear-gradient(135deg, #FF9F9C, #FFB6B3)",
      darkGradient: "linear-gradient(135deg, #E65A5A, #FF8A8A)",
      features: ["Sensory Play", "Motor Skills", "Social Bonding"]
    },
    {
      title: "Playgroup",
      age: "2 – 3 years",
      desc: "Fun-filled play-based learning focusing on motor skills, sharing, and joyful discovery.",
      icon: "🎈",
      gradient: "linear-gradient(135deg, #A7D8DE, #C2E4E9)",
      darkGradient: "linear-gradient(135deg, #6BA5AE, #8FC5CF)",
      features: ["Creative Play", "Language Dev", "Group Activities"]
    },
    {
      title: "Pre Nursery",
      age: "2.5 – 3.5 years",
      desc: "Building routines, early language, creativity through stories, rhymes, and hands-on activities.",
      icon: "🌈",
      gradient: "linear-gradient(135deg, #FFD166, #FFE08C)",
      darkGradient: "linear-gradient(135deg, #E6A800, #FFC233)",
      features: ["Routine Building", "Story Time", "Creative Arts"]
    },
    {
      title: "Preschool / Nursery",
      age: "3 – 4 years",
      desc: "Holistic foundation with play-way method — letters, numbers, shapes, colors, and social-emotional growth.",
      icon: "📚",
      gradient: "linear-gradient(135deg, #FF6B81, #FF8A9F)",
      darkGradient: "linear-gradient(135deg, #E63E5E, #FF6B81)",
      features: ["Early Literacy", "Number Concepts", "Emotional Skills"]
    },
    {
      title: "LKG (Lower KG)",
      age: "4 – 5 years",
      desc: "Structured yet playful academics — phonics, early writing, math concepts, and school readiness skills.",
      icon: "✏️",
      gradient: "linear-gradient(135deg, #4A90E2, #7CB0F0)",
      darkGradient: "linear-gradient(135deg, #1E5CB5, #4A90E2)",
      features: ["Phonics", "Early Writing", "Math Readiness"]
    },
    {
      title: "UKG (Upper KG)",
      age: "5 – 6 years",
      desc: "Advanced preparation for Grade 1 — reading, writing, logical thinking, confidence, and independence.",
      icon: "🎓",
      gradient: "linear-gradient(135deg, #48BB78, #6FCF97)",
      darkGradient: "linear-gradient(135deg, #1E8449, #48BB78)",
      features: ["Reading Fluency", "Logical Thinking", "Independence"]
    },
    {
      title: "Games & Sports",
      age: "All levels",
      desc: "Fun physical activities, outdoor play, team games to build coordination, energy, and teamwork.",
      icon: "⚽",
      gradient: "linear-gradient(135deg, #F6AD55, #FAC47E)",
      darkGradient: "linear-gradient(135deg, #DD6B20, #F6AD55)",
      features: ["Motor Skills", "Team Building", "Physical Fitness"]
    },
    {
      title: "Dance & Movement",
      age: "All levels",
      desc: "Rhythmic expression through creative dance, action songs, and cultural performances for joy and confidence.",
      icon: "💃",
      gradient: "linear-gradient(135deg, #ED64A6, #F687B3)",
      darkGradient: "linear-gradient(135deg, #B83280, #ED64A6)",
      features: ["Rhythm", "Expression", "Confidence"]
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

        .programs-section {
          padding: 6rem 1.5rem;
          background: #FFFFFF;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Background decoration */
        .programs-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: 
            radial-gradient(circle at 0% 0%, rgba(255,107,129,0.03) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(74,144,226,0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Header styling */
        .section-header {
          text-align: center;
          margin-bottom: 4.5rem;
        }

        .section-title {
          font-size: clamp(2.8rem, 6vw, 4.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #1E293B, #2D3C54);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }

        .section-title-accent {
          display: block;
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #FF6B81, #4A90E2, #48BB78);
          margin: 1rem auto 0;
          border-radius: 2px;
        }

        .section-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.3rem);
          color: #64748B;
          max-width: 800px;
          margin: 1.5rem auto 0;
          line-height: 1.7;
          font-weight: 400;
        }

        /* Programs grid */
        .programs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }

        @media (min-width: 640px) {
          .programs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .programs-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 1.8rem;
          }
        }

        /* Premium card styling */
        .program-card {
          background: #FFFFFF;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 
            0 10px 30px -15px rgba(0,0,0,0.1),
            0 0 0 1px rgba(0,0,0,0.02);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
        }

        .program-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2rem;
          padding: 2px;
          background: linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .program-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 
            0 30px 50px -20px rgba(0,0,0,0.2),
            0 0 0 2px white,
            0 0 0 4px rgba(255,107,129,0.2);
        }

        /* Card header with gradient background */
        .card-header {
          padding: 2rem 1.5rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .card-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient);
          opacity: 0.1;
          z-index: 0;
        }

        .card-header::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .program-card:hover .card-header::after {
          opacity: 1;
        }

        .icon-wrapper {
          position: relative;
          z-index: 2;
          width: fit-content;
          margin: 0 auto 1.2rem;
        }

        .program-icon {
          font-size: 4rem;
          display: block;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
        }

        .program-card:hover .program-icon {
          transform: scale(1.15) rotate(5deg);
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.15));
        }

        .program-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1E293B;
          margin-bottom: 0.4rem;
          position: relative;
          z-index: 2;
          letter-spacing: -0.01em;
        }

        .program-age {
          display: inline-block;
          font-size: 0.9rem;
          font-weight: 500;
          color: #64748B;
          background: rgba(255,255,255,0.8);
          backdrop-filter: blur(5px);
          padding: 0.4rem 1rem;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.5);
          position: relative;
          z-index: 2;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        /* Card content */
        .card-content {
          padding: 0 1.5rem 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .program-desc {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        /* Feature tags */
        .feature-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .feature-tag {
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.3rem 0.8rem;
          background: #F8FAFC;
          color: #334155;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 1px solid #E2E8F0;
        }

        .program-card:hover .feature-tag {
          background: white;
          border-color: var(--hover-color);
          color: var(--hover-color);
        }

        /* Card footer with subtle pattern */
        .card-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid #F1F5F9;
          background: #F8FAFC;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-footer span {
          font-size: 0.85rem;
          color: #94A3B8;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .card-footer .btn-text {
          color: var(--accent-color);
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: all 0.3s ease;
          background: var(--gradient);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card-footer .btn-text:hover {
          transform: translateX(4px);
        }

        /* Hover color variations */
        .program-card[data-program="Toddlers"] { --hover-color: #FF9F9C; --accent-color: #FF9F9C; }
        .program-card[data-program="Playgroup"] { --hover-color: #A7D8DE; --accent-color: #6BA5AE; }
        .program-card[data-program="Pre Nursery"] { --hover-color: #FFD166; --accent-color: #E6A800; }
        .program-card[data-program="Preschool / Nursery"] { --hover-color: #FF6B81; --accent-color: #FF6B81; }
        .program-card[data-program="LKG (Lower KG)"] { --hover-color: #4A90E2; --accent-color: #4A90E2; }
        .program-card[data-program="UKG (Upper KG)"] { --hover-color: #48BB78; --accent-color: #48BB78; }
        .program-card[data-program="Games & Sports"] { --hover-color: #F6AD55; --accent-color: #F6AD55; }
        .program-card[data-program="Dance & Movement"] { --hover-color: #ED64A6; --accent-color: #ED64A6; }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .programs-section {
            padding: 4rem 1rem;
          }
          
          .program-card {
            max-width: 400px;
            margin: 0 auto;
          }
          
          .card-header {
            padding: 1.5rem 1rem 1rem;
          }
          
          .program-title {
            font-size: 1.3rem;
          }
          
          .card-content {
            padding: 0 1rem 1rem;
          }
        }

        /* Animation for cards on scroll */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .program-card {
          animation: fadeInUp 0.6s ease backwards;
        }

        .program-card:nth-child(1) { animation-delay: 0.1s; }
        .program-card:nth-child(2) { animation-delay: 0.2s; }
        .program-card:nth-child(3) { animation-delay: 0.3s; }
        .program-card:nth-child(4) { animation-delay: 0.4s; }
        .program-card:nth-child(5) { animation-delay: 0.5s; }
        .program-card:nth-child(6) { animation-delay: 0.6s; }
        .program-card:nth-child(7) { animation-delay: 0.7s; }
        .program-card:nth-child(8) { animation-delay: 0.8s; }
      `}</style>

      <section className="programs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Programs Offered
              <span className="section-title-accent"></span>
            </h2>
            <p className="section-subtitle">
              At Apeksha Play School, we offer age-appropriate programs designed to nurture curiosity, 
              confidence, and joy — from first steps to school readiness.
            </p>
          </div>

          <div className="programs-grid">
            {programs.map((prog, idx) => (
              <div
                key={idx}
                className="program-card"
                data-program={prog.title}
                style={{
                  '--gradient': prog.gradient
                }}
              >
                <div className="card-header" style={{ background: prog.gradient + '10' }}>
                  <div className="icon-wrapper">
                        <span className="program-icon">{prog.icon}</span>
                  </div>
                  <h3 className="program-title">{prog.title}</h3>
                  <span className="program-age">{prog.age}</span>
                </div>

                <div className="card-content">
                  <p className="program-desc">{prog.desc}</p>
                  
                  <div className="feature-tags">
                    {prog.features.map((feature, i) => (
                      <span key={i} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
                  <span>
                    <span className="btn-text">Learn More →</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsOfferedSection;