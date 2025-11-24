const useCases = [
  {
    title: 'Healthcare',
    description: 'AI-powered patient care and medical record management',
    icon: '🏥',
    features: ['Patient Care Automation', 'Medical Records Management', 'Diagnostic Assistance']
  },
  {
    title: 'Finance',
    description: 'Automated financial analysis and risk assessment',
    icon: '💰',
    features: ['Risk Assessment', 'Fraud Detection', 'Investment Analysis']
  },
  {
    title: 'Retail',
    description: 'Smart inventory and customer experience management',
    icon: '🛍️',
    features: ['Inventory Optimization', 'Customer Analytics', 'Personalized Marketing']
  },
  {
    title: 'Manufacturing',
    description: 'Predictive maintenance and quality control',
    icon: '🏭',
    features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization']
  },
  {
    title: 'Education',
    description: 'Personalized learning and administrative automation',
    icon: '📚',
    features: ['Learning Analytics', 'Administrative Automation', 'Student Success Prediction']
  },
  {
    title: 'Real Estate',
    description: 'Property management and market analysis',
    icon: '🏠',
    features: ['Market Analysis', 'Property Valuation', 'Tenant Management']
  }
];

export default function UseCases() {
  return (
    <section className="w-full max-w-7xl flex justify-center py-16">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 sm:text-4xl">
            Industry-Specific Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
            Discover how our AI and automation solutions are transforming businesses across different industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{useCase.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">{useCase.title}</h3>
                  <p className="text-slate-700 text-sm">{useCase.description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {useCase.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-700">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 via-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white font-semibold shadow hover:bg-slate-700 transition-colors"
          >
            <span>Explore Our Solutions</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 