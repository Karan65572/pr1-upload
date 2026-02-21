// ApekshaPlaySchoolArticle.jsx - Premium Card Design (2025)
import React from 'react';

const ApekshaPlaySchoolArticle = () => {
  return (
    <>
      <style>{`
        :root {
          --pink:     #ff4d6d;
          --blue:     #3b82f6;
          --yellow:   #facc15;
          --green:    #22c55e;
          --purple:   #a855f7;
          --orange:   #f97316;
          --dark:     #1e293b;
          --gray:     #475569;
          --light:    #fefefe;
          --bg-start: #fff0f5;
          --bg-end:   #e0f2fe;
        }

        * { margin:0; padding:0; box-sizing:border-box; }

        body {
          font-family: 'Poppins', system-ui, sans-serif;
          background: linear-gradient(135deg, var(--bg-start), var(--bg-end));
          color: var(--dark);
          line-height: 1.65;
        }

        .container { min-height: 100vh; }

        /* Hero section (kept mostly same) */
        .hero {
          position: relative;
          height: 90vh;
          min-height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          background: 
            linear-gradient(45deg, rgba(255,77,109,0.38), rgba(59,130,246,0.32), rgba(250,204,21,0.25)),
            url('https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=2070') center/cover no-repeat fixed;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 70%, rgba(255,255,255,0.18) 0%, transparent 60%);
          animation: gentle-float 18s ease-in-out infinite;
        }

        @keyframes gentle-float {
          0%,100% { transform: translate(0, 0); }
          50%     { transform: translate(40px, -30px); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          padding: 0 2rem;
        }

        .hero h1 {
          font-size: clamp(3.8rem, 11vw, 8rem);
          font-weight: 900;
          letter-spacing: -2px;
          background: linear-gradient(90deg, #fff, #fef08a, #a5f3fc, #fff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 300% 300%;
          animation: gradientFlow 8s ease infinite;
          text-shadow: 0 8px 32px rgba(0,0,0,0.45);
          margin-bottom: 1.8rem;
        }

        @keyframes gradientFlow {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero p {
          font-size: clamp(1.4rem, 4vw, 2rem);
          max-width: 860px;
          margin: 0 auto 3rem;
          color: #f0f9ff;
          text-shadow: 0 4px 16px rgba(0,0,0,0.5);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          padding: 1.1rem 2.8rem;
          border-radius: 9999px;
          text-decoration: none;
          font-size: 1.22rem;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 12px 32px rgba(0,0,0,0.2);
        }

        .btn:hover {
          transform: translateY(-8px) scale(1.06);
          box-shadow: 0 24px 48px rgba(0,0,0,0.28);
        }

        .btn-primary   { background: linear-gradient(45deg, var(--yellow), #fbbf24); color: #1e293b; }
        .btn-secondary { background: linear-gradient(45deg, var(--blue), #60a5fa); color: white; }
        .btn-gradient  {
          background: linear-gradient(90deg, var(--pink), var(--purple), var(--orange));
          background-size: 200% 200%;
          color: white;
          animation: btnGradient 6s ease infinite;
        }

        @keyframes btnGradient {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ── Main Content ──────────────────────────────────────── */
        .content-wrapper {
          position: relative;
          margin-top: -8rem;
          padding: 0 1.5rem 7rem;
        }

        @media (min-width: 768px) { .content-wrapper { margin-top: -10rem; } }

        .content-card {
          max-width: 1400px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 3rem;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.12);
        }

        .content-inner {
          padding: 5rem 2.5rem;
          text-align: center;
        }

        @media (min-width: 768px) { .content-inner { padding: 7rem 5rem; } }

        .content-inner h2 {
          font-size: clamp(3rem, 7vw, 5rem);
          font-weight: 900;
          background: linear-gradient(90deg, var(--pink), var(--blue), var(--yellow));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 2.5rem;
        }

        .intro-text {
          font-size: clamp(1.22rem, 2.5vw, 1.45rem);
          color: var(--gray);
          max-width: 960px;
          margin: 0 auto 5.5rem;
          line-height: 1.85;
        }

        /* ── IMPROVED PREMIUM CARDS ────────────────────────────── */
        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.8rem;
          justify-items: center;
          padding: 0 1rem;
        }

        @media (min-width: 640px)  { 
          .features-grid { 
            grid-template-columns: repeat(2, minmax(400px, 420px)); 
            justify-content: center; 
          } 
        }

        @media (min-width: 1024px) { 
          .features-grid { 
            grid-template-columns: repeat(4, minmax(320px, 380px)); 
            gap: 2rem; 
          } 
        }

        .feature {
          width: 100%;
          max-width: 420px;
          min-height: 460px;               /* Slightly taller for better proportions */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          border-radius: 2.5rem;
          padding: 3rem 2rem 2.5rem;
          background: white;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          text-align: center;
          box-shadow: 
            0 20px 40px -15px rgba(0,0,0,0.15),
            inset 0 -2px 0 rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.5);
          backdrop-filter: blur(5px);
        }

        /* Modern gradient overlay for depth */
        .feature::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 2.5rem;
          padding: 2px;
          background: linear-gradient(145deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0.6;
          transition: opacity 0.4s ease;
        }

        /* Colored top accent bars - subtle but effective */
        .feature-pink { border-top: 6px solid var(--pink); }
        .feature-blue { border-top: 6px solid var(--blue); }
        .feature-yellow { border-top: 6px solid var(--yellow); }
        .feature-green { border-top: 6px solid var(--green); }

        /* Background gradients that appear on hover */
        .feature-pink { background: linear-gradient(145deg, #ffffff, #fff5f8); }
        .feature-blue { background: linear-gradient(145deg, #ffffff, #f0f8ff); }
        .feature-yellow { background: linear-gradient(145deg, #ffffff, #fffef5); }
        .feature-green { background: linear-gradient(145deg, #ffffff, #f5fff5); }

        /* Animated corner accents */
        .feature::before {
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          top: 0;
          right: 0;
          border-top: 3px solid;
          border-right: 3px solid;
          border-color: transparent;
          border-radius: 0 2.5rem 0 0;
          transition: all 0.6s ease;
          opacity: 0;
          z-index: 2;
        }

        .feature-pink::before { border-color: var(--pink); }
        .feature-blue::before { border-color: var(--blue); }
        .feature-yellow::before { border-color: var(--yellow); }
        .feature-green::before { border-color: var(--green); }

        .feature:hover::before {
          opacity: 1;
          width: 120px;
          height: 120px;
        }

        /* Soft glow effect on hover */
        .feature:hover {
          transform: translateY(-16px) scale(1.02);
          box-shadow: 
            0 30px 60px -20px rgba(0,0,0,0.3),
            0 0 0 2px rgba(255,255,255,0.8),
            inset 0 0 30px rgba(255,255,255,0.9);
        }

        /* Icon styling - cleaner and more refined */
        .feature-icon {
          font-size: 5.5rem;
          margin-bottom: 1.8rem;
          transition: all 0.5s ease;
          filter: drop-shadow(0 8px 12px rgba(0,0,0,0.1));
          position: relative;
          z-index: 2;
        }

        .feature:hover .feature-icon {
          transform: scale(1.1) translateY(-8px);
          filter: drop-shadow(0 15px 20px rgba(0,0,0,0.15));
        }

        /* Circular background for icons */
        .feature-icon::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
          border-radius: 50%;
          z-index: -1;
          transition: transform 0.5s ease;
        }

        .feature:hover .feature-icon::after {
          transform: translate(-50%, -50%) scale(1.2);
        }

        .feature h3 {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.3;
          position: relative;
          z-index: 2;
          background: linear-gradient(135deg, var(--dark) 0%, #334155 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Individual heading colors on hover */
        .feature-pink:hover h3 { 
          background: linear-gradient(135deg, var(--pink), #ff8a5c);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .feature-blue:hover h3 { 
          background: linear-gradient(135deg, var(--blue), #38bdf8);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .feature-yellow:hover h3 { 
          background: linear-gradient(135deg, var(--yellow), #fbbf24);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .feature-green:hover h3 { 
          background: linear-gradient(135deg, var(--green), #4ade80);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .feature p {
          font-size: 1.05rem;
          color: #4b5563;
          line-height: 1.7;
          margin-top: auto;
          padding: 0 0.5rem;
          position: relative;
          z-index: 2;
          transition: color 0.3s ease;
        }

        .feature:hover p {
          color: #1e293b;
        }

        /* Floating particles effect */
        .feature::after {
          content: '✦';
          position: absolute;
          bottom: 20px;
          right: 20px;
          font-size: 1.2rem;
          color: transparent;
          background: linear-gradient(135deg, currentColor, transparent);
          -webkit-background-clip: text;
          background-clip: text;
          opacity: 0;
          transform: rotate(0deg);
          transition: all 0.6s ease;
        }

        .feature-pink::after { color: var(--pink); }
        .feature-blue::after { color: var(--blue); }
        .feature-yellow::after { color: var(--yellow); }
        .feature-green::after { color: var(--green); }

        .feature:hover::after {
          opacity: 0.3;
          transform: rotate(360deg) scale(1.5);
          bottom: 30px;
          right: 30px;
        }

        .final-cta {
          margin-top: 7rem;
        }

        .final-cta h3 {
          font-size: clamp(2.4rem, 5.8vw, 3.6rem);
          font-weight: 900;
          background: linear-gradient(90deg, var(--pink), var(--purple), var(--blue));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 2.4rem;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .feature {
            min-height: 420px;
            padding: 2.5rem 1.5rem 2rem;
          }
          
          .feature-icon {
            font-size: 4.5rem;
          }
          
          .feature h3 {
            font-size: 1.75rem;
          }
        }
      `}</style>

      <div className="container">
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>Home Like Care</h1>
            <p>
              Our dedicated team, well-crafted curriculum, and safe, nurturing environment ensure holistic development of children. Experience the best of early education at Apeksha Play School.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.8rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}>
              <a href="#enroll" className="btn btn-primary">Enroll Now</a>
              <a href="#contact" className="btn btn-secondary">Schedule a Tour</a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="content-wrapper">
          <div className="content-card">
            <div className="content-inner">
              <h2>Welcome to Apeksha Play School</h2>

              <p className="intro-text">
                At Apeksha Play School, we believe the early years shape a lifetime. That's why we've created a warm, home-like space where your child feels truly loved, safe, and eager to explore. Our play-based, joyful approach blends curiosity, creativity, and gentle structure — building confident, happy, and capable little learners.
              </p>

              <div className="features-grid">
                <div className="feature feature-pink">
                  <div className="feature-icon">❤️</div>
                  <h3>Nurturing Environment</h3>
                  <p>A clean, secure, and affectionate space that feels just like home — where every child is truly seen and cherished.</p>
                </div>

                <div className="feature feature-blue">
                  <div className="feature-icon">📚</div>
                  <h3>Well-Crafted Curriculum</h3>
                  <p>Playful yet purposeful programs combining Montessori-inspired activities, creativity, motor skills, and early learning foundations.</p>
                </div>

                <div className="feature feature-yellow">
                  <div className="feature-icon">👩‍🏫</div>
                  <h3>Dedicated Team</h3>
                  <p>Passionate, trained educators who nurture emotional well-being as much as cognitive and social growth.</p>
                </div>

                <div className="feature feature-green">
                  <div className="feature-icon">🌈</div>
                  <h3>Holistic Development</h3>
                  <p>Balanced growth across social, emotional, physical, creative, and intellectual domains — preparing joyful, confident children.</p>
                </div>
              </div>

              <div className="final-cta">
                <h3>Ready to give your child the joy of a magical early childhood?</h3>
                <a href="#enroll" className="btn btn-gradient" style={{ padding: '1.4rem 4rem', fontSize: '1.4rem' }}>
                  Join the Apeksha Family Today
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ApekshaPlaySchoolArticle;