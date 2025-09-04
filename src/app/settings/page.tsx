"use client";

import { useState } from "react";
import { 
  Settings, 
  Church, 
  Users, 
  Bell, 
  Palette, 
  Lock, 
  Database,
  Save,
  Eye,
  EyeOff
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
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  
  // Mock data for church settings
  const [churchSettings, setChurchSettings] = useState({
    name: "Igreja Batista Central",
    cnpj: "12.345.678/0001-90",
    address: "Rua das Flores, 123 - Centro, São Paulo - SP",
    phone: "(11) 3333-4444",
    email: "contato@igrejabatistacentral.com.br",
    website: "www.igrejabatistacentral.com.br",
    pastor: "Pr. João Silva",
    description: "Uma igreja dedicada ao crescimento espiritual e comunhão cristã."
  });
  
  // Mock data for notification settings
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    weeklyReport: true,
    eventReminders: true,
    birthdayGreetings: true
  });
  
  // Mock data for security settings
  const [security, setSecurity] = useState({
    twoFactor: false,
    password: "",
    confirmPassword: ""
  });

  const handleSaveChurchSettings = () => {
    console.log("Saving church settings:", churchSettings);
    // In a real app, this would be an API call
  };
  
  const handleSaveNotificationSettings = () => {
    console.log("Saving notification settings:", notifications);
    // In a real app, this would be an API call
  };
  
  const handleSaveSecuritySettings = () => {
    console.log("Saving security settings:", security);
    // In a real app, this would be an API call
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie as configurações da sua igreja
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Navegação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Church className="h-4 w-4" />
                Informações da Igreja
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Usuários e Permissões
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Bell className="h-4 w-4" />
                Notificações
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Palette className="h-4 w-4" />
                Aparência
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Lock className="h-4 w-4" />
                Segurança
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Database className="h-4 w-4" />
                Backup e Dados
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Church className="h-5 w-5" />
                Informações da Igreja
              </CardTitle>
              <CardDescription>
                Configure as informações básicas da sua igreja
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="church-name">Nome da Igreja</Label>
                  <Input
                    id="church-name"
                    value={churchSettings.name}
                    onChange={(e) => setChurchSettings({...churchSettings, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input
                    id="cnpj"
                    value={churchSettings.cnpj}
                    onChange={(e) => setChurchSettings({...churchSettings, cnpj: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  value={churchSettings.address}
                  onChange={(e) => setChurchSettings({...churchSettings, address: e.target.value})}
                />
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={churchSettings.phone}
                    onChange={(e) => setChurchSettings({...churchSettings, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={churchSettings.email}
                    onChange={(e) => setChurchSettings({...churchSettings, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    value={churchSettings.website}
                    onChange={(e) => setChurchSettings({...churchSettings, website: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pastor">Pastor Responsável</Label>
                  <Input
                    id="pastor"
                    value={churchSettings.pastor}
                    onChange={(e) => setChurchSettings({...churchSettings, pastor: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  value={churchSettings.description}
                  onChange={(e) => setChurchSettings({...churchSettings, description: e.target.value})}
                  rows={3}
                />
              </div>
              
              <div className="pt-4">
                <Button onClick={handleSaveChurchSettings}>
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Informações
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notificações
              </CardTitle>
              <CardDescription>
                Configure como e quando você deseja receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Notificações por Email</Label>
                  <p className="text-sm text-muted-foreground">
                    Receba notificações importantes por email
                  </p>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Notificações SMS</Label>
                  <p className="text-sm text-muted-foreground">
                    Receba notificações urgentes por SMS
                  </p>
                </div>
                <Switch
                  checked={notifications.sms}
                  onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Notificações Push</Label>
                  <p className="text-sm text-muted-foreground">
                    Receba notificações no aplicativo
                  </p>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Relatórios Semanais</Label>
                  <p className="text-sm text-muted-foreground">
                    Receba relatórios semanais por email
                  </p>
                </div>
                <Switch
                  checked={notifications.weeklyReport}
                  onCheckedChange={(checked) => setNotifications({...notifications, weeklyReport: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Lembretes de Eventos</Label>
                  <p className="text-sm text-muted-foreground">
                    Receba lembretes de eventos importantes
                  </p>
                </div>
                <Switch
                  checked={notifications.eventReminders}
                  onCheckedChange={(checked) => setNotifications({...notifications, eventReminders: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Parabéns de Aniversário</Label>
                  <p className="text-sm text-muted-foreground">
                    Envie parabéns automaticamente no aniversário dos membros
                  </p>
                </div>
                <Switch
                  checked={notifications.birthdayGreetings}
                  onCheckedChange={(checked) => setNotifications({...notifications, birthdayGreetings: checked})}
                />
              </div>
              
              <div className="pt-4">
                <Button onClick={handleSaveNotificationSettings}>
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Preferências
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Aparência
              </CardTitle>
              <CardDescription>
                Personalize a aparência do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Tema</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione um tema" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Escuro</SelectItem>
                    <SelectItem value="system">Sistema</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="pt-4">
                <Button>
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Preferências
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Segurança
              </CardTitle>
              <CardDescription>
                Configure as opções de segurança da sua conta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Autenticação de Dois Fatores</Label>
                  <p className="text-sm text-muted-foreground">
                    Adicione uma camada extra de segurança à sua conta
                  </p>
                </div>
                <Switch
                  checked={security.twoFactor}
                  onCheckedChange={(checked) => setSecurity({...security, twoFactor: checked})}
                />
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label htmlFor="password">Nova Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={security.password}
                    onChange={(e) => setSecurity({...security, password: e.target.value})}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={security.confirmPassword}
                  onChange={(e) => setSecurity({...security, confirmPassword: e.target.value})}
                />
              </div>
              
              <div className="pt-4">
                <Button onClick={handleSaveSecuritySettings}>
                  <Save className="h-4 w-4 mr-2" />
                  Atualizar Senha
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}