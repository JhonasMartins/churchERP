"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  Shield, 
  Database, 
  BarChart3, 
  Bell,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";

const adminNavItems = [
  {
    title: "Painel",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Usuários",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Sistema",
    href: "/admin/system",
    icon: Settings,
  },
  {
    title: "Segurança",
    href: "/admin/security",
    icon: Shield,
  },
  {
    title: "Backup",
    href: "/admin/backup",
    icon: Database,
  },
  {
    title: "Relatórios",
    href: "/admin/reports",
    icon: BarChart3,
  },
  {
    title: "Notificações",
    href: "/admin/notifications",
    icon: Bell,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="pb-12 border-r">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="px-2 text-lg font-semibold tracking-tight">
              Administração
            </h2>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="space-y-1">
            {adminNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}