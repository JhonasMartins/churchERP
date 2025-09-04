"use client";

import { useState } from "react";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mock data for events
const events = [
  {
    id: 1,
    title: "Culto de Domingo",
    date: new Date(2025, 8, 7),
    time: "18:00",
    location: "Templo Principal",
    attendees: 120,
    type: "culto"
  },
  {
    id: 2,
    title: "Reunião de Líderes",
    date: new Date(2025, 8, 9),
    time: "19:30",
    location: "Sala de Reuniões",
    attendees: 25,
    type: "reuniao"
  },
  {
    id: 3,
    title: "Batismo",
    date: new Date(2025, 8, 12),
    time: "17:00",
    location: "Piscina de Batismo",
    attendees: 8,
    type: "evento"
  },
  {
    id: 4,
    title: "Culto de Oração",
    date: new Date(2025, 8, 14),
    time: "20:00",
    location: "Sala de Oração",
    attendees: 45,
    type: "culto"
  },
  {
    id: 5,
    title: "Aula de Discipulado",
    date: new Date(2025, 8, 16),
    time: "19:00",
    location: "Sala 3",
    attendees: 30,
    type: "aula"
  },
  {
    id: 6,
    title: "Ensaio do Ministério de Louvor",
    date: new Date(2025, 8, 18),
    time: "19:30",
    location: "Auditório",
    attendees: 15,
    type: "ensaio"
  },
  {
    id: 7,
    title: "Culto de Domingo",
    date: new Date(2025, 8, 14),
    time: "18:00",
    location: "Templo Principal",
    attendees: 120,
    type: "culto"
  },
];

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  
  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(event.date, date));
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case "culto": return "bg-blue-500";
      case "reuniao": return "bg-green-500";
      case "evento": return "bg-purple-500";
      case "aula": return "bg-yellow-500";
      case "ensaio": return "bg-pink-500";
      default: return "bg-gray-500";
    }
  };
  
  const getTypeLabel = (type: string) => {
    switch (type) {
      case "culto": return "Culto";
      case "reuniao": return "Reunião";
      case "evento": return "Evento";
      case "aula": return "Aula";
      case "ensaio": return "Ensaio";
      default: return "Outro";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendário</h1>
          <p className="text-muted-foreground">
            Gerencie eventos e programações da igreja
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Novo Evento
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" onClick={prevMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h2 className="text-xl font-bold">
                    {format(currentDate, "MMMM yyyy", { locale: ptBR })}
                  </h2>
                  <Button variant="outline" size="icon" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar eventos..."
                    className="pl-8"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                {daysInMonth.map((day, index) => {
                  const dayEvents = getEventsForDate(day);
                  const isCurrentMonth = isSameMonth(day, currentDate);
                  const isSelected = isSameDay(day, selectedDate);
                  
                  return (
                    <div
                      key={index}
                      className={`min-h-24 p-1 border rounded-lg ${
                        !isCurrentMonth ? "bg-muted/30 text-muted-foreground" : "bg-background"
                      } ${isSelected ? "ring-2 ring-primary" : ""}`}
                      onClick={() => setSelectedDate(day)}
                    >
                      <div className="text-right p-1">
                        <span className={`inline-block w-6 h-6 text-center rounded-full ${
                          isSelected ? "bg-primary text-primary-foreground" : ""
                        }`}>
                          {format(day, "d")}
                        </span>
                      </div>
                      <div className="space-y-1 mt-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`text-xs p-1 rounded truncate ${getTypeColor(event.type)} text-white`}
                          >
                            <span className="font-medium">{event.time}</span> {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-muted-foreground p-1">
                            +{dayEvents.length - 2} mais
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:w-1/3 space-y-4">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>
                Eventos em {format(selectedDate, "dd 'de' MMMM", { locale: ptBR })}
              </CardTitle>
              <CardDescription>
                {getEventsForDate(selectedDate).length} eventos programados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {getEventsForDate(selectedDate).length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Calendar className="h-12 w-12 mx-auto mb-2" />
                  <p>Nenhum evento programado para esta data</p>
                </div>
              ) : (
                getEventsForDate(selectedDate).map((event) => (
                  <div key={event.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{event.title}</h3>
                      <Badge className={getTypeColor(event.type)}>
                        {getTypeLabel(event.type)}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} participantes</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        Editar
                      </Button>
                      <Button variant="outline" size="sm">
                        Ver
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader>
              <CardTitle>Tipos de Eventos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm">Cultos</span>
                </div>
                <span className="text-sm font-medium">12</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm">Reuniões</span>
                </div>
                <span className="text-sm font-medium">8</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm">Eventos</span>
                </div>
                <span className="text-sm font-medium">5</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm">Aulas</span>
                </div>
                <span className="text-sm font-medium">7</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                  <span className="text-sm">Ensaios</span>
                </div>
                <span className="text-sm font-medium">4</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}