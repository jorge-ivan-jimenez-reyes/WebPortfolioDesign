import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Footer from '../../components/Footer';
import Link from 'next/link';

const ChatGPTLocalProject = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen wireframe-container ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <Link href="/projects" className="inline-flex items-center text-sm mb-8 transition-colors duration-300 font-handwritten" style={{ color: 'var(--accent)' }}>
            ← Back to Projects
          </Link>

          {/* Enhanced Hero Section with AI Wireframe Styling */}
          <div className="mb-16 relative">
            {/* Neural network grid background */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 gap-4 h-full">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="border-l border-purple-300"></div>
                ))}
              </div>
              {/* Neural connections */}
              <svg className="absolute inset-0 w-full h-full">
                <circle cx="10%" cy="20%" r="2" fill="#8b5cf6" opacity="0.4"/>
                <circle cx="30%" cy="40%" r="3" fill="#8b5cf6" opacity="0.6"/>
                <circle cx="70%" cy="30%" r="2" fill="#8b5cf6" opacity="0.5"/>
                <circle cx="90%" cy="60%" r="2" fill="#8b5cf6" opacity="0.4"/>
                <path d="M10% 20% Q50% 10% 90% 60%" stroke="#8b5cf6" strokeWidth="1" fill="none" opacity="0.2"/>
              </svg>
            </div>

            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <span className="px-3 py-1 rounded-full text-xs font-semibold font-handwritten" style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                🤖 AI Local
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 font-handwritten">
                🔒 100% Private
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-6 font-excalidraw" style={{ color: '#15253B' }}>
              ChatGPT Local
            </h1>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              Chatbot AI local ejecutándose completamente en el navegador con modelo Llama, construido con vanilla JavaScript para máxima privacidad 🔒
            </p>

            {/* Info Cards with wireframe styling */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mt-8">
              {[
                { label: 'Year', value: '2024', icon: '📅', color: 'from-purple-50 to-purple-100' },
                { label: 'Privacy', value: '100% Local', icon: '🔒', color: 'from-green-50 to-green-100' },
                { label: 'Tech', value: 'Vanilla JS', icon: '⚡', color: 'from-yellow-50 to-yellow-100' }
              ].map((item, index) => (
                <div key={index} className={`sketch-card p-6 bg-gradient-to-br ${item.color} relative`}>
                  {/* Corner badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2 font-handwritten" style={{ color: 'var(--text-primary)' }}>{item.label}</h3>
                  <p className="font-bold text-lg font-excalidraw" style={{ color: 'var(--text-secondary)' }}>{item.value}</p>
                  
                  {/* Connecting line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                      <svg width="30" height="20">
                        <path d="M5,10 L25,10 M22,7 L25,10 L22,13" stroke="var(--accent)" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Featured Project Image */}
            <div className="mt-12 mb-8 relative">
              <div className="sketch-card p-6 bg-gradient-to-br from-purple-50 to-indigo-100 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                  <span className="text-xl">🖼️</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
                  🎯 ChatGPT Local en Acción
                </h3>

                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="bg-gray-800 rounded-t-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-b-lg overflow-hidden">
                    <img 
                      src="/images/chatgpt.png" 
                      alt="ChatGPT Local - Interface completa funcionando con modelo Llama"
                      className="w-full h-auto"
                      style={{ maxHeight: '500px', objectFit: 'contain' }}
                    />
                  </div>
                </div>

                <p className="text-sm text-center mt-4 font-handwritten" style={{color: 'var(--text-muted)'}}>
                  💬 <strong>Interface real del ChatGPT Local</strong> - Conversación con IA usando modelo Llama, ejecutándose 100% en el navegador
                </p>

                {/* Sticky note annotation */}
                <div className="absolute -bottom-6 -right-6 bg-green-300 p-3 rounded transform rotate-3 shadow-lg">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-red-500">📌</div>
                  <p className="text-xs font-handwritten" style={{color: '#065f46'}}>
                    &quot;¡Sin enviar datos a servidores!&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Wireframing Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center relative" style={{ color: 'var(--text-primary)' }}>
              🎨 Del Wireframe al Chatbot Local
              {/* Hand-drawn arrow pointing down */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <svg width="30" height="25">
                  <path d="M15,5 L15,18 M12,15 L15,18 L18,15" stroke="var(--accent)" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </h2>

            {/* Wireframing Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Wireframe Process */}
              <div className="sketch-card p-8 bg-gradient-to-br from-gray-50 to-gray-100 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                  <span className="text-xl">🧠</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                  Proceso de Desarrollo
                </h3>
                
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Investigación de IA', desc: 'Exploré modelos locales, elegí Llama por su eficiencia en el navegador', icon: '🔬' },
                    { step: '2', title: 'Arquitectura Local', desc: 'Diseñé sistema para ejecutar IA completamente offline, sin servidores', icon: '🏗️' },
                    { step: '3', title: 'Interface Minimalista', desc: 'Creé chat UI simple pero funcional usando solo vanilla JavaScript', icon: '💬' },
                    { step: '4', title: 'Optimización Browser', desc: 'Implementé Web Workers para no bloquear el UI principal', icon: '⚡' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 relative">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-sm font-bold" style={{ color: 'var(--accent)' }}>
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 font-handwritten" style={{ color: 'var(--text-primary)' }}>
                          {item.icon} {item.title}
                        </h4>
                        <p className="text-sm font-handwritten" style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                      </div>
                      
                      {/* Flow arrow */}
                      {index < 3 && (
                        <div className="absolute left-4 top-8 w-0.5 h-6 bg-gradient-to-b from-purple-400 to-transparent"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Sticky note annotation */}
                <div className="absolute -bottom-4 -right-4 bg-yellow-300 p-3 rounded transform rotate-6 shadow-lg">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-red-500">📌</div>
                  <p className="text-xs font-handwritten" style={{color: '#8B5000'}}>
                    &quot;¡Privacidad total = objetivo #1!&quot;
                  </p>
                </div>
              </div>

              {/* Right: Real Implementation */}
              <div className="sketch-card p-8 bg-gradient-to-br from-purple-50 to-indigo-100 relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                  <span className="text-xl">🤖</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
                  Implementación Final
                </h3>

                {/* Real ChatGPT Local Screenshot */}
                <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-dashed border-gray-300 mb-6">
                  <div className="bg-gray-100 rounded p-2 mb-3">
                    <div className="flex space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="bg-white rounded overflow-hidden">
                      <img 
                        src="/images/chatgpt.png" 
                        alt="ChatGPT Local Interface"
                        className="w-full h-auto rounded border border-gray-200"
                        style={{ maxHeight: '300px', objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <p className="text-xs text-center font-handwritten" style={{color: 'var(--text-muted)'}}>
                    🤖 ChatGPT Local - Interface Real en Funcionamiento ✨
                  </p>
                </div>

                {/* Key achievements */}
                <div className="space-y-3">
                  {[
                    { metric: '100%', label: 'Privacidad Local', color: 'text-green-600' },
                    { metric: '0ms', label: 'Latencia Servidor', color: 'text-blue-600' },
                    { metric: 'Llama', label: 'Modelo IA', color: 'text-purple-600' },
                    { metric: 'Offline', label: 'Funciona Sin Internet', color: 'text-orange-600' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-white rounded shadow-sm">
                      <span className="font-handwritten text-sm" style={{color: 'var(--text-secondary)'}}>{item.label}</span>
                      <span className={`font-bold text-lg font-excalidraw ${item.color}`}>{item.metric}</span>
                    </div>
                  ))}
                </div>

                {/* GitHub Link */}
                <div className="mt-6 text-center">
                  <a 
                    href="https://github.com/jorge-ivan-jimenez-reyes/chatgptlocal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 font-handwritten"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    <span>Ver en GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack with Enhanced Design */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              🛠️ Stack Tecnológico Minimalista
            </h2>
            
            <div className="relative">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <path d="M100 80 Q300 60 500 100" stroke="var(--text-muted)" strokeWidth="1" fill="none" strokeDasharray="2,3" opacity="0.3"/>
                <path d="M150 200 Q350 180 550 220" stroke="var(--text-muted)" strokeWidth="1" fill="none" strokeDasharray="2,3" opacity="0.3"/>
              </svg>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {[
                  { name: 'Vanilla JS', category: 'Core Language', icon: '⚡', color: 'from-yellow-100 to-yellow-200', simplicity: 5 },
                  { name: 'HTML5', category: 'Markup', icon: '🏗️', color: 'from-orange-100 to-orange-200', simplicity: 5 },
                  { name: 'CSS3', category: 'Styling', icon: '🎨', color: 'from-blue-100 to-blue-200', simplicity: 4 },
                  { name: 'Web Workers', category: 'Threading', icon: '⚙️', color: 'from-purple-100 to-purple-200', simplicity: 3 }
                ].map((tech, index) => (
                  <div key={index} className={`sketch-card p-4 relative bg-gradient-to-br ${tech.color}`} 
                       style={{transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.8}deg)`}}>
                    {/* Tech icon badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center text-xs">
                      {tech.icon}
                    </div>
                    
                    <h4 className="font-bold mb-1 text-sm font-handwritten" style={{ color: 'var(--text-primary)' }}>{tech.name}</h4>
                    <p className="text-xs font-handwritten" style={{ color: 'var(--text-muted)' }}>{tech.category}</p>
                    
                    {/* Simplicity level indicator */}
                    <div className="mt-2 flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full" 
                             style={{backgroundColor: i < tech.simplicity ? '#8b5cf6' : 'var(--border)'}}></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech annotation */}
            <div className="mt-8 relative">
              <div className="absolute right-0 -top-4">
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <path d="M10 30 Q40 10 70 25" stroke="var(--accent)" strokeWidth="1" fill="none"/>
                  <polygon points="65,20 75,25 65,30" fill="var(--accent)" opacity="0.6"/>
                </svg>
              </div>
              <p className="text-sm italic text-right mr-20 font-handwritten" style={{color: 'var(--text-muted)'}}>
                &quot;¡Simplicidad pura = máximo control! 🚀&quot;
              </p>
            </div>
          </div>

          {/* AI Features Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              🤖 Características del ChatGPT Local
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'IA Completamente Local',
                  description: 'El chatbot funciona completamente en el navegador usando JavaScript puro y APIs web nativas. Ningún dato sale de tu computadora, garantizando privacidad total.',
                  icon: '🔒',
                  color: 'from-green-400 to-emerald-500',
                  badge: '🛡️'
                },
                {
                  title: 'Funciona Sin Internet',
                  description: 'Una vez cargado, el chatbot funciona completamente offline. Perfecto para entornos con restricciones de conectividad o máxima privacidad.',
                  icon: '📡',
                  color: 'from-blue-400 to-cyan-500',
                  badge: '🌐'
                },
                {
                  title: 'Vanilla JavaScript',
                  description: 'Construido sin frameworks pesados, solo JavaScript puro. Esto asegura compatibilidad máxima y carga ultrarrápida en cualquier navegador.',
                  icon: '⚡',
                  color: 'from-yellow-400 to-orange-500',
                  badge: '🚀'
                },
                {
                  title: 'Modelo Llama Optimizado',
                  description: 'Utiliza una versión optimizada del modelo Llama que balancea calidad de respuestas con eficiencia en el navegador, sin comprometer rendimiento.',
                  icon: '🦙',
                  color: 'from-purple-400 to-pink-500',
                  badge: '🧠'
                }
              ].map((feature, index) => (
                <div key={index} className={`sketch-card p-6 bg-gradient-to-br ${feature.color} relative`}>
                  {/* Corner Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center transform rotate-12">
                    {feature.badge}
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <h3 className="text-xl font-semibold font-handwritten text-gray-900">{feature.title}</h3>
                  </div>
                  
                  <p className="font-handwritten text-gray-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ¿Para qué sirve? Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 font-excalidraw text-center" style={{ color: 'var(--text-primary)' }}>
              💡 ¿Para Qué Sirve Este Proyecto?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: 'Privacidad Empresarial', 
                  description: 'Empresas que necesitan IA sin enviar datos sensibles a servidores externos',
                  color: 'text-blue-600',
                  bgColor: 'from-blue-50 to-blue-100',
                  icon: '🏢'
                },
                { 
                  title: 'Desarrollo Offline', 
                  description: 'Desarrolladores que trabajan en entornos sin conexión o con restricciones de red',
                  color: 'text-green-600',
                  bgColor: 'from-green-50 to-green-100',
                  icon: '👨‍💻'
                },
                { 
                  title: 'Educación y Demo', 
                  description: 'Demostrar cómo la IA puede ejecutarse localmente sin dependencias externas',
                  color: 'text-purple-600',
                  bgColor: 'from-purple-50 to-purple-100',
                  icon: '🎓'
                }
              ].map((useCase, index) => (
                <div key={index} className={`sketch-card text-center p-6 bg-gradient-to-br ${useCase.bgColor} relative`}>
                  {/* Floating Icon */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg sketch-border">
                      {useCase.icon}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-4 mt-4 font-handwritten" style={{ color: 'var(--text-primary)' }}>{useCase.title}</h4>
                  <p className="text-sm font-handwritten" style={{ color: 'var(--text-secondary)' }}>{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action with Enhanced Design */}
          <div className="text-center relative">
            {/* Decorative arrows pointing to CTA */}
            <div className="absolute -left-16 top-8 transform -rotate-12">
              <div className="flex items-center space-x-2">
                <svg width="50" height="25">
                  <path d="M5,12 Q25,5 40,12 L35,8 M40,12 L35,16" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
                </svg>
                <span className="text-sm font-handwritten text-purple-600">¡100% privado!</span>
              </div>
            </div>
            
            <div className="absolute -right-16 top-8 transform rotate-12">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-handwritten text-emerald-600">¡Sin servidores!</span>
                <svg width="50" height="25">
                  <path d="M45,12 Q25,5 10,12 L15,8 M10,12 L15,16" stroke="#10b981" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
              ¿Necesitas IA Local y Privada? 🤖
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto font-handwritten" style={{ color: 'var(--text-secondary)' }}>
              Construyamos juntos una solución de IA que funcione completamente en local, sin comprometer tu privacidad ni depender de servicios externos.
            </p>
            <div className="space-x-4">
              <a 
                href="https://github.com/jorge-ivan-jimenez-reyes/chatgptlocal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sketch-button inline-block px-6 py-3 rounded-lg transition-colors duration-300" 
                style={{backgroundColor: 'var(--accent)', color: 'white'}}
              >
                🔗 Ver Proyecto en GitHub
                {/* Hand-drawn underline */}
                <div className="absolute -bottom-2 left-0 w-full h-1 opacity-60">
                  <svg viewBox="0 0 150 4" className="w-full h-full">
                    <path d="M2,2 Q75,1 148,2" stroke="white" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </a>
              <Link href="/projects" className="sketch-button inline-block px-6 py-3 rounded-lg border transition-colors duration-300" style={{
                borderColor: 'var(--accent)',
                color: 'var(--accent)'
              }}>
                🚀 Ver Todos los Proyectos
              </Link>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-excalidraw" style={{ color: 'var(--text-primary)' }}>
              Construyamos el Futuro de la IA Local Juntos 🤖🔒
            </h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChatGPTLocalProject; 