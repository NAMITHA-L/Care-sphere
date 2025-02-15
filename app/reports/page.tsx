import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Download, Share } from "lucide-react"

const reports = [
  { id: 1, patient: "John Doe", type: "Sleep Pattern", date: "2023-05-15" },
  { id: 2, patient: "Jane Smith", type: "Meal Log", date: "2023-05-14" },
  { id: 3, patient: "Bob Johnson", type: "Medication Adherence", date: "2023-05-13" },
  { id: 4, patient: "Alice Williams", type: "Health Trend", date: "2023-05-12" },
  { id: 5, patient: "Charlie Brown", type: "Activity Log", date: "2023-05-11" },
]

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Patient Reports</h1>
        <Button>
          <BarChart className="mr-2 h-4 w-4" /> Create New Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <CardTitle>{report.patient}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Type: {report.type}</p>
              <p>Date: {report.date}</p>
              <div className="flex space-x-2 mt-4">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Export
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

