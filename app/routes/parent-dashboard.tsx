import type { Route } from "./+types/parent-dashboard";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card/card";
import { Input } from "../components/ui/input/input";
import { Checkbox } from "../components/ui/checkbox/checkbox";
import { Badge } from "../components/ui/badge/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs/tabs";
import { ArrowLeft, DollarSign, Shield, Clock, Check, X, Settings } from "lucide-react";
import styles from "./parent-dashboard.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Parent Dashboard - KidEats" },
    {
      name: "description",
      content: "Manage your child's food orders, budget, and restrictions",
    },
  ];
}

interface PendingOrder {
  id: string;
  childName: string;
  items: string[];
  totalAmount: number;
  requestedAt: string;
}

interface BudgetSettings {
  weeklyLimit: number;
  currentSpent: number;
}

interface FoodRestriction {
  id: string;
  name: string;
  type: "category" | "item";
  isRestricted: boolean;
}

export default function ParentDashboard() {
  const [pendingOrders] = useState<PendingOrder[]>([
    {
      id: "1",
      childName: "Emma",
      items: ["Rainbow Veggie Pizza", "Berry Smoothie Bowl"],
      totalAmount: 14.98,
      requestedAt: "2 minutes ago",
    },
    {
      id: "2",
      childName: "Alex",
      items: ["Chicken & Broccoli Bites"],
      totalAmount: 7.49,
      requestedAt: "5 minutes ago",
    },
  ]);

  const [budgetSettings, setBudgetSettings] = useState<BudgetSettings>({
    weeklyLimit: 50.00,
    currentSpent: 23.47,
  });

  const [restrictions, setRestrictions] = useState<FoodRestriction[]>([
    { id: "1", name: "Desserts", type: "category", isRestricted: false },
    { id: "2", name: "Fried Foods", type: "category", isRestricted: true },
    { id: "3", name: "Sugary Drinks", type: "category", isRestricted: true },
    { id: "4", name: "Chocolate Chip Cookies", type: "item", isRestricted: false },
    { id: "5", name: "Ice Cream", type: "item", isRestricted: true },
  ]);

  const handleOrderAction = (orderId: string, action: "approve" | "reject") => {
    // In a real app, this would update the order status
    alert(`Order ${orderId} ${action}d!`);
  };

  const handleBudgetUpdate = (newLimit: number) => {
    setBudgetSettings(prev => ({ ...prev, weeklyLimit: newLimit }));
  };

  const toggleRestriction = (restrictionId: string) => {
    setRestrictions(prev =>
      prev.map(restriction =>
        restriction.id === restrictionId
          ? { ...restriction, isRestricted: !restriction.isRestricted }
          : restriction
      )
    );
  };

  const remainingBudget = budgetSettings.weeklyLimit - budgetSettings.currentSpent;
  const budgetPercentage = (budgetSettings.currentSpent / budgetSettings.weeklyLimit) * 100;

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Parent Dashboard</h1>
          <p className={styles.heroDescription}>
            Manage your child's food orders, set budgets, and control what they can order
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <div className={styles.dashboardContent}>
        <Tabs defaultValue="orders" className={styles.tabs}>
          <TabsList className={styles.tabsList}>
            <TabsTrigger value="orders" className={styles.tabsTrigger}>
              <Clock size={16} />
              Pending Orders ({pendingOrders.length})
            </TabsTrigger>
            <TabsTrigger value="budget" className={styles.tabsTrigger}>
              <DollarSign size={16} />
              Budget & Spending
            </TabsTrigger>
            <TabsTrigger value="restrictions" className={styles.tabsTrigger}>
              <Shield size={16} />
              Food Restrictions
            </TabsTrigger>
          </TabsList>

          {/* Pending Orders Tab */}
          <TabsContent value="orders" className={styles.tabContent}>
            <div className={styles.ordersSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Pending Order Requests</h2>
                <p className={styles.sectionDescription}>
                  Review and approve or reject your child's food order requests
                </p>
              </div>

              {pendingOrders.length === 0 ? (
                <Card className={styles.emptyState}>
                  <CardContent className={styles.emptyStateContent}>
                    <Clock size={48} className={styles.emptyStateIcon} />
                    <h3 className={styles.emptyStateTitle}>No Pending Orders</h3>
                    <p className={styles.emptyStateDescription}>
                      Your child hasn't requested any orders yet.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className={styles.ordersGrid}>
                  {pendingOrders.map(order => (
                    <Card key={order.id} className={styles.orderCard}>
                      <CardHeader className={styles.orderCardHeader}>
                        <div className={styles.orderInfo}>
                          <CardTitle className={styles.orderTitle}>
                            Order from {order.childName}
                          </CardTitle>
                          <Badge className={styles.timeBadge}>{order.requestedAt}</Badge>
                        </div>
                        <div className={styles.orderAmount}>
                          ${order.totalAmount.toFixed(2)}
                        </div>
                      </CardHeader>
                      <CardContent className={styles.orderCardContent}>
                        <div className={styles.orderItems}>
                          <h4 className={styles.itemsTitle}>Items:</h4>
                          <ul className={styles.itemsList}>
                            {order.items.map((item, index) => (
                              <li key={index} className={styles.orderItem}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className={styles.orderActions}>
                          <Button
                            onClick={() => handleOrderAction(order.id, "approve")}
                            className={styles.approveButton}
                          >
                            <Check size={16} />
                            Approve
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleOrderAction(order.id, "reject")}
                            className={styles.rejectButton}
                          >
                            <X size={16} />
                            Reject
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          {/* Budget Tab */}
          <TabsContent value="budget" className={styles.tabContent}>
            <div className={styles.budgetSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Budget & Spending</h2>
                <p className={styles.sectionDescription}>
                  Set weekly spending limits and track your child's food expenses
                </p>
              </div>

              <div className={styles.budgetCards}>
                <Card className={styles.budgetCard}>
                  <CardHeader>
                    <CardTitle className={styles.budgetCardTitle}>
                      <DollarSign size={20} />
                      Weekly Budget
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={styles.budgetCardContent}>
                    <div className={styles.budgetAmount}>
                      ${budgetSettings.weeklyLimit.toFixed(2)}
                    </div>
                    <div className={styles.budgetInput}>
                      <label className={styles.inputLabel}>Set new weekly limit:</label>
                      <div className={styles.inputGroup}>
                        <Input
                          type="number"
                          step="0.01"
                          min="0"
                          defaultValue={budgetSettings.weeklyLimit}
                          className={styles.budgetInputField}
                        />
                        <Button
                          onClick={() => handleBudgetUpdate(50)}
                          className={styles.updateButton}
                        >
                          Update
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={styles.budgetCard}>
                  <CardHeader>
                    <CardTitle className={styles.budgetCardTitle}>
                      Current Spending
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={styles.budgetCardContent}>
                    <div className={styles.spendingAmount}>
                      ${budgetSettings.currentSpent.toFixed(2)}
                    </div>
                    <div className={styles.budgetProgress}>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill}
                          style={{ width: `${Math.min(budgetPercentage, 100)}%` }}
                        />
                      </div>
                      <div className={styles.progressText}>
                        {budgetPercentage.toFixed(0)}% of budget used
                      </div>
                    </div>
                    <div className={styles.remainingBudget}>
                      ${remainingBudget.toFixed(2)} remaining this week
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Restrictions Tab */}
          <TabsContent value="restrictions" className={styles.tabContent}>
            <div className={styles.restrictionsSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Food Restrictions</h2>
                <p className={styles.sectionDescription}>
                  Control which food categories and items your child can order
                </p>
              </div>

              <div className={styles.restrictionsGrid}>
                <Card className={styles.restrictionsCard}>
                  <CardHeader>
                    <CardTitle>Food Categories</CardTitle>
                    <CardDescription>
                      Restrict entire categories of food
                    </CardDescription>
                  </CardHeader>
                  <CardContent className={styles.restrictionsContent}>
                    {restrictions
                      .filter(r => r.type === "category")
                      .map(restriction => (
                        <div key={restriction.id} className={styles.restrictionItem}>
                          <Checkbox
                            checked={restriction.isRestricted}
                            onCheckedChange={() => toggleRestriction(restriction.id)}
                            className={styles.restrictionCheckbox}
                          />
                          <label className={styles.restrictionLabel}>
                            Restrict {restriction.name}
                          </label>
                          {restriction.isRestricted && (
                            <Badge variant="destructive" className={styles.restrictedBadge}>
                              Restricted
                            </Badge>
                          )}
                        </div>
                      ))}
                  </CardContent>
                </Card>

                <Card className={styles.restrictionsCard}>
                  <CardHeader>
                    <CardTitle>Specific Items</CardTitle>
                    <CardDescription>
                      Restrict individual food items
                    </CardDescription>
                  </CardHeader>
                  <CardContent className={styles.restrictionsContent}>
                    {restrictions
                      .filter(r => r.type === "item")
                      .map(restriction => (
                        <div key={restriction.id} className={styles.restrictionItem}>
                          <Checkbox
                            checked={restriction.isRestricted}
                            onCheckedChange={() => toggleRestriction(restriction.id)}
                            className={styles.restrictionCheckbox}
                          />
                          <label className={styles.restrictionLabel}>
                            Restrict {restriction.name}
                          </label>
                          {restriction.isRestricted && (
                            <Badge variant="destructive" className={styles.restrictedBadge}>
                              Restricted
                            </Badge>
                          )}
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
