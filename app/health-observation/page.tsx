"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Thermometer,
  Heart,
  Droplet,
  Pill,
  Apple,
  Moon,
  Plus,
  AlertTriangle,
  Download,
  Mic,
  MessageSquare,
} from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HealthObservation() {
  const [temperature, setTemperature] = useState(37)
  const [bloodPressure, setBloodPressure] = useState("120/80")
  const [sugarLevel, setSugarLevel] = useState(100)
  const [medicationGiven, setMedicationGiven] = useState(false)
  const [meals, setMeals] = useState({ morning: false, afternoon: false, evening: false })
  const [waterIntake, setWaterIntake] = useState(0)
  const [waterUnit, setWaterUnit] = useState("glasses")
  const [sleepHours, setSleepHours] = useState(8)
  const [comments, setComments] = useState("")

  const healthStatus = "normal" // This would be determined by AI in a real application

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Health Observation 🏥</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="mr-2 h-5 w-5" />
            Daily Health Log
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="temperature" className="flex items-center">
                <Thermometer className="mr-2 h-4 w-4" />
                Temperature (°C)
              </Label>
              <Input
                id="temperature"
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="blood-pressure" className="flex items-center">
                <Heart className="mr-2 h-4 w-4" />
                Blood Pressure (mmHg)
              </Label>
              <Input id="blood-pressure" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="sugar-level" className="flex items-center">
                <Droplet className="mr-2 h-4 w-4" />
                Sugar Level (mg/dL)
              </Label>
              <Input
                id="sugar-level"
                type="number"
                value={sugarLevel}
                onChange={(e) => setSugarLevel(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Pill className="h-4 w-4" />
              <Label htmlFor="medication-given">Medication Given</Label>
              <Switch id="medication-given" checked={medicationGiven} onCheckedChange={setMedicationGiven} />
            </div>
            <div>
              <Label className="flex items-center">
                <Apple className="mr-2 h-4 w-4" />
                Meals
              </Label>
              <div className="flex space-x-2 mt-2">
                <div className="flex items-center">
                  <Checkbox
                    id="morning-meal"
                    checked={meals.morning}
                    onCheckedChange={(checked) => setMeals({ ...meals, morning: checked })}
                  />
                  <Label htmlFor="morning-meal" className="ml-2">
                    Morning
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="afternoon-meal"
                    checked={meals.afternoon}
                    onCheckedChange={(checked) => setMeals({ ...meals, afternoon: checked })}
                  />
                  <Label htmlFor="afternoon-meal" className="ml-2">
                    Afternoon
                  </Label>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="evening-meal"
                    checked={meals.evening}
                    onCheckedChange={(checked) => setMeals({ ...meals, evening: checked })}
                  />
                  <Label htmlFor="evening-meal" className="ml-2">
                    Evening
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <Label htmlFor="water-intake" className="flex items-center">
                <Droplet className="mr-2 h-4 w-4" />
                Water Intake
              </Label>
              <div className="flex items-center space-x-2 mt-2">
                <Input
                  id="water-intake"
                  type="number"
                  value={waterIntake}
                  onChange={(e) => setWaterIntake(Number(e.target.value))}
                  className="w-20"
                />
                <Select value={waterUnit} onValueChange={setWaterUnit}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="glasses">Glasses</SelectItem>
                    <SelectItem value="liters">Liters</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="sleep-hours" className="flex items-center">
                <Moon className="mr-2 h-4 w-4" />
                Sleep Hours
              </Label>
              <Input
                id="sleep-hours"
                type="number"
                value={sleepHours}
                onChange={(e) => setSleepHours(Number(e.target.value))}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="comments" className="flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" />
                Caregiver Comments
              </Label>
              <Textarea
                id="comments"
                placeholder="Enter any additional observations or notes here..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="mt-2"
              />
            </div>
          </div>
          <Button className="mt-6 w-full">Save Health Log</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            AI Health Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`p-4 rounded-md ${
              healthStatus === "normal" ? "bg-green-100" : healthStatus === "warning" ? "bg-yellow-100" : "bg-red-100"
            }`}
          >
            <p className="font-bold">
              {healthStatus === "normal" ? "Normal" : healthStatus === "warning" ? "Warning" : "Critical"}
            </p>
            <p>All vitals are within normal range.</p>
          </div>
          <Button className="mt-4 w-full" variant="outline">
            Set Reminder for Medication
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Download className="mr-2 h-5 w-5" />
            Trends & Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="weekly">
            <TabsList>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <TabsContent value="weekly">
              <p>Weekly trend graph would be displayed here.</p>
            </TabsContent>
            <TabsContent value="monthly">
              <p>Monthly trend graph would be displayed here.</p>
            </TabsContent>
          </Tabs>
          <Button className="mt-4 w-full">Download PDF Report</Button>
        </CardContent>
      </Card>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive" className="w-full">
            Report Critical Condition
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will immediately notify doctors and family members about a critical condition.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Yes, Report Now</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button className="w-full" variant="outline">
        <Mic className="mr-2 h-4 w-4" />
        Record Voice Update
      </Button>
    </div>
  )
}

