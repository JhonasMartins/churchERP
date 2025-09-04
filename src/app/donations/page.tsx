"use client";

import { useState } from "react";
import { 
  Heart, 
  DollarSign, 
  Calendar, 
  User, 
  Search, 
  Filter,
  Plus,
  TrendingUp,
  TrendingDown
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
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mock data for donations
const donations = [
  {
    id: 1,
    donor: "João Silva",
    amount: 150.00,
    date: new Date(2025, 8, 10),
    method: "Transferência",
    type: "Dízimo",
    status: "Confirmado"
  },
  {
    id: 2,
    donor: "Maria Souza",
    amount: 75.00,
    date: new Date(2025, 8, 9),
    method: "Dinheiro",
    type: "Oferta",
    status: "Confirmado"
  },
  {
    id: 3,
    donor: "Carlos Oliveira",
    amount: 200.00,
    date: new Date(2025, 8, 8),
    method: "Cartão",
    type: "Dízimo",
    status: "Confirmado"
  },
  {
    id: 4,
    donor: "Ana Costa",
    amount: 50.00,
    date: new Date(2025, 8, 7),
    method: "Transferência",
    type: "Oferta Especial",
    status: "Confirmado"
  },
  {
    id: 5,
    donor: "Pedro Santos",
    amount: 100.00,
    date: new Date(2025, 8, 6),
    method: "Dinheiro",
    type: "Dízimo",
    status: "Confirmado"
  },
  {
    id: 6,
    donor: "Fernanda Lima",
    amount: 30.00,
    date: new Date(2025, 8, 5),
    method: "Transferência",
    type: "Oferta",
    status: "Pendente"
  },
  {
    id: 7,
    donor: "Ricardo Almeida",
    amount: 120.00,
    date: new Date(2025, 8, 4),
    method: "Cartão",
    type: "Dízimo",
    status: "Confirmado"
  },
  {
    id: 8,
    donor: "Juliana Rocha",
    amount: 80.00,
    date: new Date(2025, 8, 3),
    method: "Dinheiro",
    type: "Oferta Especial",
    status: "Confirmado"
  },
];

const summaryData = {
  totalThisMonth: 1250.00,
  totalLastMonth: 1100.00,
  pending: 30.00,
  confirmed: 1220.00
};

export default function DonationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredDonations = donations.filter(donation => 
    donation.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donation.type.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Confirmado": return "default";
      case "Pendente": return "secondary";
      default: return "outline";
    }
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Dízimo": return "bg-blue-100 text-blue-800";
      case "Oferta": return "bg-green-100 text-green-800";
      case "Oferta Especial": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Doações</h1>
          <p className="text-muted-foreground">
            Gerencie dízimos, ofertas e doações
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Doação
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Este Mês</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {summaryData.totalThisMonth.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              {summaryData.totalThisMonth >= summaryData.totalLastMonth ? (
                <>
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  +{(((summaryData.totalThisMonth - summaryData.totalLastMonth) / summaryData.totalLastMonth) * 100).toFixed(1)}%
                </>
              ) : (
                <>
                  <TrendingDown className="h-3 w-3 text-red-500" />
                  -{(((summaryData.totalLastMonth - summaryData.totalThisMonth) / summaryData.totalLastMonth) * 100).toFixed(1)}%
                </>
              )}
              em relação ao mês anterior
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Confirmadas</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {summaryData.confirmed.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              Doações confirmadas
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              R$ {summaryData.pending.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <p className="text-xs text-muted-foreground">
              Aguardando confirmação
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Doações</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{donations.length}</div>
            <p className="text-xs text-muted-foreground">
              Doações registradas
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Histórico de Doações</CardTitle>
              <CardDescription>
                Lista de todas as doações recebidas
              </CardDescription>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar doações..."
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
                <TableHead>Doador</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Método</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDonations.map((donation) => (
                <TableRow key={donation.id}>
                  <TableCell className="font-medium">{donation.donor}</TableCell>
                  <TableCell>
                    <span className="font-bold">
                      R$ {donation.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </TableCell>
                  <TableCell>
                    {format(donation.date, "dd/MM/yyyy", { locale: ptBR })}
                  </TableCell>
                  <TableCell>
                    <Badge className={getTypeColor(donation.type)}>
                      {donation.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{donation.method}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(donation.status)}>
                      {donation.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          Ações
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                        <DropdownMenuItem>Editar</DropdownMenuItem>
                        <DropdownMenuItem>Imprimir recibo</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Excluir
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