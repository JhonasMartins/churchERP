"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  HandHeart, 
  Search, 
  Plus, 
  MoreHorizontal,
  Edit,
  Trash2,
  Calendar,
  User
} from "lucide-react";
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

export default function VolunteersPage() {
  // Mock data for volunteers
  const volunteers = [
    { 
      id: 1, 
      name: "João Silva", 
      email: "joao@email.com", 
      phone: "(11) 99999-9999", 
      skills: "Som, Iluminação",
      availability: "Finais de semana",
      status: "Ativo"
    },
    { 
      id: 2, 
      name: "Maria Souza", 
      email: "maria@email.com", 
      phone: "(11) 98888-8888", 
      skills: "Organização, Decoração",
      availability: "Terças e Quintas",
      status: "Ativo"
    },
    { 
      id: 3, 
      name: "Carlos Oliveira", 
      email: "carlos@email.com", 
      phone: "(11) 97777-7777", 
      skills: "Manutenção, Carpintaria",
      availability: "Sábados",
      status: "Ativo"
    },
    { 
      id: 4, 
      name: "Ana Costa", 
      email: "ana@email.com", 
      phone: "(11) 96666-6666", 
      skills: "Ensino, Tradução",
      availability: "Domingos",
      status: "Inativo"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Voluntários</h1>
          <p className="text-muted-foreground">
            Gerencie voluntários e suas habilidades
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Voluntário
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar voluntários..."
            className="pl-8"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Filtrar</Button>
          <Button variant="outline">Exportar</Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Habilidades</TableHead>
              <TableHead>Disponibilidade</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {volunteers.map((volunteer) => (
              <TableRow key={volunteer.id}>
                <TableCell className="font-medium">{volunteer.name}</TableCell>
                <TableCell>
                  <div>{volunteer.email}</div>
                  <div className="text-sm text-muted-foreground">{volunteer.phone}</div>
                </TableCell>
                <TableCell>{volunteer.skills}</TableCell>
                <TableCell>{volunteer.availability}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    volunteer.status === "Ativo" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {volunteer.status}
                  </span>
                </TableCell>
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
                        <Trash2 className="mr-2 h-4 w-4" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Mostrando 4 de 28 voluntários
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Anterior</Button>
          <Button variant="outline" size="sm">Próximo</Button>
        </div>
      </div>
    </div>
  );
}