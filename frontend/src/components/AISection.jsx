import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AISection() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typedCode, setTypedCode] = useState('');

  const codeToType = `    <Button onClick={handleSubmit}>
      Submit Form
    </Button>
    <Toast message="Success!" />`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= codeToType.length) {
        setTypedCode(codeToType.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 60);
    
    return () => clearInterval(typingInterval);
  }, [codeToType]);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-aquaBlue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-violet/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2-Column Layout - Reversed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: VS Code Mockup with 3D Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
            style={{ perspective: '1200px' }}
          >
            {/* VS Code Window */}
              <div
  className="relative"
  style={{
    transform: "rotateX(29deg) rotateZ(0deg)",
    transformStyle: "preserve-3d",
  }}
>
              {/* Window Header */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-t-xl px-4 py-3 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center text-xs text-white/60">
                  app.tsx — UlyTech
                </div>
              </div>

              {/* Code Editor */}
              <div className="backdrop-blur-xl bg-darkBg/90 border-x border-b border-white/10 rounded-b-xl p-6 font-mono text-sm overflow-hidden">
                <div className="space-y-2">
                  <div className="text-purple-400">
                    <span className="text-pink-400">import</span> React <span className="text-pink-400">from</span> <span className="text-green-400">react</span>;
                  </div>
                  <div className="text-purple-400">
                    <span className="text-pink-400">import</span> {'{ useState }'} <span className="text-pink-400">from</span> <span className="text-green-400">react</span>;
                  </div>
                  <div className="h-4" />
                  <div className="text-blue-400">
                    <span className="text-pink-400">function</span> <span className="text-yellow-400">App</span>() {'{'}
                  </div>
                  <div className="pl-4 text-white/80">
                    <span className="text-pink-400">const</span> [data, setData] = <span className="text-yellow-400">useState</span>();
                  </div>
                  <div className="pl-4 h-4" />
                  <div className="pl-4 text-pink-400">
                    return (
                  </div>
                  <div className="pl-8 text-white/60">
                    {'<'}<span className="text-blue-400">div</span> <span className="text-purple-400">className</span>=<span className="text-green-400">"app"</span>{'>'}
                  </div>
                  
                  {/* AI Typing Animation */}
                  <div className="pl-12 relative">
                    <div className="text-white/40 mb-1">{/* AI generating code... */}</div>
                    <pre className="text-white/70 whitespace-pre-wrap font-mono">
                      {typedCode.split('\n').map((line, i) => (
                        <div key={i}>
                          {line.includes('Button') ? (
                            <>
                              {'<'}<span className="text-blue-400">Button</span>{' '}
                              <span className="text-purple-400">onClick</span>=
                              {'{'}<span className="text-yellow-400">handleSubmit</span>{'}'}
                              {'>'}
                              {line.includes('Submit') && 'Submit Form'}
                              {line.includes('</Button>') && (
                                <>
                                  {'</'}<span className="text-blue-400">Button</span>{'>'}
                                </>
                              )}
                            </>
                          ) : line.includes('Toast') ? (
                            <>
                              {'<'}<span className="text-blue-400">Toast</span>{' '}
                              <span className="text-purple-400">message</span>=
                              <span className="text-green-400">"Success!"</span>{' />'}
                            </>
                          ) : (
                            line
                          )}
                        </div>
                      ))}
                      <span
                        className="inline-block w-2 h-5 bg-violet ml-1 shadow-[0_0_10px_#8F5CFF] transition-opacity duration-100"
                        style={{ opacity: cursorVisible ? 1 : 0 }}
                      />
                    </pre>
                  </div>
                  
                  <div className="pl-8 text-white/60">
                    {'</'}<span className="text-blue-400">div</span>{'>'}
                  </div>
                  <div className="pl-4 text-pink-400">
                    );
                  </div>
                  <div className="text-blue-400">
                    {'}'}
                  </div>
                </div>
              </div>


            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 tracking-tight">
              Développement Assisté par <span className="gradient-text">IA</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
              Linear pour les Agents. Choisissez parmi une variété de agents IA et commencez à déléguer le travail, de la génération de code aux autres tâches techniques.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-white text-darkBg rounded-lg font-semibold text-sm hover:bg-white/90 transition-all"
            >
              Découvrir les Agents IA
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
