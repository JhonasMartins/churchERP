"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  User, 
  Star, 
  ArrowLeft,
  Save
} from "lucide-react";

export default function AddTestimonialPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    testimony: "",
    rating: 5,
    date: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your API
    router.push("/testimonials");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Adicionar Depoimento</h1>
          <p className="text-muted-foreground">
            Registre um novo depoimento
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações do Depoimento</CardTitle>
            <CardDescription>
              Compartilhe seu testemunho e experiência
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Data</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="testimony">Depoimento</Label>
              <div className="relative">
                <MessageCircle className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Textarea
                  id="testimony"
                  name="testimony"
                  value={formData.testimony}
                  onChange={handleInputChange}
                  placeholder="Compartilhe sua experiência e testemunho..."
                  className="pl-10"
                  rows={6}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Avaliação</Label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button 
                    key={star} 
                    variant="ghost" 
                    size="sm" 
                    className="p-1"
                    type="button"
                    onClick={() => handleRatingChange(star)}
                  >
                    <Star 
                      className={`h-8 w-8 ${star <= formData.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  </Button>
                ))}
                <span className="ml-2 self-center text-sm text-muted-foreground">
                  {formData.rating} de 5 estrelas
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2 mt-6">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancelar
          </Button>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Salvar Depoimento
          </Button>
        </div>
      </form>
    </div>
  );
}