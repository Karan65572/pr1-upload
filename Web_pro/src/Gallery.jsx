import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState({});
  const [likedImages, setLikedImages] = useState({});

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

  const galleryCategories = [
    { id: 'all', name: 'All Moments', icon: '📸' },
    { id: 'activities', name: 'Activities', icon: '🎨' },
    { id: 'events', name: 'Events', icon: '🎉' },
    { id: 'classroom', name: 'Classroom', icon: '🏫' },
    { id: 'playground', name: 'Playground', icon: '🌳' },
    { id: 'artwork', name: 'Art Work', icon: '🖼️' }
  ];

  const galleryImages = [
    {
      id: 1,
      title: "Morning Circle Time",
      description: "Children gathering for morning prayers and circle time activities",
      image: "🎪",
      category: "activities",
      date: "2024-02-15",
      likes: 45,
      featured: true,
      teacher: "Ms. Priya"
    },
    {
      id: 2,
      title: "Annual Day Celebration",
      description: "Little ones performing at our annual day function",
      image: "🎭",
      category: "events",
      date: "2024-02-10",
      likes: 78,
      featured: true,
      teacher: "Mr. Raj"
    },
    {
      id: 3,
      title: "Art & Craft Session",
      description: "Children exploring their creativity with colors and crafts",
      image: "🎨",
      category: "artwork",
      date: "2024-02-08",
      likes: 34,
      featured: false,
      teacher: "Ms. Anjali"
    },
    {
      id: 4,
      title: "Playground Fun",
      description: "Outdoor playtime at our safe and fun playground",
      image: "🏃",
      category: "playground",
      date: "2024-02-05",
      likes: 56,
      featured: true,
      teacher: "Mr. Sharma"
    },
    {
      id: 5,
      title: "Storytelling Session",
      description: "Enchanting storytelling session with animated expressions",
      image: "📖",
      category: "activities",
      date: "2024-02-03",
      likes: 67,
      featured: false,
      teacher: "Ms. Meera"
    },
    {
      id: 6,
      title: "Yoga Day",
      description: "Children practicing yoga for mindfulness and flexibility",
      image: "🧘",
      category: "activities",
      date: "2024-01-30",
      likes: 43,
      featured: false,
      teacher: "Ms. Neha"
    },
    {
      id: 7,
      title: "Classroom Learning",
      description: "Interactive learning session in our smart classroom",
      image: "📚",
      category: "classroom",
      date: "2024-01-28",
      likes: 39,
      featured: true,
      teacher: "Ms. Kavita"
    },
    {
      id: 8,
      title: "Republic Day Celebration",
      description: "Little patriots celebrating Republic Day",
      image: "🇮🇳",
      category: "events",
      date: "2024-01-26",
      likes: 92,
      featured: true,
      teacher: "Mr. Verma"
    },
    {
      id: 9,
      title: "Clay Modeling",
      description: "Creative clay modeling activity enhancing fine motor skills",
      image: "🏺",
      category: "artwork",
      date: "2024-01-24",
      likes: 28,
      featured: false,
      teacher: "Ms. Ritu"
    },
    {
      id: 10,
      title: "Water Play Day",
      description: "Fun water play activities on a sunny day",
      image: "💦",
      category: "playground",
      date: "2024-01-22",
      likes: 71,
      featured: false,
      teacher: "Mr. Kumar"
    },
    {
      id: 11,
      title: "Music & Dance",
      description: "Rhythm and movement class with musical instruments",
      image: "🎵",
      category: "activities",
      date: "2024-01-20",
      likes: 52,
      featured: true,
      teacher: "Ms. Tina"
    },
    {
      id: 12,
      title: "Parent-Teacher Meet",
      description: "Interactive session with parents and teachers",
      image: "👥",
      category: "events",
      date: "2024-01-18",
      likes: 44,
      featured: false,
      teacher: "Staff"
    }
  ];

  const featuredImages = galleryImages.filter(img => img.featured);
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleLike = (imageId) => {
    setLikedImages(prev => ({
      ...prev,
      [imageId]: !prev[imageId]
    }));
  };

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      backgroundColor: '#fafafa'
    },
    heroSection: {
      position: 'relative',
      textAlign: 'center',
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
      borderRadius: '30px',
      marginBottom: '50px',
      color: 'white',
      boxShadow: '0 20px 40px rgba(255, 107, 107, 0.3)',
      overflow: 'hidden'
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"%3E%3Ccircle cx="20" cy="20" r="3"/%3E%3Ccircle cx="10" cy="10" r="2"/%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/svg%3E")',
      opacity: 0.3
    },
    heroTitle: {
      position: 'relative',
      fontSize: '3.5em',
      margin: '0 0 20px 0',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
      animation: 'fadeInDown 1s ease-out',
      fontWeight: '700'
    },
    heroSubtitle: {
      position: 'relative',
      fontSize: '1.3em',
      margin: '0 0 30px 0',
      opacity: '0.95',
      animation: 'fadeInUp 1s ease-out 0.3s both'
    },
    statsBar: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      marginTop: '40px',
      animation: 'fadeIn 1s ease-out 0.6s both'
    },
    statItem: {
      textAlign: 'center',
      background: 'rgba(255,255,255,0.2)',
      padding: '15px 25px',
      borderRadius: '15px',
      backdropFilter: 'blur(10px)'
    },
    statNumber: {
      fontSize: '2em',
      fontWeight: '700',
      display: 'block'
    },
    statLabel: {
      fontSize: '0.9em',
      opacity: '0.9'
    },
    categoryFilter: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '40px',
      flexWrap: 'wrap',
      padding: '20px'
    },
    categoryButton: {
      padding: '12px 25px',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1em',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: '#f0f0f0',
      color: '#666',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    },
    featuredSection: {
      marginBottom: '60px'
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5em',
      color: '#2d3436',
      marginBottom: '30px',
      position: 'relative',
      paddingBottom: '15px',
      fontWeight: '600'
    },
    featuredGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '25px',
      marginBottom: '40px'
    },
    featuredCard: {
      position: 'relative',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      padding: '30px',
      color: 'white',
      overflow: 'hidden',
      boxShadow: '0 15px 35px rgba(102, 126, 234, 0.3)',
      animation: 'pulse 2s infinite'
    },
    featuredIcon: {
      fontSize: '4em',
      marginBottom: '15px'
    },
    featuredBadge: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: '#ffd700',
      color: '#333',
      padding: '5px 15px',
      borderRadius: '25px',
      fontSize: '0.9em',
      fontWeight: 'bold',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '25px',
      marginBottom: '50px'
    },
    galleryCard: {
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
      position: 'relative'
    },
    imageContainer: {
      position: 'relative',
      paddingTop: '75%',
      backgroundColor: '#f0f0f0',
      overflow: 'hidden'
    },
    imagePlaceholder: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '5em',
      transition: 'transform 0.5s ease'
    },
    categoryTag: {
      position: 'absolute',
      top: '15px',
      left: '15px',
      backgroundColor: 'rgba(255,255,255,0.9)',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '0.8em',
      fontWeight: '600',
      color: '#333',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 2
    },
    imageInfo: {
      padding: '20px'
    },
    imageTitle: {
      fontSize: '1.3em',
      fontWeight: '600',
      color: '#2d3436',
      marginBottom: '8px'
    },
    imageDescription: {
      fontSize: '0.9em',
      color: '#666',
      lineHeight: '1.5',
      marginBottom: '15px'
    },
    imageMeta: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 20px',
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid #eee'
    },
    teacherInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '0.9em',
      color: '#555'
    },
    teacherIcon: {
      fontSize: '1.2em'
    },
    likeButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      padding: '8px 15px',
      border: 'none',
      borderRadius: '20px',
      backgroundColor: 'white',
      color: '#ff6b6b',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '0.9em',
      fontWeight: '600',
      boxShadow: '0 2px 10px rgba(255,107,107,0.2)'
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(10px)'
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '30px',
      padding: '40px',
      maxWidth: '800px',
      width: '90%',
      maxHeight: '90vh',
      overflow: 'auto',
      position: 'relative',
      animation: 'modalSlideIn 0.4s ease-out'
    },
    modalClose: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      fontSize: '2em',
      cursor: 'pointer',
      color: '#666',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      backgroundColor: '#f0f0f0',
      transition: 'all 0.3s ease',
      zIndex: 2
    },
    modalImage: {
      fontSize: '10em',
      textAlign: 'center',
      marginBottom: '30px'
    },
    modalDetails: {
      padding: '20px'
    },
    modalTitle: {
      fontSize: '2em',
      color: '#2d3436',
      marginBottom: '15px',
      fontWeight: '600'
    },
    modalDescription: {
      fontSize: '1.1em',
      color: '#666',
      lineHeight: '1.6',
      marginBottom: '25px'
    },
    modalMeta: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '15px',
      marginBottom: '30px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '15px'
    },
    modalMetaItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    },
    modalMetaLabel: {
      fontSize: '0.85em',
      color: '#888',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    modalMetaValue: {
      fontSize: '1.1em',
      fontWeight: '600',
      color: '#2d3436'
    },
    memoryBookSection: {
      marginTop: '60px',
      padding: '40px',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      borderRadius: '30px',
      color: 'white',
      textAlign: 'center'
    },
    memoryBookTitle: {
      fontSize: '2.2em',
      marginBottom: '20px',
      fontWeight: '700'
    },
    memoryBookButton: {
      padding: '15px 40px',
      border: 'none',
      borderRadius: '50px',
      background: 'white',
      color: '#f5576c',
      fontSize: '1.1em',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '30px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
    },
    dateBadge: {
      fontSize: '0.8em',
      color: '#888',
      marginTop: '5px'
    }
  };

  return (
    <><br /><br />
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

          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(-50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
          }

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .gallery-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }

          .gallery-card:hover .image-placeholder {
            transform: translate(-50%, -50%) scale(1.1);
          }

          .category-button:hover {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
          }

          .category-button.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }

          .like-button:hover {
            background-color: #ff6b6b;
            color: white;
            transform: scale(1.05);
          }

          .like-button.liked {
            background-color: #ff6b6b;
            color: white;
          }

          .modal-close:hover {
            background-color: #ff6b6b;
            color: white;
            transform: rotate(90deg);
          }

          .memory-book-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          }

          [data-observe="true"] {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
          }

          [data-observe="true"][data-visible="true"] {
            opacity: 1;
            transform: translateY(0);
          }

          @media (max-width: 768px) {
            .hero-title {
              font-size: 2.5em;
            }
            
            .stats-bar {
              flex-direction: column;
              gap: 15px;
            }
            
            .category-filter {
              gap: 10px;
            }
            
            .category-button {
              padding: 8px 15px;
              font-size: 0.9em;
            }
          }
        `}
      </style>

      <div style={styles.container}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroBackground}></div>
          <h1 style={styles.heroTitle}>Our Precious Moments</h1>
          <p style={styles.heroSubtitle}>Capturing the joy, learning, and laughter at Apeksha Play School</p>
          
          <div style={styles.statsBar}>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>{galleryImages.length}+</span>
              <span style={styles.statLabel}>Moments</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>{featuredImages.length}</span>
              <span style={styles.statLabel}>Featured</span>
            </div>
            <div style={styles.statItem}>
              <span style={styles.statNumber}>500+</span>
              <span style={styles.statLabel}>Smiles</span>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <div style={styles.categoryFilter}>
          {galleryCategories.map(category => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              style={styles.categoryButton}
              onClick={() => setActiveCategory(category.id)}
            >
              <span>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Section */}
        {activeCategory === 'all' && (
          <section style={styles.featuredSection}>
            <h2 style={styles.sectionTitle}>✨ Featured Moments</h2>
            <div style={styles.featuredGrid}>
              {featuredImages.map(image => (
                <div 
                  key={image.id}
                  style={styles.featuredCard}
                  data-observe="true"
                  id={`featured-${image.id}`}
                  data-visible={isVisible[`featured-${image.id}`]}
                >
                  <span style={styles.featuredBadge}>Featured</span>
                  <div style={styles.featuredIcon}>{image.image}</div>
                  <h3 style={{fontSize: '1.5em', marginBottom: '10px'}}>{image.title}</h3>
                  <p style={{opacity: 0.9, marginBottom: '15px'}}>{image.description}</p>
                  <div style={{display: 'flex', gap: '15px', fontSize: '0.9em'}}>
                    <span>❤️ {image.likes + (likedImages[image.id] ? 1 : 0)}</span>
                    <span>👩‍🏫 {image.teacher}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Gallery Grid */}
        <section>
          <h2 style={styles.sectionTitle}>
            {activeCategory === 'all' ? 'All Gallery' : galleryCategories.find(c => c.id === activeCategory)?.name}
          </h2>
          <div style={styles.galleryGrid}>
            {filteredImages.map(image => (
              <div 
                key={image.id}
                className="gallery-card"
                style={styles.galleryCard}
                data-observe="true"
                id={`gallery-${image.id}`}
                data-visible={isVisible[`gallery-${image.id}`]}
                onClick={() => setSelectedImage(image)}
              >
                <div style={styles.imageContainer}>
                  <span className="image-placeholder" style={styles.imagePlaceholder}>
                    {image.image}
                  </span>
                  <span style={styles.categoryTag}>
                    {galleryCategories.find(c => c.id === image.category)?.icon} {image.category}
                  </span>
                </div>
                
                <div style={styles.imageInfo}>
                  <h3 style={styles.imageTitle}>{image.title}</h3>
                  <p style={styles.imageDescription}>{image.description}</p>
                  <div style={styles.dateBadge}>📅 {new Date(image.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                </div>

                <div style={styles.imageMeta}>
                  <span style={styles.teacherInfo}>
                    <span style={styles.teacherIcon}>👩‍🏫</span>
                    {image.teacher}
                  </span>
                  <button 
                    className={`like-button ${likedImages[image.id] ? 'liked' : ''}`}
                    style={styles.likeButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(image.id);
                    }}
                  >
                    ❤️ {image.likes + (likedImages[image.id] ? 1 : 0)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Memory Book Section */}
        <section style={styles.memoryBookSection}>
          <h2 style={styles.memoryBookTitle}>📸 Create Your Child's Memory Book</h2>
          <p style={{fontSize: '1.2em', marginBottom: '20px', opacity: 0.95}}>
            Want a personalized memory book of your child's journey at Apeksha?
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
            <button 
              className="memory-book-button"
              style={styles.memoryBookButton}
              onClick={() => alert('Thank you for your interest! Our team will contact you soon.')}
            >
              Request Memory Book 📖
            </button>
            <button 
              className="memory-book-button"
              style={{...styles.memoryBookButton, background: 'transparent', color: 'white', border: '2px solid white'}}
              onClick={() => window.location.href = '/contact'}
            >
              Share Your Moments 📸
            </button>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div style={styles.modalOverlay} onClick={() => setSelectedImage(null)}>
            <div style={styles.modalContent} onClick={e => e.stopPropagation()}>
              <span 
                className="modal-close"
                style={styles.modalClose}
                onClick={() => setSelectedImage(null)}
              >
                ×
              </span>
              
              <div style={styles.modalImage}>
                {selectedImage.image}
              </div>
              
              <div style={styles.modalDetails}>
                <h2 style={styles.modalTitle}>{selectedImage.title}</h2>
                <p style={styles.modalDescription}>{selectedImage.description}</p>
                
                <div style={styles.modalMeta}>
                  <div style={styles.modalMetaItem}>
                    <span style={styles.modalMetaLabel}>Category</span>
                    <span style={styles.modalMetaValue}>
                      {galleryCategories.find(c => c.id === selectedImage.category)?.icon} {selectedImage.category}
                    </span>
                  </div>
                  <div style={styles.modalMetaItem}>
                    <span style={styles.modalMetaLabel}>Date</span>
                    <span style={styles.modalMetaValue}>
                      {new Date(selectedImage.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  <div style={styles.modalMetaItem}>
                    <span style={styles.modalMetaLabel}>Teacher</span>
                    <span style={styles.modalMetaValue}>👩‍🏫 {selectedImage.teacher}</span>
                  </div>
                  <div style={styles.modalMetaItem}>
                    <span style={styles.modalMetaLabel}>Likes</span>
                    <span style={styles.modalMetaValue}>❤️ {selectedImage.likes + (likedImages[selectedImage.id] ? 1 : 0)}</span>
                  </div>
                </div>

                <div style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
                  <button 
                    className="like-button"
                    style={{...styles.likeButton, padding: '12px 30px'}}
                    onClick={() => handleLike(selectedImage.id)}
                  >
                    {likedImages[selectedImage.id] ? '❤️ Liked' : '🤍 Like'}
                  </button>
                  <button 
                    className="like-button"
                    style={{...styles.likeButton, backgroundColor: '#4CAF50', color: 'white'}}
                    onClick={() => alert('Image saved to your collection!')}
                  >
                    📥 Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}