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
  HomeIcon,
  Sun,
  Moon,
  Laptop,
  GraduationCap,
  FileText,
  Clock,
  MapPin,
  Wallet,
  UserPlus,
  Users2,
  Church,
  CalendarDays,
  Receipt,
  PiggyBank,
  TrendingUp,
  Award,
  Star,
  Mail,
  Phone,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

const navigation = [
  { 
    name: "Dashboard", 
    href: "/", 
    icon: Home,
    category: "main"
  },
  { 
    name: "Membros", 
    href: "/members", 
    icon: Users,
    category: "people"
  },
  { 
    name: "Grupos", 
    href: "/groups", 
    icon: Users2,
    category: "people"
  },
  { 
    name: "Eventos", 
    href: "/events", 
    icon: Calendar,
    category: "schedule"
  },
  { 
    name: "Frequência", 
    href: "/attendance", 
    icon: CheckCircle,
    category: "schedule"
  },
  { 
    name: "Finanças", 
    href: "/finance", 
    icon: DollarSign,
    category: "finance"
  },
  { 
    name: "Doações", 
    href: "/donations", 
    icon: Heart,
    category: "finance"
  },
  { 
    name: "Ministérios", 
    href: "/ministries", 
    icon: BookOpen,
    category: "ministry"
  },
  { 
    name: "Mídia", 
    href: "/media", 
    icon: Play,
    category: "content"
  },
  { 
    name: "Usuários", 
    href: "/users", 
    icon: Shield,
    category: "admin"
  },
  { 
    name: "Campanhas", 
    href: "/campaigns", 
    icon: Target,
    category: "outreach"
  },
  { 
    name: "Voluntários", 
    href: "/volunteers", 
    icon: HandHeart,
    category: "outreach"
  },
  { 
    name: "Pedidos de Oração", 
    href: "/prayer-requests", 
    icon: MessageCircle,
    category: "pastoral"
  },
  { 
    name: "Depoimentos", 
    href: "/testimonials", 
    icon: Star,
    category: "pastoral"
  },
  { 
    name: "Classes e Cursos", 
    href: "/classes", 
    icon: GraduationCap,
    category: "education"
  },
  { 
    name: "Inventário", 
    href: "/inventory", 
    icon: Package,
    category: "admin"
  },
  { 
    name: "Fornecedores", 
    href: "/vendors", 
    icon: Building,
    category: "admin"
  },
  { 
    name: "Ativos", 
    href: "/assets", 
    icon: HomeIcon,
    category: "admin"
  },
  { 
    name: "Planejamento", 
    href: "/planning", 
    icon: Target,
    category: "admin"
  },
  { 
    name: "Conformidade", 
    href: "/compliance", 
    icon: Shield,
    category: "admin"
  },
  { 
    name: "Relatórios", 
    href: "/reports", 
    icon: BarChart3,
    category: "analytics"
  },
  { 
    name: "Configurações", 
    href: "/settings", 
    icon: Settings,
    category: "admin"
  },
];

const categories = [
  { name: "Principal", key: "main" },
  { name: "Pessoas", key: "people" },
  { name: "Agenda", key: "schedule" },
  { name: "Finanças", key: "finance" },
  { name: "Ministérios", key: "ministry" },
  { name: "Conteúdo", key: "content" },
  { name: "Evangelismo", key: "outreach" },
  { name: "Pastoral", key: "pastoral" },
  { name: "Educação", key: "education" },
  { name: "Administração", key: "admin" },
  { name: "Analytics", key: "analytics" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-background border-border shadow-md"
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
          <div className="relative bg-background w-64 h-full shadow-xl border-r">
            <div className="p-4 border-b border-border">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Church ERP
              </h1>
              <p className="text-xs text-muted-foreground">Sistema de Gestão</p>
            </div>
            <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-140px)]">
              {categories.map((category) => {
                const categoryItems = navigation.filter(item => item.category === category.key);
                if (categoryItems.length === 0) return null;
                
                return (
                  <div key={category.key} className="mb-4">
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      {category.name}
                    </h3>
                    {categoryItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                            isActive
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:bg-muted"
                          }`}
                          onClick={() => setSidebarOpen(false)}
                        >
                          <Icon className="h-4 w-4" />
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="ml-2">Tema</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    <Sun className="mr-2 h-4 w-4" />
                    <span>Claro</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    <Moon className="mr-2 h-4 w-4" />
                    <span>Escuro</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    <Laptop className="mr-2 h-4 w-4" />
                    <span>Sistema</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden md:block w-64 bg-background border-r h-screen fixed shadow-lg">
        <div className="p-4 border-b border-border">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Church ERP
          </h1>
          <p className="text-xs text-muted-foreground">Sistema de Gestão</p>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-140px)]">
          {categories.map((category) => {
            const categoryItems = navigation.filter(item => item.category === category.key);
            if (categoryItems.length === 0) return null;
            
            return (
              <div key={category.key} className="mb-4">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                  {category.name}
                </h3>
                {categoryItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="w-full">
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="ml-2">Tema</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Claro</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Escuro</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>Sistema</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}