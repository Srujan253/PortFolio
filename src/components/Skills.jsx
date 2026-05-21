import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, OrbitControls, Billboard, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Categorized Skills
const skillCategories = {
  "Web Development": [
    "JavaScript", "React.js", "Node.js", "Express.js", 
    "HTML5", "CSS3", "REST APIs", "MongoDB", "MySQL", 
    "PostgreSQL", "Neon", "Tailwind CSS", "Vite",
    "Framer Motion", "Socket.IO"
  ],
  "Data Science": [
    "Python", "Pandas", "NumPy", "Matplotlib", 
    "Scikit-learn", "Data Structures", "Algorithms"
  ],
  "Other Tools": [
    "Java", "Git", "GitHub", "AWS", "VSCode", 
    "AI Agents", "Docker", "Postman", "Linux"
  ]
};

// Hardcoded details for the modal
const skillDetails = {
  "React.js": { level: "95%", desc: "Advanced mastery. Core UI framework used across all frontend projects including this interactive portfolio." },
  "Node.js": { level: "85%", desc: "Strong backend skills. Extensive experience building scalable REST APIs and handling async operations." },
  "Python": { level: "80%", desc: "Used for robust backend microservices, scripting, and data manipulation." },
  "MongoDB": { level: "80%", desc: "Primary NoSQL database choice for scalable MERN applications." },
  "PostgreSQL": { level: "85%", desc: "Advanced relational database management, utilized with Neon for real-time applications." },
  "Tailwind CSS": { level: "90%", desc: "Go-to framework for rapid, responsive, and highly aesthetic UI styling." },
  "Socket.IO": { level: "75%", desc: "Implemented for real-time, bi-directional communication in chat applications." },
  "Data Structures": { level: "85%", desc: "Strong problem-solving fundamentals and algorithmic efficiency." },
  "AI Agents": { level: "70%", desc: "Experience utilizing and integrating LLM-powered AI agents into workflows and applications." },
  "Git": { level: "85%", desc: "Proficient in version control, branching, merging, and collaboration." },
  "default": { level: "75%", desc: "Solid fundamental understanding and practical project experience." }
};

function SkillNode({ word, position, setSelectedSkill }) {
  const groupRef = useRef();
  const textRef = useRef();
  const sphereRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();

  const basePosition = useMemo(() => new THREE.Vector3(...position), [position]);
  const color = useMemo(() => new THREE.Color(), []);
  const randomPhase = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const dist = camera.position.length();
    const zoomFactor = Math.max(0, 35 - dist) * 0.5;
    const pulse = Math.sin(t * 2 + randomPhase) * 1.5;
    
    const targetScale = hovered ? 1.5 : 1;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

    const dir = basePosition.clone().normalize();
    const targetPos = basePosition.clone().add(dir.multiplyScalar(zoomFactor + pulse + (hovered ? 3 : 0)));
    groupRef.current.position.lerp(targetPos, 0.1);

    if (textRef.current) {
      textRef.current.material.color.lerp(color.set(hovered ? '#ffffff' : '#22d3ee'), 0.1);
    }
    if (sphereRef.current) {
      sphereRef.current.material.color.lerp(color.set(hovered ? '#ffffff' : '#06b6d4'), 0.1);
      sphereRef.current.material.emissiveIntensity = hovered ? 2.5 : 0.8;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Billboard>
        <Text 
          ref={textRef}
          fontSize={hovered ? 2.2 : 1.8} 
          letterSpacing={-0.05} 
          lineHeight={1} 
          position={[0, 1.5, 0]}
          onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
          onPointerOut={() => { setHovered(false); document.body.style.cursor = 'auto'; }}
          onClick={(e) => { e.stopPropagation(); setSelectedSkill(word); }}
        >
          {word}
        </Text>
        <Sphere ref={sphereRef} args={[hovered ? 0.6 : 0.4, 16, 16]}>
          <meshStandardMaterial 
            color="#06b6d4" 
            emissive="#22d3ee"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Billboard>
    </group>
  );
}

function Cloud({ radius = 18, setSelectedSkill, skillList }) {
  const nodes = useMemo(() => {
    const temp = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); 
    for (let i = 0; i < skillList.length; i++) {
      const y = 1 - (i / (skillList.length - 1)) * 2; 
      const r = Math.sqrt(1 - y * y); 
      const theta = phi * i; 
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      temp.push({ position: [x * radius, y * radius, z * radius], word: skillList[i] });
    }
    return temp;
  }, [radius, skillList]);

  return nodes.map((node, i) => (
    <SkillNode key={node.word} position={node.position} word={node.word} setSelectedSkill={setSelectedSkill} />
  ));
}

function Scene({ setSelectedSkill, skillList }) {
  const group = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.05;
    group.current.rotation.z = Math.sin(t * 0.02) * 0.1;
  });
  return (
    <group ref={group}>
      <Cloud radius={16} setSelectedSkill={setSelectedSkill} skillList={skillList} />
    </group>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeTab, setActiveTab] = useState("Web Development");

  const skillData = selectedSkill ? (skillDetails[selectedSkill] || skillDetails["default"]) : null;
  const currentSkills = skillCategories[activeTab];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-gray-900/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
            Skill Core
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Click any skill to view details. Scroll inside the globe to zoom and expand particles!
          </p>

          {/* Category Navbar */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === category
                    ? "bg-cyan-500 text-gray-900 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                    : "bg-gray-800/50 text-cyan-400 border border-cyan-400/30 hover:bg-gray-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
        
        {/* 3D Canvas */}
        <div className="w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] mx-auto cursor-grab active:cursor-grabbing border-4 border-cyan-400/20 rounded-full glass shadow-[0_0_80px_rgba(6,182,212,0.15)] relative overflow-hidden bg-black/40 transition-opacity duration-500">
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 60 }}>
            <fog attach="fog" args={['#0f172a', 20, 60]} />
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#22d3ee" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#818cf8" />
            
            <AnimatePresence mode="wait">
              <Scene key={activeTab} setSelectedSkill={setSelectedSkill} skillList={currentSkills} />
            </AnimatePresence>
            
            <OrbitControls 
              enablePan={false} 
              minDistance={15} 
              maxDistance={50} 
              autoRotate 
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
      </div>

      {/* Modal Overlay for Skill Details */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div 
              className="bg-gray-900 border border-cyan-400/30 p-8 rounded-3xl max-w-md w-full shadow-[0_0_50px_rgba(6,182,212,0.2)] relative"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 transition-colors"
                onClick={() => setSelectedSkill(null)}
              >
                ✕
              </button>
              
              <h3 className="text-3xl font-bold text-white mb-2">{selectedSkill}</h3>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1 text-cyan-400 font-semibold">
                  <span>Mastery Level</span>
                  <span>{skillData.level}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <motion.div 
                    className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-2.5 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: skillData.level }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {skillData.desc}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}