"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  FileText,
  LayoutDashboard,
  Library,
  ListChecks,
  Mic2,
  PieChart,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const generalNav = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Books", href: "/dashboard/books", icon: BookOpen },
  { label: "Blogs", href: "/dashboard/blogs", icon: FileText },
  { label: "Podcasts", href: "/dashboard/podcasts", icon: Mic2 },
  { label: "Calendar", href: "/dashboard/calendar", icon: CalendarDays },
];

const workspaceNav = [
  { label: "Reporting", icon: PieChart },
  { label: "Tasks", icon: ListChecks, badge: "8" },
  { label: "Users", icon: Users },
];

const teams = [
  { label: "Library", color: "bg-[#1a5e4e]", icon: Library },
  { label: "Reviews", color: "bg-[#f2b13d]", icon: CircleCheck },
  { label: "Analytics", color: "bg-black", icon: BarChart3 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f7f6f4] text-[#1f1f1f]">
      <aside
        className={cn(
          "hidden shrink-0 border-r border-black/8 bg-[#faf9f7] transition-all duration-300 lg:flex lg:flex-col overflow-hidden",
          collapsed ? "w-15" : "w-66",
        )}
      >
        <div className="flex h-full flex-col py-4">
          {/* Header */}
          <div
            className={cn(
              "mb-5 flex px-3",
              collapsed ? "flex-col items-center gap-2" : "items-center justify-between",
            )}
          >
            <Link
              href="/dashboard"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1a5e4e] text-white shadow-sm"
              aria-label="Dashboard home"
            >
              <Library className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setCollapsed((c) => !c)}
              className="flex h-7 w-7 items-center justify-center rounded-md text-stone-400 transition hover:bg-stone-200/70 hover:text-stone-600"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <ChevronRight className="h-3.5 w-3.5" />
              ) : (
                <ChevronLeft className="h-3.5 w-3.5" />
              )}
            </button>
          </div>

          {/* Nav */}
          <nav className={cn("space-y-5 px-3", collapsed && "px-1.5")}>
            <SidebarGroup title="General" collapsed={collapsed}>
              {generalNav.map((item) => (
                <SidebarLink
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  collapsed={collapsed}
                  active={
                    item.href === "/dashboard"
                      ? pathname === item.href
                      : pathname.startsWith(item.href)
                  }
                />
              ))}
            </SidebarGroup>

            <SidebarGroup title="Workspace" collapsed={collapsed}>
              {workspaceNav.map((item) => (
                <SidebarButton
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  badge={item.badge}
                  collapsed={collapsed}
                />
              ))}
            </SidebarGroup>

            <SidebarGroup title="Your Teams" collapsed={collapsed}>
              {teams.map((item) => (
                <SidebarTeam key={item.label} {...item} collapsed={collapsed} />
              ))}
            </SidebarGroup>
          </nav>

          {/* User */}
          <div className={cn("mt-auto px-3", collapsed && "px-1.5")}>
            <div
              className={cn(
                "rounded-lg bg-white/80 ring-1 ring-black/8 transition-all",
                collapsed ? "p-1.5 flex justify-center" : "p-2.5",
              )}
            >
              {collapsed ? (
                <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#e4d3b3]" title="Jonathan Bett">
                  <img
                    src="https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/covers/jkbLogo.png"
                    alt="Jonathan Bett"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-2 border-white bg-emerald-500" />
                </div>
              ) : (
                <div className="flex items-center gap-2.5">
                  <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#e4d3b3]">
                    <img
                      src="https://saicxdmkixfxhkaxfhmm.supabase.co/storage/v1/object/public/library/covers/jkbLogo.png"
                      alt="Jonathan Bett"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-2 border-white bg-emerald-500" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-stone-800">Jonathan Bett</p>
                    <p className="truncate text-xs text-stone-400">admin@library.com</p>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 rotate-90 text-stone-400" />
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      <div className="min-w-0 flex-1 bg-white">
        {/* Mobile top bar */}
        <div className="flex items-center justify-between border-b border-black/10 bg-[#f7f6f4] px-4 py-3 lg:hidden">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1a5e4e] text-white">
              <Library className="h-4 w-4" />
            </span>
            Dashboard
          </Link>
          <div className="flex gap-1">
            {generalNav.slice(1, 4).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex h-8 w-8 items-center justify-center rounded-md text-stone-500"
                aria-label={item.label}
              >
                <item.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <main className="min-h-screen">
          {pathname !== "/dashboard" ? (
            <DashboardBreadcrumbs pathname={pathname} />
          ) : null}
          <div
            className={cn(
              pathname !== "/dashboard" && "px-5 py-7 md:px-8 lg:px-10",
            )}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function DashboardBreadcrumbs({ pathname }: { pathname: string }) {
  const segments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== "dashboard");

  const crumbs = [
    { label: "Dashboard", href: "/dashboard" },
    ...segments.map((segment, index) => {
      const href = `/dashboard/${segments.slice(0, index + 1).join("/")}`;
      return { label: formatCrumb(segment), href };
    }),
  ];

  const currentLabel = crumbs[crumbs.length - 1].label;

  return (
    <div className="border-b border-stone-200 bg-[#faf9f7] px-5 pt-5 pb-4 md:px-8 lg:px-10">
      <nav aria-label="Breadcrumb" className="mb-2 flex flex-wrap items-center gap-1.5 text-xs">
        {crumbs.map((crumb, index) => {
          const current = index === crumbs.length - 1;
          return (
            <div key={crumb.href} className="flex items-center gap-1.5">
              {index > 0 ? (
                <span className="select-none text-stone-300">/</span>
              ) : null}
              {current ? (
                <span className="font-semibold text-stone-600">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className={cn(
                    "font-medium text-stone-400 transition hover:text-stone-700",
                    index === 0 && "flex items-center gap-1",
                  )}
                >
                  {index === 0 && <LayoutDashboard className="h-3 w-3" />}
                  {crumb.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
      <h1 className="text-xl font-bold tracking-tight text-stone-900">{currentLabel}</h1>
    </div>
  );
}

function formatCrumb(segment: string) {
  return decodeURIComponent(segment)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function SidebarGroup({
  title,
  collapsed,
  children,
}: {
  title: string;
  collapsed: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      {!collapsed && (
        <p className="mb-1.5 px-2 text-[0.62rem] font-semibold uppercase tracking-widest text-stone-400">
          {title}
        </p>
      )}
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

function SidebarLink({
  href,
  icon: Icon,
  label,
  active,
  collapsed,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  active: boolean;
  collapsed: boolean;
}) {
  return (
    <Link
      href={href}
      title={collapsed ? label : undefined}
      className={cn(
        "flex items-center rounded-md transition",
        collapsed
          ? "h-9 w-9 justify-center mx-auto"
          : "h-8 w-full gap-2.5 px-2 text-sm font-medium",
        active
          ? "bg-[#1a5e4e]/10 text-[#1a5e4e]"
          : "text-stone-500 hover:bg-stone-200/60 hover:text-stone-700",
      )}
    >
      <Icon className={cn("h-4 w-4 shrink-0", active ? "text-[#1a5e4e]" : "text-stone-400")} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

function SidebarButton({
  icon: Icon,
  label,
  badge,
  collapsed,
}: {
  icon: React.ElementType;
  label: string;
  badge?: string;
  collapsed: boolean;
}) {
  return (
    <button
      title={collapsed ? label : undefined}
      className={cn(
        "flex items-center rounded-md transition",
        collapsed
          ? "h-9 w-9 justify-center mx-auto"
          : "h-8 w-full gap-2.5 px-2 text-left text-sm font-medium text-stone-500 hover:bg-stone-200/60 hover:text-stone-700",
      )}
    >
      <Icon className="h-4 w-4 shrink-0 text-stone-400" />
      {!collapsed && (
        <>
          <span className="flex-1">{label}</span>
          {badge ? (
            <span className="rounded bg-stone-200/80 px-1.5 py-0.5 text-[0.65rem] font-semibold text-stone-500">
              {badge}
            </span>
          ) : null}
        </>
      )}
    </button>
  );
}

function SidebarTeam({
  label,
  color,
  icon: Icon,
  collapsed,
}: {
  label: string;
  color: string;
  icon: React.ElementType;
  collapsed: boolean;
}) {
  return (
    <button
      title={collapsed ? label : undefined}
      className={cn(
        "flex items-center rounded-md transition",
        collapsed
          ? "h-9 w-9 justify-center mx-auto"
          : "h-8 w-full gap-2.5 px-2 text-left text-sm font-medium text-stone-500 hover:bg-stone-200/60 hover:text-stone-700",
      )}
    >
      <span className={cn("flex h-5 w-5 shrink-0 items-center justify-center rounded text-white", color)}>
        <Icon className="h-3 w-3" />
      </span>
      {!collapsed && (
        <>
          <span className="flex-1">{label}</span>
          <ChevronRight className="h-3 w-3 text-stone-300" />
        </>
      )}
    </button>
  );
}
