import type { Route } from "./+types/cart";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card/card";
import { Badge } from "../components/ui/badge/badge";
import { Separator } from "../components/ui/separator/separator";
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, Heart } from "lucide-react";
import styles from "./cart.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cart - KidEats" },
    {
      name: "description",
      content: "Review and manage your cart items before checkout",
    },
  ];
}

interface CartItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  isHealthy: boolean;
}

// Mock cart data - in a real app this would come from context/state management
const initialCartItems: CartItem[] = [
  {
    id: "1",
    name: "Rainbow Veggie Pizza",
    description: "A colorful pizza with hidden veggies that taste amazing!",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&crop=center",
    price: 8.99,
    quantity: 2,
    isHealthy: true,
  },
  {
    id: "3",
    name: "Fruity Yogurt Parfait",
    description: "Layers of creamy yogurt with fresh fruits and granola",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop&crop=center",
    price: 4.99,
    quantity: 1,
    isHealthy: true,
  },
  {
    id: "4",
    name: "Mini Turkey Meatballs",
    description: "Small, savory meatballs with a hint of sweetness",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop&crop=center",
    price: 6.99,
    quantity: 3,
    isHealthy: true,
  },
];

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const proceedToCheckout = () => {
    // In a real app, this would navigate to checkout
    alert("Proceeding to checkout...");
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.emptyState}>
          <div className={styles.emptyStateContent}>
            <ShoppingBag className={styles.emptyStateIcon} size={64} />
            <h1 className={styles.emptyStateTitle}>Your cart is empty</h1>
            <p className={styles.emptyStateDescription}>
              Looks like you haven't added any delicious items to your cart yet.
            </p>
            <Button asChild className={styles.emptyStateButton}>
              <Link to="/">Browse Menu</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Button variant="outline" asChild className={styles.backButton}>
            <Link to="/">
              <ArrowLeft size={18} />
              Back to Menu
            </Link>
          </Button>
          <h1 className={styles.pageTitle}>Your Cart</h1>
          <div className={styles.itemCount}>
            {cartItems.reduce((sum, item) => sum + item.quantity, 0)} items
          </div>
        </div>
      </header>

      <div className={styles.content}>
        {/* Cart Items */}
        <section className={styles.cartItems}>
          <h2 className={styles.sectionTitle}>Order Items</h2>
          <div className={styles.itemsList}>
            {cartItems.map(item => (
              <Card key={item.id} className={styles.cartItem}>
                <CardContent className={styles.cartItemContent}>
                  <div className={styles.itemImage}>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className={styles.itemPhoto}
                      loading="lazy"
                    />
                    {item.isHealthy && (
                      <div className={styles.healthyBadge}>
                        <Heart size={14} />
                      </div>
                    )}
                  </div>
                  
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                    <div className={styles.itemPrice}>${item.price.toFixed(2)} each</div>
                  </div>

                  <div className={styles.itemActions}>
                    <div className={styles.quantityControls}>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className={styles.quantityButton}
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus size={16} />
                      </Button>
                      <span className={styles.quantity} aria-label={`Quantity: ${item.quantity}`}>
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className={styles.quantityButton}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                    
                    <div className={styles.itemSubtotal}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className={styles.removeButton}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cart Summary */}
        <aside className={styles.cartSummary}>
          <Card className={styles.summaryCard}>
            <CardHeader>
              <CardTitle className={styles.summaryTitle}>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className={styles.summaryContent}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Subtotal</span>
                <span className={styles.summaryValue}>${subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Tax</span>
                <span className={styles.summaryValue}>${tax.toFixed(2)}</span>
              </div>
              <Separator className={styles.summaryDivider} />
              <div className={styles.summaryRow}>
                <span className={styles.summaryTotalLabel}>Total</span>
                <span className={styles.summaryTotalValue}>${total.toFixed(2)}</span>
              </div>
              
              <Button 
                onClick={proceedToCheckout}
                className={styles.checkoutButton}
                size="lg"
              >
                Proceed to Checkout
              </Button>
              
              <div className={styles.healthyItemsNote}>
                <Heart size={16} className={styles.healthyIcon} />
                <span>You have healthy choices in your cart! Great job!</span>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
