'use client'


const technologies = [
  { name: "OpenAI", image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
  { name: "Claude", image: "Claude_LOGO.png" },
  { name: "Deepseek", image: "DeepSeek-Logo.png" },
  { name: "Pytorch", image: "Pytorch_logo.jpg" },
  { name: "Huggingface", image: "https://huggingface.co/front/assets/huggingface_logo.svg" },
  { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { name: "Java", image: "JAVA_logo.png" },
  { name: "FastAPI", image: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" },
  { name: "Next.js", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
  { name: "PostgreSQL", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
];

export default function TechnologyTicker() {
  return (
    <section className="container overflow-hidden py-24">
       <div className="flex justify-center">

            <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Technologies
          </h2>
       </div>
      
      <div className="relative flex items-center mt-10 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <div className="marquee flex whitespace-nowrap gap-10">
          {[...technologies, ...technologies].map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[120px]">
              <img src={tech.image} alt={tech.name} className="h-12 w-auto mb-2" />
              <span className="text-xs text-gray-700 font-semibold">{tech.name}</span>
            </div>
          ))}
        </div>
        
      </div>
      <style jsx>{`
        .marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
