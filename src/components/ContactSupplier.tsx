import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Send, Phone, Mail, MessageCircle, Package, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactSupplierProps {
  supplier: {
    id: number;
    name: string;
    phone: string;
    email: string;
    category: string;
  };
  onBack: () => void;
}

const ContactSupplier = ({ supplier, onBack }: ContactSupplierProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    inquiryType: "",
    productDetails: "",
    quantity: "",
    budget: "",
    deliveryDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show success message
    toast({
      title: "Message Sent Successfully!",
      description: `Your inquiry has been sent to ${supplier.name}. They will contact you within 24 hours.`
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessName: "",
      inquiryType: "",
      productDetails: "",
      quantity: "",
      budget: "",
      deliveryDate: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container max-w-4xl mx-auto px-4 h-16 flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-xl font-semibold">Contact Supplier</h1>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Send Inquiry to {supplier.name}
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below to get a personalized quote and connect with this supplier.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Your Information</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="businessName">Business Name</Label>
                        <Input
                          id="businessName"
                          placeholder="Your business name"
                          value={formData.businessName}
                          onChange={(e) => handleInputChange('businessName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Inquiry Details</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select onValueChange={(value) => handleInputChange('inquiryType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="price-quote">Price Quote</SelectItem>
                            <SelectItem value="product-info">Product Information</SelectItem>
                            <SelectItem value="bulk-order">Bulk Order</SelectItem>
                            <SelectItem value="group-buying">Group Buying</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-100">Under $100</SelectItem>
                            <SelectItem value="100-500">$100 - $500</SelectItem>
                            <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                            <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                            <SelectItem value="over-5000">Over $5,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Estimated Quantity</Label>
                        <Input
                          id="quantity"
                          placeholder="e.g., 100 units, 50 kg, etc."
                          value={formData.quantity}
                          onChange={(e) => handleInputChange('quantity', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="deliveryDate">Required by Date</Label>
                        <Input
                          id="deliveryDate"
                          type="date"
                          value={formData.deliveryDate}
                          onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="productDetails">Product Details</Label>
                      <Input
                        id="productDetails"
                        placeholder="Specific products or materials you need"
                        value={formData.productDetails}
                        onChange={(e) => handleInputChange('productDetails', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide more details about your requirements, any specific questions, or additional information..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={5}
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Supplier Info Sidebar */}
          <div className="space-y-6">
            {/* Supplier Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Supplier Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{supplier.name}</h3>
                  <Badge variant="secondary" className="mt-1">
                    {supplier.category}
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span className="text-sm">{supplier.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                    <span className="text-sm">{supplier.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Tips for Better Quotes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start">
                  <DollarSign className="h-4 w-4 mr-2 mt-0.5 text-green-600" />
                  <span>Provide specific quantities for accurate pricing</span>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="h-4 w-4 mr-2 mt-0.5 text-blue-600" />
                  <span>Mention if you're interested in group buying</span>
                </div>
                <div className="flex items-start">
                  <Package className="h-4 w-4 mr-2 mt-0.5 text-orange-600" />
                  <span>Be clear about product specifications</span>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24 hrs</div>
                  <p className="text-sm text-muted-foreground">Average response time</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupplier;