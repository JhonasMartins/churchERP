"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  MapPin, 
  Edit, 
  Trash2, 
  ArrowLeft,
  UserPlus,
  UserMinus,
  Phone,
  Mail,
  Target,
  CalendarDays
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Mock data for ministry details
const ministryData = {
  id: "1",
  name: "Ministério de Louvor",
  description: "Responsável por liderar a congregação em adoração através de músicas, instrumentos e expressões artísticas que glorificam a Deus.",
  leader: {
    id: "101",
    name: "Maria Santos",
    email: "maria.santos@church.com",
    phone: "(11) 98888-8888",
    avatar: "https://github.com/shadcn.png"
  },
  category: "Adoração",
  status: "Ativo",
  members: 18,
  maxMembers: 25,
  meetingDay: "Sexta-feira",
  meetingTime: "20:00",
  location: "Sala de Música - 1º Andar",
  createdAt: new Date("2022-03-10"),
  nextMeeting: new Date("2023-06-09"),
  membersList: [
    { id: "1", name: "Maria Santos", role: "Líder", avatar: "https://github.com/shadcn.png" },
    { id: "2", name: "Pedro Almeida", role: "Vice-líder", avatar: "https://github.com/shadcn.png" },
    { id: "3", name: "Juliana Costa", role: "Vocal", avatar: "https://github.com/shadcn.png" },
    { id: "4", name: "Roberto Pereira", role: "Guitarra", avatar: "https://github.com/shadcn.png" },
    { id: "5", name: "Fernanda Lima", role: "Teclado", avatar: "https://github.com/shadcn.png" },
    { id: "6", name: "Carlos Oliveira", role: "Bateria", avatar: "https://github.com/shadcn.png" },
    { id: "7", name: "Ana Silva", role: "Baixo", avatar: "https://github.com/shadcn.png" },
    { id: "8", name: "Bruno Santos", role: "Vocal", avatar: "https://github.com/shadcn.png" },
  ],
  recentEvents: [
    { id: "1", name: "Culto de Domingo", date: new Date("2023-06-04"), attendance: 18 },
    { id: "2", name: "Ensaio Geral", date: new Date("2023-06-02"), attendance: 15 },
    { id: "3", name: "Culto de Domingo", date: new Date("2023-05-28"), attendance: 20 },
  ]
};

export default function MinistryDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [ministry] = useState(ministryData);
  
  const handleEdit = () => {
    console.log("Edit ministry");
  };
  
  const handleDelete = () => {
    console.log("Delete ministry");
  };
  
  const handleAddMember = () => {
    console.log("Add member");
  };
  
  const handleRemoveMember = (memberId: string) => {
    console.log("Remove member", memberId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{ministry.name}</h1>
            <p className="text-muted-foreground">{ministry.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={ministry.status === "Ativo" ? "default" : "secondary"}>
            {ministry.status}
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
                Editar Ministério
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleAddMember}>
                <UserPlus className="mr-2 h-4 w-4" />
                Adicionar Membro
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Ministério
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Informações do Ministério</CardTitle>
            <CardDescription>Detalhes sobre o ministério</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Categoria</p>
                <p className="text-sm text-muted-foreground">{ministry.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Dia do Ensaio</p>
                <p className="text-sm text-muted-foreground">{ministry.meetingDay} às {ministry.meetingTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Local</p>
                <p className="text-sm text-muted-foreground">{ministry.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Próximo Ensaio</p>
                <p className="text-sm text-muted-foreground">
                  {format(ministry.nextMeeting, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Líder do Ministério</CardTitle>
            <CardDescription>Informações de contato</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={ministry.leader.avatar} alt={ministry.leader.name} />
                <AvatarFallback>{ministry.leader.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{ministry.leader.name}</p>
                <p className="text-sm text-muted-foreground">Líder do Ministério</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{ministry.leader.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">{ministry.leader.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Membros</CardTitle>
            <CardDescription>Composição do ministério</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                {ministry.members} de {ministry.maxMembers} membros
              </p>
              <Button variant="outline" size="sm" onClick={handleAddMember}>
                <UserPlus className="mr-2 h-4 w-4" />
                Adicionar
              </Button>
            </div>
            <div className="space-y-3">
              {ministry.membersList.map((member) => (
                <div key={member.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{member.name}</p>
                      <p className="text-xs text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => handleRemoveMember(member.id)}
                  >
                    <UserMinus className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Eventos Recentes</CardTitle>
            <CardDescription>Participação do ministério em eventos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ministry.recentEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div>
                    <p className="font-medium">{event.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {format(event.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{event.attendance} participantes</p>
                    <Badge variant="outline">Realizado</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Metas e Objetivos</CardTitle>
            <CardDescription>Planejamento estratégico do ministério</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <p className="font-medium">Aumentar o repertório</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Adicionar 10 novas músicas ao repertório até o final do ano
                </p>
                <Badge variant="outline">Em andamento</Badge>
              </div>
              <div className="p-3 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <p className="font-medium">Formação de novos membros</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Treinar 3 novos membros para integrar o ministério
                </p>
                <Badge variant="outline">Pendente</Badge>
              </div>
              <div className="p-3 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <p className="font-medium">Retiro ministerial</p>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Organizar um retiro para o ministério em agosto
                </p>
                <Badge variant="outline">Planejado</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}