import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Users, MapPin, DollarSign, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";
import VendorRegistration from "@/components/VendorRegistration";
import SupplierRegistration from "@/components/SupplierRegistration";
import SupplierDirectory from "@/components/SupplierDirectory";
const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'register' | 'suppliers' | 'supplier-register'>('home');
  const [hasRegisteredAsVendor, setHasRegisteredAsVendor] = useState(false);
  const handleStartAsVendor = () => {
    if (hasRegisteredAsVendor) {
      setCurrentView('suppliers');
    } else {
      setCurrentView('register');
    }
  };

  if (currentView === 'register') {
    return <VendorRegistration onBack={() => setCurrentView('home')} onRegistrationComplete={() => setHasRegisteredAsVendor(true)} />;
  }
  if (currentView === 'suppliers') {
    return <SupplierDirectory onBack={() => setCurrentView('home')} />;
  }
  if (currentView === 'supplier-register') {
    return <SupplierRegistration onBack={() => setCurrentView('home')} onRegistrationComplete={() => setCurrentView('home')} />;
  }
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">VendorConnect</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setCurrentView('register')}>
              Join as Vendor
            </Button>
            <Button variant="outline" size="sm" onClick={() => setCurrentView('supplier-register')}>
              Join as Supplier
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            Empowering Street Vendors
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Connect with Affordable
            <span className="text-primary block">Raw Material Suppliers</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find verified suppliers, manage your budget, and increase your profits through group buying and smart sourcing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleStartAsVendor} className="w-full sm:w-auto">
              Start as Vendor
            </Button>
            <Button variant="outline" size="lg" onClick={handleStartAsVendor} className="w-full sm:w-auto">
              Browse Suppliers
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Built for Street Vendors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <DollarSign className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Budget Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Set your budget and find suppliers that match your spending limits. Smart filtering keeps you on track.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Group Buying</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join with other vendors to buy in bulk and unlock better prices. More volume, lower costs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Local Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Find suppliers near you to reduce delivery costs and support your local business ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Verified Suppliers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All suppliers are verified for quality and reliability. Trade with confidence and peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Price Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get notified when prices drop on items you need. Never miss a good deal again.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ShoppingCart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Easy Ordering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simple, intuitive interface designed for all skill levels. Order what you need in just a few taps.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Boost Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of vendors who are already saving money and increasing profits with VendorConnect.
          </p>
          <Button size="lg" onClick={handleStartAsVendor}>
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 VendorConnect. Empowering street vendors worldwide.</p>
        </div>
      </footer>
    </div>;
};
export default Index;