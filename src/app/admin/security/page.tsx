"use client";

import { useState } from "react";
import { 
  Shield, 
  Key, 
  Lock, 
  Eye, 
  EyeOff, 
  Save, 
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  UserCheck,
  Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AdminSecurityPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [passwordSettings, setPasswordSettings] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    passwordExpiration: 90,
    failedLoginAttempts: 5,
    sessionTimeout: 30,
    ipRestrictions: false,
    requireStrongPasswords: true,
    passwordHistory: 5
  });

  const handleSavePassword = () => {
    console.log("Saving password:", passwordSettings);
    // In a real app, this would be an API call
  };

  const handleSaveSecuritySettings = () => {
    console.log("Saving security settings:", securitySettings);
    // In a real app, this would be an API call
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Segurança</h1>
        <p className="text-muted-foreground">
          Gerencie as configurações de segurança do sistema
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Alteração de Senha
            </CardTitle>
            <CardDescription>
              Altere a senha do administrador do sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Senha Atual</Label>
              <div className="relative">
                <Input
                  id="current-password"
                  type={showCurrentPassword ? "text" : "password"}
                  value={passwordSettings.currentPassword}
                  onChange={(e) => setPasswordSettings({...passwordSettings, currentPassword: e.target.value})}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-password">Nova Senha</Label>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  value={passwordSettings.newPassword}
                  onChange={(e) => setPasswordSettings({...passwordSettings, newPassword: e.target.value})}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={passwordSettings.confirmPassword}
                  onChange={(e) => setPasswordSettings({...passwordSettings, confirmPassword: e.target.value})}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
            
            <div className="pt-4">
              <Button onClick={handleSavePassword}>
                <Save className="h-4 w-4 mr-2" />
                Alterar Senha
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Políticas de Segurança
            </CardTitle>
            <CardDescription>
              Configure as políticas de segurança do sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Autenticação de Dois Fatores</Label>
                <p className="text-sm text-muted-foreground">
                  Exige autenticação adicional para acesso ao sistema
                </p>
              </div>
              <Switch
                checked={securitySettings.twoFactorAuth}
                onCheckedChange={(checked) => setSecuritySettings({...securitySettings, twoFactorAuth: checked})}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Exigir Senhas Fortes</Label>
                <p className="text-sm text-muted-foreground">
                  Força o uso de senhas complexas
                </p>
              </div>
              <Switch
                checked={securitySettings.requireStrongPasswords}
                onCheckedChange={(checked) => setSecuritySettings({...securitySettings, requireStrongPasswords: checked})}
              />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Restrições de IP</Label>
                <p className="text-sm text-muted-foreground">
                  Limita o acesso a endereços IP específicos
                </p>
              </div>
              <Switch
                checked={securitySettings.ipRestrictions}
                onCheckedChange={(checked) => setSecuritySettings({...securitySettings, ipRestrictions: checked})}
              />
            </div>
            
            <Separator />
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="password-expiration">Expiração de Senha (dias)</Label>
                <Input
                  id="password-expiration"
                  type="number"
                  value={securitySettings.passwordExpiration}
                  onChange={(e) => setSecuritySettings({...securitySettings, passwordExpiration: parseInt(e.target.value)})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-history">Histórico de Senhas</Label>
                <Select 
                  value={securitySettings.passwordHistory.toString()} 
                  onValueChange={(value) => setSecuritySettings({...securitySettings, passwordHistory: parseInt(value)})}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Não reutilizar senhas</SelectItem>
                    <SelectItem value="3">3 senhas anteriores</SelectItem>
                    <SelectItem value="5">5 senhas anteriores</SelectItem>
                    <SelectItem value="10">10 senhas anteriores</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="failed-login-attempts">Tentativas de Login Falhas</Label>
                <Input
                  id="failed-login-attempts"
                  type="number"
                  value={securitySettings.failedLoginAttempts}
                  onChange={(e) => setSecuritySettings({...securitySettings, failedLoginAttempts: parseInt(e.target.value)})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Tempo Limite de Sessão (minutos)</Label>
                <Input
                  id="session-timeout"
                  type="number"
                  value={securitySettings.sessionTimeout}
                  onChange={(e) => setSecuritySettings({...securitySettings, sessionTimeout: parseInt(e.target.value)})}
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button onClick={handleSaveSecuritySettings}>
                <Save className="h-4 w-4 mr-2" />
                Salvar Configurações
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Auditoria de Segurança
            </CardTitle>
            <CardDescription>
              Verifique a segurança do sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                <span className="text-lg font-bold">12</span>
                <span className="text-sm text-muted-foreground">Vulnerabilidades Corrigidas</span>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <AlertTriangle className="h-8 w-8 text-yellow-500 mb-2" />
                <span className="text-lg font-bold">2</span>
                <span className="text-sm text-muted-foreground">Alertas de Segurança</span>
              </div>
              <div className="flex flex-col items-center p-4 border rounded-lg">
                <UserCheck className="h-8 w-8 text-blue-500 mb-2" />
                <span className="text-lg font-bold">98%</span>
                <span className="text-sm text-muted-foreground">Conformidade</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Executar Auditoria Completa
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}