import React from 'react';
import { Github, ExternalLink, ChevronsDown, Quote, Linkedin } from 'lucide-react';
import Navbar from './_components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

const certifications = [
  {
    image: "/NetworkPlus Logo Certified CE White.png",
    code: "RF5NJ8Z8K7PLVKK6",
    title: "CompTIA Network+",
  },
  {
    image: "/SecurityPlus Logo Certified CE White.png",
    code: "NTPZNDKW38LLVL37",
    title: "CompTIA Security+",
  }
];

const projects = [
  {
    title: "TAS (Telemetry Acquisition System)",
    description: "As the telemetry lead for rocket launchers, I contributed to developing a custom circuit board to gather extensive data during rocket flights. The system captures critical information including temperature, velocity, acceleration, pressure, and rotation for comprehensive flight analysis.",
    techStack: ["Soldering", "CAD", "C++"],
    github: "https://github.com/RamonGarciaJr956/TAS_v2",
    live: null,
    image: "/TAS.jpg"
  },
  {
    title: "TAS GUI",
    description: "A graphical user interface for the Telemetry Acquisition System, designed to visualize and analyze rocket flight data in real-time.",
    techStack: ["Tailwind", "HTML", "Rust"],
    github: "https://github.com/RamonGarciaJr956/tas-gui-v1",
    live: null,
    image: "/TAS GUI.jpeg"
  },
  {
    title: "Image Rest API",
    description: "A REST API service that extracts pixel data from public image URLs and returns it as JSON. Originally developed for Garry's Mod game integration, using Jimp library for image processing.",
    techStack: ["Node.js", "JSON", "Jimp"],
    github: "https://github.com/RamonGarciaJr956/image_api",
    live: null,
    image: "/Rest_Image_API.png"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js to showcase and share my work. This project served as a learning experience to explore Next.js while building upon existing React.js knowledge.",
    techStack: ["Tailwind", "Node.js", "Next.js"],
    github: "#",
    live: null,
    image: "/portfolio.png"
  },
  {
    title: "Semester Project",
    description: "An access control system combining server, client application, and Raspberry Pi. Users input physical codes through GPIO pins, which are verified against an SQL database to grant application access.",
    techStack: ["SQL", "Node.js", "JSON"],
    github: "https://github.com/RamonGarciaJr956/Semester_Project",
    live: null,
    image: "/Semester_Project.png"
  },
  {
    title: "Hackathon 2023",
    description: "Developed 'FlexiFrenzy' during UTRGV's hackathon - a social platform for sharing workout achievements. The application features an Appwrite backend and React frontend.",
    techStack: ["Tailwind", "React", "Appwrite"],
    github: "https://github.com/brubiol/Hackathon-2023",
    live: null,
    image: "/hackathon_2023.png"
  }
];

export default function HomePage() {
  return (
    <main className="flex flex-col gap-16 inset-0 h-full w-full bg-neutral-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-svh h-full">
        <Navbar />

        <div className="flex flex-col items-center justify-center h-full gap-3 font-GeneralSans">
          <Image src="/me.png" alt="Hero" width={250} height={250} />
          <p className="text-neutral-500 text-xl">Hi, I&apos;m Ramon 👋</p>
          <p className="lg:w-[60%] font-semibold text-center text-4xl text-neutral-300 py-2 lg:text-8xl">
            Web Developer
            Photographer, Creator and
            Programmer.
          </p>
        </div>

        <div className="absolute bottom-1 text-neutral-300 animate-bounce flex flex-col items-center">
          <p>Read More!</p>
          <ChevronsDown width={26} height={26} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 md:px-8 text-neutral-300">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-neutral-400">Here are some of the projects I have worked on.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-neutral-800/50 flex flex-col border-neutral-700 hover:border-neutral-600 transition-all duration-300 rounded-lg overflow-hidden">

                <div>
                  <div className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xl mb-2">{project.title}</p>
                    <p className="text-neutral-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-neutral-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pb-2 pr-2 flex justify-end gap-4 flex-1 items-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-neutral-200 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-200 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="aboutMe" className="px-4 md:px-8 text-neutral-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
          </div>

          <div className="space-y-8 flex items-center flex-col">
            <Image src="/me.png" alt="Ramon" width={250} height={250} className="rounded-full" />
            <p className="text-xl font-semibold text-neutral-400 leading-relaxed">
              Hello, My name is Ramon Garcia Jr
            </p>

            <p className="text-lg text-neutral-400 leading-relaxed">
              I was born and grew up in the Rio Grande Valley. As a young child, I was always fascinated by how things worked.
              My grandmother would tell me a story about how when I was young I would stand by the window for hours watching as
              machines built my neighborhood around me. Growing up I don&apos;t think I ever lost this wonder but rather found a way
              to channel it. I love to tinker with stuff, build stuff and yes break stuff.
            </p>

            <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
              <div className="flex gap-4 items-start">
                <Quote className="w-8 h-8 text-neutral-500 flex-shrink-0" />
                <div>
                  <p className="text-lg italic text-neutral-300 mb-4">
                    &quot;Engineering is the art of curiosity. It is about exploring the unknown, asking questions, and finding answers
                    that can change the world.&quot;
                  </p>
                  <p className="text-neutral-400">- Henry Petroski</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="px-4 md:px-8 text-neutral-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Certifications</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-neutral-800/50 border-neutral-700 rounded-lg">
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <Link href={`https://www.certmetrics.com/comptia/public/verification.aspx?code=${cert.code}`}>
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={300}
                      height={300}
                      className="w-full object-cover p-6"
                    />
                  </Link>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-400">Verification Code:</span>
                    <code className="bg-neutral-700 px-2 py-1 rounded text-sm">
                      {cert.code}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800/50 text-neutral-400 py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-neutral-300 mb-4">Ramon Garcia Jr</h3>
              <p className="text-sm">Web Developer, Photographer, Creator and Programmer.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-300 mb-4">Contact</h3>
              <p className="text-sm">Feel free to reach out for collaborations or just a friendly hello.</p>
              <p className='text-md mt-4'>Email:{" "}
                <Link
                  href="mailto:ramongarciajr.tech"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  ramongarciajr.tech
                </Link>
              </p>
              <p className='text-md'>
                Phone:{" "}
                <Link
                  href="tel:+1-956-438-9466"
                  className="text-neutral-400 hover:text-neutral-200 transition-colors"
                >
                  +1-956-438-9466
                </Link>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-300 mb-4">Social</h3>
              <div className="flex gap-4">
                <Link href="https://www.linkedin.com/in/ramon-garcia-jr/">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="https://github.com/RamonGarciaJr956">
                  <Github className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-700 mt-8 pt-8 text-center">
            <p className="text-sm">© {new Date().getFullYear()} Ramon Garcia Jr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}