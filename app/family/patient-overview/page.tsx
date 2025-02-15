import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PatientOverview() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Patient Overview</h1>
      <Card>
        <CardHeader>
          <CardTitle>Arun Kumar</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Age: 75</p>
          <p>Condition: Hypertension, Diabetes</p>
          <p>Last Update: 2 hours ago</p>
        </CardContent>
      </Card>
      {/* Add more detailed patient information here */}
    </div>
  )
}

