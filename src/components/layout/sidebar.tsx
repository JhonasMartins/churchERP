"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Users, 
  Calendar, 
  DollarSign, 
  BookOpen, 
  Settings,
  User,
  BarChart3,
  Bell,
  Menu,
  X,
  CheckCircle,
  Heart,
  Play,
  Shield,
  Target,
  HandHeart,
  MessageCircle,
  Package,
  Building,
  HomeIcon
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Membros", href: "/members", icon: Users },
  { name: "Grupos", href: "/groups", icon: User },
  { name: "Eventos", href: "/events", icon: Calendar },
  { name: "Frequência", href: "/attendance", icon: CheckCircle },
  { name: "Finanças", href: "/finance", icon: DollarSign },
  { name: "Doações", href: "/donations", icon: Heart },
  { name: "Ministérios", href: "/ministries", icon: BookOpen },
  { name: "Mídia", href: "/media", icon: Play },
  { name: "Usuários", href: "/users", icon: Shield },
  { name: "Campanhas", href: "/campaigns", icon: Target },
  { name: "Voluntários", href: "/volunteers", icon: HandHeart },
  { name: "Pedidos de Oração", href: "/prayer-requests", icon: MessageCircle },
  { name: "Depoimentos", href: "/testimonials", icon: MessageCircle },
  { name: "Classes e Cursos", href: "/classes", icon: BookOpen },
  { name: "Inventário", href: "/inventory", icon: Package },
  { name: "Fornecedores", href: "/vendors", icon: Building },
  { name: "Ativos", href: "/assets", icon: HomeIcon },
  { name: "Planejamento", href: "/planning", icon: Target },
  { name: "Conformidade", href: "/compliance", icon: Shield },
  { name: "Relatórios", href: "/reports", icon: BarChart3 },
  { name: "Configurações", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="relative bg-background w-64 h-full shadow-lg">
            <div className="p-4 border-b">
              <h1 className="text-xl font-bold">Church ERP</h1>
            </div>
            <nav className="p-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden md:block w-64 bg-background border-r h-screen fixed">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold">Church ERP</h1>
          <p className="text-xs text-muted-foreground">Sistema de Gestão</p>
        </div>
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}