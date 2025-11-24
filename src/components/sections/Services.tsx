export default function Services() {
  const services = [
    {
      title: 'AI Agents Development',
      description: 'Deploy autonomous AI agents that work tirelessly for your business. From lead generation to customer service, our intelligent agents handle complex repetative tasks while you focus on strategic growth.',
      bgImage: 'AI_AGENT_SERVICE.png',
    },
    {
      title: 'Software Development',
      description: "We build custom software solutions that transform traditional businesses into digital-first operations — from ERP systems to intelligent automation — using cutting-edge technologies and proven best practices.",
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000'
    },
    {
      title: 'Intelligent Chatbot Development',
      description: 'We build intelligent chatbots that can seamlessly connect to WhatsApp, websites, or mobile apps to assist your customers instantly. These chatbots learn from your business data to provide accurate answers, handle requests, and resolve customer queries.',
      bgImage: 'Chatbot_service.png',
    },
    {
      title: 'Web Development',
      description: 'Build your digital presence with stunning, responsive websites that convert visitors into customers. From sleek landing pages to complex web applications, we create fast, secure, and user-friendly solutions.',
      bgImage: 'Website_service.png',
    },
    {
      title: 'Mobile Development',
      description: 'Transform your ideas into powerful mobile experiences. We craft native and cross-platform apps that engage users, drive growth, and deliver seamless performance across iOS and Android devices.',
      bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2000',
    },
    {
      title: 'Hardware & Edge AI Solutions',
      description: 'We design and deploy intelligent edge devices that process data locally, enabling real-time decision-making without relying on the cloud. Our solutions include smart sensors, IoT devices, and wearables for industries, healthcare, and smart environments',
      bgImage: "Edge_AI_Service.png"
    }
  ];

  return (
    <section className="min-h-screen flex justify-center py-24 bg-white">
      <div className="w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* Header Section - Minimalist */}
        <div className="mb-24 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Services
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-light leading-relaxed">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </div>

        {/* Services Grid - Large Cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative rounded-3xl overflow-hidden bg-slate-50 hover:bg-slate-100 transition-all duration-500 border border-slate-200"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 min-h-[400px]">
                {/* Image Side */}
                <div className={`relative overflow-hidden h-64 lg:h-auto ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    style={{ backgroundImage: `url(${service.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-900/60" />
                </div>

                {/* Content Side */}
                <div className={`flex flex-col justify-center p-8 sm:p-12 lg:p-16 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-light">
                    {service.description}
                  </p>
                  
                  <button className="inline-flex items-center gap-3 text-slate-900 font-medium hover:gap-5 transition-all duration-300 group/btn">
                    <span className="text-lg">Explore</span>
                    <svg 
                      className="w-6 h-6 transform group-hover/btn:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Minimalist */}
        <div className="mt-32 text-center">
          <a 
            href="/contact"
            className="inline-flex items-center justify-center gap-4 px-12 py-6 rounded-full bg-slate-900 text-white text-lg font-light hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-2xl shadow-slate-900/20"
          >
            Start Your Project
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}