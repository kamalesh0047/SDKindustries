import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { IndustriesPage } from "./pages/IndustriesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { CapabilitiesPage } from "./pages/CapabilitiesPage";
import { TeamPage } from "./pages/TeamPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "industries", Component: IndustriesPage },
      { path: "projects", Component: ProjectsPage },
      { path: "capabilities", Component: CapabilitiesPage },
      { path: "team", Component: TeamPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
