import { useEffect, useMemo, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { particlesOptions } from "./particlesOptions";

export const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => {
        setInit(true);
      })
      .catch(console.error);
  }, []);

  const particles = useMemo(() => {
    if (init) {
      return (
        <Particles
          id="tsparticles"
          options={particlesOptions}
        />
      );
    }
    return null;
  }, [init]);

  return <div style={{ width: 0, height: 0 }}>{particles}</div>;
};

ParticlesContainer.displayName = "ParticlesContainer";
