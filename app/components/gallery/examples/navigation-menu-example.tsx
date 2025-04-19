import React from "react";
import styles from "./navigation-menu-example.module.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu/navigation-menu";
import {
  BarChart3,
  Building2,
  CircleHelp,
  Code2,
  FileText,
  Globe,
  LayoutDashboard,
  LineChart,
  ListChecks,
  MessageSquare,
  Settings,
  Shield,
  ShoppingCart,
  Users2,
} from "lucide-react";

const features = [
  {
    title: "Analytics",
    description: "Track performance metrics and gain insights",
    icon: <BarChart3 className={styles.bigIcon} />,
  },
  {
    title: "Reporting",
    description: "Generate comprehensive business reports",
    icon: <FileText className={styles.bigIcon} />,
  },
  {
    title: "Automation",
    description: "Streamline workflows and save time",
    icon: <Settings className={styles.bigIcon} />,
  },
  {
    title: "Collaboration",
    description: "Work together with your team seamlessly",
    icon: <Users2 className={styles.bigIcon} />,
  },
];

const products = [
  {
    name: "Dashboard",
    href: "#",
    description: "Overview of key metrics",
    icon: <LayoutDashboard className={styles.icon} />,
  },
  {
    name: "Analytics",
    href: "#",
    description: "Performance insights",
    icon: <LineChart className={styles.icon} />,
  },
  {
    name: "Customers",
    href: "#",
    description: "User management",
    icon: <Users2 className={styles.icon} />,
  },
  {
    name: "Ecommerce",
    href: "#",
    description: "Online store functionality",
    icon: <ShoppingCart className={styles.icon} />,
  },
  {
    name: "Enterprise",
    href: "#",
    description: "Solutions for large organizations",
    icon: <Building2 className={styles.icon} />,
  },
  {
    name: "Security",
    href: "#",
    description: "Advanced protection features",
    icon: <Shield className={styles.icon} />,
  },
];

const resources = [
  {
    name: "Documentation",
    href: "#",
    icon: <FileText className={styles.icon} />,
  },
  { name: "API Reference", href: "#", icon: <Code2 className={styles.icon} /> },
  { name: "Support", href: "#", icon: <CircleHelp className={styles.icon} /> },
  {
    name: "Community",
    href: "#",
    icon: <MessageSquare className={styles.icon} />,
  },
];

export function NavigationMenuExample() {
  return (
    <div className={styles.container}>
      <div className={styles.demo}>
        <div className={styles.navigationDemo}>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={styles.contentGrid}>
                    {features.map((feature, index) => (
                      <a key={index} href="#" className={styles.featureCard}>
                        {feature.icon}
                        <h3 className={styles.featureTitle}>{feature.title}</h3>
                        <p className={styles.featureDescription}>
                          {feature.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={styles.contentFullWidth}>
                    <div className={styles.contentList}>
                      {products.map((product, index) => (
                        <a
                          key={index}
                          href={product.href}
                          className={styles.link}
                        >
                          {product.icon}
                          <span>{product.name}</span>
                        </a>
                      ))}
                    </div>
                    <div className={styles.callout}>
                      <h3 className={styles.calloutTitle}>
                        Enterprise Solution
                      </h3>
                      <p className={styles.calloutDescription}>
                        Unlock advanced features and priority support with our
                        enterprise plan.
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={styles.contentItem}>
                    <h3 className={styles.contentHeader}>Resources</h3>
                    <div className={styles.contentList}>
                      {resources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.href}
                          className={styles.link}
                        >
                          {resource.icon} {resource.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={styles.link}
                  style={{
                    height: "var(--size-10)",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <Globe className={styles.icon} /> Company
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
