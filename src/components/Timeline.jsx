import { motion } from 'framer-motion';

const timeline = [
  {
    type: 'work',
    title: 'Full Stack Developer Intern',
    org: 'Vill Design Co. Limited, Japan (Remote)',
    date: 'Feb 2025 - Present',
    desc: 'Developed Contest Scoring System & Reception Management System using MERN stack with Neon PostgreSQL, enabling real-time operations and dashboards.'
  },
  {
    type: 'work',
    title: 'Full Stack Developer Intern',
    org: 'Winsun Global Tech, Bangalore',
    date: 'Jan 2024 - Apr 2024',
    desc: 'Designed MERN tech blogging platform with JWT authentication, RBAC, and built highly optimized RESTful APIs for improved load times.'
  },
  {
    type: 'edu',
    title: 'B.Tech in Cyber Security',
    org: 'NMAM Institute of Technology, Nitte',
    date: 'July 2024 - Ongoing',
    desc: 'Currently pursuing Bachelor of Technology. CGPA: 8.55'
  },
  {
    type: 'edu',
    title: 'Diploma in Full Stack Development',
    org: 'SDM Polytechnic, Ujire',
    date: 'June 2021 - June 2024',
    desc: 'Graduated with high distinction. CGPA: 9.78'
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Experience & Education</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 top-0 w-1 h-full bg-cyan-200 dark:bg-cyan-900 -translate-x-1/2" />
          <div className="space-y-12 relative z-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className={`glass rounded-xl p-8 flex flex-col md:flex-row items-center gap-6 shadow-lg ${idx % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.7 }}
                style={{ maxWidth: 420 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-400 dark:bg-cyan-700 flex items-center justify-center text-white text-2xl font-bold">
                  {item.type === 'work' ? '💼' : '🎓'}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cyan-300 mb-1">{item.title}</h3>
                  <p className="text-gray-400 mb-1">{item.org}</p>
                  <span className="text-xs text-cyan-400 font-bold mb-2 block">{item.date}</span>
                  <p className="text-gray-700 dark:text-gray-200 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 