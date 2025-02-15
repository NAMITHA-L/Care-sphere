import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send } from "lucide-react"

const conversations = [
  { id: 1, name: "Dr. Sathya", role: "Doctor", lastMessage: "How is Arun's blood pressure today?" },
  { id: 2, name: "Johnson", role: "Family", lastMessage: "Has mom eaten her lunch?" },
  { id: 3, name: "Dr. Sharma", role: "Doctor", lastMessage: "Please send me Ananya's latest health report." },
  { id: 4, name: "Rahul ", role: "Family", lastMessage: "Is dad comfortable? Does he need anything?" },
  { id: 5, name: "Dr. Ganesh", role: "Doctor", lastMessage: "Please update me on Meena's medication adherence." },
]

export default function Communication() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Family & Physician Communication</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {conversations.map((conversation) => (
                <li key={conversation.id} className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">
                      {conversation.name} ({conversation.role})
                    </p>
                    <p className="text-sm text-gray-500">{conversation.lastMessage}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Chat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-100 p-2 rounded-lg">
                <p className="font-medium">AI Assistant</p>
                <p>Hello! How can I assist you today?</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <p className="font-medium">You</p>
                <p>Has John eaten his lunch today?</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-lg">
                <p className="font-medium">AI Assistant</p>
                <p>Yes, John had his lunch at 12:30 PM today. He ate a balanced meal as per his dietary plan.</p>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <Input placeholder="Type your message..." />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

