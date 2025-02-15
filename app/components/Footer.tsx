import { Button } from "@/components/ui/button"
import { FileText, Bell, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Reports
          </Button>
          <Button variant="ghost" className="flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Alerts
          </Button>
          <Button variant="ghost" className="flex items-center">
            <MessageSquare className="h-5 w-5 mr-2" />
            Chat
          </Button>
        </div>
      </div>
    </footer>
  )
}

