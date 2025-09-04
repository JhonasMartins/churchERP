import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, UserCheck, MapPin } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface Event {
  id: number
  name: string
  date: Date
  time: string
  attendees: number
  location?: string
}

interface UpcomingEventsProps {
  events: Event[]
  title?: string
  description?: string
}

export function UpcomingEvents({ events, title = "Próximos Eventos", description = "Agenda da igreja" }: UpcomingEventsProps) {
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
          {events.map((event) => (
            <div key={event.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="p-2 rounded-full bg-primary/10 mt-1">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{event.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    {format(event.date, "dd 'de' MMMM", { locale: ptBR })} às {event.time}
                  </p>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">
                      {event.location}
                    </p>
                  </div>
                )}
                <div className="flex items-center gap-2 mt-1">
                  <UserCheck className="h-3 w-3 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">
                    {event.attendees} participantes
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Ver</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}