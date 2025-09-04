"use client";

import { useState } from "react";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Heart, 
  DollarSign, 
  BookOpen, 
  CheckCircle,
  Edit,
  MoreHorizontal,
  Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for the member profile
const memberData = {
  id: 1,
  name: "João Silva",
  email: "joao.silva@example.com",
  phone: "(11) 99999-9999",
  address: "Rua das Flores, 123 - Centro, São Paulo - SP",
  birthDate: "15/03/1985",
  joinDate: "12/01/2020",
  status: "Ativo",
  role: "Membro",
  avatar: "https://github.com/shadcn.png",
  groups: ["Grupo de Jovens", "Ministério de Louvor", "Comissão de Caridade"],
  ministries: ["Ministério de Louvor", "Departamento de Ensino"],
  lastDonation: "R$ 150,00",
  totalDonations: "R$ 3.200,00",
  attendanceRate: "85%",
};

const attendanceHistory = [
  { id: 1, date: "01/09/2025", event: "Culto de Domingo", present: true },
  { id: 2, date: "25/08/2025", event: "Culto de Domingo", present: true },
  { id: 3, date: "18/08/2025", event: "Culto de Domingo", present: false },
  { id: 4, date: "11/08/2025", event: "Culto de Domingo", present: true },
  { id: 5, date: "04/08/2025", event: "Culto de Domingo", present: true },
];

const financialHistory = [
  { id: 1, date: "01/09/2025", type: "Dízimo", amount: "R$ 150,00", method: "Dinheiro" },
  { id: 2, date: "01/08/2025", type: "Dízimo", amount: "R$ 150,00", method: "Transferência" },
  { id: 3, date: "01/07/2025", type: "Dízimo", amount: "R$ 150,00", method: "Transferência" },
  { id: 4, date: "15/07/2025", type: "Oferta Especial", amount: "R$ 50,00", method: "Dinheiro" },
  { id: 5, date: "01/06/2025", type: "Dízimo", amount: "R$ 150,00", method: "Transferência" },
];

export default function MemberProfilePage() {
  const [member, setMember] = useState(memberData);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Perfil do Membro</h1>
          <p className="text-muted-foreground">
            Informações detalhadas sobre {member.name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Editar
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Ver histórico completo</DropdownMenuItem>
              <DropdownMenuItem>Enviar mensagem</DropdownMenuItem>
              <DropdownMenuItem>Adicionar nota</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Desativar membro</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card className="card-hover">
            <CardHeader className="flex flex-col items-center text-center">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>
                    <User className="h-12 w-12" />
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="icon" 
                  className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                  variant="secondary"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4">
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
                <Badge className="mt-2" variant={member.status === "Ativo" ? "default" : "secondary"}>
                  {member.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span>{member.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Membro desde {member.joinDate}</span>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="text-sm font-semibold mb-2">Grupos</h4>
                <div className="flex flex-wrap gap-1">
                  {member.groups.map((group, index) => (
                    <Badge key={index} variant="secondary">
                      {group}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-sm font-semibold mb-2">Ministérios</h4>
                <div className="flex flex-wrap gap-1">
                  {member.ministries.map((ministry, index) => (
                    <Badge key={index} variant="outline">
                      {ministry}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="attendance">Frequência</TabsTrigger>
              <TabsTrigger value="finance">Financeiro</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="card-hover">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Frequência</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{member.attendanceRate}</div>
                    <p className="text-xs text-muted-foreground">Nos últimos 3 meses</p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Última Doação</CardTitle>
                    <Heart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{member.lastDonation}</div>
                    <p className="text-xs text-muted-foreground">Este mês</p>
                  </CardContent>
                </Card>
                
                <Card className="card-hover">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Doado</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{member.totalDonations}</div>
                    <p className="text-xs text-muted-foreground">Desde o início</p>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                  <CardDescription>
                    Interações e participações mais recentes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-green-100 text-green-600">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          João fez um dízimo de R$ 150,00
                        </p>
                        <p className="text-xs text-muted-foreground">2 dias atrás</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                        <BookOpen className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          João se inscreveu na classe de Discipulado
                        </p>
                        <p className="text-xs text-muted-foreground">1 semana atrás</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          João participou do culto de domingo
                        </p>
                        <p className="text-xs text-muted-foreground">2 semanas atrás</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="attendance" className="space-y-4">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Histórico de Frequência</CardTitle>
                  <CardDescription>
                    Participação em eventos e cultos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Evento</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {attendanceHistory.map((record) => (
                        <TableRow key={record.id}>
                          <TableCell>{record.date}</TableCell>
                          <TableCell>{record.event}</TableCell>
                          <TableCell>
                            <Badge variant={record.present ? "default" : "destructive"}>
                              {record.present ? "Presente" : "Ausente"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="finance" className="space-y-4">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Histórico Financeiro</CardTitle>
                  <CardDescription>
                    Doações e contribuições financeiras
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Método</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {financialHistory.map((record) => (
                        <TableRow key={record.id}>
                          <TableCell>{record.date}</TableCell>
                          <TableCell>{record.type}</TableCell>
                          <TableCell className="font-medium">{record.amount}</TableCell>
                          <TableCell>{record.method}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}