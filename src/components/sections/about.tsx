export default function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'We transform cutting-edge ideas into real-world solutions that make a tangible difference.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Simplicity',
      description: 'We believe technology should simplify life, not complicate it. Every solution we build focuses on user experience.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    },
    {
      title: 'Impact',
      description: 'Our success is measured by the positive impact we create in people\'s lives and businesses.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality solutions using the latest cutting-edge technologies.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section className="flex justify-center px-6 sm:px-8 lg:px-12 py-24 bg-white">
      <div className="w-full max-w-[1400px]">
        
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-slate-900 mb-6 tracking-tight">
            About Us
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl">
            We are a team of innovators, engineers, and dreamers dedicated to bringing cutting-edge technology to life and making the world a better place.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          
          {/* Mission Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 lg:p-16 hover:shadow-xl transition-shadow duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-light text-slate-900">Our Mission</h3>
            </div>
            <p className="text-lg text-slate-700 font-light leading-relaxed">
              To bring innovative ideas to reality by developing intelligent solutions that simplify everyday challenges. We transform complex problems into elegant, accessible technology that empowers people and businesses to thrive.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-12 lg:p-16 hover:shadow-xl transition-shadow duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-light text-slate-900">Our Vision</h3>
            </div>
            <p className="text-lg text-slate-700 font-light leading-relaxed">
              A world where cutting-edge technology is accessible to everyone, making life easier, more efficient, and more fulfilling. We envision a future where innovation drives positive change and creates lasting impact.
            </p>
          </div>

        </div>

        {/* Main Goal Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 lg:p-20 mb-24 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl sm:text-5xl font-light text-white mb-8 leading-tight">
              Our Main Goal
            </h3>
            <p className="text-xl sm:text-2xl text-slate-200 font-light leading-relaxed mb-12">
              Bring innovative ideas to reality and help people ease up their lives using cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-white text-slate-900 text-lg font-light hover:bg-slate-100 transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full border-2 border-white text-white text-lg font-light hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-4xl font-light text-slate-900 mb-12 text-center">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-light text-slate-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-slate-200">
          <div className="text-center">
            <div className="text-5xl font-light text-slate-900 mb-2">5+</div>
            <div className="text-sm text-slate-600 font-light">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-light text-slate-900 mb-2">50+</div>
            <div className="text-sm text-slate-600 font-light">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-light text-slate-900 mb-2">30+</div>
            <div className="text-sm text-slate-600 font-light">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-light text-slate-900 mb-2">100%</div>
            <div className="text-sm text-slate-600 font-light">Satisfaction Rate</div>
          </div>
        </div> */}

      </div>
    </section>
  );
}