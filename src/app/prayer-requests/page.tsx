"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  Search, 
  Plus, 
  MoreHorizontal,
  Edit,
  Trash2,
  User,
  Calendar,
  Check
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function PrayerRequestsPage() {
  // Mock data for prayer requests
  const prayerRequests = [
    { 
      id: 1, 
      requester: "João Silva", 
      date: "01/09/2025", 
      request: "Por cura da minha esposa que está doente", 
      status: "Atendida",
      answered: true
    },
    { 
      id: 2, 
      requester: "Maria Souza", 
      date: "28/08/2025", 
      request: "Por proteção na viagem de trabalho", 
      status: "Em andamento",
      answered: false
    },
    { 
      id: 3, 
      requester: "Carlos Oliveira", 
      date: "25/08/2025", 
      request: "Por emprego para meu filho recém-formado", 
      status: "Atendida",
      answered: true
    },
    { 
      id: 4, 
      requester: "Ana Costa", 
      date: "20/08/2025", 
      request: "Por sabedoria nas decisões importantes", 
      status: "Em andamento",
      answered: false
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Pedidos de Oração</h1>
          <p className="text-muted-foreground">
            Gerencie os pedidos de oração da congregação
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Pedido
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar pedidos de oração..."
                className="pl-8"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Filtrar</Button>
              <Button variant="outline">Exportar</Button>
            </div>
          </div>

          <div className="border rounded-lg mt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pedido</TableHead>
                  <TableHead>Solicitante</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prayerRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium max-w-xs truncate">{request.request}</TableCell>
                    <TableCell>{request.requester}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        request.status === "Atendida" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {request.status}
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
                            <Check className="mr-2 h-4 w-4" />
                            Marcar como Atendido
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

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Mostrando 4 de 18 pedidos
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Anterior</Button>
              <Button variant="outline" size="sm">Próximo</Button>
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Adicionar Novo Pedido</CardTitle>
              <CardDescription>
                Registre um novo pedido de oração
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="requester">Nome do Solicitante</Label>
                <Input id="requester" placeholder="Nome completo" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="request">Pedido de Oração</Label>
                <Textarea id="request" placeholder="Descreva o pedido de oração..." />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch id="anonymous" />
                  <Label htmlFor="anonymous">Anônimo</Label>
                </div>
                <Button>
                  <Heart className="mr-2 h-4 w-4" />
                  Registrar Pedido
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Total de Pedidos</span>
                <span className="font-bold">18</span>
              </div>
              <div className="flex justify-between">
                <span>Atendidos</span>
                <span className="font-bold text-green-600">7</span>
              </div>
              <div className="flex justify-between">
                <span>Em Andamento</span>
                <span className="font-bold text-yellow-600">11</span>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Ver Histórico Completo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}