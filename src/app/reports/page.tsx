"use client";

import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Download,
  Calendar,
  Users,
  DollarSign,
  BookOpen
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReportsPage() {
  // Mock data for reports
  const reports = [
    { 
      id: 1, 
      title: "Relatório de Membros", 
      description: "Análise de crescimento e engajamento dos membros", 
      icon: Users,
      lastGenerated: "01/09/2025"
    },
    { 
      id: 2, 
      title: "Relatório Financeiro", 
      description: "Demonstrativo de receitas e despesas", 
      icon: DollarSign,
      lastGenerated: "01/09/2025"
    },
    { 
      id: 3, 
      title: "Relatório de Eventos", 
      description: "Participação e feedback dos eventos", 
      icon: Calendar,
      lastGenerated: "15/08/2025"
    },
    { 
      id: 4, 
      title: "Relatório de Ministérios", 
      description: "Atividades e desempenho dos ministérios", 
      icon: BookOpen,
      lastGenerated: "10/08/2025"
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Relatórios</h1>
        <p className="text-muted-foreground">
          Gere e visualize relatórios da sua igreja
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <Card key={report.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-lg font-medium">{report.title}</CardTitle>
                  <CardDescription>{report.description}</CardDescription>
                </div>
                <Icon className="h-8 w-8 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Última geração: {report.lastGenerated}
                  </div>
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Gerar
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Relatórios Personalizados</CardTitle>
          <CardDescription>
            Crie relatórios específicos com base nas suas necessidades
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium">Período</label>
              <div className="flex gap-2 mt-1">
                <input 
                  type="date" 
                  className="border rounded-md px-3 py-2 text-sm w-full"
                />
                <span className="flex items-center">até</span>
                <input 
                  type="date" 
                  className="border rounded-md px-3 py-2 text-sm w-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium">Tipo de Relatório</label>
              <select className="border rounded-md px-3 py-2 text-sm w-full mt-1">
                <option>Membros</option>
                <option>Finanças</option>
                <option>Eventos</option>
                <option>Ministérios</option>
                <option>Comparativo</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button>
              <BarChart3 className="mr-2 h-4 w-4" />
              Gerar Relatório
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}