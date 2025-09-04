"use client";

import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Wallet, 
  Settings, 
  BarChart3, 
  UserCog, 
  Shield,
  Database,
  Bell
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
  const adminModules = [
    {
      title: "Gestão de Usuários",
      description: "Gerencie usuários, permissões e acessos ao sistema",
      icon: Users,
      href: "/admin/users",
      color: "bg-blue-500"
    },
    {
      title: "Configurações do Sistema",
      description: "Configure preferências gerais do sistema",
      icon: Settings,
      href: "/admin/system",
      color: "bg-green-500"
    },
    {
      title: "Segurança",
      description: "Gerencie políticas de segurança e autenticação",
      icon: Shield,
      href: "/admin/security",
      color: "bg-red-500"
    },
    {
      title: "Backup e Dados",
      description: "Configure backup e gerencie dados do sistema",
      icon: Database,
      href: "/admin/backup",
      color: "bg-purple-500"
    },
    {
      title: "Relatórios",
      description: "Acesse relatórios administrativos detalhados",
      icon: BarChart3,
      href: "/admin/reports",
      color: "bg-yellow-500"
    },
    {
      title: "Notificações",
      description: "Configure notificações administrativas",
      icon: Bell,
      href: "/admin/notifications",
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Administração</h1>
        <p className="text-muted-foreground">
          Painel de controle administrativo do sistema
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {adminModules.map((module, index) => {
          const Icon = module.icon;
          return (
            <Card key={index} className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className={`${module.color} p-2 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <CardDescription className="mt-2">
                  {module.description}
                </CardDescription>
                <Button className="mt-4 w-full" variant="outline" onClick={() => window.location.href = module.href}>
                  Acessar
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Visão Geral do Sistema</CardTitle>
          <CardDescription>
            Estatísticas e informações gerais do sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <Users className="h-8 w-8 text-blue-500 mb-2" />
              <span className="text-2xl font-bold">142</span>
              <span className="text-sm text-muted-foreground">Usuários Ativos</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <LayoutDashboard className="h-8 w-8 text-green-500 mb-2" />
              <span className="text-2xl font-bold">24</span>
              <span className="text-sm text-muted-foreground">Módulos Ativos</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <Database className="h-8 w-8 text-purple-500 mb-2" />
              <span className="text-2xl font-bold">1.2GB</span>
              <span className="text-sm text-muted-foreground">Dados Armazenados</span>
            </div>
            <div className="flex flex-col items-center p-4 border rounded-lg">
              <Shield className="h-8 w-8 text-red-500 mb-2" />
              <span className="text-2xl font-bold">99.8%</span>
              <span className="text-sm text-muted-foreground">Uptime</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}