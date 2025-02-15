import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Messages() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Messages</h1>
      <Card>
        <CardHeader>
          <CardTitle>Chat with Caregivers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-gray-100 p-2 rounded-lg">
              <p className="font-medium">Nurse Rajesh</p>
              <p>Arun had a good day today. All medications were taken on time.</p>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg">
              <p className="font-medium">You</p>
              <p>Thank you for the update. How was his appetite?</p>
            </div>
          </div>
          <div className="flex space-x-2 mt-4">
            <Input placeholder="Type your message..." />
            <Button>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

