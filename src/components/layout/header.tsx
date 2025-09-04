"use client";

import { usePathname } from "next/navigation";
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/members": "Membros",
  "/groups": "Grupos",
  "/events": "Eventos",
  "/attendance": "Frequência",
  "/finance": "Finanças",
  "/donations": "Doações",
  "/ministries": "Ministérios",
  "/media": "Mídia",
  "/users": "Usuários",
  "/campaigns": "Campanhas",
  "/volunteers": "Voluntários",
  "/prayer-requests": "Pedidos de Oração",
  "/testimonials": "Depoimentos",
  "/classes": "Classes e Cursos",
  "/inventory": "Inventário",
  "/vendors": "Fornecedores",
  "/assets": "Ativos",
  "/planning": "Planejamento",
  "/compliance": "Conformidade",
  "/reports": "Relatórios",
  "/settings": "Configurações",
};

export function Header() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  return (
    <header className="bg-background border-b h-16 fixed top-0 right-0 left-0 md:left-64 z-30">
      <div className="flex items-center justify-between h-full px-4 md:px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-destructive rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}