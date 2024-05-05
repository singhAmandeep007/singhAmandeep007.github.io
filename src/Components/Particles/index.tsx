import { useCallback, useEffect, useState } from "react";

import { type Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { particlesOptions } from "./particlesOptions";

type TParticlesContainerProps = {
  shouldPause: boolean;
};

export const ParticlesContainer = ({ shouldPause }: TParticlesContainerProps) => {
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

  const particlesLoaded = useCallback(
    async (container?: Container): Promise<void> => {
      if (container) {
        // REFACTOR: could it be controllable via css?
        container.canvas.element?.style.setProperty("z-index", "-1");
        // FIX: not working
        if (shouldPause) container.pause();
        else container.play();
      }

      await Promise.resolve();
    },
    [shouldPause]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
      />
    );
  }

  return <></>;
};
