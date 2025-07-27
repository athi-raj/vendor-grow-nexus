import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, User, MessageSquare, DollarSign, Edit, Send, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VendorDashboardProps {
  onBack: () => void;
}

const VendorDashboard = ({ onBack }: VendorDashboardProps) => {
  const { toast } = useToast();
  const [budget, setBudget] = useState("5000");
  const [newMessage, setNewMessage] = useState("");
  
  // Mock data for messages
  const messages = [
    {
      id: 1,
      supplier: "Fresh Fruits Co.",
      message: "Interested in your bulk orange order. Can offer 15% discount for 500kg+",
      timestamp: "2 hours ago",
      status: "unread"
    },
    {
      id: 2,
      supplier: "Vegetable Mart",
      message: "Thank you for your inquiry. Our current rates are competitive.",
      timestamp: "1 day ago",
      status: "read"
    },
    {
      id: 3,
      supplier: "Spice Trading Hub",
      message: "We have the spices you requested in stock. Ready for immediate delivery.",
      timestamp: "2 days ago",
      status: "read"
    }
  ];

  // Mock profile data
  const [profileData, setProfileData] = useState({
    businessName: "Street Food Express",
    ownerName: "John Doe",
    email: "john@streetfood.com",
    phone: "+1 (555) 123-4567",
    address: "123 Market Street, City",
    businessType: "Food Vendor"
  });

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      toast({
        title: "Message Sent",
        description: "Your message has been sent to the supplier."
      });
      setNewMessage("");
    }
  };

  const handleProfileUpdate = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated."
    });
  };

  const handleBudgetUpdate = () => {
    toast({
      title: "Budget Updated",
      description: `Your monthly budget has been set to $${budget}.`
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center space-x-2">
              <User className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">Vendor Dashboard</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-muted-foreground">Welcome back, John</span>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="messages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="messages" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="budget" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Budget
            </TabsTrigger>
          </TabsList>

          <TabsContent value="messages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Messages from Suppliers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="border rounded-lg p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{message.supplier}</h4>
                      <div className="flex items-center gap-2">
                        {message.status === "unread" && (
                          <Badge variant="secondary">New</Badge>
                        )}
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {message.timestamp}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{message.message}</p>
                    <div className="flex gap-2 pt-2">
                      <Input
                        placeholder="Type your reply..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={handleSendMessage} size="sm">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input
                      id="businessName"
                      value={profileData.businessName}
                      onChange={(e) => setProfileData(prev => ({...prev, businessName: e.target.value}))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Owner Name</Label>
                    <Input
                      id="ownerName"
                      value={profileData.ownerName}
                      onChange={(e) => setProfileData(prev => ({...prev, ownerName: e.target.value}))}
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({...prev, email: e.target.value}))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData(prev => ({...prev, phone: e.target.value}))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Business Address</Label>
                  <Textarea
                    id="address"
                    value={profileData.address}
                    onChange={(e) => setProfileData(prev => ({...prev, address: e.target.value}))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Input
                    id="businessType"
                    value={profileData.businessType}
                    onChange={(e) => setProfileData(prev => ({...prev, businessType: e.target.value}))}
                  />
                </div>

                <Button onClick={handleProfileUpdate} className="w-full">
                  <Edit className="h-4 w-4 mr-2" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="budget" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Budget Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="monthlyBudget">Monthly Budget ($)</Label>
                  <Input
                    id="monthlyBudget"
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Enter your monthly budget"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-primary">${budget}</div>
                      <p className="text-xs text-muted-foreground">Monthly Budget</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-green-600">$2,340</div>
                      <p className="text-xs text-muted-foreground">Spent This Month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="text-2xl font-bold text-blue-600">$2,660</div>
                      <p className="text-xs text-muted-foreground">Remaining</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Recent Expenses</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Fresh Fruits Co. - Oranges</span>
                      <span className="font-semibold">$450</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Vegetable Mart - Mixed Vegetables</span>
                      <span className="font-semibold">$320</span>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded">
                      <span>Spice Trading Hub - Spices</span>
                      <span className="font-semibold">$180</span>
                    </div>
                  </div>
                </div>

                <Button onClick={handleBudgetUpdate} className="w-full">
                  Update Budget
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorDashboard;