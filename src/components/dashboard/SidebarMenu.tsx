// sidebarMenu.ts
import {
  FaTachometerAlt,
  FaChartBar,
  FaMicrochip,
  FaChartLine,
  FaCogs,
  FaTools,
 
} from "react-icons/fa";

export const sidebarMenu = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt />,
    children: [
      { title: "Home", path: "/dashboard" },
      { title: "Attribution Audit", path: "/dashboard/attribution-audit" },
      { title: "Keyword Attribution", path: "/dashboard/keyword-attribution" },
    ],
  },
  {
    title: "Insights",
    icon: <FaChartBar />,
    children: [
      { title: "Table Data", path: "/insights/table-data" },
      { title: "Page Insights", path: "/insights/page-insights" },
    ],
  },
  {
    title: "Architecture Report",
    icon: <FaTools />,
    children: [
      { title: "Hardware Report", path: "/architecture/hardware-report" },
      { title: "Network Report", path: "/architecture/network-report" },
    ],
  },
  {
    title: "Traffic Analysis",
    icon: <FaChartLine />,
    path: "/traffic-analysis",
  },
  {
    title: "Technologies",
    icon: <FaMicrochip />,
    path: "/technologies",
  },
  {
    title: "Settings",
    icon: <FaCogs />,
    path: "/settings",
  },
];
