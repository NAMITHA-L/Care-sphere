import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const patients = [
  { id: 1, name: "Arun", age: 72, condition: "Diabetes", status: "Resting" },
  { id: 2, name: "Sourav Chatterjee", age: 65, condition: "Hypertension", status: "Awake" },
  { id: 3, name: "Meena", age: 80, condition: "Arthritis", status: "Under Observation" },
  { id: 4, name: "Rahul Sharma", age: 70, condition: "COPD", status: "Resting" },
  { id: 5, name: "Ananya Gosh", age: 68, condition: "Alzheimer's", status: "Awake" },
]

export default function Patients() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Patient Directory</h1>

      <div className="flex space-x-2">
        <Input placeholder="Search patients..." className="max-w-sm" />
        <Button variant="secondary">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <Card key={patient.id}>
            <CardHeader>
              <CardTitle>{patient.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Age: {patient.age}</p>
              <p>Condition: {patient.condition}</p>
              <p>Status: {patient.status}</p>
              <Button className="mt-4">View Profile</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

