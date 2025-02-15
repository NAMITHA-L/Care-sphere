import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Utensils, Moon, FileText } from "lucide-react"

const patients = [
  { id: 1, name: "Arun", photo: "/placeholder.svg", priority: "high", lastActivity: "2 hours ago" },
  { id: 2, name: "Sourav Chatterjee", photo: "/placeholder.svg", priority: "medium", lastActivity: "1 hour ago" },
  { id: 3, name: "Meena", photo: "/placeholder.svg", priority: "low", lastActivity: "30 minutes ago" },
  { id: 4, name: "Rahul Sharma", photo: "/placeholder.svg", priority: "medium", lastActivity: "45 minutes ago" },
  { id: 5, name: "Ananya Gosh", photo: "/placeholder.svg", priority: "low", lastActivity: "1 hour ago" },
]

export default function PatientCards() {
  return (
    <div className="grid gap-6">
      {patients.map((patient) => (
        <Card key={patient.id} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="flex flex-row items-center space-x-4 pb-2">
            <img src={patient.photo || "/placeholder.svg"} alt={patient.name} className="w-12 h-12 rounded-full" />
            <div className="flex-1">
              <CardTitle className="text-lg">{patient.name}</CardTitle>
              <p className={`text-sm ${getPriorityColor(patient.priority)}`}>{patient.priority} priority</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <Utensils className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Moon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <FileText className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Last activity: {patient.lastActivity}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function getPriorityColor(priority: string) {
  switch (priority) {
    case "high":
      return "text-red-500"
    case "medium":
      return "text-yellow-500"
    case "low":
      return "text-green-500"
    default:
      return "text-gray-500"
  }
}

