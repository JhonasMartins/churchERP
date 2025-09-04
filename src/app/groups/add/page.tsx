"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Calendar, 
  MapPin, 
  User, 
  Users, 
  ArrowLeft,
  Save
} from "lucide-react";

export default function AddGroupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    leader: "",
    meetingDay: "",
    meetingTime: "",
    location: "",
    status: "Ativo",
    maxMembers: "30"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
    router.push("/groups");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Adicionar Novo Grupo</h1>
          <p className="text-muted-foreground">
            Preencha as informações do novo grupo
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações do Grupo</CardTitle>
            <CardDescription>
              Informações básicas sobre o grupo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Grupo</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Nome do grupo"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="leader">Líder do Grupo</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="leader"
                    name="leader"
                    value={formData.leader}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Nome do líder"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meetingDay">Dia da Reunião</Label>
                <Select name="meetingDay" value={formData.meetingDay} onValueChange={(value) => handleSelectChange("meetingDay", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um dia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Domingo">Domingo</SelectItem>
                    <SelectItem value="Segunda-feira">Segunda-feira</SelectItem>
                    <SelectItem value="Terça-feira">Terça-feira</SelectItem>
                    <SelectItem value="Quarta-feira">Quarta-feira</SelectItem>
                    <SelectItem value="Quinta-feira">Quinta-feira</SelectItem>
                    <SelectItem value="Sexta-feira">Sexta-feira</SelectItem>
                    <SelectItem value="Sábado">Sábado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="meetingTime">Horário da Reunião</Label>
                <Input
                  id="meetingTime"
                  name="meetingTime"
                  type="time"
                  value={formData.meetingTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Local da Reunião</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Onde o grupo se reúne"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="maxMembers">Capacidade Máxima</Label>
                <Input
                  id="maxMembers"
                  name="maxMembers"
                  type="number"
                  value={formData.maxMembers}
                  onChange={handleInputChange}
                  min="1"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select name="status" value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Inativo">Inativo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Descrição do propósito e atividades do grupo"
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2 mt-6">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancelar
          </Button>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Salvar Grupo
          </Button>
        </div>
      </form>
    </div>
  );
}