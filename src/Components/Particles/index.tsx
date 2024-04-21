import { type Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useCallback, useEffect, useState } from "react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
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
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    })
      .then(() => {
        setInit(true);
      })
      .catch(console.error);
  }, []);

  const particlesLoaded = useCallback(
    async (container?: Container): Promise<void> => {
      console.log(container);
      if (container) {
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
