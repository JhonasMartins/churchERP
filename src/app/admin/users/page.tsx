"use client";

import { useState } from "react";
import { 
  Users, 
  Search, 
  Plus, 
  MoreHorizontal,
  Edit,
  Trash2,
  Key,
  Shield,
  UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  
  // Mock data for users
  const users = [
    { 
      id: 1, 
      name: "Administrador do Sistema", 
      email: "admin@igreja.com.br", 
      role: "Administrador", 
      status: "Ativo",
      lastLogin: "01/09/2025 14:30",
      permissions: "Total"
    },
    { 
      id: 2, 
      name: "João Silva", 
      email: "joao@igreja.com.br", 
      role: "Financeiro", 
      status: "Ativo",
      lastLogin: "01/09/2025 09:15",
      permissions: "Financeiro, Relatórios"
    },
    { 
      id: 3, 
      name: "Maria Souza", 
      email: "maria@igreja.com.br", 
      role: "Eventos", 
      status: "Ativo",
      lastLogin: "31/08/2025 16:45",
      permissions: "Eventos, Calendário"
    },
    { 
      id: 4, 
      name: "Carlos Oliveira", 
      email: "carlos@igreja.com.br", 
      role: "Membros", 
      status: "Inativo",
      lastLogin: "25/08/2025 11:20",
      permissions: "Membros, Grupos"
    },
    { 
      id: 5, 
      name: "Ana Costa", 
      email: "ana@igreja.com.br", 
      role: "Mídia", 
      status: "Ativo",
      lastLogin: "01/09/2025 08:30",
      permissions: "Mídia, Conteúdo"
    },
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão de Usuários</h1>
          <p className="text-muted-foreground">
            Gerencie usuários e permissões do sistema
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Adicionar Usuário
        </Button>
      </div>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
          <CardDescription>
            Refine a lista de usuários
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar usuários..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-full md:w-48">
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por função" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as funções</SelectItem>
                <SelectItem value="Administrador">Administrador</SelectItem>
                <SelectItem value="Financeiro">Financeiro</SelectItem>
                <SelectItem value="Eventos">Eventos</SelectItem>
                <SelectItem value="Membros">Membros</SelectItem>
                <SelectItem value="Mídia">Mídia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Lista de Usuários</CardTitle>
          <CardDescription>
            {filteredUsers.length} usuários encontrados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Permissões</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Último Acesso</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {user.role === "Administrador" && <Shield className="h-4 w-4 text-red-500" />}
                      {user.role === "Financeiro" && <Key className="h-4 w-4 text-blue-500" />}
                      {["Eventos", "Membros", "Mídia"].includes(user.role) && <Users className="h-4 w-4 text-green-500" />}
                      {user.role}
                    </div>
                  </TableCell>
                  <TableCell>{user.permissions}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === "Ativo" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Key className="mr-2 h-4 w-4" />
                          Redefinir Senha
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Desativar
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