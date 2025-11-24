export default function Hero() {
  return (
    <section className="flex justify-center px-6 sm:px-8 lg:px-8 py-8">
      <div className="w-full max-w-[1400px] bg-slate-50 border border-slate-200 rounded-3xl px-8 sm:px-12 lg:px-16 py-16 lg:py-15">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8 lg:space-y-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 leading-tight tracking-tight">
              Empowering Innovation with{' '}
              <span className="font-normal text-slate-700">AI & Software Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
              XRAW Innovations delivers cutting-edge AI and software development services, turning your ideas into reality and helping your business thrive in the digital era.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-slate-900 text-white text-lg font-light hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-2xl shadow-slate-900/20"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="#services" 
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border-2 border-slate-200 text-slate-900 text-lg font-light hover:border-slate-900 transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative p-4 lg:order-2 -mx-8 sm:-mx-12 lg:-mx-0 lg:-mr-16 -mb-16 lg:mb-0 lg:my-0">
            <div className="relative overflow-hidden lg:rounded-l-3xl">
              <img
                src="Hero.png"
                alt="AI and technology abstract"
                className="w-full h-full object-cover"
                style={{ minHeight: '600px', maxHeight: '600px' }}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-50/20 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Optional: Stats or Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 pt-12 border-t border-slate-200">
          <div className="text-center lg:text-left">
            <div className="text-4xl font-light text-slate-900 mb-2">10+</div>
            <div className="text-sm text-slate-600 font-light">Projects Delivered</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-4xl font-light text-slate-900 mb-2">100%</div>
            <div className="text-sm text-slate-600 font-light">Client Satisfaction</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-4xl font-light text-slate-900 mb-2">24/7</div>
            <div className="text-sm text-slate-600 font-light">Support Available</div>
          </div>
          <div className="text-center lg:text-left">
            <div className="text-4xl font-light text-slate-900 mb-2">AI</div>
            <div className="text-sm text-slate-600 font-light">Powered Solutions</div>
          </div>
        </div>

      </div>
    </section>
  );
}