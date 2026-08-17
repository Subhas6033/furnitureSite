import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  ClipboardList,
  Bell,
  Menu,
  X,
  LogOut,
  Settings,
} from "lucide-react";

const AdminNav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/admin"
          className="flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
            A
          </div>

          <div className="hidden sm:block">
            <h1 className="text-sm font-bold text-slate-900">
              Admin Panel
            </h1>
            <p className="text-[11px] text-slate-500">
              Management Dashboard
            </p>
          </div>
        </a>
        
        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Admin Profile */}
          <div className=" items-center gap-2 border-l border-slate-200 pl-3 flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-700">
              AD
            </div>

            <div className="block">
              <p className="text-sm font-semibold text-slate-900">
                Admin
              </p>
              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNav;