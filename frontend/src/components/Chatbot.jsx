import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'
;

const MESSAGE_INITIAL = {
  role: 'assistant',
  content: `Bonjour ! Je suis Uly, l'assistant d'UlyTech 👋

Nous sommes basés à **Kairouan, Tunisie** et joignables au **+216 95 556 553**.

Pour mieux vous accompagner, dites-moi : quel est le nom de votre société ou projet, et dans quel domaine activez-vous ?`,
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([MESSAGE_INITIAL]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(true);
  const sessionId = useRef(
    'sess_' + Date.now() + '_' + Math.random().toString(36).slice(2)
  )
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setNotification(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${API}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.filter(m => m.role !== 'system'),
          sessionId: sessionId.current,
        }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Désolé, une erreur est survenue. Contactez-nous directement à contact@ulytechai.com',
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Fenêtre chat ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-5 sm:right-8 z-50 w-[calc(100vw-40px)] sm:w-[380px]"
          >
            <div className="flex flex-col rounded-2xl overflow-hidden border border-white/10"
              style={{ background: '#0e0c18', height: '520px' }}>

              {/* Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.08]"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(168,85,247,0.1))' }}>
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                    </svg>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0e0c18]" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">Uly</p>
                  <p className="text-white/40 text-xs">Assistant UlyTech · En ligne</p>
                </div>
                <button onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/40 hover:text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(124,58,237,0.3) transparent' }}>
                {messages.map((msg, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-6 h-6 rounded-lg bg-violet-500/20 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 mr-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round">
                          <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                        </svg>
                      </div>
                    )}
                    <div className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-violet-600/80 text-white rounded-br-sm'
                        : 'bg-white/[0.07] text-white/85 rounded-bl-sm border border-white/[0.06]'
                    }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {/* Indicateur de frappe */}
                {loading && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="flex justify-start items-end gap-2">
                    <div className="w-6 h-6 rounded-lg bg-violet-500/20 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                      </svg>
                    </div>
                    <div className="px-4 py-3 bg-white/[0.07] rounded-2xl rounded-bl-sm border border-white/[0.06] flex gap-1.5 items-center">
                      {[0, 0.15, 0.3].map((d, i) => (
                        <motion.span key={i} className="w-1.5 h-1.5 bg-violet-400 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: d }} />
                      ))}
                    </div>
                  </motion.div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="px-4 py-3 border-t border-white/[0.08]">
                <div className="flex items-end gap-2 bg-white/[0.06] border border-white/[0.08] rounded-xl px-3 py-2 focus-within:border-violet-500/40 transition-colors">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Écrivez votre message..."
                    rows={1}
                    className="flex-1 bg-transparent text-white text-sm placeholder-white/25 outline-none resize-none leading-relaxed"
                    style={{ maxHeight: '80px' }}
                  />
                  <button onClick={sendMessage} disabled={!input.trim() || loading}
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-30"
                    style={{ background: input.trim() && !loading ? 'linear-gradient(135deg, #7c3aed, #a855f7)' : 'rgba(255,255,255,0.05)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                    </svg>
                  </button>
                </div>
                <p className="text-white/15 text-xs text-center mt-2">Propulsé par UlyTech AI</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bouton flottant ── */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-5 sm:right-8 z-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
        style={{ background: open ? 'rgba(124,58,237,0.9)' : 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
      >
        {/* Notification */}
        {notification && !open && (
          <motion.span
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#080809] flex items-center justify-center">
            <span className="text-[8px] text-white font-bold">1</span>
          </motion.span>
        )}

        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg key="close"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </motion.svg>
          ) : (
            <motion.svg key="chat"
              initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Bulle teaser (apparaît après 3s si pas ouvert) */}
      <AnimatePresence>
        {notification && !open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }} transition={{ delay: 3 }}
            className="fixed bottom-[88px] right-5 sm:right-8 z-50"
          >
            <div className="bg-[#0e0c18] border border-violet-500/20 rounded-2xl rounded-br-sm px-4 py-3 max-w-[220px] shadow-xl">
              <p className="text-white/80 text-xs leading-relaxed">
                Bonjour ! Un projet en tête ? Je peux vous aider 👋
              </p>
              <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-[#0e0c18] border-r border-b border-violet-500/20 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}