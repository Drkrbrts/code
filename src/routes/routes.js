import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    roles: ["User", "Super", "Content Manager", "Developer"],
    isAnonymous: false,
    component: lazy(() => import("../containers/Home")),
  },
  {
    path: "/register",
    exact: true,
    roles: [],
    isAnonymous: true,
    component: lazy(() => import("../containers/Register")),
  },
  {
    path: "/login",
    exact: true,
    roles: [],
    isAnonymous: true,
    component: lazy(() => import("../components/LoginForm")),
  },
  {
    path: "/friends",
    exact: true,
    roles: ["User", "Super"],
    isAnonymous: false,
    component: lazy(() => import("../containers/Friends")),
  },
  {
    path: "/friends/formik",
    exact: true,
    roles: ["User", "Super", "Content Manager", "Developer"],
    isAnonymous: false,
    component: lazy(() => import("../components/friends/FriendsFormFormik")),
  },
  {
    path: "/friends/formik/:friendId(d+)",
    exact: true,
    roles: ["User", "Super", "Content Manager", "Developer"],
    isAnonymous: true,
    component: lazy(() => import("../components/friends/FriendsFormFormik")),
  },
  {
    path: "/blogs",
    exact: true,
    roles: ["Developer", "Content Mangaer"],
    isAnonymous: false,
    component: lazy(() => import("../containers/Blogs")),
  },
  {
    path: "/techcompanies",
    exact: true,
    roles: ["Developer", "Super"],
    isAnonymous: false,
    component: lazy(() => import("../containers/TechCompanies")),
  },
  {
    path: "/jobs",
    exact: true,
    roles: ["User", "Super", "Content Manager"],
    isAnonymous: false,
    component: lazy(() => import("../containers/Jobs")),
  },
  {
    path: "/jobs/form",
    exact: true,
    roles: ["Super", "Content Manager"],
    isAnonymous: false,
    component: lazy(() => import("../containers/JobsFormContainer")),
  },
  {
    path: "/jobs/form?jobId=:jobId(d+)",
    exact: true,
    roles: ["Super", "Content Manager"],
    isAnonymous: false,
    component: lazy(() => import("../containers/JobsFormContainer")),
  },
  {
    path: "/events",
    exact: true,
    roles: ["User", "Super", "Content Manager", "Developer"],
    isAnonymous: false,
    component: lazy(() => import("../containers/Events")),
  },
  {
    path: "/events/formik",
    exact: true,
    roles: ["Super", "Content Manager"],
    isAnonymous: false,
    component: lazy(() => import("../components/events/EventsFormik")),
  },
  {
    path: "/events/formik/:eventSlug",
    exact: true,
    roles: ["Super", "Content Manager"],
    isAnonymous: false,
    component: lazy(() => import("../components/events/EventsFormik")),
  },
];

export default routes;
