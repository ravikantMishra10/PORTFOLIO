import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export const ParticleBackground = () => {
const [init, setInit] = useState(false);

useEffect(() => {
const initParticles = async () => {
const engine = {} as Engine;
await loadSlim(engine);
setInit(true);
};

```
initParticles();
```

}, []);

if (!init) return null;

return (
<Particles
id="tsparticles"
className="absolute inset-0 -z-10"
options={{
background: {
color: { value: "transparent" },
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
