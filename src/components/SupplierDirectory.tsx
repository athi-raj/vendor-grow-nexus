import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, MapPin, Star, DollarSign, Users, Truck } from "lucide-react";

interface SupplierDirectoryProps {
  onBack: () => void;
}

// Mock supplier data
const mockSuppliers = [
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
    groupBuying: true
  },
  {
    id: 2,
    name: "Textile Wholesale Hub",
    category: "Clothing & Accessories",
    location: "Industrial Zone B",
    rating: 4.6,
    reviews: 89,
    minOrder: "$100",
    bulkDiscount: "20% off orders over $1000",
    delivery: "2-3 business days",
    description: "Wide range of fabrics and clothing materials for all seasons",
    verified: true,
    groupBuying: false
  },
  {
    id: 3,
    name: "Tech Components Direct",
    category: "Electronics & Gadgets",
    location: "Tech Park Plaza",
    rating: 4.7,
    reviews: 201,
    minOrder: "$75",
    bulkDiscount: "10% off orders over $300",
    delivery: "Next day delivery",
    description: "Electronics accessories and gadgets at competitive wholesale rates",
    verified: true,
    groupBuying: true
  },
  {
    id: 4,
    name: "Local Craft Supplies",
    category: "Crafts & Handmade",
    location: "Arts Quarter",
    rating: 4.5,
    reviews: 67,
    minOrder: "$25",
    bulkDiscount: "12% off orders over $200",
    delivery: "3-5 business days",
    description: "Handpicked craft materials and art supplies for creative vendors",
    verified: true,
    groupBuying: true
  },
  {
    id: 5,
    name: "Home Essentials Depot",
    category: "Household Items",
    location: "Central Shopping District",
    rating: 4.4,
    reviews: 134,
    minOrder: "$40",
    bulkDiscount: "18% off orders over $400",
    delivery: "Same day delivery",
    description: "Complete range of household items and kitchen supplies",
    verified: true,
    groupBuying: false
  }
];

const SupplierDirectory = ({ onBack }: SupplierDirectoryProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [groupBuyingOnly, setGroupBuyingOnly] = useState(false);

  const filteredSuppliers = mockSuppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || supplier.category === selectedCategory;
    const matchesGroupBuying = !groupBuyingOnly || supplier.groupBuying;
    
    return matchesSearch && matchesCategory && matchesGroupBuying;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onBack}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-xl font-semibold">Supplier Directory</h1>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Find Suppliers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <Input
                  id="search"
                  placeholder="Search suppliers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All categories</SelectItem>
                    <SelectItem value="Food & Beverages">Food & Beverages</SelectItem>
                    <SelectItem value="Clothing & Accessories">Clothing & Accessories</SelectItem>
                    <SelectItem value="Electronics & Gadgets">Electronics & Gadgets</SelectItem>
                    <SelectItem value="Household Items">Household Items</SelectItem>
                    <SelectItem value="Crafts & Handmade">Crafts & Handmade</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select onValueChange={setBudgetFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any budget</SelectItem>
                    <SelectItem value="under-100">Under $100</SelectItem>
                    <SelectItem value="100-500">$100 - $500</SelectItem>
                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                    <SelectItem value="over-1000">Over $1,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Filters</Label>
                <Button
                  variant={groupBuyingOnly ? "default" : "outline"}
                  onClick={() => setGroupBuyingOnly(!groupBuyingOnly)}
                  className="w-full justify-start"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Group Buying Only
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid gap-6">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{supplier.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4" />
                          {supplier.location}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        {supplier.verified && (
                          <Badge variant="secondary">Verified</Badge>
                        )}
                        {supplier.groupBuying && (
                          <Badge variant="outline">
                            <Users className="h-3 w-3 mr-1" />
                            Group Buying
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-3">{supplier.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="font-medium">{supplier.rating}</span>
                        <span className="text-muted-foreground ml-1">({supplier.reviews} reviews)</span>
                      </div>
                      
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-green-600 mr-1" />
                        <span>Min order: {supplier.minOrder}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 text-blue-600 mr-1" />
                        <span>{supplier.delivery}</span>
                      </div>
                      
                      <div className="text-green-600 font-medium">
                        {supplier.bulkDiscount}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:ml-6">
                    <Button className="w-full lg:w-auto">View Details</Button>
                    <Button variant="outline" className="w-full lg:w-auto">Contact Supplier</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSuppliers.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No suppliers found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or browse all categories
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default SupplierDirectory;