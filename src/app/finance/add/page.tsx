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
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  ArrowLeft,
  Save
} from "lucide-react";

export default function AddTransactionPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    date: "",
    type: "income",
    category: "Dízimos",
    notes: ""
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
    router.push("/finance");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Adicionar Nova Transação</h1>
          <p className="text-muted-foreground">
            Preencha as informações da transação financeira
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informações da Transação</CardTitle>
            <CardDescription>
              Detalhes sobre a transação financeira
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Descrição da transação"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">Valor</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">Data</Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="type">Tipo</Label>
                <div className="relative">
                  {formData.type === "income" ? (
                    <TrendingUp className="absolute left-3 top-3 h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDown className="absolute left-3 top-3 h-4 w-4 text-red-500" />
                  )}
                  <Select name="type" value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
                    <SelectTrigger className="pl-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          Receita
                        </div>
                      </SelectItem>
                      <SelectItem value="expense">
                        <div className="flex items-center gap-2">
                          <TrendingDown className="h-4 w-4 text-red-500" />
                          Despesa
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Select name="category" value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dízimos">Dízimos</SelectItem>
                    <SelectItem value="Ofertas">Ofertas</SelectItem>
                    <SelectItem value="Ofertas Especiais">Ofertas Especiais</SelectItem>
                    <SelectItem value="Contas">Contas</SelectItem>
                    <SelectItem value="Salários">Salários</SelectItem>
                    <SelectItem value="Manutenção">Manutenção</SelectItem>
                    <SelectItem value="Materiais">Materiais</SelectItem>
                    <SelectItem value="Eventos">Eventos</SelectItem>
                    <SelectItem value="Missões">Missões</SelectItem>
                    <SelectItem value="Outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Observações</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Informações adicionais sobre a transação"
                rows={3}
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
            Salvar Transação
          </Button>
        </div>
      </form>
    </div>
  );
}