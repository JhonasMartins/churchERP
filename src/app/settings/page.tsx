"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Settings,
  Save,
  Church,
  User,
  Bell,
  Shield,
  Palette
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie as configurações do sistema
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Configurações</CardTitle>
              <CardDescription>
                Selecione uma categoria para configurar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="secondary" className="w-full justify-start">
                <Church className="mr-2 h-4 w-4" />
                Informações da Igreja
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Perfil
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" />
                Notificações
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Shield className="mr-2 h-4 w-4" />
                Segurança
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Palette className="mr-2 h-4 w-4" />
                Aparência
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Igreja</CardTitle>
              <CardDescription>
                Atualize as informações da sua igreja
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="church-name">Nome da Igreja</Label>
                <Input id="church-name" placeholder="Igreja Batista XYZ" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="church-address">Endereço</Label>
                <Textarea id="church-address" placeholder="Rua Exemplo, 123, Bairro, Cidade - UF" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="church-phone">Telefone</Label>
                  <Input id="church-phone" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="church-email">Email</Label>
                  <Input id="church-email" placeholder="contato@igreja.com.br" type="email" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="church-cnpj">CNPJ</Label>
                <Input id="church-cnpj" placeholder="00.000.000/0000-00" />
              </div>
              
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">Ativar notificações</Label>
                </div>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Configurações de Segurança</CardTitle>
              <CardDescription>
                Gerencie a segurança do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Autenticação de dois fatores</Label>
                  <p className="text-sm text-muted-foreground">
                    Adicione uma camada extra de segurança à sua conta
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label>Sessões ativas</Label>
                  <p className="text-sm text-muted-foreground">
                    Gerencie dispositivos conectados
                  </p>
                </div>
                <Button variant="outline">Ver</Button>
              </div>
              
              <div className="pt-4">
                <Button variant="destructive">Redefinir todas as configurações</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}