import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  DollarSign, 
  UserCheck, 
  Calendar, 
  User, 
  Heart, 
  BookOpen, 
  Target 
} from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface Activity {
  id: number
  name: string
  action: string
  time: Date
  type: "finance" | "member" | "event" | "profile" | "donation" | "ministry"
  avatar?: string
}

interface ActivityFeedProps {
  activities: Activity[]
  title?: string
  description?: string
}

export function ActivityFeed({ activities, title = "Atividades Recentes", description = "Últimas ações dos membros" }: ActivityFeedProps) {
  const getActivityIcon = (type: Activity["type"]) => {
    switch (type) {
      case "finance": return <DollarSign className="h-4 w-4" />
      case "member": return <UserCheck className="h-4 w-4" />
      case "event": return <Calendar className="h-4 w-4" />
      case "profile": return <User className="h-4 w-4" />
      case "donation": return <Heart className="h-4 w-4" />
      case "ministry": return <BookOpen className="h-4 w-4" />
      default: return <User className="h-4 w-4" />
    }
  }

  const getActivityColor = (type: Activity["type"]) => {
    switch (type) {
      case "finance": return "bg-green-100 text-green-600"
      case "member": return "bg-blue-100 text-blue-600"
      case "event": return "bg-purple-100 text-purple-600"
      case "profile": return "bg-gray-100 text-gray-600"
      case "donation": return "bg-pink-100 text-pink-600"
      case "ministry": return "bg-orange-100 text-orange-600"
      default: return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <Button variant="ghost" size="sm">Ver tudo</Button>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                {activity.avatar ? (
                  <AvatarImage src={activity.avatar} alt={activity.name} />
                ) : (
                  <AvatarFallback className={getActivityColor(activity.type)}>
                    {getActivityIcon(activity.type)}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  {activity.name} <span className="font-normal text-muted-foreground">{activity.action}</span>
                </p>
                <p className="text-xs text-muted-foreground">
                  {format(activity.time, "dd 'de' MMMM 'às' HH:mm", { locale: ptBR })}
                </p>
              </div>
              <Button variant="ghost" size="sm">Ver</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}