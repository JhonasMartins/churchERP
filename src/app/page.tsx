"use client";

import { 
  Users, 
  Calendar, 
  DollarSign, 
  BookOpen, 
  BarChart3,
  Bell,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  // Mock data for dashboard
  const stats = [
    { title: "Membros Ativos", value: "1,240", change: "+12%", icon: Users, trend: "up" },
    { title: "Eventos este mês", value: "8", change: "+2", icon: Calendar, trend: "up" },
    { title: "Dízimos este mês", value: "R$ 24.500", change: "+8%", icon: DollarSign, trend: "up" },
    { title: "Ministérios", value: "12", change: "ativos", icon: BookOpen, trend: "neutral" },
  ];

  const recentActivities = [
    { id: 1, name: "João Silva", action: "fez um novo dízimo", time: "2 minutos atrás" },
    { id: 2, name: "Maria Souza", action: "se cadastrou como membro", time: "1 hora atrás" },
    { id: 3, name: "Carlos Oliveira", action: "participou do evento", time: "3 horas atrás" },
    { id: 4, name: "Ana Costa", action: "atualizou o perfil", time: "5 horas atrás" },
  ];

  const upcomingEvents = [
    { id: 1, name: "Culto de Domingo", date: "10/09/2025", time: "18:00" },
    { id: 2, name: "Reunião de Líderes", date: "12/09/2025", time: "19:30" },
    { id: 3, name: "Batismo", date: "15/09/2025", time: "17:00" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral da sua igreja
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  {stat.trend === "up" && <TrendingUp className="h-3 w-3 text-green-500" />}
                  {stat.trend === "down" && <TrendingDown className="h-3 w-3 text-red-500" />}
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>
              Últimas ações dos membros
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Bell className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {activity.name} <span className="font-normal text-muted-foreground">{activity.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <Button variant="ghost" size="sm">Ver</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximos Eventos</CardTitle>
            <CardDescription>
              Agenda da igreja
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {event.date} às {event.time}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">Ver</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}