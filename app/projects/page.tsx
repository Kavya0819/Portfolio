"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

const projects = {
  "tfg-careers-app": {
    title: "TFG Careers App",
    type: "Task @ TFG",
    desc: "Flutter job app",
    details: "Developed at TFG for job applications.",
  },
  "virtual-mouse": {
    title: "Virtual Mouse",
    type: "Academic Project",
    desc: "Gesture-based mouse",
    details: "Built using OpenCV and MediaPipe.",
  },
  "fake-review-detection": {
    title: "Fake Review Detection",
    type: "Academic Project",
    desc: "ML project",
    details: "Detects fake reviews using ML.",
  },
};

export default function ProjectPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const project = projects[name as keyof typeof projects];

  if (!project) return <p style={{ color: "white" }}>Project not found</p>;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#050505",
      color: "white",
      padding: "80px"
    }}>
      <Link href="/">
        <p style={{ color: "#38bdf8" }}>← Back</p>
      </Link>

      <h1>{project.title}</h1>
      <p>{project.desc}</p>
      <p>{project.details}</p>
    </div>
  );
}