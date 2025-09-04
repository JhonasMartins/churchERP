"use client";

import { 
  Users, 
  Calendar, 
  DollarSign, 
  BookOpen, 
  BarChart3,
  Bell,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  UserCheck,
  UserX,
  Heart,
  Target,
  Package,
  Building,
  TrendingUp,
  TrendingDown
} from "lucide-react";
import { StatsCard } from "@/components/dashboard/stats-card";
import { ActivityFeed } from "@/components/dashboard/activity-feed";
import { UpcomingEvents } from "@/components/dashboard/upcoming-events";
import { FinancialChart } from "@/components/dashboard/financial-chart";
import { CampaignProgress } from "@/components/dashboard/campaign-progress";
import { MemberStatus } from "@/components/dashboard/member-status";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { addDays, subMonths } from "date-fns";

export default function DashboardPage() {
  // Mock data for dashboard
  const stats = [
    { 
      title: "Membros Ativos", 
      value: "1,240", 
      description: "Membros ativos na igreja",
      change: "+12%", 
      icon: Users, 
      trend: "up" as const 
    },
    { 
      title: "Eventos este mês", 
      value: "8", 
      description: "Eventos programados para este mês",
      change: "+2", 
      icon: Calendar, 
      trend: "up" as const 
    },
    { 
      title: "Dízimos este mês", 
      value: "R$ 24.500", 
      description: "Total de dízimos recebidos",
      change: "+8%", 
      icon: DollarSign, 
      trend: "up" as const 
    },
    { 
      title: "Ministérios", 
      value: "12", 
      description: "Ministérios ativos",
      change: "ativos", 
      icon: BookOpen, 
      trend: "neutral" as const 
    },
  ];

  const recentActivities = [
    { 
      id: 1, 
      name: "João Silva", 
      action: "fez um novo dízimo", 
      time: subMonths(new Date(), 0), 
      type: "finance" as const 
    },
    { 
      id: 2, 
      name: "Maria Souza", 
      action: "se cadastrou como membro", 
      time: subMonths(new Date(), 0), 
      type: "member" as const 
    },
    { 
      id: 3, 
      name: "Carlos Oliveira", 
      action: "participou do evento", 
      time: subMonths(new Date(), 0), 
      type: "event" as const 
    },
    { 
      id: 4, 
      name: "Ana Costa", 
      action: "atualizou o perfil", 
      time: subMonths(new Date(), 0), 
      type: "profile" as const 
    },
    { 
      id: 5, 
      name: "Pedro Santos", 
      action: "fez uma doação", 
      time: subMonths(new Date(), 0), 
      type: "donation" as const 
    },
  ];

  const upcomingEvents = [
    { 
      id: 1, 
      name: "Culto de Domingo", 
      date: addDays(new Date(), 3), 
      time: "18:00", 
      attendees: 120,
      location: "Templo Principal"
    },
    { 
      id: 2, 
      name: "Reunião de Líderes", 
      date: addDays(new Date(), 5), 
      time: "19:30", 
      attendees: 25,
      location: "Sala de Reuniões"
    },
    { 
      id: 3, 
      name: "Batismo", 
      date: addDays(new Date(), 10), 
      time: "17:00", 
      attendees: 8,
      location: "Piscina de Batismo"
    },
    { 
      id: 4, 
      name: "Culto de Oração", 
      date: addDays(new Date(), 12), 
      time: "20:00", 
      attendees: 45,
      location: "Sala de Oração"
    },
  ];

  const financialData = [
    { month: "Jan", income: 18000, expenses: 12000 },
    { month: "Fev", income: 22000, expenses: 15000 },
    { month: "Mar", income: 24000, expenses: 18000 },
    { month: "Abr", income: 21000, expenses: 14000 },
    { month: "Mai", income: 25000, expenses: 16000 },
    { month: "Jun", income: 28000, expenses: 19000 },
  ];

  const campaigns = [
    { id: 1, name: "Campanha de Natal", current: 3250, goal: 5000, unit: "currency" as const },
    { id: 2, name: "Construção do Templo", current: 125000, goal: 500000, unit: "currency" as const },
    { id: 3, name: "Campanha de Missões", current: 8500, goal: 10000, unit: "currency" as const },
    { id: 4, name: "Campanha de Voluntariado", current: 42, goal: 50, unit: undefined },
  ];

  const memberStatusData = [
    { status: "Ativos", count: 1240, color: "bg-green-500", icon: CheckCircle },
    { status: "Novos", count: 85, color: "bg-blue-500", icon: UserCheck },
    { status: "Inativos", count: 156, color: "bg-yellow-500", icon: UserX },
    { status: "Visitantes", count: 210, color: "bg-purple-500", icon: Eye },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral da sua igreja
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ActivityFeed activities={recentActivities} />
        <UpcomingEvents events={upcomingEvents} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <FinancialChart data={financialData} />
        
        <div className="space-y-4">
          <CampaignProgress campaigns={campaigns} />
          <MemberStatus data={memberStatusData} />
        </div>
      </div>
    </div>
  );
}