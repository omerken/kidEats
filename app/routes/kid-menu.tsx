import type { Route } from "./+types/kid-menu";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card/card";
import { Badge } from "../components/ui/badge/badge";
import { ArrowLeft, Heart, Leaf, Zap, Star } from "lucide-react";
import styles from "./kid-menu.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kid Menu - KidEats" },
    {
      name: "description",
      content: "Browse delicious and healthy meals designed for kids",
    },
  ];
}

interface FoodItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  healthTags: string[];
  category: string;
  isHealthy: boolean;
}

const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Rainbow Veggie Pizza",
    description: "A colorful pizza with hidden veggies that taste amazing!",
    image: "🍕",
    price: 8.99,
    healthTags: ["Low Sugar", "Vegetarian"],
    category: "Main",
    isHealthy: true,
  },
  {
    id: "2",
    name: "Chicken & Broccoli Bites",
    description: "Tender chicken with steamed broccoli - yummy and healthy!",
    image: "🥦",
    price: 7.49,
    healthTags: ["High Protein", "Gluten-Free"],
    category: "Main",
    isHealthy: true,
  },
  {
    id: "3",
    name: "Fruity Yogurt Parfait",
    description: "Layers of creamy yogurt with fresh fruits and granola",
    image: "🍓",
    price: 4.99,
    healthTags: ["Low Sugar", "Probiotic"],
    category: "Dessert",
    isHealthy: true,
  },
  {
    id: "4",
    name: "Mini Turkey Meatballs",
    description: "Small, savory meatballs with a hint of sweetness",
    image: "🍖",
    price: 6.99,
    healthTags: ["High Protein"],
    category: "Main",
    isHealthy: true,
  },
  {
    id: "5",
    name: "Cheesy Cauliflower Tots",
    description: "Crispy cauliflower tots with a cheesy center",
    image: "🧀",
    price: 5.49,
    healthTags: ["Vegetarian", "Low Carb"],
    category: "Side",
    isHealthy: true,
  },
  {
    id: "6",
    name: "Berry Smoothie Bowl",
    description: "A refreshing smoothie bowl topped with fresh berries",
    image: "🫐",
    price: 5.99,
    healthTags: ["Antioxidants", "Dairy-Free"],
    category: "Drink",
    isHealthy: true,
  },
  {
    id: "7",
    name: "Chocolate Chip Cookies",
    description: "Soft and chewy cookies with chocolate chips",
    image: "🍪",
    price: 3.99,
    healthTags: [],
    category: "Dessert",
    isHealthy: false,
  },
  {
    id: "8",
    name: "Crispy Chicken Nuggets",
    description: "Golden crispy chicken nuggets with dipping sauce",
    image: "🍗",
    price: 6.49,
    healthTags: [],
    category: "Main",
    isHealthy: false,
  },
];

export default function KidMenu() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [cart, setCart] = useState<string[]>([]);

  const filters = ["All", "Low Sugar", "Vegetarian", "Gluten-Free", "High Protein"];

  const filteredItems = foodItems.filter(item => {
    if (selectedFilter === "All") return true;
    return item.healthTags.includes(selectedFilter);
  });

  const addToCart = (itemId: string) => {
    setCart(prev => [...prev, itemId]);
  };

  const requestOrder = () => {
    if (cart.length === 0) return;
    
    // In a real app, this would send the order to parent approval
    alert(`Order requested! ${cart.length} item(s) sent to parent for approval.`);
    setCart([]);
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.backButton}>
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className={styles.title}>Kid Menu</h1>
          <div className={styles.cartInfo}>
            {cart.length > 0 && (
              <Button onClick={requestOrder} className={styles.cartButton}>
                Request Order ({cart.length})
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h2 className={styles.heroTitle}>Explore Kid-Friendly Meals</h2>
            <p className={styles.heroDescription}>
              Choose from our delicious and healthy options! Look for the healthy badges to earn rewards!
            </p>
          </div>
          <div className={styles.heroReward}>
            <div className={styles.rewardBadge}>
              <Star className={styles.rewardIcon} />
              <span>Earn stars for healthy choices!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filters}>
        <div className={styles.filtersContent}>
          <h3 className={styles.filtersTitle}>Filter by:</h3>
          <div className={styles.filterButtons}>
            {filters.map(filter => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? styles.activeFilter : styles.filterButton}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Food Items Grid */}
      <section className={styles.foodGrid}>
        <div className={styles.foodGridContent}>
          {filteredItems.map(item => (
            <Card key={item.id} className={styles.foodCard}>
              <CardHeader className={styles.foodCardHeader}>
                <div className={styles.foodImage}>
                  <span className={styles.foodEmoji}>{item.image}</span>
                  {item.isHealthy && (
                    <div className={styles.healthyBadge}>
                      <Heart size={16} />
                    </div>
                  )}
                </div>
                <CardTitle className={styles.foodTitle}>{item.name}</CardTitle>
                <div className={styles.priceTag}>${item.price}</div>
              </CardHeader>
              <CardContent className={styles.foodCardContent}>
                <CardDescription className={styles.foodDescription}>
                  {item.description}
                </CardDescription>
                <div className={styles.healthTags}>
                  {item.healthTags.map(tag => (
                    <Badge key={tag} className={styles.healthTag}>
                      {tag === "Low Sugar" && <Zap size={12} />}
                      {tag === "Vegetarian" && <Leaf size={12} />}
                      {tag === "High Protein" && <Heart size={12} />}
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button 
                  onClick={() => addToCart(item.id)}
                  className={styles.addButton}
                  disabled={cart.includes(item.id)}
                >
                  {cart.includes(item.id) ? "Added!" : "Add to Order"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Floating Cart */}
      {cart.length > 0 && (
        <div className={styles.floatingCart}>
          <Button onClick={requestOrder} size="lg" className={styles.floatingCartButton}>
            Request Order ({cart.length} items)
          </Button>
        </div>
      )}
    </div>
  );
}
