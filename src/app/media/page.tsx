"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Play, 
  Image, 
  FileText, 
  Search, 
  Upload, 
  MoreHorizontal,
  Edit,
  Trash2,
  Download
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

export default function MediaPage() {
  // Mock data for media files
  const mediaFiles = [
    { 
      id: 1, 
      name: "Culto de Domingo - 01/09/2025", 
      type: "video", 
      size: "1.2 GB", 
      date: "01/09/2025",
      duration: "1h 35m"
    },
    { 
      id: 2, 
      name: "Logo da Igreja", 
      type: "image", 
      size: "2.4 MB", 
      date: "28/08/2025",
      dimensions: "1920x1080"
    },
    { 
      id: 3, 
      name: "Boletim Informativo - Setembro", 
      type: "document", 
      size: "4.1 MB", 
      date: "25/08/2025",
      pages: "4"
    },
    { 
      id: 4, 
      name: "Palestra sobre Finanças", 
      type: "audio", 
      size: "85 MB", 
      date: "20/08/2025",
      duration: "45m 30s"
    },
    { 
      id: 5, 
      name: "Fotos do Batismo", 
      type: "image", 
      size: "15.7 MB", 
      date: "15/08/2025",
      dimensions: "4K"
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video": return <Play className="h-4 w-4 text-red-500" />;
      case "image": return <Image className="h-4 w-4 text-green-500" />;
      case "document": return <FileText className="h-4 w-4 text-blue-500" />;
      case "audio": return <Play className="h-4 w-4 text-purple-500" />;
      default: return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "video": return "Vídeo";
      case "image": return "Imagem";
      case "document": return "Documento";
      case "audio": return "Áudio";
      default: return "Arquivo";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Mídia</h1>
          <p className="text-muted-foreground">
            Gerencie os arquivos de mídia da igreja
          </p>
        </div>
        <Button>
          <Upload className="mr-2 h-4 w-4" />
          Enviar Arquivo
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar arquivos de mídia..."
            className="pl-8"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Filtrar</Button>
          <Button variant="outline">Exportar</Button>
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Tamanho</TableHead>
              <TableHead>Data</TableHead>
              <TableHead>Detalhes</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mediaFiles.map((file) => (
              <TableRow key={file.id}>
                <TableCell className="font-medium">{file.name}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {getTypeIcon(file.type)}
                    {getTypeLabel(file.type)}
                  </div>
                </TableCell>
                <TableCell>{file.size}</TableCell>
                <TableCell>{file.date}</TableCell>
                <TableCell>
                  {file.duration && `Duração: ${file.duration}`}
                  {file.dimensions && `Dimensões: ${file.dimensions}`}
                  {file.pages && `Páginas: ${file.pages}`}
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
                        <Download className="mr-2 h-4 w-4" />
                        Baixar
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Editar
                      </DropdownMenuItem>
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

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Mostrando 5 de 24 arquivos
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Anterior</Button>
          <Button variant="outline" size="sm">Próximo</Button>
        </div>
      </div>
    </div>
  );
}