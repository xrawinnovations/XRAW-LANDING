'use client'

import { useState } from 'react';

export default function Portfolio() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);


  const useCases = [
    // Use Case 1: Hospital Voice Agent
    {
      title: 'AI Voice Patient Care Agent',
      client: 'HealthCare Plus Medical Center',
      category: 'Healthcare AI & Voice',
      challenge: 'HealthCare Plus received 2,000+ daily patient calls for appointment bookings, inquiries about procedures, medication questions, and rescheduling. Their 5-person call center team was overwhelmed with 45-minute average wait times, 40% of calls went unanswered during peak hours, and appointment no-shows reached 28% due to poor communication.',
      solution: [
        'Real-time voice AI agent answers patient calls 24/7 in natural language',
        'Accesses medical knowledge base from uploaded hospital PDFs and protocols',
        'Books, cancels, and reschedules appointments across 10+ doctors automatically',
        'Answers questions about procedures, visiting hours, insurance, and medications',
        'Multi-agent system: Supervisor Agent, Appointment Agent and Information Agent',
        'Integrates with hospital management system for real-time availability',
        'Sends SMS/email confirmations and reminders automatically',
        'Escalates urgent medical cases to on-call staff immediately'
      ],
      results: [
        { label: 'Call handling capacity', value: '3,000/day' },
        { label: 'Average wait time', value: '<10s' },
        { label: 'Appointment no-show reduction', value: '62%' },
        { label: 'Staff time saved', value: '85%' },
        { label: 'Patient satisfaction', value: '4.7/5' },
        { label: 'After-hours support', value: '24/7' }
      ],
      topMetrics: [
        { label: 'Call capacity', value: '3,000/day' },
        { label: 'Wait time', value: '<10s' },
        { label: 'Satisfaction', value: '4.7/5' }
      ],
      summary: 'Multi-agent voice AI system that handles 3,000+ patient calls daily, books appointments across multiple doctors, answers medical questions from hospital PDFs, and provides 24/7 support with zero wait time.',
      image: 'customer_care.png',
      bgColor: 'from-green-50 to-emerald-50'
    },

    // Use Case 2: Quotation Automation
    {
      title: 'AI-Powered Quotation Automation',
      client: 'TechSupply Electronics - B2B Supplier',
      category: 'Sales Automation & AI',
      challenge: 'TechSupply received 500+ quotation request emails daily from corporate clients requesting pricing for laptops, monitors, and IT equipment. Their 8-person sales team spent 20+ minutes manually processing each request: reading emails, matching product codes, calculating discounts, creating PDFs, and replying. This resulted in 6-12 hour response times, lost opportunities, and sales team burnout.',
      solution: [
        'AI agent monitors sales inbox 24/7 and processes emails in real-time',
        'Natural language processing extracts product names, quantities, and specifications',
        'Automatically matches requests to 100+ products in inventory database',
        'Calculates pricing with corporate discounts, bulk pricing, and tax rules',
        'Generates professional PDF quotations with company branding',
        'Sends automated email replies with quotations within 30 seconds',
        'Parallel processing handles 50+ emails simultaneously with Celery workers',
        'Tracks all quotations in database with status monitoring dashboard'
      ],
      results: [
        { label: 'Response time reduction', value: '99.5%' },
        { label: 'From 6 hours to', value: '30 sec' },
        { label: 'Daily processing capacity', value: '1,200+' },
        { label: 'Sales team time saved', value: '90%' },
        { label: 'Conversion rate increase', value: '35%' },
        { label: 'Annual cost savings', value: '$180K' }
      ],
      topMetrics: [
        { label: 'Response time', value: '30 sec' },
        { label: 'Daily capacity', value: '1,200+' },
        { label: 'Cost savings', value: '$180K' }
      ],
      summary: 'Intelligent email automation system that monitors sales inbox 24/7, extracts product requirements using AI, matches 100+ inventory items, and generates professional quotations in 30 seconds—reducing response time by 99.5%.',
      image: 'qutation.png',
      bgColor: 'from-blue-50 to-cyan-50'
    },

    // Use Case 3: Real Estate RAG System
    {
      title: 'Secure RAG System for Real Estate',
      client: 'Prime Properties - Commercial Real Estate',
      category: 'Enterprise RAG & Security',
      challenge: 'Prime Properties managed 10,000+ confidential property documents including contracts, financial reports, legal agreements, and property valuations. Different team members (agents, managers, legal, finance) needed access to different documents. Their manual document search took 30+ minutes per query, sensitive information was at risk, and there was no audit trail. Teams couldn\'t quickly answer client questions during negotiations.',
      solution: [
        'Role-based access control (RBAC) system with 5 permission levels',
        'Document authorization layer checks user privileges before retrieval',
        'RAG system indexes and chunks 10,000+ PDFs with metadata tags',
        'Only authorized document chunks are passed to LLM based on user role',
        'Vector database (Pinecone) for semantic search across documents',
        'AI assistant answers questions using only permitted documents',
        'Audit logging tracks all document access and queries',
        'Real-time document updates reflect in knowledge base within 5 minutes',
       
      ],
      results: [
        { label: 'Document search time', value: '30s' },
        { label: 'From 30 minutes to', value: '30 sec' },
        { label: 'Security incidents', value: '0' },
        { label: 'Compliance rating', value: '100%' },
        { label: 'Query accuracy', value: '94%' },
        { label: 'Team productivity increase', value: '250%' }
      ],
      topMetrics: [
        { label: 'Search time', value: '30s' },
        { label: 'Security incidents', value: '0' },
        { label: 'Accuracy', value: '94%' }
      ],
      summary: 'Enterprise RAG system with role-based access control for 10,000+ confidential documents. Semantic search with Pinecone vector database ensures only authorized team members access permitted information, with full audit trails and zero security incidents.',
      image: 'chat.webp',
      bgColor: 'from-purple-50 to-pink-50'
    },

    // Use Case 4: Complete ERP System
    {
      title: 'Complete Cloud ERP System',
      client: 'FreshMart Groceries - Local Supermarket Chain',
      category: 'Enterprise ERP & Business Management',
      challenge: 'FreshMart operated 5 supermarket locations using Excel spreadsheets, paper invoices, and disconnected software for different functions. They had no real-time inventory visibility, manual payroll processing took 2 days each month, financial reporting required week-long reconciliation, cash flow was unpredictable, and they lost $50K annually to inventory discrepancies and theft.',
      solution: [
        'Unified cloud-based ERP system covering all business operations',
        'Finance Module: Invoicing, expense tracking, profit/loss reports, tax calculations',
        'Inventory Module: Real-time stock tracking across 5 locations, auto-reorder alerts',
        'Employee Module: Attendance, payroll, leave management, performance tracking',
       
        'Payment Module: Multiple payment methods, payment tracking, reconciliation',
        'Order Module: Purchase orders, supplier management, delivery tracking',
        'Dashboard: Real-time business insights, KPI tracking, automated reporting',
        'Mobile app for managers to access reports and approve requests on-the-go',
        'Role-based access for 50+ staff members across departments'
      ],
      results: [
        { label: 'Inventory accuracy improvement', value: '98%' },
        { label: 'Payroll processing time', value: '2 hours' },
        { label: 'Financial reporting time', value: 'Real-time' },
        { label: 'Annual savings', value: '$85K' },
        { label: 'Employee productivity increase', value: '45%' },
        { label: 'Cash flow visibility', value: 'Live' }
      ],
      topMetrics: [
        { label: 'Inventory accuracy', value: '98%' },
        { label: 'Payroll time', value: '2 hours' },
        { label: 'Savings', value: '$85K' }
      ],
      summary: 'Comprehensive cloud ERP system managing finance, inventory, employees, sales, and payments across 5 locations. Replaced Excel spreadsheets with real-time business intelligence, mobile access, and automated reporting—saving $85K annually.',
      image: 'ERP.png',
      bgColor: 'from-orange-50 to-amber-50'
    }
  ];

  const toggleExpand = (index: number) => {
  setExpandedIndex(expandedIndex === index ? null : index);
};


  return (
    <section className="flex justify-center px-6 sm:px-8 lg:px-12 py-40 bg-white">
      <div className="w-full max-w-[1300px]">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Portfolio
          </h2>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
            Real-world success stories showcasing how our AI solutions transform businesses
          </p>
        </div>


        {/* Accordion Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${useCase.bgColor} rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'shadow-2xl md:col-span-2' : 'shadow-md hover:shadow-lg'
                }`}
              >
                {/* Card Header (Always Visible) */}
                <div 
                  className="cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  {/* Image - Top (Fixed Height) */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${useCase.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-900/60" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-light text-slate-900">
                        {useCase.category}
                      </span>
                    </div>
                  </div>

                  {/* Header Content */}
                  <div className="p-8">
                    {/* Title & Client */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-light text-slate-900 mb-2 leading-tight">
                        {useCase.title}
                      </h3>
                      <p className="text-slate-600 font-light text-sm">
                        {useCase.client}
                      </p>
                    </div>

                    {/* Summary Description */}
                    <p className="text-slate-700 font-light leading-relaxed mb-6 text-sm">
                      {useCase.summary}
                    </p>

                    {/* Top 3 Metrics (Always Visible) */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {useCase.topMetrics.map((metric, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-xl p-3 border border-slate-200">
                          <div className="text-xl font-light text-slate-900 mb-1">
                            {metric.value}
                          </div>
                          <div className="text-xs text-slate-600 font-light">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button 
                      className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors font-light"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(index);
                      }}
                    >
                      <span>{isExpanded ? 'Show Less' : 'Read Full Case Study'}</span>
                      <svg 
                        className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Expandable Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 lg:px-10 pb-10 pt-4 border-t border-slate-200/50">
                    <div className="grid lg:grid-cols-2 gap-8">
                      
                      {/* Left Column: Challenge & Solution */}
                      <div className="space-y-8">
                        {/* Challenge */}
                        <div>
                          <h4 className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-3">
                            Challenge
                          </h4>
                          <p className="text-slate-700 font-light leading-relaxed">
                            {useCase.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h4 className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-3">
                            Solution
                          </h4>
                          <ul className="space-y-2">
                            {useCase.solution.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-700 font-light">
                                <span className="text-slate-400 mt-1">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column: Results */}
                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-4">
                          Results
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {useCase.results.map((result, i) => (
                            <div key={i} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-slate-200">
                              <div className="text-2xl font-light text-slate-900 mb-1">
                                {result.value}
                              </div>
                              <div className="text-xs text-slate-600 font-light">
                                {result.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-slate-600 font-light mb-8">
            Ready to transform your business with AI?
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-slate-900 text-white text-lg font-light hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-2xl shadow-slate-900/20"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}