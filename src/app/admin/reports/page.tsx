"use client";

import { useState } from "react";
import { 
  BarChart3, 
  Download, 
  Filter, 
  Calendar,
  Users,
  Wallet,
  Clock,
  FileText,
  PieChart,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bar, BarChart, Line, LineChart, Pie, PieChart as RechartsPieChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function AdminReportsPage() {
  const [dateRange, setDateRange] = useState("last30days");
  const [reportType, setReportType] = useState("system");
  
  // Mock data for system usage
  const systemUsageData = [
    { date: "01/09", cpu: 45, memory: 65, disk: 30 },
    { date: "02/09", cpu: 52, memory: 70, disk: 32 },
    { date: "03/09", cpu: 48, memory: 68, disk: 31 },
    { date: "04/09", cpu: 60, memory: 75, disk: 35 },
    { date: "05/09", cpu: 55, memory: 72, disk: 33 },
    { date: "06/09", cpu: 47, memory: 69, disk: 32 },
    { date: "07/09", cpu: 53, memory: 71, disk: 34 },
  ];
  
  // Mock data for user activity
  const userActivityData = [
    { hour: "00:00", users: 5 },
    { hour: "04:00", users: 2 },
    { hour: "08:00", users: 45 },
    { hour: "12:00", users: 68 },
    { hour: "16:00", users: 82 },
    { hour: "20:00", users: 95 },
    { hour: "24:00", users: 12 },
  ];
  
  // Mock data for module usage
  const moduleUsageData = [
    { name: "Membros", value: 35 },
    { name: "Finanças", value: 25 },
    { name: "Eventos", value: 15 },
    { name: "Ministérios", value: 10 },
    { name: "Relatórios", value: 8 },
    { name: "Outros", value: 7 },
  ];
  
  // Mock data for system logs
  const systemLogs = [
    { id: 1, timestamp: "01/09/2025 14:30:22", level: "INFO", message: "Backup automático concluído com sucesso" },
    { id: 2, timestamp: "01/09/2025 14:25:10", level: "WARN", message: "Tentativa de login falhou para o usuário admin" },
    { id: 3, timestamp: "01/09/2025 12:15:45", level: "INFO", message: "Novo usuário cadastrado: João Silva" },
    { id: 4, timestamp: "01/09/2025 10:30:18", level: "ERROR", message: "Falha na conexão com o banco de dados" },
    { id: 5, timestamp: "01/09/2025 08:45:33", level: "INFO", message: "Sistema iniciado com sucesso" },
  ];

  const handleExportReport = () => {
    console.log("Exporting report...");
    // In a real app, this would export the report
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Relatórios Administrativos</h1>
          <p className="text-muted-foreground">
            Analise o desempenho e uso do sistema
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="last7days">Últimos 7 dias</SelectItem>
              <SelectItem value="last30days">Últimos 30 dias</SelectItem>
              <SelectItem value="last90days">Últimos 90 dias</SelectItem>
              <SelectItem value="custom">Personalizado</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleExportReport}>
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Uso do Sistema
            </CardTitle>
            <CardDescription>
              Monitoramento de desempenho do sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={systemUsageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cpu" stroke="#8884d8" name="CPU (%)" />
                  <Line type="monotone" dataKey="memory" stroke="#82ca9d" name="Memória (%)" />
                  <Line type="monotone" dataKey="disk" stroke="#ffc658" name="Disco (%)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Atividade de Usuários
              </CardTitle>
              <CardDescription>
                Pico de uso por hora do dia
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill="#8884d8" name="Usuários Ativos" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Uso por Módulo
              </CardTitle>
              <CardDescription>
                Distribuição de uso por módulo do sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={moduleUsageData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                    />
                    <Tooltip />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Logs do Sistema
            </CardTitle>
            <CardDescription>
              Últimos eventos registrados no sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemLogs.map((log) => (
                <div key={log.id} className="flex items-start gap-4 p-3 border rounded-lg">
                  <div className={`w-3 h-3 rounded-full mt-1.5 ${
                    log.level === "ERROR" ? "bg-red-500" : 
                    log.level === "WARN" ? "bg-yellow-500" : "bg-green-500"
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className={`font-medium ${
                        log.level === "ERROR" ? "text-red-600" : 
                        log.level === "WARN" ? "text-yellow-600" : "text-green-600"
                      }`}>
                        [{log.level}]
                      </span>
                      <span className="text-sm text-muted-foreground">{log.timestamp}</span>
                    </div>
                    <p className="mt-1">{log.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}