import React from "react";

const ContactList = React.lazy(() =>
  import("../components/views/LayoutPages/AddContact")
);
const DashboardHome = React.lazy(() =>
  import("../components/views/DashboardHome")
);

export const route = [
  {
    path: "/dashboard",
    name: "Dashboard",
    exact: true,
    element: DashboardHome,
  },
  {
    path: "/contact-list",
    name: "Contact Management",
    exact: true,
    element: ContactList,
  },
];
