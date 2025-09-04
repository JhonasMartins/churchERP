"use client";

import { useState } from "react";
import { 
  Settings, 
  Save, 
  RefreshCw,
  Globe,
  Clock,
  Database,
  Server,
  HardDrive
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function AdminSystemSettingsPage() {
  const [systemSettings, setSystemSettings] = useState({
    appName: "Sistema de Gestão para Igrejas",
    timezone: "America/Sao_Paulo",
    language: "pt-BR",
    dateFormat: "dd/MM/yyyy",
    currency: "BRL",
    maintenanceMode: false,
    debugMode: false,
    logLevel: "info",
    maxUploadSize: "10MB",
    sessionTimeout: "30",
    description: "Sistema completo para gestão de igrejas evangélicas"
  });

  const handleSaveSettings = () => {
    console.log("Saving system settings:", systemSettings);
    // In a real app, this would be an API call
  };

  const handleResetSettings = () => {
    // Reset to default values
    setSystemSettings({
      appName: "Sistema de Gestão para Igrejas",
      timezone: "America/Sao_Paulo",
      language: "pt-BR",
      dateFormat: "dd/MM/yyyy",
      currency: "BRL",
      maintenanceMode: false,
      debugMode: false,
      logLevel: "info",
      maxUploadSize: "10MB",
      sessionTimeout: "30",
      description: "Sistema completo para gestão de igrejas evangélicas"
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações do Sistema</h1>
        <p className="text-muted-foreground">
          Gerencie as configurações gerais do sistema
        </p>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={handleResetSettings}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Restaurar Padrões
        </Button>
        <Button onClick={handleSaveSettings}>
          <Save className="h-4 w-4 mr-2" />
          Salvar Configurações
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Configurações Gerais
            </CardTitle>
            <CardDescription>
              Configurações básicas do sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="app-name">Nome do Sistema</Label>
                <Input
                  id="app-name"
                  value={systemSettings.appName}
                  onChange={(e) => setSystemSettings({...systemSettings, appName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Idioma</Label>
                <Select value={systemSettings.language} onValueChange={(value) => setSystemSettings({...systemSettings, language: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                    <SelectItem value="en-US">English (United States)</SelectItem>
                    <SelectItem value="es-ES">Español (España)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="timezone">Fuso Horário</Label>
                <Select value={systemSettings.timezone} onValueChange={(value) => setSystemSettings({...systemSettings, timezone: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="America/Sao_Paulo">Brasília (GMT-3)</SelectItem>
                    <SelectItem value="America/New_York">Nova York (GMT-4)</SelectItem>
                    <SelectItem value="Europe/London">Londres (GMT+1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date-format">Formato de Data</Label>
                <Select value={systemSettings.dateFormat} onValueChange={(value) => setSystemSettings({...systemSettings, dateFormat: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dd/MM/yyyy">dd/MM/yyyy</SelectItem>
                    <SelectItem value="MM/dd/yyyy">MM/dd/yyyy</SelectItem>
                    <SelectItem value="yyyy-MM-dd">yyyy-MM-dd</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="currency">Moeda</Label>
                <Select value={systemSettings.currency} onValueChange={(value) => setSystemSettings({...systemSettings, currency: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BRL">Real Brasileiro (R$)</SelectItem>
                    <SelectItem value="USD">Dólar Americano ($)</SelectItem>
                    <SelectItem value="EUR">Euro (€)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Tempo Limite de Sessão (minutos)</Label>
                <Input
                  id="session-timeout"
                  type="number"
                  value={systemSettings.sessionTimeout}
                  onChange={(e) => setSystemSettings({...systemSettings, sessionTimeout: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Descrição do Sistema</Label>
              <Textarea
                id="description"
                value={systemSettings.description}
                onChange={(e) => setSystemSettings({...systemSettings, description: e.target.value})}
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5" />
              Configurações Técnicas
            </CardTitle>
            <CardDescription>
              Configurações avançadas do sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Modo de Manutenção</Label>
                <p className="text-sm text-muted-foreground">
                  Coloque o sistema em modo de manutenção
                </p>
              </div>
              <Switch
                checked={systemSettings.maintenanceMode}
                onCheckedChange={(checked) => setSystemSettings({...systemSettings, maintenanceMode: checked})}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Modo de Depuração</Label>
                <p className="text-sm text-muted-foreground">
                  Ative para exibir informações de depuração
                </p>
              </div>
              <Switch
                checked={systemSettings.debugMode}
                onCheckedChange={(checked) => setSystemSettings({...systemSettings, debugMode: checked})}
              />
            </div>
            
            <Separator />
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="log-level">Nível de Log</Label>
                <Select value={systemSettings.logLevel} onValueChange={(value) => setSystemSettings({...systemSettings, logLevel: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="error">Apenas Erros</SelectItem>
                    <SelectItem value="warn">Avisos e Erros</SelectItem>
                    <SelectItem value="info">Informações</SelectItem>
                    <SelectItem value="debug">Depuração</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="max-upload-size">Tamanho Máximo de Upload</Label>
                <Select value={systemSettings.maxUploadSize} onValueChange={(value) => setSystemSettings({...systemSettings, maxUploadSize: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5MB">5MB</SelectItem>
                    <SelectItem value="10MB">10MB</SelectItem>
                    <SelectItem value="50MB">50MB</SelectItem>
                    <SelectItem value="100MB">100MB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Informações do Sistema
            </CardTitle>
            <CardDescription>
              Detalhes sobre o ambiente do sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <HardDrive className="h-8 w-8 text-blue-500 mb-2" />
                <span className="text-lg font-bold">1.2GB</span>
                <span className="text-sm text-muted-foreground">Espaço Utilizado</span>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <Server className="h-8 w-8 text-green-500 mb-2" />
                <span className="text-lg font-bold">v15.0.1</span>
                <span className="text-sm text-muted-foreground">Versão do Node.js</span>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <Database className="h-8 w-8 text-purple-500 mb-2" />
                <span className="text-lg font-bold">MySQL 8.0</span>
                <span className="text-sm text-muted-foreground">Banco de Dados</span>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <Clock className="h-8 w-8 text-yellow-500 mb-2" />
                <span className="text-lg font-bold">99.8%</span>
                <span className="text-sm text-muted-foreground">Uptime</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}