const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
  ) },
  { name: 'Twitter', href: '#', icon: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.548 2.212c9.057 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
  ) },
  // { name: 'GitHub', href: '#', icon: (
  //   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"/></svg>
  // ) },
];

export default function Footer() {
  return (
    <footer className="w-full flex justify-center px-6 sm:px-8 lg:px-12 py-16">
      <div className="w-full max-w-[1400px] bg-slate-50 border border-slate-200 rounded-3xl px-8 sm:px-12 lg:px-16 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Company Info - Takes more space */}
          <div className="lg:col-span-5 space-y-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden">
                <img src={"XRAW_LOGO_3.png"} className="w-full h-full object-cover" alt="XRAW Logo" />
              </div>
              <span className="font-light text-2xl tracking-tight text-slate-900">
                XRAW INNOVATIONS
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-600 text-lg font-light leading-relaxed max-w-md">
              Empowering your business with AI-driven automation, intelligent workflows, and modern software solutions.
            </p>

            {/* CTA Button */}
            <a 
              href="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-light text-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-slate-900 font-light text-2xl mb-8">Contact</h4>
            <ul className="space-y-4 text-slate-600 font-light">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Lakshan.0714@gmail.com" className="hover:text-slate-900 transition-colors">
                  info@xrawinnovations.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+94763026979" className="hover:text-slate-900 transition-colors">
                  +94 76 302 6979
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          /* {/* Location */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-slate-900 font-light text-2xl mb-8">Location</h4>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 mt-1 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <address className="text-slate-600 font-light not-italic leading-relaxed">
                1/13A, Kanagarathna Place<br />
                Moratuwa, Sri Lanka<br />
                10400
              </address>
            </div>
          </div> */

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 font-light text-sm">
              &copy; {new Date().getFullYear()} XRAW INNOVATIONS. All rights reserved.
            </p>
            
            {/* Optional: Quick Links */}
            <div className="flex gap-8 text-sm font-light text-slate-500">
              {navLinks.map(link => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="hover:text-slate-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
