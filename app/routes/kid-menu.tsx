import type { Route } from "./+types/kid-menu";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card/card";
import { Badge } from "../components/ui/badge/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog/dialog";
import { Heart, Leaf, Zap } from "lucide-react";
import classNames from "classnames";
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
    ingredients: [
      "Whole wheat crust",
      "Tomato sauce",
      "Mozzarella cheese",
      "Bell peppers",
      "Zucchini",
      "Cherry tomatoes",
      "Red onion",
      "Basil",
    ],
    nutrition: {
      calories: 285,
      protein: "12g",
      carbs: "35g",
      fat: "10g",
      fiber: "4g",
    },
    allergens: ["Gluten", "Dairy"],
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
    ingredients: [
      "Grilled chicken breast",
      "Fresh broccoli",
      "Olive oil",
      "Garlic",
      "Lemon juice",
      "Sea salt",
      "Black pepper",
    ],
    nutrition: {
      calories: 220,
      protein: "28g",
      carbs: "8g",
      fat: "9g",
      fiber: "3g",
    },
    allergens: [],
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
      fiber: "3g",
    },
    allergens: ["Dairy", "Nuts"],
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
      fiber: "1g",
    },
    allergens: ["Gluten", "Eggs"],
  },
  {
    id: "5",
    name: "Cheesy Cauliflower Tots",
    description: "Crispy cauliflower tots with a cheesy center",
    image: "https://images.unsplash.com/photo-1574101476807-3e1dbec5ed62?w=400&h=300&fit=crop&crop=center",
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
      fiber: "2g",
    },
    allergens: ["Dairy", "Eggs", "Nuts"],
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
    ingredients: [
      "Frozen mixed berries",
      "Banana",
      "Coconut milk",
      "Chia seeds",
      "Fresh blueberries",
      "Granola",
      "Coconut flakes",
    ],
    nutrition: {
      calories: 165,
      protein: "4g",
      carbs: "28g",
      fat: "6g",
      fiber: "8g",
    },
    allergens: ["Nuts"],
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
    ingredients: [
      "All-purpose flour",
      "Butter",
      "Brown sugar",
      "White sugar",
      "Eggs",
      "Vanilla",
      "Chocolate chips",
      "Baking soda",
      "Salt",
    ],
    nutrition: {
      calories: 320,
      protein: "4g",
      carbs: "42g",
      fat: "16g",
      fiber: "2g",
    },
    allergens: ["Gluten", "Dairy", "Eggs"],
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
      fiber: "1g",
    },
    allergens: ["Gluten", "Eggs"],
  },
];

export default function KidMenu() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [cart, setCart] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);

  const filters = ["All", "Low Sugar", "Vegetarian", "Gluten-Free", "High Protein"];

  const filteredItems = foodItems.filter((item) => {
    if (selectedFilter === "All") return true;
    return item.healthTags.includes(selectedFilter);
  });

  const addToCart = (itemId: string) => {
    setCart((prev) => [...prev, itemId]);
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
            <h2 className={styles.heroTitle}>Congrats!</h2>
            <p className={styles.heroDescription}>
              You&apos;ve completed your weekly challenge and unlocked Dunkin’ Donuts meal.
            </p>
          </div>
          <img src="dd.png" className={styles.heroImg} />
        </div>
      </section>

      {/* Filters */}

      {/* Food Items Grid */}
      <section className={styles.foodGrid}>
        <div className={styles.filterSection}>
          <h2 className={styles.filterSectionTitle}>Explore Kid-Friendly Meals</h2>
          <div className={styles.filterButtons}>
            {filters.map((filter) => (
              <Button
                size="sm"
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={classNames(styles.filterButton, { [styles.activeFilter]: selectedFilter === filter })}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.foodGridContent}>
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className={styles.foodCard}
              onClick={() => openItemDetail(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openItemDetail(item);
                }
              }}
              aria-label={`View details for ${item.name}`}
            >
              <CardHeader className={styles.foodCardHeader}>
                <div className={styles.foodImage}>
                  <img src={item.image} alt={item.name} className={styles.foodPhoto} loading="lazy" />
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
                <CardDescription className={styles.foodDescription}>{item.description}</CardDescription>
                <div className={styles.healthTags}>
                  {item.healthTags.map((tag) => (
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
              <DialogDescription className={styles.modalDescription}>{selectedItem.description}</DialogDescription>
            </DialogHeader>

            <div className={styles.modalBody}>
              <div className={styles.modalImageContainer}>
                <img src={selectedItem.image} alt={selectedItem.name} className={styles.modalImage} />
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
                    {selectedItem.healthTags.map((tag) => (
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
                  <div className={styles.modalIngredients}>{selectedItem.ingredients.join(", ")}</div>
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
                    <div className={styles.modalAllergens}>{selectedItem.allergens.join(", ")}</div>
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
