import { FaAward, FaFilePdf } from "react-icons/fa";
import { SiCoursera, SiUdemy, SiFreecodecamp } from "react-icons/si";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Issued Aug 2023",
    Icon: SiFreecodecamp,
    link: "#", // Replace with your certificate link
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera",
    date: "Issued Dec 2023",
    Icon: SiCoursera,
    link: "#", // Replace with your certificate link
  },
  {
    title: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    date: "Issued Mar 2024",
    Icon: SiUdemy,
    link: "#", // Replace with your certificate link
  },
  {
    title: "Advanced React Patterns",
    issuer: "Coursera",
    date: "Issued May 2024",
    Icon: SiCoursera,
    link: "#", // Replace with your certificate link
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          📜 Certificates & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="glass rounded-2xl p-6 flex flex-col gap-4 shadow-xl text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              <div className="flex items-center gap-4">
                <cert.Icon className="text-4xl text-cyan-300" />
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {cert.date}
              </p>

              <div className="mt-auto pt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-cyan-400 rounded-lg font-semibold shadow hover:bg-gray-800 transition w-full justify-center"
                >
                  <FaFilePdf /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}