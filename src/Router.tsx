import { useRef, useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter, useNavigation } from "react-router-dom";

import { SidebarMenu } from "@/Components/SidebarMenu";
import { ToggleTheme } from "@/Components/ToggleTheme";
import { useOnClickOutside } from "@/Hooks/useOnClickOutside";

import { fakeDelay } from "@/Common/utils";
import { Loading } from "@/Components/Loading";
import { ParticlesContainer } from "@/Components/Particles";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarNode = useRef<HTMLElement | null>(null);

  useOnClickOutside(sidebarNode, () => setIsSidebarOpen(false));

  const { state } = useNavigation();

  return (
    <main>
      <div className={`App ${isSidebarOpen ? "blur" : ""}`}>
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          ref={sidebarNode}
        />
        {state === "loading" ? <Loading /> : <Outlet />}

        <ToggleTheme />
      </div>
      <ParticlesContainer />
    </main>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        lazy: async () => {
          const { HomePage } = await import("@/Pages/Home");
          return {
            Component: HomePage,
          };
        },
      },
      {
        path: "/about",
        lazy: async () => {
          await fakeDelay(1000);
          const { AboutPage } = await import("@/Pages/About");
          return {
            Component: AboutPage,
          };
        },
      },
      {
        path: "/projects",
        lazy: async () => {
          await fakeDelay(1000);
          const { ProjectsPage } = await import("@/Pages/Projects");
          return {
            Component: ProjectsPage,
          };
        },
      },
    ],
  },
]);

export const Router = () => (
  <RouterProvider
    router={router}
    fallbackElement={<Loading />}
  />
);
