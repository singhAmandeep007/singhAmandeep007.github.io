import { useRef, useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { ParticlesContainer } from "@/Components/Particles";
import { SidebarMenu } from "@/Components/SidebarMenu";
import { useOnClickOutside } from "@/Hooks/useOnClickOutside";
import { Loading } from "./Components/Loading";

// NOTE: returns a fn which accepts a promise, which resolves after provided milliseconds
function fakeDelay(ms: number = 2000) {
  // return (comp: React.ReactElement) =>
  //   new Promise((resolve) => {
  //     setTimeout(() => resolve(comp), ms);
  //   });
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarNode = useRef<HTMLElement | null>(null);

  useOnClickOutside(sidebarNode, () => setIsSidebarOpen(false));
  return (
    <main>
      <div className={`App ${isSidebarOpen ? "blur" : ""}`}>
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          ref={sidebarNode}
        />

        <Outlet />
      </div>
      <ParticlesContainer shouldPause={isSidebarOpen} />
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
          await fakeDelay(200);
          const { HomePage } = await import("@/Pages/HomePage");
          return {
            Component: HomePage,
          };
        },
      },
      {
        path: "/about",
        lazy: async () => {
          const { AboutPage } = await import("@/Pages/AboutPage");
          return {
            Component: AboutPage,
          };
        },
      },
      {
        path: "/articles",
        lazy: async () => {
          const { ArticlesPage } = await import("@/Pages/ArticlesPage");
          return {
            Component: ArticlesPage,
          };
        },
      },
      {
        path: "/projects",
        lazy: async () => {
          const { ProjectsPage } = await import("@/Pages/ProjectsPage");
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
