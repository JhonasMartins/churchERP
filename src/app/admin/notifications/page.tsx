"use client";

import { useState } from "react";
import { 
  Bell, 
  Send, 
  User, 
  Users, 
  Mail, 
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Clock,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminNotificationsPage() {
  const [notificationForm, setNotificationForm] = useState({
    title: "",
    message: "",
    recipient: "all",
    channel: "email"
  });
  
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    sms: false,
    push: true,
    inApp: true
  });
  
  // Mock data for notification history
  const notificationHistory = [
    { 
      id: 1, 
      title: "Atualização do Sistema", 
      recipient: "Todos os Usuários", 
      channel: "Email", 
      status: "Enviado",
      date: "01/09/2025 14:30"
    },
    { 
      id: 2, 
      title: "Manutenção Programada", 
      recipient: "Administradores", 
      channel: "Push", 
      status: "Enviado",
      date: "31/08/2025 09:15"
    },
    { 
      id: 3, 
      title: "Novo Recurso Disponível", 
      recipient: "Todos os Usuários", 
      channel: "Email", 
      status: "Falhou",
      date: "30/08/2025 16:45"
    },
    { 
      id: 4, 
      title: "Lembrete de Backup", 
      recipient: "Administradores", 
      channel: "SMS", 
      status: "Enviado",
      date: "29/08/2025 02:00"
    },
  ];

  const handleSendNotification = () => {
    console.log("Sending notification:", notificationForm);
    // In a real app, this would send the notification
  };

  const handleSaveSettings = () => {
    console.log("Saving notification settings:", notificationSettings);
    // In a real app, this would save the settings
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Notificações</h1>
        <p className="text-muted-foreground">
          Gerencie notificações e comunicações do sistema
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Enviar Notificação
              </CardTitle>
              <CardDescription>
                Envie uma notificação para usuários do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  placeholder="Título da notificação"
                  value={notificationForm.title}
                  onChange={(e) => setNotificationForm({...notificationForm, title: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Conteúdo da notificação"
                  rows={4}
                  value={notificationForm.message}
                  onChange={(e) => setNotificationForm({...notificationForm, message: e.target.value})}
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Destinatários</Label>
                  <Select value={notificationForm.recipient} onValueChange={(value) => setNotificationForm({...notificationForm, recipient: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos os Usuários</SelectItem>
                      <SelectItem value="admins">Apenas Administradores</SelectItem>
                      <SelectItem value="finance">Departamento Financeiro</SelectItem>
                      <SelectItem value="events">Departamento de Eventos</SelectItem>
                      <SelectItem value="members">Departamento de Membros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Canal de Envio</Label>
                  <Select value={notificationForm.channel} onValueChange={(value) => setNotificationForm({...notificationForm, channel: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="push">Notificação Push</SelectItem>
                      <SelectItem value="inapp">Mensagem Interna</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full" onClick={handleSendNotification}>
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Notificação
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Configurações de Notificação
              </CardTitle>
              <CardDescription>
                Configure canais de notificação do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Notificações por Email</Label>
                  <p className="text-sm text-muted-foreground">
                    Envie notificações por email
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.email}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, email: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Notificações SMS</Label>
                  <p className="text-sm text-muted-foreground">
                    Envie notificações por SMS
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.sms}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, sms: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Notificações Push</Label>
                  <p className="text-sm text-muted-foreground">
                    Envie notificações push para dispositivos móveis
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.push}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, push: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Mensagens Internas</Label>
                  <p className="text-sm text-muted-foreground">
                    Envie mensagens dentro do sistema
                  </p>
                </div>
                <Switch
                  checked={notificationSettings.inApp}
                  onCheckedChange={(checked) => setNotificationSettings({...notificationSettings, inApp: checked})}
                />
              </div>
              
              <div className="pt-4">
                <Button onClick={handleSaveSettings}>
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Salvar Configurações
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Histórico de Notificações
              </CardTitle>
              <CardDescription>
                Registro de notificações enviadas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="relative flex-1">
                  <Filter className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Filtrar notificações..."
                    className="pl-8"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filtrar por status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os Status</SelectItem>
                    <SelectItem value="sent">Enviado</SelectItem>
                    <SelectItem value="failed">Falhou</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Destinatários</TableHead>
                    <TableHead>Canal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notificationHistory.map((notification) => (
                    <TableRow key={notification.id}>
                      <TableCell className="font-medium">{notification.title}</TableCell>
                      <TableCell>{notification.recipient}</TableCell>
                      <TableCell>{notification.channel}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          notification.status === "Enviado" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {notification.status}
                        </span>
                      </TableCell>
                      <TableCell>{notification.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Estatísticas de Notificações
              </CardTitle>
              <CardDescription>
                Métricas de envio e recebimento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <Send className="h-8 w-8 text-blue-500 mb-2" />
                  <span className="text-2xl font-bold">142</span>
                  <span className="text-sm text-muted-foreground">Enviadas</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-2xl font-bold">138</span>
                  <span className="text-sm text-muted-foreground">Entregues</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <AlertCircle className="h-8 w-8 text-yellow-500 mb-2" />
                  <span className="text-2xl font-bold">4</span>
                  <span className="text-sm text-muted-foreground">Falharam</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <User className="h-8 w-8 text-purple-500 mb-2" />
                  <span className="text-2xl font-bold">97%</span>
                  <span className="text-sm text-muted-foreground">Taxa de Entrega</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}