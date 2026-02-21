import React, { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
    howHeard: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    success: false
  });

  const [activeTab, setActiveTab] = useState('contact');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: '👋 Hi! I\'m Apeksha Assistant. How can I help you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formProgress, setFormProgress] = useState(0);
  const [copiedField, setCopiedField] = useState(null);
  
  const chatEndRef = useRef(null);
  const formRef = useRef(null);

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Calculate form progress
  useEffect(() => {
    const requiredFields = ['fullName', 'email', 'phone', 'childName', 'childAge', 'program'];
    const filledFields = requiredFields.filter(field => formData[field]?.trim()).length;
    setFormProgress((filledFields / requiredFields.length) * 100);
  }, [formData]);

  // FAQ data with categories
  const faqs = [
    {
      category: "General",
      questions: [
        {
          id: 1,
          question: "What are your operating hours?",
          answer: "We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 9:00 AM to 1:00 PM. Sunday is closed. During summer break, we have special timings from 8:00 AM to 4:00 PM."
        },
        {
          id: 2,
          question: "Is there a waiting list for admission?",
          answer: "Yes, for some programs we have a waiting list. We recommend applying at least 3-6 months in advance. Contact our admissions office for current availability."
        }
      ]
    },
    {
      category: "Admission",
      questions: [
        {
          id: 3,
          question: "What is the admission process?",
          answer: "The admission process includes: 1) School tour & interaction, 2) Application submission, 3) Document verification, 4) Payment of fees. The entire process takes 3-5 working days."
        },
        {
          id: 4,
          question: "What documents are required?",
          answer: "Required documents: Child's birth certificate, passport photos, vaccination records, parent ID proofs, address proof, and previous school records (if applicable)."
        }
      ]
    },
    {
      category: "Programs",
      questions: [
        {
          id: 5,
          question: "Do you offer trial classes?",
          answer: "Yes, we offer one free trial class for all programs. You can book your trial session through our contact form or by calling our admissions office."
        },
        {
          id: 6,
          question: "What is the teacher-student ratio?",
          answer: "We maintain a low teacher-student ratio: Toddler (1:4), Nursery (1:6), Junior KG (1:8), Senior KG (1:10). This ensures individual attention for each child."
        },
        {
          id: 7,
          question: "Is there a daycare facility?",
          answer: "Yes, we offer extended daycare facilities from 8:00 AM to 6:00 PM with additional activities, nap time, and healthy meals. Daycare can be availed on daily or monthly basis."
        }
      ]
    },
    {
      category: "Fees",
      questions: [
        {
          id: 8,
          question: "What is the fee structure?",
          answer: "Our fees vary by program: Toddler (₹15,000/term), Nursery (₹18,000/term), Junior KG (₹22,000/term), Senior KG (₹25,000/term). Daycare is charged separately at ₹300/day or ₹5,000/month."
        },
        {
          id: 9,
          question: "Are there any payment plans?",
          answer: "Yes, we offer term-wise, quarterly, and monthly payment options. We also provide 5% sibling discount and 10% early bird discount for annual payments."
        }
      ]
    }
  ];

  // Quick responses for chatbot
  const quickResponses = [
    { text: "📅 Visit Timing", reply: "What are your visiting hours?" },
    { text: "💰 Fee Details", reply: "Tell me about fees" },
    { text: "📝 Admission", reply: "How to apply for admission?" },
    { text: "🎯 Programs", reply: "What programs do you offer?" }
  ];

  // Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
  
  // Email service endpoint
  const EMAIL_SERVICE_URL = 'https://your-api-endpoint.com/send-email';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) return 'Please enter your full name';
    if (!formData.email.trim()) return 'Please enter your email';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.phone.trim()) return 'Please enter your phone number';
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) return 'Please enter a valid 10-digit phone number';
    if (!formData.childName.trim()) return 'Please enter your child\'s name';
    if (!formData.childAge) return 'Please select your child\'s age group';
    if (!formData.program) return 'Please select a program of interest';
    return null;
  };

  const submitToGoogleSheets = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
      formData.append('timestamp', new Date().toLocaleString());
      formData.append('source', 'website_contact_form');

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      return true;
    } catch (error) {
      console.error('Google Sheets submission error:', error);
      return false;
    }
  };

  const sendEmailNotification = async (data) => {
    try {
      // Simulated email send - replace with actual EmailJS or backend
      console.log('Email sent with data:', data);
      
      // Auto-reply to user
      setTimeout(() => {
        alert('📧 Check your email for confirmation!');
      }, 2000);
      
      return true;
    } catch (error) {
      console.error('Email sending error:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setFormStatus({ ...formStatus, error: validationError });
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setFormStatus({ submitting: true, error: null, submitted: false, success: false });

    try {
      // Submit to Google Sheets
      const sheetsResult = await submitToGoogleSheets(formData);
      
      // Send email notification
      const emailResult = await sendEmailNotification(formData);

      if (sheetsResult && emailResult) {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: null,
          success: true
        });
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          childName: '',
          childAge: '',
          program: '',
          message: '',
          preferredDate: '',
          preferredTime: '',
          howHeard: ''
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Something went wrong. Please try again or call us directly.',
        success: false
      });
    }
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    setChatMessages(prev => [...prev, { type: 'user', text: chatInput }]);

    // Simulate bot typing
    setTimeout(() => {
      const botResponse = getBotResponse(chatInput);
      setChatMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);

    setChatInput('');
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('hour') || lowerMessage.includes('timing') || lowerMessage.includes('open')) {
      return "🕒 **Operating Hours:**\n• Mon-Fri: 8:00 AM - 6:00 PM\n• Saturday: 9:00 AM - 1:00 PM\n• Sunday: Closed\n\nWould you like to schedule a visit?";
    } else if (lowerMessage.includes('fee') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return "💰 **Fee Structure (per term):**\n• Toddler: ₹15,000\n• Nursery: ₹18,000\n• Junior KG: ₹22,000\n• Senior KG: ₹25,000\n• Daycare: ₹300/day or ₹5,000/month\n\nWant to know about discounts?";
    } else if (lowerMessage.includes('admission') || lowerMessage.includes('enroll') || lowerMessage.includes('apply')) {
      return "📝 **Admission Process:**\n1. School tour & interaction\n2. Fill application form\n3. Document submission\n4. Fee payment\n\nReady to start? Fill the contact form above!";
    } else if (lowerMessage.includes('program') || lowerMessage.includes('class') || lowerMessage.includes('course')) {
      return "🎯 **Our Programs:**\n• Toddler (1.5-2.5 yrs)\n• Nursery (2.5-3.5 yrs)\n• Junior KG (3.5-4.5 yrs)\n• Senior KG (4.5-6 yrs)\n• Daycare (2-10 yrs)\n\nWhich program interests you?";
    } else if (lowerMessage.includes('trial') || lowerMessage.includes('demo')) {
      return "🌟 Yes! We offer one free trial class. Just fill the contact form and mention 'trial class' in the message. Our coordinator will call you to schedule it!";
    } else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return "📍 **Our Address:**\nApeksha Play School\n123 Education Avenue\nGreen Park Extension\nNew Delhi - 110016\n\nClick on 'Visit Us' tab above to see the map!";
    } else if (lowerMessage.includes('teacher') || lowerMessage.includes('ratio')) {
      return "👩‍🏫 **Teacher-Student Ratio:**\n• Toddler: 1:4\n• Nursery: 1:6\n• Junior KG: 1:8\n• Senior KG: 1:10\n\nWe ensure individual attention for every child!";
    } else if (lowerMessage.includes('discount') || lowerMessage.includes('offer')) {
      return "🎉 **Current Offers:**\n• 5% sibling discount\n• 10% early bird (annual payment)\n• Referral bonus: Get 5% off when you refer a friend!\n• 10% discount for defense personnel";
    } else {
      return "Thanks for your message! 😊 One of our team members will get back to you soon. Meanwhile, you can:\n• Check FAQ section below\n• Call us at +91 98765 43210\n• Schedule a visit using the form";
    }
  };

  const handleCopyText = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleQuickReply = (reply) => {
    setChatMessages(prev => [...prev, { type: 'user', text: reply }]);
    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      setChatMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 500);
  };

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      backgroundColor: '#f8fafc'
    },
    heroSection: {
      position: 'relative',
      textAlign: 'center',
      padding: '100px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '30px',
      marginBottom: '50px',
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
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      opacity: 0.2
    },
    heroTitle: {
      position: 'relative',
      fontSize: '3.5em',
      marginBottom: '20px',
      fontWeight: '700',
      animation: 'fadeInDown 1s ease-out',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
    },
    heroSubtitle: {
      position: 'relative',
      fontSize: '1.3em',
      opacity: '0.95',
      marginBottom: '30px',
      animation: 'fadeInUp 1s ease-out 0.3s both'
    },
    contactTabs: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '40px',
      flexWrap: 'wrap'
    },
    tabButton: {
      padding: '15px 40px',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.1em',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backgroundColor: '#f0f0f0',
      color: '#666',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      backgroundColor: '#e2e8f0',
      borderRadius: '4px',
      marginBottom: '20px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '4px',
      transition: 'width 0.3s ease'
    },
    mainContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '40px',
      marginBottom: '60px'
    },
    contactForm: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '30px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    },
    formTitle: {
      fontSize: '2em',
      color: '#2d3436',
      marginBottom: '20px',
      fontWeight: '600',
      position: 'relative',
      paddingBottom: '15px',
      borderBottom: '3px solid #667eea'
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      marginBottom: '20px'
    },
    formGroup: {
      marginBottom: '20px',
      width: '100%'
    },
    formLabel: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: '500',
      color: '#4a5568',
      fontSize: '0.95em'
    },
    formInput: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1em',
      transition: 'all 0.3s ease',
      outline: 'none',
      backgroundColor: '#f8fafc'
    },
    formTextarea: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1em',
      minHeight: '120px',
      resize: 'vertical',
      outline: 'none',
      backgroundColor: '#f8fafc'
    },
    formSelect: {
      width: '100%',
      padding: '12px 15px',
      border: '2px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1em',
      backgroundColor: '#f8fafc',
      cursor: 'pointer',
      outline: 'none'
    },
    submitButton: {
      width: '100%',
      padding: '16px',
      border: 'none',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontSize: '1.1em',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '20px',
      position: 'relative',
      overflow: 'hidden'
    },
    contactInfo: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '30px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
    },
    infoCard: {
      padding: '25px',
      backgroundColor: '#f8fafc',
      borderRadius: '20px',
      marginBottom: '25px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative'
    },
    copyButton: {
      position: 'absolute',
      top: '15px',
      right: '15px',
      padding: '5px 10px',
      backgroundColor: '#667eea',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '0.8em',
      cursor: 'pointer',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    infoIcon: {
      fontSize: '2.5em',
      marginBottom: '15px'
    },
    infoTitle: {
      fontSize: '1.3em',
      fontWeight: '600',
      color: '#2d3436',
      marginBottom: '10px'
    },
    infoText: {
      color: '#4a5568',
      lineHeight: '1.6',
      fontSize: '1em'
    },
    mapContainer: {
      marginTop: '30px',
      borderRadius: '20px',
      overflow: 'hidden',
      height: '300px',
      backgroundColor: '#f0f0f0',
      position: 'relative'
    },
    mapPlaceholder: {
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.2em',
      flexDirection: 'column',
      gap: '15px'
    },
    businessHours: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '15px',
      marginTop: '25px'
    },
    hourItem: {
      padding: '15px',
      backgroundColor: '#f8fafc',
      borderRadius: '15px',
      textAlign: 'center',
      transition: 'transform 0.3s ease'
    },
    hourDay: {
      fontWeight: '600',
      color: '#2d3436',
      marginBottom: '5px'
    },
    hourTime: {
      color: '#667eea',
      fontSize: '0.95em',
      fontWeight: '500'
    },
    faqSection: {
      marginTop: '60px',
      padding: '40px',
      backgroundColor: 'white',
      borderRadius: '30px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
    },
    faqTitle: {
      fontSize: '2.2em',
      color: '#2d3436',
      textAlign: 'center',
      marginBottom: '20px',
      fontWeight: '600'
    },
    faqCategory: {
      marginBottom: '30px'
    },
    faqCategoryTitle: {
      fontSize: '1.5em',
      color: '#667eea',
      marginBottom: '20px',
      paddingBottom: '10px',
      borderBottom: '2px solid #e2e8f0'
    },
    faqItem: {
      backgroundColor: '#f8fafc',
      padding: '20px',
      borderRadius: '15px',
      marginBottom: '15px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    faqQuestion: {
      fontSize: '1.1em',
      fontWeight: '600',
      color: '#2d3436',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    faqAnswer: {
      color: '#4a5568',
      lineHeight: '1.6',
      fontSize: '0.95em',
      marginTop: '15px',
      paddingTop: '15px',
      borderTop: '1px solid #e2e8f0'
    },
    chatbotContainer: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 1000
    },
    chatbotButton: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      border: 'none',
      color: 'white',
      fontSize: '2em',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
      transition: 'all 0.3s ease',
      animation: 'pulse 2s infinite'
    },
    chatbotWindow: {
      position: 'absolute',
      bottom: '90px',
      right: '0',
      width: '380px',
      height: '550px',
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    },
    chatbotHeader: {
      padding: '20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    },
    quickReplies: {
      display: 'flex',
      gap: '10px',
      padding: '10px 15px',
      overflowX: 'auto',
      backgroundColor: '#f8fafc'
    },
    quickReplyButton: {
      padding: '8px 15px',
      backgroundColor: 'white',
      border: '1px solid #667eea',
      borderRadius: '20px',
      color: '#667eea',
      fontSize: '0.9em',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'all 0.3s ease'
    },
    chatbotMessages: {
      flex: 1,
      padding: '20px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      backgroundColor: '#f8fafc'
    },
    chatMessage: {
      maxWidth: '80%',
      padding: '12px 16px',
      borderRadius: '18px',
      fontSize: '0.95em',
      lineHeight: '1.4',
      animation: 'slideIn 0.3s ease'
    },
    userMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#667eea',
      color: 'white'
    },
    botMessage: {
      alignSelf: 'flex-start',
      backgroundColor: 'white',
      color: '#2d3436',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    chatbotInput: {
      padding: '15px',
      borderTop: '1px solid #e2e8f0',
      display: 'flex',
      gap: '10px',
      backgroundColor: 'white'
    },
    chatInputField: {
      flex: 1,
      padding: '12px',
      border: '2px solid #e2e8f0',
      borderRadius: '25px',
      outline: 'none',
      fontSize: '0.95em'
    },
    chatSendButton: {
      padding: '12px 25px',
      border: 'none',
      borderRadius: '25px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'transform 0.3s ease'
    },
    successMessage: {
      padding: '15px',
      backgroundColor: '#48bb78',
      color: 'white',
      borderRadius: '12px',
      marginBottom: '20px',
      textAlign: 'center',
      animation: 'slideIn 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    errorMessage: {
      padding: '15px',
      backgroundColor: '#f56565',
      color: 'white',
      borderRadius: '12px',
      marginBottom: '20px',
      textAlign: 'center',
      animation: 'slideIn 0.3s ease'
    },
    socialSection: {
      marginTop: '60px',
      padding: '40px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '30px',
      color: 'white',
      textAlign: 'center'
    },
    socialIcon: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '60px',
      height: '60px',
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: '50%',
      fontSize: '1.8em',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)'
    }
  };

  return (
    <><br /><br />
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

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

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .tab-button:hover {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
          }

          .tab-button.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }

          .form-input:focus, .form-select:focus, .form-textarea:focus {
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
            transform: translateY(-1px);
          }

          .submit-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
          }

          .submit-button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          .info-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          }

          .info-card:hover .copy-button {
            opacity: 1;
          }

          .faq-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.15);
          }

          .chatbot-button:hover {
            transform: scale(1.1) rotate(10deg);
          }

          .hour-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(102, 126, 234, 0.2);
          }

          .quick-reply-button:hover {
            background: #667eea;
            color: white;
            transform: translateY(-2px);
          }

          .social-icon:hover {
            transform: translateY(-5px) scale(1.1);
            background-color: rgba(255,255,255,0.3);
          }

          @media (max-width: 768px) {
            .form-grid {
              grid-template-columns: 1fr;
            }
            
            .faq-grid {
              grid-template-columns: 1fr;
            }
            
            .hero-title {
              font-size: 2.5em;
            }
            
            .chatbot-window {
              width: 300px;
              right: 0;
            }
          }
        `}
      </style>

      <div style={styles.container}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroBackground}></div>
          <h1 style={styles.heroTitle}>Get in Touch</h1>
          <p style={styles.heroSubtitle}>We'd love to hear from you! Reach out with any questions.</p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '2em'}}>
            <span style={{animation: 'pulse 2s infinite'}}>📞</span>
            <span style={{animation: 'pulse 2s infinite 0.3s'}}>✉️</span>
            <span style={{animation: 'pulse 2s infinite 0.6s'}}>📍</span>
          </div>
        </section>

        {/* Contact Tabs */}
        <div style={styles.contactTabs}>
          <button 
            className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
            style={styles.tabButton}
            onClick={() => setActiveTab('contact')}
          >
            📝 Contact Form
          </button>
          <button 
            className={`tab-button ${activeTab === 'visit' ? 'active' : ''}`}
            style={styles.tabButton}
            onClick={() => setActiveTab('visit')}
          >
            🏫 Visit Us
          </button>
          <button 
            className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            style={styles.tabButton}
            onClick={() => setActiveTab('faq')}
          >
            ❓ FAQs
          </button>
        </div>

        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Contact Form */}
          <div style={styles.contactForm} ref={formRef}>
            <h2 style={styles.formTitle}>Send us a Message</h2>
            
            {/* Progress Bar */}
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: `${formProgress}%`}}></div>
            </div>
            <p style={{textAlign: 'right', fontSize: '0.9em', color: '#667eea', marginBottom: '20px'}}>
              {Math.round(formProgress)}% Complete
            </p>
            
            {formStatus.success && (
              <div style={styles.successMessage}>
                <span>✅</span>
                Thank you for contacting us! We'll get back to you within 24 hours.
                <span>🎉</span>
              </div>
            )}
            
            {formStatus.error && (
              <div style={styles.errorMessage}>
                ❌ {formStatus.error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    className="form-input"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    className="form-input"
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Child's Name *</label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    className="form-input"
                    placeholder="Enter child's name"
                    required
                  />
                </div>
              </div>

              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Child's Age Group *</label>
                  <select
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    style={styles.formSelect}
                    className="form-select"
                    required
                  >
                    <option value="">Select age group</option>
                    <option value="1.5-2.5">1.5 - 2.5 Years (Toddler)</option>
                    <option value="2.5-3.5">2.5 - 3.5 Years (Nursery)</option>
                    <option value="3.5-4.5">3.5 - 4.5 Years (Junior KG)</option>
                    <option value="4.5-6">4.5 - 6 Years (Senior KG)</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Program Interested In *</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    style={styles.formSelect}
                    className="form-select"
                    required
                  >
                    <option value="">Select program</option>
                    <option value="toddler">Toddler Program</option>
                    <option value="nursery">Nursery Program</option>
                    <option value="junior-kg">Junior Kindergarten</option>
                    <option value="senior-kg">Senior Kindergarten</option>
                    <option value="daycare">Daycare</option>
                  </select>
                </div>
              </div>

              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Preferred Visit Date</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    style={styles.formInput}
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Preferred Time</label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    style={styles.formSelect}
                    className="form-select"
                  >
                    <option value="">Select time</option>
                    <option value="9-10">9:00 AM - 10:00 AM</option>
                    <option value="10-11">10:00 AM - 11:00 AM</option>
                    <option value="11-12">11:00 AM - 12:00 PM</option>
                    <option value="12-1">12:00 PM - 1:00 PM</option>
                    <option value="2-3">2:00 PM - 3:00 PM</option>
                    <option value="3-4">3:00 PM - 4:00 PM</option>
                  </select>
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>How did you hear about us?</label>
                <select
                  name="howHeard"
                  value={formData.howHeard}
                  onChange={handleInputChange}
                  style={styles.formSelect}
                  className="form-select"
                >
                  <option value="">Select option</option>
                  <option value="google">Google Search</option>
                  <option value="social">Social Media</option>
                  <option value="friend">Friend/Family</option>
                  <option value="newspaper">Newspaper Ad</option>
                  <option value="walk-in">Walk-in</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Message / Questions</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={styles.formTextarea}
                  className="form-textarea"
                  placeholder="Tell us more about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                style={styles.submitButton}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? '📤 Sending...' : '📨 Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div style={styles.contactInfo}>
            <h2 style={styles.formTitle}>Contact Information</h2>
            
            <div 
              className="info-card" 
              style={styles.infoCard}
              onClick={() => handleCopyText('123 Education Avenue, Green Park Extension, New Delhi - 110016', 'address')}
            >
              {copiedField === 'address' && (
                <span style={{position: 'absolute', top: '-10px', right: '-10px', background: '#48bb78', color: 'white', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8em'}}>
                  Copied! ✓
                </span>
              )}
              <div style={styles.infoIcon}>📍</div>
              <h3 style={styles.infoTitle}>Visit Us</h3>
              <p style={styles.infoText}>
                Apeksha Play School<br />
                123 Education Avenue<br />
                Green Park Extension<br />
                New Delhi - 110016
              </p>
              <button className="copy-button" style={styles.copyButton}>Copy Address</button>
            </div>

            <div 
              className="info-card" 
              style={styles.infoCard}
              onClick={() => handleCopyText('+91 98765 43210', 'phone')}
            >
              {copiedField === 'phone' && (
                <span style={{position: 'absolute', top: '-10px', right: '-10px', background: '#48bb78', color: 'white', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8em'}}>
                  Copied! ✓
                </span>
              )}
              <div style={styles.infoIcon}>📞</div>
              <h3 style={styles.infoTitle}>Call Us</h3>
              <p style={styles.infoText}>
                Admissions: +91 98765 43210<br />
                Office: +91 11 2345 6789<br />
                Emergency: +91 98765 43211
              </p>
              <button className="copy-button" style={styles.copyButton}>Copy Number</button>
            </div>

            <div 
              className="info-card" 
              style={styles.infoCard}
              onClick={() => handleCopyText('admissions@apekshaplayschool.com', 'email')}
            >
              {copiedField === 'email' && (
                <span style={{position: 'absolute', top: '-10px', right: '-10px', background: '#48bb78', color: 'white', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8em'}}>
                  Copied! ✓
                </span>
              )}
              <div style={styles.infoIcon}>✉️</div>
              <h3 style={styles.infoTitle}>Email Us</h3>
              <p style={styles.infoText}>
                admissions@apekshaplayschool.com<br />
                info@apekshaplayschool.com<br />
                principal@apekshaplayschool.com
              </p>
              <button className="copy-button" style={styles.copyButton}>Copy Email</button>
            </div>

            <h3 style={{margin: '30px 0 20px', color: '#2d3436'}}>Business Hours</h3>
            <div style={styles.businessHours}>
              <div className="hour-item" style={styles.hourItem}>
                <div style={styles.hourDay}>Mon - Fri</div>
                <div style={styles.hourTime}>8:00 AM - 6:00 PM</div>
              </div>
              <div className="hour-item" style={styles.hourItem}>
                <div style={styles.hourDay}>Saturday</div>
                <div style={styles.hourTime}>9:00 AM - 1:00 PM</div>
              </div>
              <div className="hour-item" style={styles.hourItem}>
                <div style={styles.hourDay}>Sunday</div>
                <div style={styles.hourTime}>Closed</div>
              </div>
              <div className="hour-item" style={styles.hourItem}>
                <div style={styles.hourDay}>Holidays</div>
                <div style={styles.hourTime}>As per calendar</div>
              </div>
            </div>

            {/* Map */}
            <div style={styles.mapContainer}>
              {!mapLoaded ? (
                <div style={styles.mapPlaceholder}>
                  <div style={{fontSize: '3em', animation: 'pulse 2s infinite'}}>🗺️</div>
                  <p>Click to load interactive map</p>
                  <button 
                    onClick={() => setMapLoaded(true)}
                    style={{
                      padding: '12px 30px',
                      background: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      color: '#667eea',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '1em',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Load Map 📍
                  </button>
                </div>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.693277238967!2d77.201234567890!3d28.567891234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzA0LjQiTiA3N8KwMTInMDQuNSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                  title="School Location"
                />
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        {activeTab === 'faq' && (
          <section style={styles.faqSection}>
            <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
            {faqs.map((category, idx) => (
              <div key={idx} style={styles.faqCategory}>
                <h3 style={styles.faqCategoryTitle}>{category.category}</h3>
                {category.questions.map((faq) => (
                  <div 
                    key={faq.id}
                    className="faq-item"
                    style={styles.faqItem}
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  >
                    <div style={styles.faqQuestion}>
                      <span style={{color: '#667eea'}}>❓</span>
                      {faq.question}
                      <span style={{marginLeft: 'auto', color: '#667eea'}}>
                        {expandedFaq === faq.id ? '▲' : '▼'}
                      </span>
                    </div>
                    {expandedFaq === faq.id && (
                      <div style={styles.faqAnswer}>{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </section>
        )}

        {/* Social Connect Section */}
        <section style={styles.socialSection}>
          <h2 style={{fontSize: '2.2em', marginBottom: '20px'}}>Connect With Us</h2>
          <p style={{fontSize: '1.1em', marginBottom: '30px', opacity: 0.95}}>
            Follow us on social media for daily updates and happy moments!
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
            <span className="social-icon" style={styles.socialIcon} onClick={() => window.open('https://facebook.com', '_blank')}>📘</span>
            <span className="social-icon" style={styles.socialIcon} onClick={() => window.open('https://instagram.com', '_blank')}>📸</span>
            <span className="social-icon" style={styles.socialIcon} onClick={() => window.open('https://twitter.com', '_blank')}>🐦</span>
            <span className="social-icon" style={styles.socialIcon} onClick={() => window.open('https://youtube.com', '_blank')}>📹</span>
            <span className="social-icon" style={styles.socialIcon} onClick={() => window.open('https://linkedin.com', '_blank')}>💼</span>
          </div>
        </section>

        {/* Chatbot */}
        <div style={styles.chatbotContainer}>
          {!showChatbot ? (
            <button
              className="chatbot-button"
              style={styles.chatbotButton}
              onClick={() => setShowChatbot(true)}
            >
              💬
            </button>
          ) : (
            <div style={styles.chatbotWindow}>
              <div style={styles.chatbotHeader}>
                <h3 style={{margin: 0, display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <span>🤖</span> Apeksha Assistant
                </h3>
                <button
                  onClick={() => setShowChatbot(false)}
                  style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5em',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'rotate(90deg)'}
                  onMouseLeave={(e) => e.target.style.transform = 'rotate(0deg)'}
                >
                  ×
                </button>
              </div>
              
              {/* Quick Replies */}
              <div style={styles.quickReplies}>
                {quickResponses.map((response, index) => (
                  <button
                    key={index}
                    className="quick-reply-button"
                    style={styles.quickReplyButton}
                    onClick={() => handleQuickReply(response.reply)}
                  >
                    {response.text}
                  </button>
                ))}
              </div>
              
              <div style={styles.chatbotMessages}>
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      ...styles.chatMessage,
                      ...(msg.type === 'user' ? styles.userMessage : styles.botMessage)
                    }}
                  >
                    {msg.text}
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
              
              <form onSubmit={handleChatSubmit} style={styles.chatbotInput}>
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your message..."
                  style={styles.chatInputField}
                />
                <button type="submit" style={styles.chatSendButton}>
                  Send
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}