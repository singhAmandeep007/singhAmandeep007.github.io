import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import type { Container } from "@tsparticles/engine";

import { particlesOptions } from "./particlesOptions";

import { techLogoNames } from "@/Common/techlogos";

const BATCH_LOAD_INTERVAL = 1000;
// NOTE: this should be 1 to load all logos, needs fix
const BATCH_SIZE = 1;

export const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  const [particlesLoaded, setParticlesLoaded] = useState(false);

  const particleContainerRef = useRef<Container | null>(null);

  const [loadedTechLogos, setLoadedTechLogos] = useState<string[]>([]);

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

  const handleParticlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      particleContainerRef.current = container;
      setParticlesLoaded(true);
    }
    return Promise.resolve();
  }, []);

  useEffect(() => {
    if (!particlesLoaded) return;

    const interval = setInterval(() => {
      const nextIndex = loadedTechLogos.length;
      const nextBatch = techLogoNames.slice(nextIndex, nextIndex + BATCH_SIZE);

      if (nextBatch.length === 0) {
        clearInterval(interval);
        return;
      }

      particleContainerRef.current?.particles.addParticle(undefined, {
        number: { density: { enable: true }, value: techLogoNames.length },
        opacity: {
          value: { min: 0.1, max: 0.5 },
        },
        move: {
          enable: true,
          direction: "right",
          outModes: {
            default: "out",
          },
          random: false,
          speed: 8,
          straight: true,
          vibrate: true,
        },
        size: {
          value: 10,
        },
        // READ-MORE: https://particles.js.org/docs/interfaces/tsParticles_Engine.Options_Interfaces_Particles_Shape_IShape.IShape.html
        shape: {
          options: {
            image: nextBatch.map((logoName) => ({ src: `./logos/${logoName}.svg` })),
          },
          type: "image",
        },
      });

      setLoadedTechLogos((currentLogos) => [...currentLogos, ...nextBatch]);
    }, BATCH_LOAD_INTERVAL); // load a batch of size<BATCH_SIZE> every <BATCH_LOAD_INTERVAL>seconds
    return () => clearInterval(interval);
  }, [particlesLoaded, loadedTechLogos]);

  const particles = useMemo(() => {
    if (init) {
      return (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          particlesLoaded={handleParticlesLoaded}
        />
      );
    }
    return null;
  }, [init, handleParticlesLoaded]);

  return <div style={{ width: 0, height: 0 }}>{particles}</div>;
};

ParticlesContainer.displayName = "ParticlesContainer";
