import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { type Container, type Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticleBackground = () => {
const particlesInit = useCallback(async (engine: Engine) => {
await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (_container: Container | undefined) => {
// particles loaded
}, []);

return (
<Particles
id="tsparticles"
particlesInit={particlesInit}
particlesLoaded={particlesLoaded}
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
outModes: {
default: "bounce",
},
speed: 1,
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
