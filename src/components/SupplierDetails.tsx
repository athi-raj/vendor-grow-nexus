import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Star, MapPin, DollarSign, Users, Truck, Clock, Shield, Phone, Mail, MessageCircle } from "lucide-react";
import ContactSupplier from "./ContactSupplier";

interface SupplierDetailsProps {
  supplierId: number;
  onBack: () => void;
}

// Mock detailed supplier data
const getSupplierDetails = (id: number) => {
  const baseSuppliers = [
    {
      id: 1,
      name: "Fresh Harvest Distributors",
      category: "Food & Beverages",
      location: "Downtown Market District",
      rating: 4.8,
      reviews: 156,
      minOrder: "$50",
      bulkDiscount: "15% off orders over $500",
      delivery: "Same day delivery",
      description: "Premium quality fruits and vegetables at wholesale prices",
      verified: true,
      groupBuying: true,
      phone: "+1 (555) 123-4567",
      email: "orders@freshharvest.com",
      address: "123 Market Street, Downtown District, City 12345",
      businessHours: "Monday - Saturday: 6:00 AM - 6:00 PM",
      yearEstablished: 2015,
      specialties: ["Organic Produce", "Seasonal Fruits", "Fresh Vegetables", "Herbs & Spices"],
      certifications: ["Organic Certified", "FDA Approved", "Local Health Dept"],
      paymentMethods: ["Cash", "Bank Transfer", "Mobile Payment", "Credit Card"],
      deliveryAreas: ["Downtown", "Central District", "North Side", "South Bay"],
      about: "Fresh Harvest Distributors has been serving local vendors with the highest quality produce for over 8 years. We source directly from local farms and ensure freshness through our cold-chain distribution system.",
      policies: {
        returns: "24-hour return policy for damaged goods",
        cancellation: "Orders can be cancelled up to 2 hours before delivery",
        warranty: "Quality guarantee on all fresh produce"
      }
    }
    // Add more detailed supplier data as needed
  ];

  return baseSuppliers.find(s => s.id === id) || baseSuppliers[0];
};

const SupplierDetails = ({ supplierId, onBack }: SupplierDetailsProps) => {
  const [showContact, setShowContact] = useState(false);
  const supplier = getSupplierDetails(supplierId);

  if (showContact) {
    return (
      <ContactSupplier 
        supplier={supplier} 
        onBack={() => setShowContact(false)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onBack}
              className="mr-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Directory
            </Button>
            <h1 className="text-xl font-semibold">Supplier Details</h1>
          </div>
          <Button onClick={() => setShowContact(true)}>
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact Supplier
          </Button>
        </div>
      </header>

      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Supplier Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{supplier.name}</h1>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          {supplier.location}
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center">
                            <Star className="h-5 w-5 text-yellow-500 mr-1" />
                            <span className="font-medium">{supplier.rating}</span>
                            <span className="text-muted-foreground ml-1">({supplier.reviews} reviews)</span>
                          </div>
                          <Badge variant="secondary">Since {supplier.yearEstablished}</Badge>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {supplier.verified && (
                          <Badge variant="default">
                            <Shield className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        {supplier.groupBuying && (
                          <Badge variant="outline">
                            <Users className="h-3 w-3 mr-1" />
                            Group Buying
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{supplier.about}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Information */}
            <Card>
              <CardHeader>
                <CardTitle>Key Information</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <p className="font-medium">Minimum Order</p>
                      <p className="text-muted-foreground">{supplier.minOrder}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Delivery</p>
                      <p className="text-muted-foreground">{supplier.delivery}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-600 mr-3" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">{supplier.businessHours}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-green-600 mb-1">Bulk Discount</p>
                    <p className="text-muted-foreground">{supplier.bulkDiscount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle>Specialties & Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {supplier.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card>
              <CardHeader>
                <CardTitle>Policies & Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Returns</h4>
                  <p className="text-muted-foreground">{supplier.policies.returns}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-1">Cancellation</h4>
                  <p className="text-muted-foreground">{supplier.policies.cancellation}</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-1">Quality Guarantee</h4>
                  <p className="text-muted-foreground">{supplier.policies.warranty}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>{supplier.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                  <span>{supplier.email}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-3 mt-1 text-muted-foreground" />
                  <span className="text-sm">{supplier.address}</span>
                </div>
                <Button onClick={() => setShowContact(true)} className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {supplier.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <Shield className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {supplier.paymentMethods.map((method, index) => (
                    <Badge key={index} variant="outline" className="justify-center">
                      {method}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Delivery Areas */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {supplier.deliveryAreas.map((area, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <MapPin className="h-3 w-3 text-muted-foreground mr-2" />
                      {area}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDetails;