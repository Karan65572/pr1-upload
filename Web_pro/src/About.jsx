// About.jsx - About Page for Apeksha Play School with Self Images
import React from 'react';
import { Link } from 'react-router';

const About = () => {
  // Team members data - Replace image paths with your actual image paths
  const teamMembers = [
    {
      id: 1,
      name: 'Mrs. Priya Sharma',
      position: 'Founder & Director',
      qualification: 'M.Ed, Montessori Certified',
      experience: '15+ years',
      image: 'https://www.galgotiasuniversity.edu.in/public/uploads/media/53iW1BtI5tEAa8jzBSO50lVhZPbUH0XWPLew3lhW.webp', // Replace with your image path
      description: 'Passionate educator with a vision to create a nurturing learning environment.',
    },
    {
      id: 2,
      name: 'Ms. Anjali Desai',
      position: 'Head of Curriculum',
      qualification: 'M.A. Child Psychology',
      experience: '12+ years',
      image: 'https://tse1.mm.bing.net/th/id/OIP.ibYvlpjNO2p_I0nAdLXHEQHaJQ?pid=Api&h=220&P=0', // Replace with your image path
      description: 'Expert in early childhood education and curriculum development.',
    },
    {
      id: 3,
      name: 'Mrs. Meera Patel',
      position: 'Senior Coordinator',
      qualification: 'B.Ed, Montessori Diploma',
      experience: '10+ years',
      image: 'https://tse2.mm.bing.net/th/id/OIP.MMshocfwEkkaZMqlSKBbbQAAAA?pid=Api&h=220&P=0', // Replace with your image path
      description: 'Dedicated to fostering holistic development in young learners.',
    },
    {
      id: 4,
      name: 'Ms. Neha Gupta',
      position: 'Activity Head',
      qualification: 'Diploma in Child Care',
      experience: '8+ years',
      image: 'https://tse3.mm.bing.net/th/id/OIP.WYvKlLx2mp8V9FoapEyx_QHaJ4?pid=Api&h=220&P=0', // Replace with your image path
      description: 'Specializes in creative learning and extracurricular activities.',
    },
  ];

  // Core values data
  const coreValues = [
    {
      icon: '❤️',
      title: 'Nurturing Care',
      description: 'We provide a safe, loving environment where every child feels valued and supported.',
    },
    {
      icon: '🎨',
      title: 'Creative Learning',
      description: 'Innovative teaching methods that spark curiosity and encourage creative thinking.',
    },
    {
      icon: '🤝',
      title: 'Respect & Empathy',
      description: 'Teaching children to respect others and develop emotional intelligence.',
    },
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'Striving for the highest standards in early childhood education.',
    },
  ];

  // Milestones data
  const milestones = [
    { year: '2010', title: 'Founded', description: 'Started with just 15 students' },
    { year: '2013', title: 'Expanded', description: 'Moved to larger campus' },
    { year: '2016', title: 'Recognition', description: 'Received Best Preschool Award' },
    { year: '2020', title: 'Digital Learning', description: 'Introduced smart classrooms' },
    { year: '2024', title: '200+ Students', description: 'Growing family of learners' },
  ];

  // Gallery images for the story section - Replace with your actual image paths
  const storyImages = [
    '/public/Apeksha.png', // Replace with your image path
    'https://mulberrylearning.com/wp-content/uploads/2020/04/IMG_7710-1024x512.jpg', // Replace with your image path
    'https://i.ytimg.com/vi/DLshkovaStU/maxresdefault.jpg', // Replace with your image path
  ];

  // Styles object containing all CSS
  const styles = {
    aboutPage: {
      fontFamily: "'Poppins', sans-serif",
      color: '#333',
      overflowX: 'hidden',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#2c3e50',
      marginBottom: '2rem',
      position: 'relative',
    },
    sectionTitleCenter: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#2c3e50',
      marginBottom: '2rem',
      position: 'relative',
      textAlign: 'center',
    },
    // Hero Section
    heroSection: {
      height: '500px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      marginTop: '80px',
    },
    heroContent: {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      padding: '0 20px',
    },
    heroTitle: {
      fontSize: '4rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
      animation: 'fadeInUp 1s ease',
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      opacity: 0.95,
      lineHeight: 1.6,
      animation: 'fadeInUp 1s ease 0.2s both',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    },
    // Story Section
    storySection: {
      padding: '80px 0',
      background: '#f9f9f9',
    },
    storyGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      alignItems: 'center',
    },
    storyContent: {
      paddingRight: '30px',
    },
    storyText: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
      color: '#555',
      marginBottom: '20px',
    },
    storyImageContainer: {
      position: 'relative',
      height: '400px',
    },
    storyImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '15px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    },
    storyImageOverlay: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      right: '20px',
      bottom: '20px',
      border: '2px solid white',
      borderRadius: '15px',
      pointerEvents: 'none',
    },
    // Vision Mission Section
    visionMissionSection: {
      padding: '60px 0',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    },
    visionMissionGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
    },
    visionCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '40px',
      borderRadius: '15px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    missionCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '40px',
      borderRadius: '15px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    iconLarge: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    cardTitle: {
      fontSize: '2rem',
      marginBottom: '20px',
    },
    cardText: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      opacity: 0.9,
    },
    // Core Values Section
    valuesSection: {
      padding: '80px 0',
      background: 'white',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      marginTop: '50px',
    },
    valueCard: {
      textAlign: 'center',
      padding: '30px',
      background: '#f8f9fa',
      borderRadius: '15px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer',
    },
    valueIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    valueTitle: {
      fontSize: '1.5rem',
      marginBottom: '15px',
      color: '#2c3e50',
    },
    valueDescription: {
      color: '#666',
      lineHeight: 1.6,
    },
    // Team Section
    teamSection: {
      padding: '80px 0',
      background: '#f9f9f9',
    },
    teamSubtitle: {
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#666',
      marginBottom: '50px',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
    },
    teamCard: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    teamImage: {
      height: '250px',
      overflow: 'hidden',
    },
    teamImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
    },
    teamInfo: {
      padding: '25px',
    },
    teamName: {
      fontSize: '1.3rem',
      marginBottom: '5px',
      color: '#2c3e50',
    },
    teamPosition: {
      color: '#ff6b6b',
      fontWeight: 600,
      marginBottom: '10px',
    },
    teamQualification: {
      color: '#666',
      fontSize: '0.9rem',
      marginBottom: '5px',
    },
    teamExperience: {
      color: '#666',
      fontSize: '0.9rem',
      marginBottom: '5px',
    },
    teamDescription: {
      color: '#777',
      fontSize: '0.95rem',
      lineHeight: 1.6,
      marginTop: '10px',
    },
    // Why Choose Us Section
    whyChooseSection: {
      padding: '80px 0',
      background: 'white',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
      marginTop: '50px',
    },
    feature: {
      textAlign: 'center',
      padding: '30px',
      background: '#f8f9fa',
      borderRadius: '15px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      color: '#ff6b6b',
      transition: 'color 0.3s ease',
    },
    featureTitle: {
      fontSize: '1.3rem',
      marginBottom: '15px',
    },
    featureText: {
      color: 'inherit',
      lineHeight: 1.6,
      opacity: 0.9,
    },
    // Milestones Section
    milestonesSection: {
      padding: '80px 0',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    },
    timeline: {
      position: 'relative',
      maxWidth: '800px',
      margin: '50px auto 0',
    },
    timelineItem: {
      position: 'relative',
      marginBottom: '50px',
    },
    timelineYear: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100px',
      textAlign: 'right',
      fontSize: '1.3rem',
      fontWeight: 700,
    },
    timelineContent: {
      marginLeft: '120px',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '20px',
      borderRadius: '10px',
    },
    timelineTitle: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    // Testimonials Preview
    testimonialsSection: {
      padding: '80px 0',
      background: '#f9f9f9',
    },
    testimonialCard: {
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
      padding: '50px',
      background: 'white',
      borderRadius: '15px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    },
    testimonialQuote: {
      fontSize: '1.3rem',
      lineHeight: 1.8,
      color: '#555',
      fontStyle: 'italic',
      marginBottom: '30px',
      position: 'relative',
    },
    testimonialAuthor: {
      marginBottom: '30px',
    },
    authorName: {
      display: 'block',
      fontSize: '1.2rem',
      color: '#2c3e50',
      marginBottom: '5px',
    },
    authorTitle: {
      color: '#666',
    },
    readMoreBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      color: '#ff6b6b',
      textDecoration: 'none',
      fontWeight: 600,
      padding: '12px 30px',
      border: '2px solid #ff6b6b',
      borderRadius: '30px',
      transition: 'all 0.3s ease',
    },
    // CTA Section
    ctaSection: {
      padding: '100px 0',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
    },
    ctaTitle: {
      fontSize: '3rem',
      marginBottom: '20px',
    },
    ctaText: {
      fontSize: '1.3rem',
      marginBottom: '40px',
      opacity: 0.95,
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
    },
    ctaPrimary: {
      padding: '15px 40px',
      borderRadius: '30px',
      fontSize: '1.1rem',
      fontWeight: 600,
      textDecoration: 'none',
      background: 'white',
      color: '#764ba2',
      transition: 'all 0.3s ease',
    },
    ctaSecondary: {
      padding: '15px 40px',
      borderRadius: '30px',
      fontSize: '1.1rem',
      fontWeight: 600,
      textDecoration: 'none',
      border: '2px solid white',
      color: 'white',
      transition: 'all 0.3s ease',
    },
    // Image Gallery for Story Section
    imageGallery: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px',
      marginTop: '30px',
    },
    galleryImage: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    // School Stats
    statsSection: {
      padding: '60px 0',
      background: '#fff',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      textAlign: 'center',
    },
    statItem: {
      padding: '30px',
    },
    statNumber: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#ff6b6b',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '1.1rem',
      color: '#666',
    },
  };

  // Add keyframes for animations
  const styleSheet = document.styleSheets[0];
  const keyframes = `
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
  `;

  // Add keyframes to stylesheet
  try {
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  } catch (error) {
    // If stylesheet doesn't exist, create style element
    const style = document.createElement('style');
    style.textContent = keyframes;
    document.head.appendChild(style);
  }

  return (
    <div style={styles.aboutPage}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>About Apeksha Play School</h1>
          <p style={styles.heroSubtitle}>
            Where every child's potential is nurtured with care, love, and excellence
          </p>
        </div>
        <div style={styles.heroOverlay}></div>
      </section>

      {/* Our Story Section */}
      <section style={styles.storySection}>
        <div style={styles.container}>
          <div style={styles.storyGrid}>
            <div style={styles.storyContent}>
              <h2 style={styles.sectionTitle}>Our Story</h2>
              <p style={styles.storyText}>
                Founded in 2010, Apeksha Play School began with a simple yet powerful vision: 
                to create a haven where children could learn, grow, and flourish in their 
                formative years. The name "Apeksha" means "expectation" or "hope" - and we 
                truly embody this by nurturing hope and expectations in every child.
              </p>
              <p style={styles.storyText}>
                Over the years, we have grown from a small preschool with just 15 students 
                to a thriving learning community of over 200 young minds. Our journey has 
                been marked by countless smiles, first steps in learning, and the joy of 
                watching children discover their unique talents.
              </p>
              <p style={styles.storyText}>
                At Apeksha, we believe that the early years are the most crucial in a child's 
                development. Our approach combines modern educational techniques with 
                traditional values, creating a balanced foundation for lifelong learning.
              </p>
            </div>
            <div style={styles.storyImageContainer}>
              <img 
                src="/public/Apeksha.png" // Replace with your image path
                alt="Apeksha Play School Story" 
                style={styles.storyImage}
              />
              <div style={styles.storyImageOverlay}></div>
            </div>
          </div>
          
          {/* Image Gallery - Add your own images here */}
          <div style={styles.imageGallery}>
            {storyImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`School activity ${index + 1}`}
                style={styles.galleryImage}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* School Statistics - Add your own stats */}
      <section style={styles.statsSection}>
        <div style={styles.container}>
          <div style={styles.statsGrid}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>200+</div>
              <div style={styles.statLabel}>Happy Students</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>15+</div>
              <div style={styles.statLabel}>Qualified Teachers</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>14</div>
              <div style={styles.statLabel}>Years of Excellence</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>500+</div>
              <div style={styles.statLabel}>Alumni</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section style={styles.visionMissionSection}>
        <div style={styles.container}>
          <div style={styles.visionMissionGrid}>
            <div style={styles.visionCard}>
              <div style={styles.iconLarge}>🔭</div>
              <h3 style={styles.cardTitle}>Our Vision</h3>
              <p style={styles.cardText}>
                To be a beacon of excellence in early childhood education, nurturing 
                confident, compassionate, and curious learners who will shape tomorrow's world.
              </p>
            </div>
            <div style={styles.missionCard}>
              <div style={styles.iconLarge}>🎯</div>
              <h3 style={styles.cardTitle}>Our Mission</h3>
              <p style={styles.cardText}>
                To provide a safe, stimulating environment where children develop 
                holistically through play-based learning, fostering creativity, critical 
                thinking, and strong moral values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={styles.valuesSection}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>Our Core Values</h2>
          <div style={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                style={styles.valueCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={styles.valueIcon}>{value.icon}</div>
                <h3 style={styles.valueTitle}>{value.title}</h3>
                <p style={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section style={styles.teamSection}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>Meet Our Dedicated Team</h2>
          <p style={styles.teamSubtitle}>
            Passionate educators committed to nurturing young minds
          </p>
          <div style={styles.teamGrid}>
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                style={styles.teamCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={styles.teamImage}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={styles.teamImg}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                <div style={styles.teamInfo}>
                  <h3 style={styles.teamName}>{member.name}</h3>
                  <p style={styles.teamPosition}>{member.position}</p>
                  <p style={styles.teamQualification}>{member.qualification}</p>
                  <p style={styles.teamExperience}>Experience: {member.experience}</p>
                  <p style={styles.teamDescription}>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={styles.whyChooseSection}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>Why Choose Apeksha?</h2>
          <div style={styles.featuresGrid}>
            {[
              { icon: '🏆', title: 'Experienced Teachers', text: 'Qualified and caring educators with years of experience' },
              { icon: '📚', title: 'Modern Curriculum', text: 'Research-based learning approaches and materials' },
              { icon: '🏫', title: 'Safe Environment', text: 'Secure campus with CCTV surveillance and safety measures' },
              { icon: '🎭', title: 'Holistic Development', text: 'Focus on academic, social, emotional, and physical growth' },
              { icon: '👥', title: 'Small Class Size', text: 'Individual attention with low student-teacher ratio' },
              { icon: '🎪', title: 'Extracurriculars', text: 'Art, music, dance, sports, and personality development' },
            ].map((feature, index) => (
              <div 
                key={index} 
                style={styles.feature}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ff6b6b';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.children[0].style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f9fa';
                  e.currentTarget.style.color = '#333';
                  e.currentTarget.children[0].style.color = '#ff6b6b';
                }}
              >
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h4 style={styles.featureTitle}>{feature.title}</h4>
                <p style={styles.featureText}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section style={styles.milestonesSection}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center', color: 'white'}}>Our Journey</h2>
          <div style={styles.timeline}>
            {milestones.map((milestone, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineYear}>{milestone.year}</div>
                <div style={styles.timelineContent}>
                  <h3 style={styles.timelineTitle}>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section style={styles.testimonialsSection}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>What Parents Say</h2>
          <div style={styles.testimonialCard}>
            <p style={styles.testimonialQuote}>
              "Apeksha has been a second home for my child. The teachers are incredibly 
              caring and the progress we've seen is remarkable. Highly recommended!"
            </p>
            <div style={styles.testimonialAuthor}>
              <strong style={styles.authorName}>- Mrs. Sunita Reddy</strong>
              <span style={styles.authorTitle}>Parent of Aarav (UKG)</span>
            </div>
            <Link 
              to="/about/testimonials" 
              style={styles.readMoreBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ff6b6b';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#ff6b6b';
              }}
            >
              Read More Testimonials
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <h2 style={styles.ctaTitle}>Begin Your Child's Journey With Us</h2>
          <p style={styles.ctaText}>Join the Apeksha family and give your child the best start in life</p>
          <div style={styles.ctaButtons}>
            <Link 
              to="/enroll" 
              style={styles.ctaPrimary}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Enroll Now
            </Link>
            <Link 
              to="/contact" 
              style={styles.ctaSecondary}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#764ba2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;