"use client";

import { useState } from "react";
import { 
  BookOpen, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  User,
  Users,
  Calendar,
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

// Mock data for ministries
const ministries = [
  {
    id: 1,
    name: "Ministério de Louvor",
    leader: "Carlos Oliveira",
    members: 45,
    description: "Responsável pelas músicas e adoração durante os cultos",
    meetingDay: "Domingo",
    meetingTime: "17:00",
    location: "Auditório",
    status: "Ativo"
  },
  {
    id: 2,
    name: "Departamento de Ensino",
    leader: "João Silva",
    members: 32,
    description: "Responsável pela Escola Dominical e discipulado",
    meetingDay: "Domingo",
    meetingTime: "9:00",
    location: "Salão Principal",
    status: "Ativo"
  },
  {
    id: 3,
    name: "Ministério de Misericórdia",
    leader: "Maria Souza",
    members: 28,
    description: "Responsável pelas visitas e auxílio aos necessitados",
    meetingDay: "Sábado",
    meetingTime: "14:00",
    location: "Sala de Reuniões",
    status: "Ativo"
  },
  {
    id: 4,
    name: "Ministério de Comunicação",
    leader: "Ana Costa",
    members: 15,
    description: "Responsável pelas redes sociais e comunicação da igreja",
    meetingDay: "Quarta-feira",
    meetingTime: "19:00",
    location: "Sala 3",
    status: "Ativo"
  },
  {
    id: 5,
    name: "Ministério de Oração",
    leader: "Pedro Santos",
    members: 40,
    description: "Responsável pelas reuniões de oração e intercessão",
    meetingDay: "Terça-feira",
    meetingTime: "19:00",
    location: "Sala de Oração",
    status: "Ativo"
  },
];

// Mock data for ministry members
const ministryMembers = [
  {
    id: 1,
    name: "Carlos Oliveira",
    email: "carlos.oliveira@example.com",
    phone: "(11) 99999-9999",
    role: "Líder",
    avatar: "https://github.com/shadcn.png"
  },
  {
    id: 2,
    name: "Maria Souza",
    email: "maria.souza@example.com",
    phone: "(11) 88888-8888",
    role: "Sub-líder",
    avatar: "https://github.com/shadcn.png"
  },
  {
    id: 3,
    name: "João Silva",
    email: "joao.silva@example.com",
    phone: "(11) 77777-7777",
    role: "Membro",
    avatar: "https://github.com/shadcn.png"
  },
];

export default function MinistriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");
  
  const filteredMinistries = ministries.filter(ministry => {
    const matchesSearch = ministry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ministry.leader.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ministry.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "Todos" || ministry.status === statusFilter;
    
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
          <h1 className="text-3xl font-bold tracking-tight">Ministérios</h1>
          <p className="text-muted-foreground">
            Gerencie os ministérios da sua igreja
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Ministério
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Ministérios</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Ministérios ativos
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Membros em Ministérios</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              Membros participando
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Líderes</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Líderes de ministérios
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Novos Ministérios</CardTitle>
            <Plus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              Criados este ano
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Lista de Ministérios</CardTitle>
              <CardDescription>
                {filteredMinistries.length} ministérios encontrados
              </CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar ministérios..."
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
                <TableHead>Ministério</TableHead>
                <TableHead>Líder</TableHead>
                <TableHead>Membros</TableHead>
                <TableHead>Reunião</TableHead>
                <TableHead>Local</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMinistries.map((ministry) => (
                <TableRow key={ministry.id}>
                  <TableCell>
                    <div className="font-medium">{ministry.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {ministry.description}
                    </div>
                  </TableCell>
                  <TableCell>{ministry.leader}</TableCell>
                  <TableCell>{ministry.members} membros</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {ministry.meetingDay} às {ministry.meetingTime}
                    </div>
                  </TableCell>
                  <TableCell>{ministry.location}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(ministry.status)}>
                      {ministry.status}
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
                          Desativar ministério
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
          <CardTitle>Membros do Ministério de Louvor</CardTitle>
          <CardDescription>
            Membros do ministério selecionado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Membro</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Função</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ministryMembers.map((member) => (
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
                      <div className="text-sm">{member.email}</div>
                      <div className="text-sm text-muted-foreground">{member.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={member.role === "Líder" ? "default" : member.role === "Sub-líder" ? "secondary" : "outline"}>
                      {member.role}
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
                        <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Enviar mensagem</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Remover do ministério
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