// ImageGallery.jsx - Modern Image Gallery Component
import React, { useState } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=2070',
      thumbnail: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80&w=600',
      title: 'Outdoor Play Area',
      category: 'facilities',
      description: 'Safe and engaging outdoor space for physical activities'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=2070',
      thumbnail: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=600',
      title: 'Creative Learning',
      category: 'activities',
      description: 'Hands-on activities that spark creativity and imagination'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2070',
      thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600',
      title: 'Story Time',
      category: 'activities',
      description: 'Engaging storytelling sessions that develop language skills'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=2070',
      thumbnail: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600',
      title: 'Art & Craft',
      category: 'activities',
      description: 'Exploring colors and textures through creative expression'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=2070',
      thumbnail: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=600',
      title: 'Music & Movement',
      category: 'activities',
      description: 'Rhythm and dance activities that promote coordination'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=2070',
      thumbnail: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600',
      title: 'Classroom Setup',
      category: 'facilities',
      description: 'Bright, welcoming classrooms designed for young learners'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=2070',
      thumbnail: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600',
      title: 'Outdoor Adventures',
      category: 'outdoor',
      description: 'Exploring nature and learning through outdoor experiences'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=2070',
      thumbnail: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=600',
      title: 'Group Activities',
      category: 'activities',
      description: 'Building social skills through collaborative play'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Photos', icon: '🖼️' },
    { id: 'activities', label: 'Activities', icon: '🎨' },
    { id: 'facilities', label: 'Facilities', icon: '🏫' },
    { id: 'outdoor', label: 'Outdoor', icon: '🌳' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <>
      <style>{`
        .gallery-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .gallery-header h2 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          background: linear-gradient(135deg, #ff4d6d, #3b82f6, #facc15);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .gallery-header p {
          font-size: 1.2rem;
          color: #475569;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Category Filter */
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.8rem;
          border: none;
          background: white;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #1e293b;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border: 2px solid transparent;
        }

        .filter-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #ff4d6d, #3b82f6);
          color: white;
          box-shadow: 0 8px 25px rgba(255,77,109,0.3);
        }

        .filter-btn.active .filter-icon {
          filter: brightness(0) invert(1);
        }

        .filter-icon {
          font-size: 1.2rem;
        }

        /* Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .gallery-item {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          aspect-ratio: 4/3;
          cursor: pointer;
          box-shadow: 0 10px 30px -15px rgba(0,0,0,0.2);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .gallery-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.3);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        /* Image Overlay */
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.8) 0%,
            rgba(0,0,0,0.4) 50%,
            transparent 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          color: white;
        }

        .gallery-item:hover .image-overlay {
          opacity: 1;
        }

        .image-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          transform: translateY(20px);
          transition: transform 0.3s ease 0.1s;
        }

        .image-description {
          font-size: 0.9rem;
          opacity: 0.9;
          transform: translateY(20px);
          transition: transform 0.3s ease 0.2s;
        }

        .gallery-item:hover .image-title,
        .gallery-item:hover .image-description {
          transform: translateY(0);
        }

        /* Category Badge */
        .category-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(5px);
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          z-index: 2;
        }

        /* Lightbox Modal */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .lightbox.active {
          opacity: 1;
          visibility: visible;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 1rem;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }

        .lightbox-info {
          margin-top: 1rem;
          color: white;
          text-align: center;
        }

        .lightbox-info h3 {
          font-size: 1.5rem;
          margin-bottom: 0.3rem;
        }

        .lightbox-info p {
          font-size: 1rem;
          opacity: 0.8;
        }

        .close-btn {
          position: absolute;
          top: -3rem;
          right: -3rem;
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 2px solid white;
          color: white;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: white;
          color: black;
          transform: rotate(90deg);
        }

        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 2px solid white;
          color: white;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          background: white;
          color: black;
        }

        .nav-btn.prev {
          left: -5rem;
        }

        .nav-btn.next {
          right: -5rem;
        }

        @media (max-width: 768px) {
          .nav-btn {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1rem;
          }
          
          .nav-btn.prev {
            left: -3rem;
          }
          
          .nav-btn.next {
            right: -3rem;
          }
          
          .close-btn {
            top: -2.5rem;
            right: -2.5rem;
            width: 2.5rem;
            height: 2.5rem;
          }
        }

        /* Empty State */
        .no-images {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem;
          background: white;
          border-radius: 2rem;
          color: #94a3b8;
        }

        .no-images span {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
        }

        /* Load More Button */
        .load-more {
          text-align: center;
          margin-top: 2rem;
        }

        .load-more-btn {
          background: linear-gradient(135deg, #ff4d6d, #3b82f6);
          color: white;
          border: none;
          padding: 1rem 3rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255,77,109,0.3);
        }

        .load-more-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(255,77,109,0.4);
        }

        .load-more-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
      `}</style>

      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Our Gallery</h2>
          <p>Take a peek into the magical moments at Apeksha Play School</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              <span className="filter-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => setSelectedImage({ ...image, index })}
              >
                <img 
                  src={image.thumbnail} 
                  alt={image.title}
                  loading="lazy"
                />
                <div className="category-badge">
                  <span>{categories.find(c => c.id === image.category)?.icon}</span>
                  {image.category}
                </div>
                <div className="image-overlay">
                  <h3 className="image-title">{image.title}</h3>
                  <p className="image-description">{image.description}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-images">
              <span>📸</span>
              <h3>No images found</h3>
              <p>Try selecting a different category</p>
            </div>
          )}
        </div>

        {/* Load More Button */}
        {filteredImages.length > 0 && (
          <div className="load-more">
            <button className="load-more-btn">
              Load More Photos
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <div className={`lightbox ${selectedImage ? 'active' : ''}`}>
        {selectedImage && (
          <div className="lightbox-content">
            <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
            
            <button 
              className="nav-btn prev"
              onClick={() => {
                const currentIndex = selectedImage.index;
                const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
                setSelectedImage({ ...filteredImages[newIndex], index: newIndex });
              }}
            >
              ←
            </button>

            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="lightbox-image"
            />

            <button 
              className="nav-btn next"
              onClick={() => {
                const currentIndex = selectedImage.index;
                const newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
                setSelectedImage({ ...filteredImages[newIndex], index: newIndex });
              }}
            >
              →
            </button>

            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageGallery;