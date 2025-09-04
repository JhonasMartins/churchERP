"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Search, 
  Plus, 
  MoreHorizontal,
  Edit,
  Trash2,
  Users
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

export default function MinistriesPage() {
  // Mock data for ministries
  const ministries = [
    { 
      id: 1, 
      name: "Ministério de Louvor", 
      leader: "Carlos Oliveira", 
      members: 25, 
      description: "Responsável pelas músicas e adoração"
    },
    { 
      id: 2, 
      name: "Ministério de Oração", 
      leader: "Maria Souza", 
      members: 18, 
      description: "Intercessão e oração contínua"
    },
    { 
      id: 3, 
      name: "Ministério Infantil", 
      leader: "Ana Costa", 
      members: 32, 
      description: "Cuidado e ensino das crianças"
    },
    { 
      id: 4, 
      name: "Ministério de Misericórdia", 
      leader: "João Silva", 
      members: 15, 
      description: "Ações sociais e caridade"
    },
    { 
      id: 5, 
      name: "Ministério de Ensino", 
      leader: "Pedro Santos", 
      members: 20, 
      description: "Ensino da palavra e discipulado"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Ministérios</h1>
          <p className="text-muted-foreground">
            Gerencie os ministérios da sua igreja
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Ministério
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar ministérios..."
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
              <TableHead>Ministério</TableHead>
              <TableHead>Líder</TableHead>
              <TableHead>Membros</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ministries.map((ministry) => (
              <TableRow key={ministry.id}>
                <TableCell className="font-medium">{ministry.name}</TableCell>
                <TableCell>{ministry.leader}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    {ministry.members}
                  </div>
                </TableCell>
                <TableCell>{ministry.description}</TableCell>
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
          Mostrando 5 de 12 ministérios
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Anterior</Button>
          <Button variant="outline" size="sm">Próximo</Button>
        </div>
      </div>
    </div>
  );
}