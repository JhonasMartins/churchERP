"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Edit, 
  Trash2, 
  ArrowLeft,
  Shield,
  Key,
  Activity,
  Building,
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mock data for user details
const userData = {
  id: "1",
  name: "Carlos Silva",
  email: "carlos.silva@church.com",
  phone: "(11) 99999-9999",
  avatar: "https://github.com/shadcn.png",
  role: "Administrador",
  status: "Ativo",
  department: "Tecnologia",
  position: "Coordenador de TI",
  joinDate: new Date("2020-03-15"),
  lastLogin: new Date("2023-06-05T14:30:00"),
  permissions: [
    "Gerenciar usuários",
    "Configurar sistema",
    "Visualizar relatórios",
    "Gerenciar finanças"
  ],
  contactInfo: {
    address: "Rua das Flores, 123",
    city: "São Paulo",
    state: "SP",
    zipCode: "01234-567"
  },
  recentActivity: [
    { id: "1", action: "Atualizou informações de um membro", date: new Date("2023-06-05T14:25:00") },
    { id: "2", action: "Gerou relatório financeiro", date: new Date("2023-06-05T11:15:00") },
    { id: "3", action: "Adicionou novo evento", date: new Date("2023-06-04T16:45:00") },
    { id: "4", action: "Atualizou configurações do sistema", date: new Date("2023-06-04T10:30:00") },
  ]
};

export default function UserDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [user] = useState(userData);
  
  const handleEdit = () => {
    console.log("Edit user");
  };
  
  const handleDelete = () => {
    console.log("Delete user");
  };
  
  const handleResetPassword = () => {
    console.log("Reset password");
  };
  
  const handleDeactivate = () => {
    console.log("Deactivate user");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground">{user.position}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={user.status === "Ativo" ? "default" : "secondary"}>
            {user.status}
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleEdit}>
                <Edit className="mr-2 h-4 w-4" />
                Editar Usuário
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleResetPassword}>
                <Key className="mr-2 h-4 w-4" />
                Redefinir Senha
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDeactivate} className="text-destructive">
                <Shield className="mr-2 h-4 w-4" />
                Desativar Usuário
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Usuário
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
            <CardDescription>Detalhes do usuário</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xl font-bold">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.position}</p>
                <Badge className="mt-1">{user.role}</Badge>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">{user.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Departamento</p>
                <p className="text-sm text-muted-foreground">{user.department}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Endereço</CardTitle>
            <CardDescription>Informações de localização</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Endereço</p>
                <p className="text-sm text-muted-foreground">{user.contactInfo.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Cidade</p>
                <p className="text-sm text-muted-foreground">{user.contactInfo.city}, {user.contactInfo.state}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">CEP</p>
                <p className="text-sm text-muted-foreground">{user.contactInfo.zipCode}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status e Acesso</CardTitle>
            <CardDescription>Informações de sistema</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Data de Admissão</p>
                <p className="text-sm text-muted-foreground">
                  {format(user.joinDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Activity className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Último Acesso</p>
                <p className="text-sm text-muted-foreground">
                  {format(user.lastLogin, "dd/MM/yyyy 'às' HH:mm")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Status</p>
                <Badge variant={user.status === "Ativo" ? "default" : "secondary"}>
                  {user.status}
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Key className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Função</p>
                <p className="text-sm text-muted-foreground">{user.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Permissões</CardTitle>
            <CardDescription>Acesso concedido ao usuário</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {user.permissions.map((permission, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <p className="text-sm">{permission}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
            <CardDescription>Ações realizadas pelo usuário</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {user.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1">
                    <p className="text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {format(activity.date, "dd/MM/yyyy 'às' HH:mm")}
                    </p>
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