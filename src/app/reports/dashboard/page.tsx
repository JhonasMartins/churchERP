"use client";

import { 
  Users, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  TrendingDown, 
  BarChart3,
  PieChart,
  Activity,
  Target
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FinancialChart } from "@/components/dashboard/financial-chart";
import { CampaignProgress } from "@/components/dashboard/campaign-progress";
import { MemberStatus } from "@/components/dashboard/member-status";
import { StatsCard } from "@/components/dashboard/stats-card";

// Mock data for reports
const financialData = [
  { month: "Jan", income: 18000, expenses: 12000 },
  { month: "Fev", income: 22000, expenses: 15000 },
  { month: "Mar", income: 24000, expenses: 18000 },
  { month: "Abr", income: 21000, expenses: 14000 },
  { month: "Mai", income: 25000, expenses: 16000 },
  { month: "Jun", income: 28000, expenses: 19000 },
  { month: "Jul", income: 26000, expenses: 17000 },
  { month: "Ago", income: 30000, expenses: 20000 },
];

const campaigns = [
  { id: 1, name: "Campanha de Natal", current: 3250, goal: 5000, unit: "currency" as const },
  { id: 2, name: "Construção do Templo", current: 125000, goal: 500000, unit: "currency" as const },
  { id: 3, name: "Campanha de Missões", current: 8500, goal: 10000, unit: "currency" as const },
  { id: 4, name: "Campanha de Voluntariado", current: 42, goal: 50, unit: undefined },
];

const memberStatusData = [
  { status: "Ativos", count: 1240, color: "bg-green-500", icon: TrendingUp },
  { status: "Novos", count: 85, color: "bg-blue-500", icon: Users },
  { status: "Inativos", count: 156, color: "bg-yellow-500", icon: TrendingDown },
  { status: "Visitantes", count: 210, color: "bg-purple-500", icon: Activity },
];

const stats = [
  { 
    title: "Crescimento de Membros", 
    value: "+12%", 
    description: "Em relação ao mês anterior",
    change: "+12%", 
    icon: TrendingUp, 
    trend: "up" as const 
  },
  { 
    title: "Participação em Eventos", 
    value: "78%", 
    description: "Média de participação",
    change: "+5%", 
    icon: Calendar, 
    trend: "up" as const 
  },
  { 
    title: "Receita Total", 
    value: "R$ 224.500", 
    description: "Nos últimos 12 meses",
    change: "+8%", 
    icon: DollarSign, 
    trend: "up" as const 
  },
  { 
    title: "Taxa de Retenção", 
    value: "85%", 
    description: "Membros que continuam ativos",
    change: "-2%", 
    icon: Target, 
    trend: "down" as const 
  },
];

export default function ReportsDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
          <p className="text-muted-foreground">
            Análise de dados e métricas da igreja
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Exportar Relatório</Button>
          <Button>Gerar Relatório</Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="finance">Financeiro</TabsTrigger>
          <TabsTrigger value="membership">Membros</TabsTrigger>
          <TabsTrigger value="events">Eventos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Distribuição de Membros por Faixa Etária</CardTitle>
                <CardDescription>
                  Divisão dos membros por grupos etários
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de pizza</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Crescimento de Membros</CardTitle>
                <CardDescription>
                  Novos membros por mês
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de barras</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-3">
            <FinancialChart data={financialData} />
            <div className="space-y-4">
              <CampaignProgress campaigns={campaigns} />
              <MemberStatus data={memberStatusData} />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="finance" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 224.500</div>
                <p className="text-xs text-muted-foreground">Últimos 12 meses</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Despesas Totais</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 156.800</div>
                <p className="text-xs text-muted-foreground">Últimos 12 meses</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Saldo</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 67.700</div>
                <p className="text-xs text-muted-foreground">Últimos 12 meses</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Média Mensal</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 18.708</div>
                <p className="text-xs text-muted-foreground">Receita média mensal</p>
              </CardContent>
            </Card>
          </div>
          
          <FinancialChart data={financialData} title="Fluxo de Caixa" description="Receitas e despesas mensais" />
        </TabsContent>
        
        <TabsContent value="membership" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Membros</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,691</div>
                <p className="text-xs text-muted-foreground">Todos os membros</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Membros Ativos</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,240</div>
                <p className="text-xs text-muted-foreground">85% do total</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Novos Membros</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85</div>
                <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Taxa de Retenção</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">Membros que continuam ativos</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Crescimento de Membros</CardTitle>
                <CardDescription>
                  Novos membros por mês
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de barras</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader>
                <CardTitle>Distribuição de Membros</CardTitle>
                <CardDescription>
                  Por faixa etária e gênero
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Gráfico de pizza</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <MemberStatus data={memberStatusData} />
        </TabsContent>
        
        <TabsContent value="events" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Eventos</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48</div>
                <p className="text-xs text-muted-foreground">Últimos 12 meses</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Participação Média</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">Taxa de participação</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eventos com Alta Participação</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Acima de 80%</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eventos Recorrentes</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Eventos mensais</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Participação em Eventos</CardTitle>
              <CardDescription>
                Frequência de membros em eventos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">Gráfico de barras</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}