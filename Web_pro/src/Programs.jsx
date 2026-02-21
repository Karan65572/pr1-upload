import React, { useState, useEffect } from 'react';

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [enrollProgram, setEnrollProgram] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = {};
    const elements = document.querySelectorAll('[data-observe]');
    
    elements.forEach((element) => {
      observers[element.id] = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            }
          });
        },
        { threshold: 0.2 }
      );
      observers[element.id].observe(element);
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const programsData = [
    {
      id: 1,
      ageGroup: "Toddler Program",
      age: "1.5 - 2.5 Years",
      description: "A gentle introduction to school environment focusing on sensory exploration and building trust.",
      features: [
        "Sensory Play Activities",
        "Music & Movement",
        "Basic Social Skills",
        "Parent-Toddler Interaction",
        "Language Development"
      ],
      timing: "9:00 AM - 11:00 AM",
      icon: "👶",
      color: "#FF9AA2",
      capacity: "12 students",
      teacherRatio: "1:4",
      price: "₹15,000/term",
      category: "toddler"
    },
    {
      id: 2,
      ageGroup: "Nursery Program",
      age: "2.5 - 3.5 Years",
      description: "Building independence and foundational skills through structured play-based learning.",
      features: [
        "Pre-Writing Skills",
        "Number Concepts",
        "Art & Craft",
        "Story Time",
        "Outdoor Play"
      ],
      timing: "9:00 AM - 12:00 PM",
      icon: "🧸",
      color: "#B5EAD7",
      capacity: "15 students",
      teacherRatio: "1:6",
      price: "₹18,000/term",
      category: "nursery"
    },
    {
      id: 3,
      ageGroup: "Junior Kindergarten",
      age: "3.5 - 4.5 Years",
      description: "Enhancing cognitive abilities and preparing for formal learning through engaging activities.",
      features: [
        "Phonics & Reading Readiness",
        "Basic Mathematics",
        "Science Explorations",
        "Dramatic Play",
        "Fine Motor Activities"
      ],
      timing: "9:00 AM - 1:00 PM",
      icon: "📚",
      color: "#C7CEEA",
      capacity: "18 students",
      teacherRatio: "1:8",
      price: "₹22,000/term",
      category: "junior-k"
    },
    {
      id: 4,
      ageGroup: "Senior Kindergarten",
      age: "4.5 - 6 Years",
      description: "Comprehensive school readiness program with focus on academic and social skills.",
      features: [
        "Reading & Writing",
        "Math Concepts",
        "Environmental Studies",
        "Public Speaking",
        "Computer Basics"
      ],
      timing: "9:00 AM - 2:00 PM",
      icon: "🎓",
      color: "#FFDAC1",
      capacity: "20 students",
      teacherRatio: "1:10",
      price: "₹25,000/term",
      category: "senior-k"
    }
  ];

  const filteredPrograms = activeFilter === 'all' 
    ? programsData 
    : programsData.filter(p => p.category === activeFilter);

  const specialActivities = [
    {
      title: "Yoga & Mindfulness",
      description: "Daily yoga sessions to develop body awareness and calmness",
      icon: "🧘",
      schedule: "Daily, 30 mins"
    },
    {
      title: "Music & Dance",
      description: "Rhythm and movement classes for creative expression",
      icon: "🎵",
      schedule: "Tue & Thu, 45 mins"
    },
    {
      title: "Art Studio",
      description: "Creative exploration with various art materials",
      icon: "🎨",
      schedule: "Mon & Wed, 1 hour"
    },
    {
      title: "Nature Walks",
      description: "Connecting with nature through outdoor exploration",
      icon: "🌿",
      schedule: "Fri, 1 hour"
    },
    {
      title: "Cooking Fun",
      description: "Simple cooking activities to develop life skills",
      icon: "🍪",
      schedule: "Bi-weekly, 45 mins"
    },
    {
      title: "Storytelling",
      description: "Interactive story sessions to develop language and imagination",
      icon: "📖",
      schedule: "Daily, 30 mins"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      childName: "Aarav (Toddler Program)",
      quote: "The teachers at Apeksha are amazing! My son has become so confident and loves going to school.",
      rating: 5,
      image: "👩"
    },
    {
      name: "Rahul Verma",
      childName: "Anaya (Nursery)",
      quote: "Excellent curriculum and caring staff. My daughter has learned so much in just 6 months.",
      rating: 5,
      image: "👨"
    },
    {
      name: "Neha Gupta",
      childName: "Vihaan (Senior KG)",
      quote: "The holistic development approach really works. My son is well-prepared for formal school.",
      rating: 5,
      image: "👩"
    }
  ];

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      color: '#2d3436',
      backgroundColor: '#ffffff'
    },
    heroSection: {
      position: 'relative',
      textAlign: 'center',
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '30px',
      marginBottom: '60px',
      color: 'white',
      boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      opacity: 0.2
    },
    heroTitle: {
      position: 'relative',
      fontSize: '4em',
      margin: '0 0 20px 0',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
      animation: 'fadeInDown 1s ease-out',
      fontWeight: '700',
      letterSpacing: '-0.02em'
    },
    heroSubtitle: {
      position: 'relative',
      fontSize: '1.4em',
      margin: '0 0 30px 0',
      opacity: '0.95',
      fontWeight: '300',
      animation: 'fadeInUp 1s ease-out 0.3s both'
    },
    heroStats: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      gap: '50px',
      marginTop: '50px',
      animation: 'fadeIn 1s ease-out 0.6s both'
    },
    heroStatItem: {
      textAlign: 'center'
    },
    heroStatNumber: {
      fontSize: '2.5em',
      fontWeight: '700',
      display: 'block',
      lineHeight: '1.2'
    },
    heroStatLabel: {
      fontSize: '0.9em',
      opacity: '0.9',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    filterSection: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '40px',
      flexWrap: 'wrap'
    },
    filterButton: {
      padding: '12px 30px',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1em',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: '#f0f0f0',
      color: '#666'
    },
    programGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      marginBottom: '80px'
    },
    programCard: {
      backgroundColor: 'white',
      borderRadius: '30px',
      padding: '30px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    programBadge: {
      position: 'absolute',
      top: '20px',
      right: '-30px',
      backgroundColor: '#ff6b6b',
      color: 'white',
      padding: '8px 40px',
      transform: 'rotate(45deg)',
      fontSize: '0.8em',
      fontWeight: 'bold',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    },
    programHeader: {
      textAlign: 'center',
      marginBottom: '25px'
    },
    programIcon: {
      fontSize: '4.5em',
      display: 'block',
      marginBottom: '15px',
      animation: 'bounce 2s infinite'
    },
    programTitle: {
      fontSize: '2em',
      color: '#2d3436',
      margin: '10px 0 5px 0',
      fontWeight: '700'
    },
    programAge: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '8px 20px',
      borderRadius: '50px',
      fontSize: '0.9em',
      fontWeight: '600',
      marginTop: '10px'
    },
    quickInfoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
      marginBottom: '20px',
      padding: '15px',
      backgroundColor: '#f8f9fa',
      borderRadius: '15px'
    },
    quickInfoItem: {
      textAlign: 'center'
    },
    quickInfoLabel: {
      fontSize: '0.75em',
      color: '#666',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    quickInfoValue: {
      fontSize: '1em',
      fontWeight: '600',
      color: '#2d3436',
      marginTop: '5px'
    },
    expandButton: {
      width: '100%',
      padding: '12px',
      border: 'none',
      borderRadius: '12px',
      backgroundColor: '#667eea',
      color: 'white',
      fontSize: '1em',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '20px'
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(5px)'
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '30px',
      padding: '40px',
      maxWidth: '500px',
      width: '90%',
      maxHeight: '80vh',
      overflow: 'auto',
      position: 'relative',
      animation: 'modalSlideIn 0.4s ease-out'
    },
    modalClose: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      fontSize: '1.5em',
      cursor: 'pointer',
      color: '#666',
      transition: 'color 0.3s ease'
    },
    enrollForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginTop: '30px'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    formLabel: {
      fontWeight: '600',
      color: '#2d3436'
    },
    formInput: {
      padding: '12px',
      borderRadius: '10px',
      border: '2px solid #e0e0e0',
      fontSize: '1em',
      transition: 'border-color 0.3s ease'
    },
    formSubmit: {
      padding: '15px',
      border: 'none',
      borderRadius: '10px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontSize: '1.1em',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'transform 0.3s ease'
    },
    testimonialSection: {
      marginTop: '80px',
      padding: '60px 20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '30px'
    },
    testimonialGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '40px'
    },
    testimonialCard: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      position: 'relative'
    },
    testimonialQuote: {
      fontSize: '1.1em',
      lineHeight: '1.6',
      color: '#555',
      marginBottom: '20px',
      fontStyle: 'italic'
    },
    testimonialAuthor: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    },
    testimonialImage: {
      fontSize: '2.5em'
    },
    testimonialInfo: {
      flex: 1
    },
    testimonialName: {
      fontWeight: '700',
      color: '#2d3436',
      marginBottom: '5px'
    },
    testimonialChild: {
      fontSize: '0.85em',
      color: '#666'
    },
    ratingStars: {
      color: '#ffd700',
      fontSize: '1.1em',
      marginTop: '5px'
    }
  };

  return (
    <>
    <br /><br />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

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

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(-50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          .program-card:hover {
            transform: translateY(-15px) scale(1.02);
            box-shadow: 0 30px 50px rgba(102, 126, 234, 0.25);
          }

          .activity-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 30px rgba(0,0,0,0.15);
          }

          .filter-button:hover {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
          }

          .filter-button.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }

          .form-input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          }

          .form-submit:hover {
            transform: translateY(-2px);
            box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
          }

          .expand-button:hover {
            background-color: #5a67d8;
            transform: scale(1.02);
          }

          .modal-close:hover {
            color: #ff6b6b;
            transform: rotate(90deg);
          }

          .program-card[data-visible="false"] {
            opacity: 0;
            transform: translateY(30px);
          }

          .program-card[data-visible="true"] {
            opacity: 1;
            transform: translateY(0);
            transition: all 0.6s ease-out;
          }

          .activity-card {
            transition: all 0.3s ease;
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5em;
            }
            
            .hero-stats {
              flex-direction: column;
              gap: 20px;
            }
            
            .program-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div style={styles.container}>
        {/* Hero Section with Stats */}
        <section style={styles.heroSection}>
          <div style={styles.heroBackground}></div>
          <h1 style={styles.heroTitle}>Our Programs</h1>
          <p style={styles.heroSubtitle}>Nurturing Young Minds Through Play-Based Learning</p>
          <div style={styles.heroDecoration}>
            <span>🌈</span>
            <span>🎨</span>
            <span>🧩</span>
          </div>
          <div style={styles.heroStats}>
            <div style={styles.heroStatItem}>
              <span style={styles.heroStatNumber}>15+</span>
              <span style={styles.heroStatLabel}>Years Experience</span>
            </div>
            <div style={styles.heroStatItem}>
              <span style={styles.heroStatNumber}>500+</span>
              <span style={styles.heroStatLabel}>Happy Children</span>
            </div>
            <div style={styles.heroStatItem}>
              <span style={styles.heroStatNumber}>1:4</span>
              <span style={styles.heroStatLabel}>Teacher Ratio</span>
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <div style={styles.filterSection}>
          <button 
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            style={styles.filterButton}
            onClick={() => setActiveFilter('all')}
          >
            All Programs
          </button>
          <button 
            className={`filter-button ${activeFilter === 'toddler' ? 'active' : ''}`}
            style={styles.filterButton}
            onClick={() => setActiveFilter('toddler')}
          >
            Toddler
          </button>
          <button 
            className={`filter-button ${activeFilter === 'nursery' ? 'active' : ''}`}
            style={styles.filterButton}
            onClick={() => setActiveFilter('nursery')}
          >
            Nursery
          </button>
          <button 
            className={`filter-button ${activeFilter === 'junior-k' ? 'active' : ''}`}
            style={styles.filterButton}
            onClick={() => setActiveFilter('junior-k')}
          >
            Junior KG
          </button>
          <button 
            className={`filter-button ${activeFilter === 'senior-k' ? 'active' : ''}`}
            style={styles.filterButton}
            onClick={() => setActiveFilter('senior-k')}
          >
            Senior KG
          </button>
        </div>

        {/* Main Programs Grid */}
        <section>
          <h2 style={styles.sectionTitle}>Choose the Perfect Program for Your Child</h2>
          <div style={styles.programGrid}>
            {filteredPrograms.map((program, index) => (
              <div 
                key={program.id} 
                className="program-card"
                data-observe="true"
                id={`program-${program.id}`}
                data-visible={isVisible[`program-${program.id}`]}
                style={{
                  ...styles.programCard,
                  borderTop: `5px solid ${program.color}`,
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
              >
                {program.id === 1 && (
                  <div style={styles.programBadge}>NEW</div>
                )}
                
                <div style={styles.programHeader}>
                  <span style={styles.programIcon}>{program.icon}</span>
                  <h3 style={styles.programTitle}>{program.ageGroup}</h3>
                  <span style={styles.programAge}>{program.age}</span>
                </div>

                <div style={styles.quickInfoGrid}>
                  <div style={styles.quickInfoItem}>
                    <div style={styles.quickInfoLabel}>Capacity</div>
                    <div style={styles.quickInfoValue}>{program.capacity}</div>
                  </div>
                  <div style={styles.quickInfoItem}>
                    <div style={styles.quickInfoLabel}>Ratio</div>
                    <div style={styles.quickInfoValue}>{program.teacherRatio}</div>
                  </div>
                  <div style={styles.quickInfoItem}>
                    <div style={styles.quickInfoLabel}>Fee</div>
                    <div style={styles.quickInfoValue}>{program.price}</div>
                  </div>
                </div>
                
                <p style={styles.programDescription}>{program.description}</p>
                
                {selectedProgram === program.id && (
                  <div style={styles.featuresSection}>
                    <h4 style={styles.featuresTitle}>Program Highlights:</h4>
                    <ul style={styles.featuresList}>
                      {program.features.map((feature, idx) => (
                        <li key={idx} style={styles.featureItem}>
                          <span style={styles.checkIcon}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div style={styles.timingInfo}>
                      ⏰ Daily Schedule: {program.timing}
                    </div>
                  </div>
                )}

                <button 
                  className="expand-button"
                  style={styles.expandButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProgram(selectedProgram === program.id ? null : program.id);
                  }}
                >
                  {selectedProgram === program.id ? 'Show Less' : 'Learn More'}
                </button>

                <button 
                  style={{
                    ...styles.expandButton,
                    backgroundColor: '#48bb78',
                    marginTop: '10px'
                  }}
                  className="expand-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEnrollProgram(program);
                    setShowEnrollModal(true);
                  }}
                >
                  Enroll Now ✨
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Special Activities Section with Schedule */}
        <section style={styles.activitiesSection}>
          <h2 style={styles.sectionTitle}>Special Activities</h2>
          <p style={{textAlign: 'center', color: '#666', marginBottom: '30px', fontSize: '1.1em'}}>
            Beyond the regular curriculum, we offer these enriching activities
          </p>
          
          <div style={styles.activitiesGrid}>
            {specialActivities.map((activity, index) => (
              <div 
                key={index} 
                className="activity-card" 
                style={styles.activityCard}
                data-observe="true"
                id={`activity-${index}`}
                data-visible={isVisible[`activity-${index}`]}
              >
                <div style={styles.activityIcon}>{activity.icon}</div>
                <h3 style={styles.activityTitle}>{activity.title}</h3>
                <p style={styles.activityDescription}>{activity.description}</p>
                <div style={{
                  ...styles.timingInfo,
                  marginTop: '15px',
                  padding: '8px',
                  fontSize: '0.9em'
                }}>
                  🕐 {activity.schedule}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={styles.testimonialSection}>
          <h2 style={styles.sectionTitle}>What Parents Say</h2>
          <div style={styles.testimonialGrid}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                style={styles.testimonialCard}
                data-observe="true"
                id={`testimonial-${index}`}
                data-visible={isVisible[`testimonial-${index}`]}
              >
                <div style={styles.testimonialQuote}>"{testimonial.quote}"</div>
                <div style={styles.testimonialAuthor}>
                  <span style={styles.testimonialImage}>{testimonial.image}</span>
                  <div style={styles.testimonialInfo}>
                    <div style={styles.testimonialName}>{testimonial.name}</div>
                    <div style={styles.testimonialChild}>{testimonial.childName}</div>
                    <div style={styles.ratingStars}>
                      {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Note with CTA */}
        <div style={styles.footerNote}>
          <p style={{margin: '0 0 15px 0', fontSize: '1.2em'}}>🌟 Limited seats available for the upcoming academic year! 🌟</p>
          <p style={{margin: '0 0 25px 0', fontSize: '0.95em', opacity: '0.9'}}>
            Contact us for a personal tour and meet our dedicated team of educators
          </p>
          <button 
            style={{
              ...styles.expandButton,
              width: 'auto',
              padding: '15px 40px',
              fontSize: '1.1em',
              backgroundColor: 'white',
              color: '#667eea'
            }}
            className="expand-button"
            onClick={() => window.location.href = 'tel:+1234567890'}
          >
            📞 Schedule a Visit
          </button>
        </div>
      </div>

      {/* Enrollment Modal */}
      {showEnrollModal && enrollProgram && (
        <div style={styles.modalOverlay} onClick={() => setShowEnrollModal(false)}>
          <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
            <span 
              style={styles.modalClose}
              className="modal-close"
              onClick={() => setShowEnrollModal(false)}
            >
              ×
            </span>
            
            <h2 style={{...styles.sectionTitle, marginBottom: '20px'}}>
              Enroll in {enrollProgram.ageGroup}
            </h2>
            
            <div style={styles.quickInfoGrid}>
              <div style={styles.quickInfoItem}>
                <div style={styles.quickInfoLabel}>Age Group</div>
                <div style={styles.quickInfoValue}>{enrollProgram.age}</div>
              </div>
              <div style={styles.quickInfoItem}>
                <div style={styles.quickInfoLabel}>Timing</div>
                <div style={styles.quickInfoValue}>{enrollProgram.timing}</div>
              </div>
              <div style={styles.quickInfoItem}>
                <div style={styles.quickInfoLabel}>Fee</div>
                <div style={styles.quickInfoValue}>{enrollProgram.price}</div>
              </div>
            </div>
            
            <form style={styles.enrollForm} onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your interest! We will contact you soon.');
              setShowEnrollModal(false);
            }}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Parent's Name *</label>
                <input 
                  type="text" 
                  required 
                  className="form-input"
                  style={styles.formInput}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Child's Name *</label>
                <input 
                  type="text" 
                  required 
                  className="form-input"
                  style={styles.formInput}
                  placeholder="Enter child's full name"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Child's Age *</label>
                <input 
                  type="text" 
                  required 
                  className="form-input"
                  style={styles.formInput}
                  placeholder="e.g., 3.5 years"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Email *</label>
                <input 
                  type="email" 
                  required 
                  className="form-input"
                  style={styles.formInput}
                  placeholder="Enter your email"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  className="form-input"
                  style={styles.formInput}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Preferred Start Date</label>
                <input 
                  type="date" 
                  className="form-input"
                  style={styles.formInput}
                />
              </div>
              
              <button 
                type="submit" 
                className="form-submit"
                style={styles.formSubmit}
              >
                Submit Enrollment Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}