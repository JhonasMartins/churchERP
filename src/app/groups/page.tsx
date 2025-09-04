"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  Search, 
  Plus, 
  MoreHorizontal,
  Edit,
  Trash2,
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

export default function GroupsPage() {
  // Mock data for groups
  const groups = [
    { 
      id: 1, 
      name: "Grupo de Oração - Segunda", 
      leader: "Maria Souza", 
      members: 15, 
      meetingDay: "Segunda-feira",
      meetingTime: "19:00"
    },
    { 
      id: 2, 
      name: "Célula Familiar - Centro", 
      leader: "João Silva", 
      members: 12, 
      meetingDay: "Quarta-feira",
      meetingTime: "20:00"
    },
    { 
      id: 3, 
      name: "Grupo de Jovens", 
      leader: "Carlos Oliveira", 
      members: 22, 
      meetingDay: "Sexta-feira",
      meetingTime: "18:30"
    },
    { 
      id: 4, 
      name: "Mulheres Virtuosas", 
      leader: "Ana Costa", 
      members: 18, 
      meetingDay: "Terça-feira",
      meetingTime: "19:30"
    },
    { 
      id: 5, 
      name: "Homens de Fé", 
      leader: "Pedro Santos", 
      members: 14, 
      meetingDay: "Quinta-feira",
      meetingTime: "20:00"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Grupos</h1>
          <p className="text-muted-foreground">
            Gerencie os grupos de conexão da igreja
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Grupo
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar grupos..."
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
              <TableHead>Grupo</TableHead>
              <TableHead>Líder</TableHead>
              <TableHead>Membros</TableHead>
              <TableHead>Dia da Reunião</TableHead>
              <TableHead>Horário</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((group) => (
              <TableRow key={group.id}>
                <TableCell className="font-medium">{group.name}</TableCell>
                <TableCell>{group.leader}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    {group.members}
                  </div>
                </TableCell>
                <TableCell>{group.meetingDay}</TableCell>
                <TableCell>{group.meetingTime}</TableCell>
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
          Mostrando 5 de 12 grupos
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Anterior</Button>
          <Button variant="outline" size="sm">Próximo</Button>
        </div>
      </div>
    </div>
  );
}