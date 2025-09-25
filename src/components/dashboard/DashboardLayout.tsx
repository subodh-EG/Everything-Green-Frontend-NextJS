'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaReact, FaChevronDown } from 'react-icons/fa';
import { sidebarMenu } from './SidebarMenu';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  const getInitialOpenMenus = (pathname: string) => {
    const result: Record<string, boolean> = {};
    sidebarMenu.forEach((item) => {
      if (item.children?.some((child) => pathname === child.path)) {
        result[item.title] = true;
      }
    });
    return result;
  };

  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>(
    () => getInitialOpenMenus(pathname),
  );

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#091e21] text-white p-4">
        <nav>
          <ul className="space-y-2">
            {sidebarMenu.map((item) => {
              const isParentActive = item.children?.some(
                (child) => pathname === child.path,
              );
              const isActive = pathname === item.path || isParentActive;
              const isOpen = openSubMenus[item.title];

              return (
                <li key={item.title}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleSubMenu(item.title)}
                        className={`flex items-center justify-between w-full px-3 py-2 rounded transition-colors duration-200 ${
                          isParentActive
                            ? 'bg-primary-500 text-white'
                            : 'hover:bg-primary-500'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span>{item.title}</span>
                        </div>
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <ul
                        className={`pl-6 mt-1 space-y-1 text-sm overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.path;
                          return (
                            <li key={child.title}>
                              <Link
                                href={child.path}
                                className={`block px-2 py-1 rounded transition-colors duration-200 ${
                                  isChildActive
                                    ? 'bg-primary-500 text-white'
                                    : 'hover:bg-primary-500'
                                }`}
                              >
                                {child.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.path!}
                      className={`flex items-center gap-2 px-3 py-2 rounded transition-colors duration-200 ${
                        isActive
                          ? 'bg-primary-500 text-white'
                          : 'hover:bg-primary-500'
                      }`}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
