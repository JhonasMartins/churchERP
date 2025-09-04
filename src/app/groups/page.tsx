"use client";

import { useState } from "react";
import { 
  Users, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  User,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  XCircle,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mock data for groups
const groups = [
  {
    id: 1,
    name: "Grupo de Jovens",
    leader: "Maria Souza",
    members: 25,
    meetingDay: "Sexta-feira",
    meetingTime: "19:30",
    location: "Sala 2",
    status: "Ativo",
    createdAt: new Date(2020, 5, 15),
  },
  {
    id: 2,
    name: "Ministério de Louvor",
    leader: "Carlos Oliveira",
    members: 18,
    meetingDay: "Domingo",
    meetingTime: "17:00",
    location: "Auditório",
    status: "Ativo",
    createdAt: new Date(2019, 2, 10),
  },
  {
    id: 3,
    name: "Comissão de Caridade",
    leader: "Ana Costa",
    members: 12,
    meetingDay: "Quarta-feira",
    meetingTime: "20:00",
    location: "Sala de Reuniões",
    status: "Ativo",
    createdAt: new Date(2021, 8, 5),
  },
  {
    id: 4,
    name: "Grupo de Oração",
    leader: "Pedro Santos",
    members: 30,
    meetingDay: "Terça-feira",
    meetingTime: "19:00",
    location: "Sala de Oração",
    status: "Ativo",
    createdAt: new Date(2020, 11, 20),
  },
  {
    id: 5,
    name: "Escola Dominical",
    leader: "João Silva",
    members: 45,
    meetingDay: "Domingo",
    meetingTime: "9:00",
    location: "Salão Principal",
    status: "Ativo",
    createdAt: new Date(2018, 3, 12),
  },
];

// Mock data for group members
const groupMembers = [
  {
    id: 1,
    name: "João Silva",
    email: "joao.silva@example.com",
    phone: "(11) 99999-9999",
    role: "Líder",
    avatar: "https://github.com/shadcn.png",
    joinDate: new Date(2020, 0, 15),
  },
  {
    id: 2,
    name: "Maria Souza",
    email: "maria.souza@example.com",
    phone: "(11) 88888-8888",
    role: "Membro",
    avatar: "https://github.com/shadcn.png",
    joinDate: new Date(2021, 3, 22),
  },
  {
    id: 3,
    name: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    phone: "(11) 77777-7777",
    role: "Membro",
    avatar: "https://github.com/shadcn.png",
    joinDate: new Date(2019, 7, 10),
  },
];

export default function GroupsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");
  
  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.leader.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "Todos" || group.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Ativo": return "default";
      case "Inativo": return "secondary";
      default: return "default";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Grupos</h1>
          <p className="text-muted-foreground">
            Gerencie os grupos e pequenos grupos da sua igreja
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Grupo
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Grupos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              Grupos ativos
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Membros em Grupos</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">
              Membros participando de grupos
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Líderes</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              Líderes de grupos
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Novos Grupos</CardTitle>
            <Plus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Criados este mês
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Lista de Grupos</CardTitle>
              <CardDescription>
                {filteredGroups.length} grupos encontrados
              </CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar grupos..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Grupo</TableHead>
                <TableHead>Líder</TableHead>
                <TableHead>Membros</TableHead>
                <TableHead>Reunião</TableHead>
                <TableHead>Local</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredGroups.map((group) => (
                <TableRow key={group.id}>
                  <TableCell>
                    <div className="font-medium">{group.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Criado em {format(group.createdAt, "dd/MM/yyyy", { locale: ptBR })}
                    </div>
                  </TableCell>
                  <TableCell>{group.leader}</TableCell>
                  <TableCell>{group.members} membros</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {group.meetingDay} às {group.meetingTime}
                    </div>
                  </TableCell>
                  <TableCell>{group.location}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(group.status)}>
                      {group.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Gerenciar membros</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Desativar grupo
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Membros do Grupo de Jovens</CardTitle>
          <CardDescription>
            Membros do grupo selecionado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Membro</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Ingresso</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {groupMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        {member.email}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        {member.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={member.role === "Líder" ? "default" : "secondary"}>
                      {member.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      {format(member.joinDate, "dd/MM/yyyy", { locale: ptBR })}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Enviar mensagem</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Remover do grupo
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}