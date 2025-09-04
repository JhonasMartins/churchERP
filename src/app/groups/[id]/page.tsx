"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  Edit, 
  Trash2, 
  ArrowLeft,
  UserPlus,
  UserMinus,
  Phone,
  Mail,
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

// Mock data for group details
const groupData = {
  id: "1",
  name: "Grupo de Jovens",
  description: "Grupo dedicado ao fortalecimento da fé dos jovens através de estudos bíblicos, eventos sociais e atividades comunitárias.",
  leader: {
    id: "101",
    name: "Carlos Silva",
    email: "carlos.silva@church.com",
    phone: "(11) 99999-9999",
    avatar: "https://github.com/shadcn.png"
  },
  category: "Jovens",
  status: "Ativo",
  members: 24,
  maxMembers: 30,
  meetingDay: "Sábado",
  meetingTime: "19:00",
  location: "Sala de Jovens - 2º Andar",
  createdAt: new Date("2023-05-15"),
  nextMeeting: new Date("2023-06-10"),
  membersList: [
    { id: "1", name: "Ana Costa", role: "Líder", avatar: "https://github.com/shadcn.png" },
    { id: "2", name: "Bruno Almeida", role: "Vice-líder", avatar: "https://github.com/shadcn.png" },
    { id: "3", name: "Camila Santos", role: "Membro", avatar: "https://github.com/shadcn.png" },
    { id: "4", name: "Diego Pereira", role: "Membro", avatar: "https://github.com/shadcn.png" },
    { id: "5", name: "Eduarda Lima", role: "Membro", avatar: "https://github.com/shadcn.png" },
    { id: "6", name: "Felipe Oliveira", role: "Membro", avatar: "https://github.com/shadcn.png" },
  ]
};

export default function GroupDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [group] = useState(groupData);
  
  const handleEdit = () => {
    console.log("Edit group");
  };
  
  const handleDelete = () => {
    console.log("Delete group");
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
            <h1 className="text-2xl font-bold">{group.name}</h1>
            <p className="text-muted-foreground">{group.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={group.status === "Ativo" ? "default" : "secondary"}>
            {group.status}
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
                Editar Grupo
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleAddMember}>
                <UserPlus className="mr-2 h-4 w-4" />
                Adicionar Membro
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Grupo
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Informações do Grupo</CardTitle>
            <CardDescription>Detalhes sobre o grupo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Categoria</p>
                <p className="text-sm text-muted-foreground">{group.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Dia da Reunião</p>
                <p className="text-sm text-muted-foreground">{group.meetingDay} às {group.meetingTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Local</p>
                <p className="text-sm text-muted-foreground">{group.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Próxima Reunião</p>
                <p className="text-sm text-muted-foreground">
                  {format(group.nextMeeting, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Líder do Grupo</CardTitle>
            <CardDescription>Informações de contato</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={group.leader.avatar} alt={group.leader.name} />
                <AvatarFallback>{group.leader.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{group.leader.name}</p>
                <p className="text-sm text-muted-foreground">Líder do Grupo</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{group.leader.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">{group.leader.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Membros</CardTitle>
            <CardDescription>Composição do grupo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-muted-foreground">
                {group.members} de {group.maxMembers} membros
              </p>
              <Button variant="outline" size="sm" onClick={handleAddMember}>
                <UserPlus className="mr-2 h-4 w-4" />
                Adicionar
              </Button>
            </div>
            <div className="space-y-3">
              {group.membersList.map((member) => (
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

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Reuniões</CardTitle>
          <CardDescription>Últimas reuniões registradas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <p className="font-medium">Reunião #{item}</p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(Date.now() - item * 7 * 24 * 60 * 60 * 1000), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                  </p>
                </div>
                <Badge variant="outline">Realizada</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}