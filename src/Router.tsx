import { useRef, useState } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { fakeDelay } from "@/Common/utils";
import { SidebarMenu } from "@/Components/SidebarMenu";
import { ToggleTheme } from "@/Components/ToggleTheme";
import { useOnClickOutside } from "@/Hooks/useOnClickOutside";

import { Loading } from "@/Components/Loading";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarNode = useRef<HTMLElement | null>(null);

  useOnClickOutside(sidebarNode, () => setIsSidebarOpen(false));

  return (
    <main>
      <div className={`App ${isSidebarOpen ? "blur" : ""}`}>
        {/* <ParticlesContainer shouldPause={isSidebarOpen} /> */}
        <SidebarMenu
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          ref={sidebarNode}
        />

        <Outlet />
        <ToggleTheme />
      </div>
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
          await fakeDelay(2000);
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
