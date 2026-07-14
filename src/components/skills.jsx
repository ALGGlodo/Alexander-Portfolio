import { useEffect, useRef, useState } from "react";
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiVite,
  SiNodedotjs, SiMysql, SiFirebase, SiGit, SiBootstrap, SiFigma,
} from "react-icons/si";
import { BsOpenai, BsClaude } from "react-icons/bs";
import { RiGeminiFill } from "react-icons/ri";
import { FcSupport } from "react-icons/fc";
import { Database, Bug } from "lucide-react";
import "./Skills.css";

const skillGroups = [
  {
    label: "languages & frameworks",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    label: "backend & database",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#539E43" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "PL/SQL", icon: Database, color: "#F80000" },
    ],
  },
  {
    label: "tools & platforms",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    label: "qa & support",
    items: [
      { name: "Quality Assurance", icon: Bug, color: "#4e9b6b" },
      { name: "Tech Support", icon: FcSupport, color: null },
    ],
  },
  {
    label: "ai tools",
    items: [
      { name: "ChatGPT", icon: BsOpenai, color: "#10A37F" },
      { name: "Claude", icon: BsClaude, color: "#D97757" },
      { name: "Gemini", icon: RiGeminiFill, color: "#4796E3" },
      { name: "Freepik", icon: null, color: null },
    ],
  },
];

const marqueeItems = skillGroups.flatMap((g) => g.items.map((i) => i.name));

const radarData = [
  { label: "frontend", value: 6.5 },
  { label: "backend / db", value: 4.5 },
  { label: "qa / testing", value: 6.5 },
  { label: "tools", value: 6.5 },
  { label: "ui / ux", value: 4.5 },
];

function getPoint(index, total, radius, cx, cy) {
  const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
  return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
}

function Skills() {
  const [gridVisible, setGridVisible] = useState(false);
  const [radarVisible, setRadarVisible] = useState(false);
  const gridRef = useRef(null);
  const radarRef = useRef(null);
  const cx = 150, cy = 140, outerR = 100;

  useEffect(() => {
    const gridObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setGridVisible(true),
      { threshold: 0.2 }
    );
    const radarObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setRadarVisible(true),
      { threshold: 0.3 }
    );
    if (gridRef.current) gridObserver.observe(gridRef.current);
    if (radarRef.current) radarObserver.observe(radarRef.current);
    return () => {
      gridObserver.disconnect();
      radarObserver.disconnect();
    };
  }, []);

  const outerPoints = radarData
    .map((_, i) => {
      const p = getPoint(i, radarData.length, outerR, cx, cy);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  const dataPoints = radarData
    .map((skill, i) => {
      const p = getPoint(i, radarData.length, (outerR * skill.value) / 10, cx, cy);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  return (
    <section className="skills" id="skills">
      <div className="skills-bg-shape skills-bg-shape-1"></div>
      <div className="skills-bg-shape skills-bg-shape-2"></div>

      <h2 className="skills-title">Skills</h2>

      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((name, i) => (
            <span className="marquee-item" key={i}>{name}</span>
          ))}
        </div>
      </div>

      <div className="skills-grid" ref={gridRef}>
        {skillGroups.map((group, gi) => (
          <div className="skills-group" key={group.label}>
            <p className="skills-group-label">{group.label}</p>
            <div className="skills-group-items">
              {group.items.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    className={`skill-card ${gridVisible ? "is-visible" : ""}`}
                    style={{ transitionDelay: `${(gi * group.items.length + i) * 0.05}s` }}
                    key={skill.name}
                  >
                    {Icon ? (
                      <Icon size={34} color={skill.color || undefined} />
                    ) : (
                      <span className="skill-card-fallback">{skill.name.charAt(0)}</span>
                    )}
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="radar-section" ref={radarRef}>
        <p className="radar-caption">skill overview</p>
        <svg
          viewBox="0 0 300 260"
          className={`radar-chart ${radarVisible ? "is-visible" : ""}`}
          role="img"
          aria-label="Radar chart showing skill levels across frontend, backend/database, QA testing, tools, and UI/UX"
        >
          <polygon points={outerPoints} className="radar-grid-outer" />
          <polygon points={dataPoints} className="radar-data" />
          {radarData.map((skill, i) => {
            const labelP = getPoint(i, radarData.length, outerR + 24, cx, cy);
            return (
              <text key={skill.label} x={labelP.x} y={labelP.y} className="radar-label" textAnchor="middle">
                {skill.label}
              </text>
            );
          })}
        </svg>
      </div>
    </section>
  );
}

export default Skills;