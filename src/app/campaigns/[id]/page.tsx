"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Target, 
  Users, 
  Calendar, 
  MapPin, 
  Edit, 
  Trash2, 
  ArrowLeft,
  UserPlus,
  DollarSign,
  TrendingUp,
  CalendarDays,
  CheckCircle
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Progress } from "@/components/ui/progress";

// Mock data for campaign details
const campaignData = {
  id: "1",
  name: "Campanha de Arrecadação - Natal",
  description: "Campanha especial para arrecadar recursos para ajudar famílias carentes durante o período natalino.",
  type: "Arrecadação",
  status: "Ativa",
  startDate: new Date("2023-11-01"),
  endDate: new Date("2023-12-24"),
  goal: 50000,
  raised: 32500,
  contributors: 85,
  location: "Igreja Central",
  coordinator: {
    id: "101",
    name: "Roberta Almeida",
    email: "roberta.almeida@church.com",
    phone: "(11) 97777-7777",
    avatar: "https://github.com/shadcn.png"
  },
  createdAt: new Date("2023-10-15"),
  contributorsList: [
    { id: "1", name: "Carlos Silva", amount: 500, date: new Date("2023-11-05"), avatar: "https://github.com/shadcn.png" },
    { id: "2", name: "Maria Santos", amount: 300, date: new Date("2023-11-08"), avatar: "https://github.com/shadcn.png" },
    { id: "3", name: "Pedro Costa", amount: 1000, date: new Date("2023-11-12"), avatar: "https://github.com/shadcn.png" },
    { id: "4", name: "Juliana Pereira", amount: 250, date: new Date("2023-11-15"), avatar: "https://github.com/shadcn.png" },
    { id: "5", name: "Roberto Lima", amount: 750, date: new Date("2023-11-20"), avatar: "https://github.com/shadcn.png" },
  ],
  milestones: [
    { id: "1", name: "Lançamento da Campanha", date: new Date("2023-11-01"), achieved: true },
    { id: "2", name: "Primeira Meta (R$10.000)", date: new Date("2023-11-15"), achieved: true },
    { id: "3", name: "Segunda Meta (R$25.000)", date: new Date("2023-11-30"), achieved: true },
    { id: "4", name: "Meta Final (R$50.000)", date: new Date("2023-12-20"), achieved: false },
  ]
};

export default function CampaignDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [campaign] = useState(campaignData);
  
  const progressPercentage = Math.round((campaign.raised / campaign.goal) * 100);
  
  const handleEdit = () => {
    console.log("Edit campaign");
  };
  
  const handleDelete = () => {
    console.log("Delete campaign");
  };
  
  const handleAddContributor = () => {
    console.log("Add contributor");
  };
  
  const handleSendReport = () => {
    console.log("Send report");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{campaign.name}</h1>
            <p className="text-muted-foreground">{campaign.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={campaign.status === "Ativa" ? "default" : "secondary"}>
            {campaign.status}
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
                Editar Campanha
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleAddContributor}>
                <UserPlus className="mr-2 h-4 w-4" />
                Adicionar Contribuinte
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSendReport}>
                <TrendingUp className="mr-2 h-4 w-4" />
                Enviar Relatório
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Campanha
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Informações da Campanha</CardTitle>
            <CardDescription>Detalhes sobre a campanha</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Target className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Tipo</p>
                <p className="text-sm text-muted-foreground">{campaign.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Período</p>
                <p className="text-sm text-muted-foreground">
                  {format(campaign.startDate, "dd/MM/yyyy")} - {format(campaign.endDate, "dd/MM/yyyy")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Local</p>
                <p className="text-sm text-muted-foreground">{campaign.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Contribuintes</p>
                <p className="text-sm text-muted-foreground">{campaign.contributors} pessoas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Coordenador</CardTitle>
            <CardDescription>Informações de contato</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={campaign.coordinator.avatar} alt={campaign.coordinator.name} />
                <AvatarFallback>{campaign.coordinator.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{campaign.coordinator.name}</p>
                <p className="text-sm text-muted-foreground">Coordenador da Campanha</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{campaign.coordinator.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Telefone</p>
                <p className="text-sm text-muted-foreground">{campaign.coordinator.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progresso da Campanha</CardTitle>
            <CardDescription>Arrecadação e metas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-3xl font-bold">R$ {campaign.raised.toLocaleString('pt-BR')}</p>
              <p className="text-sm text-muted-foreground">de R$ {campaign.goal.toLocaleString('pt-BR')} arrecadados</p>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg border">
                <p className="text-2xl font-bold">{progressPercentage}%</p>
                <p className="text-sm text-muted-foreground">Alcançado</p>
              </div>
              <div className="text-center p-3 rounded-lg border">
                <p className="text-2xl font-bold">R$ {(campaign.goal - campaign.raised).toLocaleString('pt-BR')}</p>
                <p className="text-sm text-muted-foreground">Faltando</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Principais Contribuintes</CardTitle>
            <CardDescription>Maiores doadores da campanha</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {campaign.contributorsList.map((contributor) => (
                <div key={contributor.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={contributor.avatar} alt={contributor.name} />
                      <AvatarFallback>{contributor.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{contributor.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {format(contributor.date, "dd/MM/yyyy")}
                      </p>
                    </div>
                  </div>
                  <p className="font-medium">R$ {contributor.amount.toLocaleString('pt-BR')}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marcos da Campanha</CardTitle>
            <CardDescription>Principais objetivos e metas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaign.milestones.map((milestone) => (
                <div key={milestone.id} className="flex items-start gap-3">
                  <div className={`mt-1 h-5 w-5 rounded-full flex items-center justify-center ${milestone.achieved ? 'bg-primary' : 'bg-muted'}`}>
                    {milestone.achieved ? (
                      <CheckCircle className="h-3 w-3 text-primary-foreground" />
                    ) : (
                      <div className="h-2 w-2 rounded-full bg-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${milestone.achieved ? '' : 'text-muted-foreground'}`}>
                      {milestone.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {format(milestone.date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                    </p>
                  </div>
                  <Badge variant={milestone.achieved ? "default" : "secondary"}>
                    {milestone.achieved ? "Alcançado" : "Pendente"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}