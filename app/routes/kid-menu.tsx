import type { Route } from "./+types/kid-menu";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card/card";
import { Badge } from "../components/ui/badge/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog/dialog";
import{ ArrowLeft,Heart,Leaf,Zap,X } from "lucide-react";
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
  ingredients: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
  };
  allergens: string[];
}

const foodItems: FoodItem[] = [
  {
    id: "1",
    name: "Rainbow Veggie Pizza",
    description: "A colorful pizza with hidden veggies that taste amazing!",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&crop=center",
    price: 8.99,
    healthTags: ["Low Sugar", "Vegetarian"],
    category: "Main",
    isHealthy: true,
    ingredients: ["Whole wheat crust", "Tomato sauce", "Mozzarella cheese", "Bell peppers", "Zucchini", "Cherry tomatoes", "Red onion", "Basil"],
    nutrition: {
      calories: 285,
      protein: "12g",
      carbs: "35g",
      fat: "10g",
      fiber: "4g"
    },
    allergens: ["Gluten", "Dairy"]
  },
  {
    id: "2",
    name: "Chicken & Broccoli Bites",
    description: "Tender chicken with steamed broccoli - yummy and healthy!",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop&crop=center",
    price: 7.49,
    healthTags: ["High Protein", "Gluten-Free"],
    category: "Main",
    isHealthy: true,
    ingredients: ["Grilled chicken breast", "Fresh broccoli", "Olive oil", "Garlic", "Lemon juice", "Sea salt", "Black pepper"],
    nutrition: {
      calories: 220,
      protein: "28g",
      carbs: "8g",
      fat: "9g",
      fiber: "3g"
    },
    allergens: []
  },
  {
    id: "3",
    name: "Fruity Yogurt Parfait",
    description: "Layers of creamy yogurt with fresh fruits and granola",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop&crop=center",
    price: 4.99,
    healthTags: ["Low Sugar", "Probiotic"],
    category: "Dessert",
    isHealthy: true,
    ingredients: ["Greek yogurt", "Fresh strawberries", "Blueberries", "Granola", "Honey", "Vanilla extract"],
    nutrition: {
      calories: 180,
      protein: "15g",
      carbs: "22g",
      fat: "4g",
      fiber: "3g"
    },
    allergens: ["Dairy", "Nuts"]
  },
  {
    id: "4",
    name: "Mini Turkey Meatballs",
    description: "Small, savory meatballs with a hint of sweetness",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&h=300&fit=crop&crop=center",
    price: 6.99,
    healthTags: ["High Protein"],
    category: "Main",
    isHealthy: true,
    ingredients: ["Ground turkey", "Breadcrumbs", "Egg", "Onion", "Garlic", "Italian herbs", "Tomato sauce"],
    nutrition: {
      calories: 195,
      protein: "22g",
      carbs: "8g",
      fat: "8g",
      fiber: "1g"
    },
    allergens: ["Gluten", "Eggs"]
  },
  {
    id: "5",
    name: "Cheesy Cauliflower Tots",
    description: "Crispy cauliflower tots with a cheesy center",
    image: "https://images.unsplash.com/photo-1609501676725-7186f4f3db0e?w=400&h=300&fit=crop&crop=center",
    price: 5.49,
    healthTags: ["Vegetarian", "Low Carb"],
    category: "Side",
    isHealthy: true,
    ingredients: ["Cauliflower", "Cheddar cheese", "Egg", "Almond flour", "Garlic powder", "Paprika", "Salt"],
    nutrition: {
      calories: 145,
      protein: "8g",
      carbs: "6g",
      fat: "10g",
      fiber: "2g"
    },
    allergens: ["Dairy", "Eggs", "Nuts"]
  },
  {
    id: "6",
    name: "Berry Smoothie Bowl",
    description: "A refreshing smoothie bowl topped with fresh berries",
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop&crop=center",
    price: 5.99,
    healthTags: ["Antioxidants", "Dairy-Free"],
    category: "Drink",
    isHealthy: true,
    ingredients: ["Frozen mixed berries", "Banana", "Coconut milk", "Chia seeds", "Fresh blueberries", "Granola", "Coconut flakes"],
    nutrition: {
      calories: 165,
      protein: "4g",
      carbs: "28g",
      fat: "6g",
      fiber: "8g"
    },
    allergens: ["Nuts"]
  },
  {
    id: "7",
    name: "Chocolate Chip Cookies",
    description: "Soft and chewy cookies with chocolate chips",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop&crop=center",
    price: 3.99,
    healthTags: [],
    category: "Dessert",
    isHealthy: false,
    ingredients: ["All-purpose flour", "Butter", "Brown sugar", "White sugar", "Eggs", "Vanilla", "Chocolate chips", "Baking soda", "Salt"],
    nutrition: {
      calories: 320,
      protein: "4g",
      carbs: "42g",
      fat: "16g",
      fiber: "2g"
    },
    allergens: ["Gluten", "Dairy", "Eggs"]
  },
  {
    id: "8",
    name: "Crispy Chicken Nuggets",
    description: "Golden crispy chicken nuggets with dipping sauce",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop&crop=center",
    price: 6.49,
    healthTags: [],
    category: "Main",
    isHealthy: false,
    ingredients: ["Chicken breast", "Flour", "Breadcrumbs", "Eggs", "Vegetable oil", "Salt", "Pepper", "Garlic powder"],
    nutrition: {
      calories: 280,
      protein: "18g",
      carbs: "15g",
      fat: "16g",
      fiber: "1g"
    },
    allergens: ["Gluten", "Eggs"]
  },
];

export default function KidMenu() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [cart, setCart] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);

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

  const openItemDetail = (item: FoodItem) => {
    setSelectedItem(item);
  };

  const closeItemDetail = () => {
    setSelectedItem(null);
  };

  return (
    <div className={styles.container}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Explore Kid-Friendly Meals</h1>
            <p className={styles.heroDescription}>
              Choose from our delicious and healthy options! Look for the healthy badges to earn rewards!
            </p>
          </div>
<img src="data:image/jpeg;base64,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" />
          <div className={styles.heroReward}></div>
        </div>
      </section>

      {/* Filters */}

      {/* Food Items Grid */}
      <section className={styles.foodGrid}>
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
<div className={styles.foodGridContent}>
          {filteredItems.map(item => (
            <Card 
              key={item.id} 
              className={styles.foodCard}
              onClick={() => openItemDetail(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openItemDetail(item);
                }
              }}
              aria-label={`View details for ${item.name}`}
            >
              <CardHeader className={styles.foodCardHeader}>
                <div className={styles.foodImage}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className={styles.foodPhoto}
                    loading="lazy"
                  />
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
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item.id);
                  }}
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

      {/* Food Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && closeItemDetail()}>
        {selectedItem && (
          <DialogContent className={styles.modalContent}>
            <DialogHeader>
              <DialogTitle className={styles.modalTitle}>{selectedItem.name}</DialogTitle>
              <DialogDescription className={styles.modalDescription}>
                {selectedItem.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className={styles.modalBody}>
              <div className={styles.modalImageContainer}>
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.name}
                  className={styles.modalImage}
                />
                {selectedItem.isHealthy && (
                  <div className={styles.modalHealthyBadge}>
                    <Heart size={20} />
                    <span>Healthy Choice</span>
                  </div>
                )}
              </div>

              <div className={styles.modalInfo}>
                <div className={styles.modalPrice}>${selectedItem.price}</div>
                
                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Health Benefits</h4>
                  <div className={styles.modalHealthTags}>
                    {selectedItem.healthTags.map(tag => (
                      <Badge key={tag} className={styles.modalHealthTag}>
                        {tag === "Low Sugar" && <Zap size={14} />}
                        {tag === "Vegetarian" && <Leaf size={14} />}
                        {tag === "High Protein" && <Heart size={14} />}
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Ingredients</h4>
                  <div className={styles.modalIngredients}>
                    {selectedItem.ingredients.join(", ")}
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>Nutrition Facts</h4>
                  <div className={styles.modalNutrition}>
                    <div className={styles.nutritionItem}>
                      <span className={styles.nutritionLabel}>Calories:</span>
                      <span className={styles.nutritionValue}>{selectedItem.nutrition.calories}</span>
                    </div>
                    <div className={styles.nutritionItem}>
                      <span className={styles.nutritionLabel}>Protein:</span>
                      <span className={styles.nutritionValue}>{selectedItem.nutrition.protein}</span>
                    </div>
                    <div className={styles.nutritionItem}>
                      <span className={styles.nutritionLabel}>Carbs:</span>
                      <span className={styles.nutritionValue}>{selectedItem.nutrition.carbs}</span>
                    </div>
                    <div className={styles.nutritionItem}>
                      <span className={styles.nutritionLabel}>Fat:</span>
                      <span className={styles.nutritionValue}>{selectedItem.nutrition.fat}</span>
                    </div>
                    <div className={styles.nutritionItem}>
                      <span className={styles.nutritionLabel}>Fiber:</span>
                      <span className={styles.nutritionValue}>{selectedItem.nutrition.fiber}</span>
                    </div>
                  </div>
                </div>

                {selectedItem.allergens.length > 0 && (
                  <div className={styles.modalSection}>
                    <h4 className={styles.modalSectionTitle}>Allergens</h4>
                    <div className={styles.modalAllergens}>
                      {selectedItem.allergens.join(", ")}
                    </div>
                  </div>
                )}

                <Button 
                  onClick={() => {
                    addToCart(selectedItem.id);
                    closeItemDetail();
                  }}
                  className={styles.modalAddButton}
                  disabled={cart.includes(selectedItem.id)}
                  size="lg"
                >
                  {cart.includes(selectedItem.id) ? "Added to Order!" : "Add to Order"}
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
