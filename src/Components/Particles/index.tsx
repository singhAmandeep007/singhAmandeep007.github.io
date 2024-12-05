import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import type { Container, IMove } from "@tsparticles/engine";

import { techLogoNames } from "@/Common/techlogos";
import { defaultParticlesOptions } from "./particlesOptions";

const BATCH_SIZE = 2;
const BATCH_LOAD_INTERVAL = 100;

export const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  const [loadedTechLogos, setLoadedTechLogos] = useState<string[]>(techLogoNames.slice(0, BATCH_SIZE));

  const particleContainerRef = useRef<Container | null>(null);

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

  useEffect(() => {
    if (!init) return;

    const interval = setInterval(() => {
      setLoadedTechLogos((currentLogos) => {
        const nextIndex = currentLogos.length;
        const nextBatch = techLogoNames.slice(nextIndex, nextIndex + BATCH_SIZE);

        if (nextBatch.length === 0) {
          clearInterval(interval);
          return currentLogos;
        }

        return [...currentLogos, ...nextBatch];
      });
    }, BATCH_LOAD_INTERVAL); // load a batch of size<BATCH_SIZE> every <BATCH_LOAD_INTERVAL>seconds

    return () => clearInterval(interval);
  }, [init]);

  const particlesOptions = useMemo(() => {
    const particleOptionsImages = loadedTechLogos.map((loadedTechLogo) => ({
      src: `./logos/${loadedTechLogo}.svg`,
    }));

    return {
      ...defaultParticlesOptions,
      particles: {
        ...defaultParticlesOptions.particles,
        number: {
          // @ts-expect-error-next-line
          ...defaultParticlesOptions.particles.number,
          value: loadedTechLogos.length,
        },
        move: {
          // @ts-expect-error-next-line
          ...defaultParticlesOptions.particles.move,
          value: loadedTechLogos.length,
          direction: loadedTechLogos.length === techLogoNames.length ? "outside" : "inside",
        } as IMove,
        shape: {
          // @ts-expect-error-next-line
          ...defaultParticlesOptions.particles.shape,
          options: {
            image: particleOptionsImages,
          },
        },
      },
    };
  }, [loadedTechLogos]);

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      particleContainerRef.current = container;
    }

    return Promise.resolve();
  }, []);

  const particles = useMemo(() => {
    if (init) {
      return (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          particlesLoaded={particlesLoaded}
        />
      );
    }
    return null;
  }, [init, particlesOptions, particlesLoaded]);

  return <div style={{ width: 0, height: 0 }}>{particles}</div>;
};

ParticlesContainer.displayName = "ParticlesContainer";
