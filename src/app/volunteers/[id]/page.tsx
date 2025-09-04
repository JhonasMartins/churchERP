"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Edit, 
  Trash2, 
  ArrowLeft,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  Award
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mock data for volunteer details
const volunteerData = {
  id: "1",
  name: "Ana Costa",
  email: "ana.costa@email.com",
  phone: "(11) 97777-7777",
  avatar: "https://github.com/shadcn.png",
  status: "Ativo",
  role: "Voluntário",
  department: "Eventos",
  joinDate: new Date("2022-09-15"),
  lastActivity: new Date("2023-06-03"),
  skills: [
    "Organização de eventos",
    "Atendimento ao público",
    "Coordenação de equipes"
  ],
  availability: {
    weekdays: ["Segunda", "Quarta", "Sexta"],
    time: "18:00 - 22:00"
  },
  contactInfo: {
    address: "Av. Paulista, 1000",
    city: "São Paulo",
    state: "SP",
    zipCode: "01310-100"
  },
  assignedEvents: [
    { id: "1", name: "Culto de Domingo", date: new Date("2023-06-11"), role: "Recepção" },
    { id: "2", name: "Retiro de Jovens", date: new Date("2023-06-17"), role: "Coordenação" },
    { id: "3", name: "Feijoada Solidária", date: new Date("2023-06-25"), role: "Organização" },
  ],
  recognition: [
    { id: "1", title: "Voluntário do Mês", date: new Date("2023-05-01"), description: "Reconhecimento por dedicação excepcional" },
    { id: "2", title: "50 Horas de Serviço", date: new Date("2023-04-15"), description: "Comemoração por atingir 50 horas de voluntariado" },
  ],
  hours: {
    total: 120,
    month: 15,
    year: 85
  }
};

export default function VolunteerDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [volunteer] = useState(volunteerData);
  
  const handleEdit = () => {
    console.log("Edit volunteer");
  };
  
  const handleDelete = () => {
    console.log("Delete volunteer");
  };
  
  const handleAssignEvent = () => {
    console.log("Assign event");
  };
  
  const handleSendMessage = () => {
    console.log("Send message");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{volunteer.name}</h1>
            <p className="text-muted-foreground">{volunteer.role} - {volunteer.department}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={volunteer.status === "Ativo" ? "default" : "secondary"}>
            {volunteer.status}
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
                Editar Voluntário
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleAssignEvent}>
                <Users className="mr-2 h-4 w-4" />
                Atribuir Evento
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSendMessage}>
                <Mail className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Voluntário
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
            <CardDescription>Detalhes do voluntário</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-16 w-16">
                <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                <AvatarFallback>{volunteer.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xl font-bold">{volunteer.name}</p>
                <p className="text-sm text-muted-foreground">{volunteer.role}</p>
                <Badge className="mt-1">{volunteer.department}</Badge>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{volunteer.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">{volunteer.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Data de Adesão</p>
                <p className="text-sm text-muted-foreground">
                  {format(volunteer.joinDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disponibilidade</CardTitle>
            <CardDescription>Horários e dias disponíveis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Dias da Semana</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {volunteer.availability.weekdays.map((day, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {day}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Horário</p>
                <p className="text-sm text-muted-foreground">{volunteer.availability.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Última Atividade</p>
                <p className="text-sm text-muted-foreground">
                  {format(volunteer.lastActivity, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Horas de Voluntariado</CardTitle>
            <CardDescription>Registro de horas contribuídas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-lg border">
                <p className="text-2xl font-bold">{volunteer.hours.total}</p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="text-2xl font-bold">{volunteer.hours.month}</p>
                <p className="text-xs text-muted-foreground">Este mês</p>
              </div>
              <div className="p-3 rounded-lg border">
                <p className="text-2xl font-bold">{volunteer.hours.year}</p>
                <p className="text-xs text-muted-foreground">Este ano</p>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <p className="text-sm font-medium">Habilidades</p>
              <div className="flex flex-wrap gap-1">
                {volunteer.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Eventos Atribuídos</CardTitle>
            <CardDescription>Próximas atividades do voluntário</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {volunteer.assignedEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <p className="font-medium">{event.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">
                        {format(event.date, "dd/MM/yyyy")}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline">{event.role}</Badge>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" onClick={handleAssignEvent}>
              <Users className="mr-2 h-4 w-4" />
              Atribuir Novo Evento
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reconhecimentos</CardTitle>
            <CardDescription>Prêmios e reconhecimentos recebidos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {volunteer.recognition.map((rec) => (
                <div key={rec.id} className="flex items-start gap-3 p-3 rounded-lg border">
                  <Award className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium">{rec.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {rec.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {format(rec.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                    </p>
                  </div>
                </div>
              ))}
              {volunteer.recognition.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  Nenhum reconhecimento registrado
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}