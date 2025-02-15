import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function Schedule() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Schedule</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Today's Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>9:00 AM - Morning Medication</li>
            <li>11:00 AM - Physical Therapy Session</li>
            <li>2:00 PM - Doctor's Appointment</li>
          </ul>
        </CardContent>
      </Card>
      {/* Add a full calendar component here */}
    </div>
  )
}

