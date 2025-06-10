import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Button } from "../components/ui/button/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card/card";
import { Utensils, Users, Shield, Heart } from "lucide-react";
import styles from "./home.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "KidEats - Safe & Fun Food Ordering for Kids" },
    {
      name: "description",
      content: "A safe and engaging platform for children to browse and request food orders with parent controls",
    },
  ];
}

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Utensils className={styles.logoIcon} />
            <span className={styles.logoText}>KidEats</span>
          </div>
          <nav className={styles.nav}>
            <Link to="/kid-menu" className={styles.navLink}>Menu</Link>
            <Link to="/parent-dashboard" className={styles.navLink}>Parent Dashboard</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Safe & Fun Food Ordering for Kids
            </h1>
            <p className={styles.heroDescription}>
              KidEats provides a safe platform where children can browse delicious meals 
              while parents maintain full control over spending and food choices.
            </p>
            <div className={styles.heroButtons}>
              <Link to="/kid-menu">
                <Button size="lg" className={styles.primaryButton}>
                  Browse Kid Menu
                </Button>
              </Link>
              <Link to="/parent-dashboard">
                <Button variant="outline" size="lg" className={styles.secondaryButton}>
                  Parent Dashboard
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroImagePlaceholder}>
              <Utensils size={120} className={styles.heroIcon} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresContent}>
          <h2 className={styles.featuresTitle}>Why Choose KidEats?</h2>
          <div className={styles.featuresGrid}>
            <Card className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <Utensils />
                </div>
                <CardTitle>Kid-Friendly Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Browse colorful, appealing food items with simple descriptions and health tags
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <Shield />
                </div>
                <CardTitle>Parent Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Set budgets, restrict foods, and approve all orders before they're placed
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <Heart />
                </div>
                <CardTitle>Healthy Choices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track healthy eating progress with visual rewards and incentives
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <div className={styles.featureIcon}>
                  <Users />
                </div>
                <CardTitle>Family Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Designed for both kids and parents with age-appropriate interfaces
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaDescription}>
            Join thousands of families making mealtime fun and healthy!
          </p>
          <Link to="/kid-menu">
            <Button size="lg" className={styles.ctaButton}>
              Start Browsing Menu
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Utensils className={styles.footerLogoIcon} />
            <span className={styles.footerLogoText}>KidEats</span>
          </div>
          <p className={styles.footerText}>
            Making mealtime safe, fun, and healthy for families everywhere.
          </p>
        </div>
      </footer>
    </div>
  );
}
