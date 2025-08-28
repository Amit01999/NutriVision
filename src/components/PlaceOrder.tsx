import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ShoppingCart,
  MapPin,
  Phone,
  User,
  Package,
  CreditCard,
  Truck,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PlaceOrder = () => {
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderForm, setOrderForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    area: '',
    paymentMethod: '',
    specialInstructions: '',
  });

  const { toast } = useToast();

  const areas = [
    'Dhaka University Area',
    'BUET Area',
    'Dhanmondi',
    'Gulshan',
    'Banani',
    'Uttara',
    'Mirpur',
    'Wari',
    'Old Dhaka',
    'Mohammadpur',
    'Ramna',
    'Tejgaon',
    'Farmgate',
    'Elephant Road',
    'New Market Area',
  ];

  const paymentMethods = [
    'Cash on Delivery',
    'bKash',
    'Nagad',
    'Rocket',
    'Bank Transfer',
  ];

  const totalPrice = orderQuantity * 20;
  const deliveryFee = totalPrice >= 100 ? 0 : 10;
  const finalTotal = totalPrice + deliveryFee;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !orderForm.name ||
      !orderForm.phone ||
      !orderForm.address ||
      !orderForm.area ||
      !orderForm.paymentMethod
    ) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in all required fields to place your order.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Order Placed Successfully! 🎉',
      description: `Your order for ${orderQuantity} NutriVision cake(s) has been confirmed. We'll contact you shortly!`,
    });

    // Reset form
    setOrderForm({
      name: '',
      phone: '',
      email: '',
      address: '',
      area: '',
      paymentMethod: '',
      specialInstructions: '',
    });
    setOrderQuantity(1);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Fancy background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Place Your Order
            </span>{' '}
            📱
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Get fresh NutriVision delivered right to your doorstep in Dhaka
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card shadow-vibrant border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-fancy-gradient"></div>

              <CardContent className="p-8">
                <h3 className="font-display font-bold text-2xl mb-6 text-foreground flex items-center gap-3">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                  Order Details
                </h3>

                <form onSubmit={handleSubmitOrder} className="space-y-6">
                  {/* Quantity Selection */}
                  <div className="bg-muted/30 p-6 rounded-2xl">
                    <Label className="text-lg font-semibold text-foreground mb-4 block">
                      How many NutriVision cakes? 🍰
                    </Label>
                    <div className="flex items-center gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          setOrderQuantity(Math.max(1, orderQuantity - 1))
                        }
                        className="rounded-full"
                      >
                        -
                      </Button>
                      <div className="text-2xl font-bold text-primary w-16 text-center">
                        {orderQuantity}
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => setOrderQuantity(orderQuantity + 1)}
                        className="rounded-full"
                      >
                        +
                      </Button>
                      <div className="ml-4 text-muted-foreground">
                        × ৳20 each ={' '}
                        <span className="font-bold text-primary">
                          ৳{totalPrice}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="flex items-center gap-2 mb-2"
                      >
                        <User className="w-4 h-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={orderForm.name}
                        onChange={e =>
                          setOrderForm({ ...orderForm, name: e.target.value })
                        }
                        placeholder="Enter your full name"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="phone"
                        className="flex items-center gap-2 mb-2"
                      >
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        value={orderForm.phone}
                        onChange={e =>
                          setOrderForm({ ...orderForm, phone: e.target.value })
                        }
                        placeholder="01XXXXXXXXX"
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      Email (Optional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={orderForm.email}
                      onChange={e =>
                        setOrderForm({ ...orderForm, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <Label
                      htmlFor="address"
                      className="flex items-center gap-2 mb-2"
                    >
                      <MapPin className="w-4 h-4" />
                      Delivery Address *
                    </Label>
                    <Textarea
                      id="address"
                      value={orderForm.address}
                      onChange={e =>
                        setOrderForm({ ...orderForm, address: e.target.value })
                      }
                      placeholder="House/Building name, Road, Area details..."
                      required
                      className="border-primary/20 focus:border-primary"
                      rows={3}
                    />
                  </div>

                  {/* Area Selection */}
                  <div>
                    <Label className="mb-2 block">Select Area *</Label>
                    <Select
                      value={orderForm.area}
                      onValueChange={value =>
                        setOrderForm({ ...orderForm, area: value })
                      }
                    >
                      <SelectTrigger className="border-primary/20 focus:border-primary">
                        <SelectValue placeholder="Choose your area in Dhaka" />
                      </SelectTrigger>
                      <SelectContent>
                        {areas.map(area => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <Label className="flex items-center gap-2 mb-2">
                      <CreditCard className="w-4 h-4" />
                      Payment Method *
                    </Label>
                    <Select
                      value={orderForm.paymentMethod}
                      onValueChange={value =>
                        setOrderForm({ ...orderForm, paymentMethod: value })
                      }
                    >
                      <SelectTrigger className="border-primary/20 focus:border-primary">
                        <SelectValue placeholder="How would you like to pay?" />
                      </SelectTrigger>
                      <SelectContent>
                        {paymentMethods.map(method => (
                          <SelectItem key={method} value={method}>
                            {method}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Special Instructions */}
                  <div>
                    <Label htmlFor="instructions" className="mb-2 block">
                      Special Instructions (Optional)
                    </Label>
                    <Textarea
                      id="instructions"
                      value={orderForm.specialInstructions}
                      onChange={e =>
                        setOrderForm({
                          ...orderForm,
                          specialInstructions: e.target.value,
                        })
                      }
                      placeholder="Any special delivery instructions..."
                      className="border-primary/20 focus:border-primary"
                      rows={2}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg py-6 bg-primary/20  text-black border  border-primary/20 hover:bg-primary/80 hover:scale-105 transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
                  >
                    <Package className="w-5 h-5 mr-2" />
                    Confirm Order - ৳{finalTotal}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Price Breakdown */}
            <Card className="bg-card shadow-card border border-accent/20">
              <CardContent className="p-6">
                <h3 className="font-display font-bold text-xl mb-4 text-foreground">
                  Order Summary
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>NutriVision Cake × {orderQuantity}</span>
                    <span className="font-semibold">৳{totalPrice}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span
                      className={`font-semibold ${
                        deliveryFee === 0 ? 'text-accent' : ''
                      }`}
                    >
                      {deliveryFee === 0 ? 'FREE' : `৳${deliveryFee}`}
                    </span>
                  </div>

                  {deliveryFee === 0 && (
                    <div className="text-sm text-accent font-medium">
                      🎉 Free delivery on orders ৳100+
                    </div>
                  )}

                  <hr className="border-border" />

                  <div className="flex justify-between text-lg font-bold text-primary">
                    <span>Total</span>
                    <span>৳{finalTotal}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Info */}
            <Card className="bg-card shadow-card border border-secondary/20">
              <CardContent className="p-6">
                <h3 className="font-display font-bold text-xl mb-4 text-foreground flex items-center gap-2">
                  <Truck className="w-5 h-5 text-secondary" />
                  Delivery Info
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">Same Day Delivery</div>
                      <div className="text-muted-foreground">
                        Order before 6 PM for same day delivery
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">Fresh & Ready</div>
                      <div className="text-muted-foreground">
                        Made fresh daily, delivered in protective packaging
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold">Contact Updates</div>
                      <div className="text-muted-foreground">
                        SMS updates on order status and delivery
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Support */}
            <Card className="bg-hero-gradient text-white shadow-vibrant">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-3">Need Help? 🤝</h3>
                <p className="text-white/90 text-sm mb-4">
                  Call us for any questions about your order
                </p>
                <Button
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90 border-0"
                >
                  📞 Call +880-1700-NUTRI
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
