import Particles from "@tsparticles/react";

export const ParticleBackground = () => {
return (
<Particles
id="tsparticles"
className="absolute inset-0 -z-10"
options={{
background: {
color: {
value: "transparent",
},
},
fpsLimit: 120,
interactivity: {
events: {
onHover: {
enable: true,
mode: "repulse",
},
},
modes: {
repulse: {
distance: 100,
duration: 0.4,
},
},
},
particles: {
color: {
value: ["#00eaff", "#0fb9b1"],
},
links: {
color: "#0fb9b1",
distance: 150,
enable: true,
opacity: 0.2,
width: 1,
},
move: {
direction: "none",
enable: true,
speed: 1,
outModes: {
default: "bounce",
},
},
number: {
density: {
enable: true,
},
value: 60,
},
opacity: {
value: 0.5,
},
shape: {
type: "circle",
},
size: {
value: { min: 1, max: 3 },
},
},
detectRetina: true,
}}
/>
);
};
