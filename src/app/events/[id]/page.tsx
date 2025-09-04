"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Edit, 
  Trash2, 
  ArrowLeft,
  UserPlus,
  UserCheck,
  Users,
  CalendarDays,
  FileText,
  Bell
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mock data for event details
const eventData = {
  id: "1",
  title: "Culto de Domingo",
  description: "Culto principal da igreja com louvores, mensagem e comunhão.",
  type: "Culto",
  status: "Confirmado",
  startDate: new Date("2023-06-11T09:00:00"),
  endDate: new Date("2023-06-11T11:00:00"),
  location: "Templo Principal",
  organizer: {
    id: "101",
    name: "Pr. João Silva",
    email: "pastor.joao@church.com",
    phone: "(11) 99999-9999",
    avatar: "https://github.com/shadcn.png"
  },
  attendees: 120,
  maxAttendees: 200,
  registered: 85,
  waitingList: 5,
  createdAt: new Date("2023-05-20"),
  reminders: [
    { id: "1", daysBefore: 7, sent: true },
    { id: "2", daysBefore: 1, sent: false },
    { id: "3", hoursBefore: 2, sent: false }
  ],
  attendeesList: [
    { id: "1", name: "Ana Costa", email: "ana@church.com", status: "Confirmado", avatar: "https://github.com/shadcn.png" },
    { id: "2", name: "Bruno Almeida", email: "bruno@church.com", status: "Confirmado", avatar: "https://github.com/shadcn.png" },
    { id: "3", name: "Camila Santos", email: "camila@church.com", status: "Pendente", avatar: "https://github.com/shadcn.png" },
    { id: "4", name: "Diego Pereira", email: "diego@church.com", status: "Confirmado", avatar: "https://github.com/shadcn.png" },
    { id: "5", name: "Eduarda Lima", email: "eduarda@church.com", status: "Lista de Espera", avatar: "https://github.com/shadcn.png" },
  ]
};

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [event] = useState(eventData);
  
  const handleEdit = () => {
    console.log("Edit event");
  };
  
  const handleDelete = () => {
    console.log("Delete event");
  };
  
  const handleSendReminder = () => {
    console.log("Send reminder");
  };
  
  const handleCheckIn = (attendeeId: string) => {
    console.log("Check in attendee", attendeeId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{event.title}</h1>
            <p className="text-muted-foreground">{event.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={event.status === "Confirmado" ? "default" : "secondary"}>
            {event.status}
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Edit className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleEdit}>
                <Edit className="mr-2 h-4 w-4" />
                Editar Evento
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSendReminder}>
                <Bell className="mr-2 h-4 w-4" />
                Enviar Lembrete
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Evento
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Informações do Evento</CardTitle>
            <CardDescription>Detalhes sobre o evento</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Tipo</p>
                <p className="text-sm text-muted-foreground">{event.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Data e Hora</p>
                <p className="text-sm text-muted-foreground">
                  {format(event.startDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })} às {format(event.startDate, "HH:mm")}
                </p>
                <p className="text-sm text-muted-foreground">
                  até {format(event.endDate, "HH:mm")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Local</p>
                <p className="text-sm text-muted-foreground">{event.location}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Organizador</CardTitle>
            <CardDescription>Informações de contato</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={event.organizer.avatar} alt={event.organizer.name} />
                <AvatarFallback>{event.organizer.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{event.organizer.name}</p>
                <p className="text-sm text-muted-foreground">Organizador</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{event.organizer.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">{event.organizer.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Participação</CardTitle>
            <CardDescription>Inscrições e presença</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg border">
                <p className="text-2xl font-bold">{event.attendees}</p>
                <p className="text-sm text-muted-foreground">Presentes</p>
              </div>
              <div className="text-center p-3 rounded-lg border">
                <p className="text-2xl font-bold">{event.registered}</p>
                <p className="text-sm text-muted-foreground">Inscritos</p>
              </div>
              <div className="text-center p-3 rounded-lg border">
                <p className="text-2xl font-bold">{event.maxAttendees}</p>
                <p className="text-sm text-muted-foreground">Capacidade</p>
              </div>
              <div className="text-center p-3 rounded-lg border">
                <p className="text-2xl font-bold">{event.waitingList}</p>
                <p className="text-sm text-muted-foreground">Lista de Espera</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Participantes</CardTitle>
            <CardDescription>Lista de inscritos no evento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {event.attendeesList.map((attendee) => (
                <div key={attendee.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={attendee.avatar} alt={attendee.name} />
                      <AvatarFallback>{attendee.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{attendee.name}</p>
                      <p className="text-xs text-muted-foreground">{attendee.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={
                        attendee.status === "Confirmado" ? "default" : 
                        attendee.status === "Lista de Espera" ? "secondary" : "outline"
                      }
                    >
                      {attendee.status}
                    </Badge>
                    {attendee.status === "Confirmado" ? (
                      <Button variant="ghost" size="icon" onClick={() => handleCheckIn(attendee.id)}>
                        <UserCheck className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button variant="ghost" size="icon" disabled>
                        <UserCheck className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lembretes</CardTitle>
            <CardDescription>Configuração de notificações automáticas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {event.reminders.map((reminder) => (
                <div key={reminder.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <p className="text-sm font-medium">
                      {reminder.daysBefore ? `${reminder.daysBefore} dias antes` : `${reminder.hoursBefore} horas antes`}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {reminder.sent ? "Enviado" : "Pendente"}
                    </p>
                  </div>
                  <Button 
                    variant={reminder.sent ? "outline" : "default"} 
                    size="sm"
                    onClick={handleSendReminder}
                    disabled={reminder.sent}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    {reminder.sent ? "Reenviar" : "Enviar"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}