"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  Search, 
  Plus, 
  MoreHorizontal,
  Edit,
  Trash2,
  User,
  Star,
  ThumbsUp
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

export default function TestimonialsPage() {
  // Mock data for testimonials
  const testimonials = [
    { 
      id: 1, 
      name: "João Silva", 
      date: "01/09/2025", 
      testimony: "Graças a Deus encontrei paz e propósito nesta igreja. A comunidade é acolhedora e o ensino é transformador.", 
      rating: 5,
      approved: true
    },
    { 
      id: 2, 
      name: "Maria Souza", 
      date: "28/08/2025", 
      testimony: "O ministério de louvor toca meu coração a cada culto. Sinto a presença de Deus de forma especial.", 
      rating: 4,
      approved: true
    },
    { 
      id: 3, 
      name: "Carlos Oliveira", 
      date: "25/08/2025", 
      testimony: "Através do grupo de oração, recebi cura emocional. Deus é fiel!", 
      rating: 5,
      approved: false
    },
    { 
      id: 4, 
      name: "Ana Costa", 
      date: "20/08/2025", 
      testimony: "O ensino bíblico me ajudou a entender melhor a vontade de Deus para minha vida.", 
      rating: 5,
      approved: true
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Depoimentos</h1>
          <p className="text-muted-foreground">
            Gerencie os depoimentos da congregação
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Depoimento
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar depoimentos..."
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
                  <TableHead>Depoimento</TableHead>
                  <TableHead>Autor</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Avaliação</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testimonials.map((testimonial) => (
                  <TableRow key={testimonial.id}>
                    <TableCell className="font-medium max-w-xs truncate">{testimonial.testimony}</TableCell>
                    <TableCell>{testimonial.name}</TableCell>
                    <TableCell>{testimonial.date}</TableCell>
                    <TableCell>{renderStars(testimonial.rating)}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        testimonial.approved 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {testimonial.approved ? "Aprovado" : "Pendente"}
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
                          {testimonial.approved ? (
                            <DropdownMenuItem>
                              <ThumbsUp className="mr-2 h-4 w-4" />
                              Desaprovar
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              <ThumbsUp className="mr-2 h-4 w-4" />
                              Aprovar
                            </DropdownMenuItem>
                          )}
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
              Mostrando 4 de 15 depoimentos
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
              <CardTitle>Adicionar Novo Depoimento</CardTitle>
              <CardDescription>
                Registre um novo depoimento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" placeholder="Nome completo" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="testimony">Depoimento</Label>
                <Textarea id="testimony" placeholder="Compartilhe seu testemunho..." rows={4} />
              </div>
              
              <div className="space-y-2">
                <Label>Avaliação</Label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Button key={star} variant="ghost" size="sm" className="p-1">
                      <Star className="h-6 w-6 text-gray-300 hover:text-yellow-400" />
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <Button className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Registrar Depoimento
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
                <span>Total de Depoimentos</span>
                <span className="font-bold">15</span>
              </div>
              <div className="flex justify-between">
                <span>Aprovados</span>
                <span className="font-bold text-green-600">10</span>
              </div>
              <div className="flex justify-between">
                <span>Pendentes</span>
                <span className="font-bold text-yellow-600">5</span>
              </div>
              <div className="flex justify-between">
                <span>Média de Avaliação</span>
                <span className="font-bold">4.6</span>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  <Star className="mr-2 h-4 w-4" />
                  Ver Avaliações
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}