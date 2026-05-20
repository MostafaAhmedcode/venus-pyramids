'use client';

import { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  sender: 'user' | 'agent';
  text: string;
  time: string;
}

const FAQS = [
  {
    question: "🚗 Do you offer airport transfer?",
    answer: "Yes, we offer premium private airport transfers! A professional English-speaking driver will meet you at Cairo International Airport in a modern air-conditioned vehicle for just $22 one way (available 24/7)."
  },
  {
    question: "🍳 Is breakfast included in room rates?",
    answer: "Absolutely! A delicious and fresh continental breakfast is 100% complimentary for all our hotel guests. It is served daily from 7:00 AM until noon on our panoramic rooftop overlooking the Giza Pyramids."
  },
  {
    question: "🏺 How can I book a private Egypt tour?",
    answer: "You can book any tour directly through our website! Simply click on any excursion card, hit 'Book Tour Online', verify the date availability, and complete a simulated secure checkout in the Sandbox."
  },
  {
    question: "🗺️ Can I customize my tour itinerary?",
    answer: "Yes, absolutely! All our tours are private and can be fully customized. Our licensed Egyptologist guides and professional drivers will tailor the sights to your personal pace and preferences. Let us know!"
  }
];

const F = 'var(--font-inter), Inter, system-ui, sans-serif';

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'agent',
      text: "Salaam! Welcome to Venus Pyramids Inn. 🔺 I'm your virtual concierge. How can I help you discover Egypt today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string, isUserMessage = true) => {
    if (!text.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    if (isUserMessage) {
      setMessages(prev => [...prev, { sender: 'user', text, time }]);
      setInputText('');
      
      // Simulate agent typing
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          sender: 'agent',
          text: "Thank you for reaching out! A member of our hotel team will respond shortly. You can also click the button below to instantly forward this query directly to our 24/7 hotel desk on WhatsApp!",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
      }, 1500);
    }
  };

  const handleFAQClick = (q: string, a: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user question
    setMessages(prev => [...prev, { sender: 'user', text: q, time }]);
    
    // Simulate typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'agent', text: a, time }]);
    }, 800);
  };

  const getWhatsAppLink = () => {
    const lastUserMsg = [...messages].reverse().find(m => m.sender === 'user');
    const textToForward = lastUserMsg 
      ? `Hi Venus Pyramids Inn! I have a question: ${lastUserMsg.text}`
      : "Hi Venus Pyramids Inn! I would like to make an inquiry.";
    return `https://wa.me/201018157153?text=${encodeURIComponent(textToForward)}`;
  };

  return (
    <>
      {/* 🟢 FLOATING WHATSAPP BUTTON (Always visible on all pages) */}
      <a
        href="https://wa.me/201018157153?text=Hi%20Venus%20Pyramids%20Inn!%20I%20would%20like%20to%20make%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn anim-float"
        style={{
          position: 'fixed',
          bottom: isOpen ? 560 : 96,
          right: 24,
          zIndex: 150,
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          color: '#fff',
          border: '2px solid rgba(255,255,255,0.2)',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(37, 211, 102, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), bottom 0.4s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(37, 211, 102, 0.4)';
        }}
        title="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" style={{ width: 28, height: 28 }}>
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-11.2-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

      {/* 🔴 CHAT AGENT CONTAINER */}
      <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 150 }}>
        {/* 🟡 CHAT BUBBLE TRIGGER */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="anim-float"
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light))',
              color: 'var(--navy)',
              border: '2px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(201, 168, 76, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(201, 168, 76, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(201, 168, 76, 0.4)';
            }}
            title="Open Chat Concierge"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" style={{ width: 26, height: 26 }}>
              <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95.3 57.6 130.7C51.1 398.9 31.8 425.6 31.5 426c-3.3 4.5-3.6 10.5-1 15.3s7.6 8 13 8c43.6 0 79.8-17.7 104.9-31.9 32.9 14.2 70.1 22.6 107.6 22.6 141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-32.9 0-64.6-7.3-92.9-20.9-3.8-1.8-8.2-1.9-12.1 .2-27 14.5-60.6 29.8-97.1 33.6 15.6-22.3 30.5-47.5 39.8-71.1 1.7-4.4 .6-9.4-2.8-12.8C59.4 300.9 48 269.9 48 240c0-97 93.3-176 208-176s208 79 208 176-93.3 176-208 176z"/>
            </svg>
            <span style={{ position: 'absolute', top: -2, right: -2, width: 14, height: 14, borderRadius: '50%', background: '#06d6a0', border: '2px solid var(--navy)', display: 'inline-block' }} />
          </button>
        )}

      {/* 💬 CHATWINDOW PANEL */}
      {isOpen && (
        <div
          className="anim-modal-pop"
          style={{
            width: '360px',
            height: '520px',
            background: 'linear-gradient(160deg, #0b1122 0%, #060a16 100%)',
            border: '1px solid var(--gold)',
            borderRadius: 8,
            boxShadow: '0 20px 80px rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'linear-gradient(90deg, #0d162d, #080f21)',
              borderBottom: '1px solid rgba(201, 168, 76, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'relative', width: 36, height: 36, borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                🔺
                <span style={{ position: 'absolute', bottom: 0, right: 0, width: 9, height: 9, borderRadius: '50%', background: '#06d6a0', border: '1.5px solid var(--navy)' }} />
              </div>
              <div>
                <div style={{ fontFamily: F, fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Venus Pyramids Concierge</div>
                <div style={{ fontFamily: F, fontSize: '0.68rem', color: '#06d6a0', display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#06d6a0', display: 'inline-block' }} />
                  Online · Ask about Egypt
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--sand-3)',
                fontSize: '1.5rem',
                cursor: 'pointer',
                transition: 'color 0.2s',
                padding: '0 4px',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--sand-3)'}
            >
              ×
            </button>
          </div>

          {/* Messages area */}
          <div
            style={{
              flex: 1,
              padding: '16px 20px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              background: 'radial-gradient(circle at bottom, rgba(201,168,76,0.03) 0%, transparent 80%)',
            }}
          >
            {messages.map((m, idx) => {
              const isAgent = m.sender === 'agent';
              return (
                <div
                  key={idx}
                  style={{
                    alignSelf: isAgent ? 'flex-start' : 'flex-end',
                    maxWidth: '85%',
                  }}
                >
                  <div
                    style={{
                      background: isAgent ? 'rgba(255, 255, 255, 0.03)' : 'rgba(201, 168, 76, 0.12)',
                      border: isAgent ? '1px solid rgba(255,255,255,0.06)' : '1px solid var(--gold)',
                      borderRadius: isAgent ? '0px 12px 12px 12px' : '12px 0px 12px 12px',
                      padding: '10px 14px',
                      color: isAgent ? 'var(--sand)' : '#fff',
                      fontFamily: F,
                      fontSize: '0.85rem',
                      lineHeight: 1.45,
                    }}
                  >
                    {m.text}
                  </div>
                  <div
                    style={{
                      fontFamily: F,
                      fontSize: '0.62rem',
                      color: 'var(--sand-3)',
                      textAlign: isAgent ? 'left' : 'right',
                      marginTop: 4,
                      padding: '0 2px',
                    }}
                  >
                    {m.time}
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '0px 12px 12px 12px', padding: '10px 14px', maxWidth: '85%', display: 'flex', alignItems: 'center', gap: 4 }}>
                <span className="dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', animation: 'typing-dots 1.4s infinite' }} />
                <span className="dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', animation: 'typing-dots 1.4s infinite 0.2s' }} />
                <span className="dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', animation: 'typing-dots 1.4s infinite 0.4s' }} />
              </div>
            )}

            {/* Empty space anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQs list */}
          {messages.length < 5 && (
            <div style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
              <div style={{ fontFamily: F, fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8, paddingLeft: 4 }}>
                💡 Quick FAQs
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {FAQS.map(faq => (
                  <button
                    key={faq.question}
                    onClick={() => handleFAQClick(faq.question, faq.answer)}
                    style={{
                      textAlign: 'left',
                      fontFamily: F,
                      fontSize: '0.78rem',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(201,168,76,0.15)',
                      color: 'var(--sand-2)',
                      padding: '6px 10px',
                      cursor: 'pointer',
                      borderRadius: 2,
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(201,168,76,0.05)';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = 'var(--gold)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                      e.currentTarget.style.color = 'var(--sand-2)';
                      e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)';
                    }}
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Forward to WhatsApp prompt if user wrote something */}
          {messages.length > 2 && (
            <div style={{ padding: '8px 20px', background: 'rgba(6,214,160,0.05)', textAlign: 'center', borderTop: '1px dashed rgba(6,214,160,0.3)' }}>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: F,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#06d6a0',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6
                }}
              >
                💬 Forward to Hotel Desk on WhatsApp
              </a>
            </div>
          )}

          {/* Form input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            style={{
              padding: '12px 20px',
              background: '#040710',
              borderTop: '1px solid rgba(201,168,76,0.25)',
              display: 'flex',
              gap: 8,
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything..."
              style={{
                flex: 1,
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.3)',
                color: '#fff',
                outline: 'none',
                fontFamily: F,
                fontSize: '0.85rem',
              }}
            />
            <button
              type="submit"
              style={{
                background: 'var(--gold)',
                color: 'var(--navy)',
                border: 'none',
                padding: '8px 14px',
                fontWeight: 700,
                fontFamily: F,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Global CSS for typing indicator dot jumping */}
      <style jsx global>{`
        @keyframes typing-dots {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
    </>
  );
}
