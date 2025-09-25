// sidebarMenu.ts
import {
  FaTachometerAlt,
  FaChartBar,
  FaMicrochip,
  FaChartLine,
  FaCogs,
  FaTools,
} from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { TbLayoutDashboardFilled } from 'react-icons/tb';

export const sidebarMenu = [
  {
    title: 'Carbon Test',
    icon: <TbLayoutDashboardFilled />,

    path: '/carbon-test',
  },
  {
    title: 'Dashboard',
    icon: <RxDashboard />,
    children: [
      { title: 'Home', path: '/dashboard' },
      { title: 'Attribution Audit', path: '/dashboard/attribution-audit' },
      { title: 'Keyword Attribution', path: '/dashboard/keyword-attribution' },
    ],
  },
  {
    title: 'Insights',
    icon: <FaChartBar />,
    children: [
      { title: 'Table Data', path: '/insights/table-data' },
      { title: 'Page Insights', path: '/insights/page-insights' },
    ],
  },
  {
    title: 'Architecture Report',
    icon: <FaTools />,
    children: [
      { title: 'Hardware Report', path: '/architecture/hardware-report' },
      { title: 'Network Report', path: '/architecture/network-report' },
    ],
  },
  {
    title: 'Traffic Analysis',
    icon: <FaChartLine />,
    path: '/traffic-analysis',
  },
  {
    title: 'Technologies',
    icon: <FaMicrochip />,
    path: '/technologies',
  },
  {
    title: 'Settings',
    icon: <FaCogs />,
    path: '/settings',
  },
];
