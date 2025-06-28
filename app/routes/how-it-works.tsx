import type { Route } from "./+types/how-it-works";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card/card";
import { Button } from "../components/ui/button/button";
import { Link } from "react-router";
import { Users, Shield, Heart, Star, CheckCircle, ArrowRight } from "lucide-react";
import styles from "./how-it-works.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "How it Works - KidEats" },
    {
      name: "description",
      content: "Learn how KidEats makes food ordering safe and fun for kids while giving parents control",
    },
  ];
}

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Browse & Add Items",
      description: "Kids explore from our colorful, kid-friendly menu and select their favourites",
      icon: <Heart className={styles.stepIcon} />,
    },
    {
      number: 2,
      title: "Request Approval",
      description: "Orders are sent to parents for review and approval before being placed",
      icon: <Shield className={styles.stepIcon} />,
    },
    {
      number: 3,
      title: "Parent Reviews",
      description: "Parents can approve, reject, or modify orders based on budget and dietary restrictions",
      icon: <CheckCircle className={styles.stepIcon} />,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>How KidEats Works</h1>
          <p className={styles.heroDescription}>
            A simple, safe process that puts kids in control of their food choices while keeping parents in charge of
            decisions
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className={styles.steps}>
        <div className={styles.stepsContent}>
          <h2 className={styles.stepsTitle}>Simple Steps to Safe Ordering</h2>
          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div key={step.number} className={styles.stepContainer}>
                <Card className={styles.stepCard}>
                  <CardHeader className={styles.stepHeader}>
                    <div className={styles.stepNumber}>{step.number}</div>
                    {step.icon}
                    <CardTitle className={styles.stepTitle}>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={styles.stepDescription}>{step.description}</CardDescription>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && <ArrowRight className={styles.stepArrow} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresContent}>
          <h2 className={styles.featuresTitle}>Why Parents Love KidEats</h2>
          <div className={styles.featuresGrid}>
            <Card className={styles.featureCard}>
              <CardHeader>
                <Shield className={styles.featureIcon} />
                <CardTitle>Complete Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Set budgets, restrict foods, and approve every order before it's placed. You're always in control.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <Heart className={styles.featureIcon} />
                <CardTitle>Healthy Choices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Encourage healthy eating with visual rewards and clear nutritional information for every item.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className={styles.featureCard}>
              <CardHeader>
                <Users className={styles.featureIcon} />
                <CardTitle>Family Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Designed for both kids and parents with age-appropriate interfaces and clear communication.
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
          <p className={styles.ctaDescription}>Join thousands of families making mealtime fun, safe, and healthy!</p>
          <div className={styles.ctaButtons}>
            <Button size="lg" className={styles.primaryButton} asChild>
              <Link to="/">Browse Menu</Link>
            </Button>
            <Button variant="outline" size="lg" className={styles.secondaryButton} asChild>
              <Link to="/parent-dashboard">Parent Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
