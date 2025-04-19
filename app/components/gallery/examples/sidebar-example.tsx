import React, { useState } from "react";
import styles from "./sidebar-example.module.css";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarGroup,
  SidebarMenuItem,
} from "@/components/ui/sidebar/sidebar";
import {
  Layers,
  Type,
  Layout,
  Navigation,
  Layers3,
  MonitorSmartphone,
  MessageSquare,
  Palette,
} from "lucide-react";

const COMPONENT_COUNTS = {
  theme: 5,
  input: 11,
  layout: 9,
  navigation: 4,
  overlay: 8,
  display: 7,
  feedback: 3,
};

interface SidebarExampleProps {
  onCategorySelect?: (category: string) => void;
}

export function SidebarExample({ onCategorySelect }: SidebarExampleProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);

    // Call the prop function if provided
    if (onCategorySelect) {
      onCategorySelect(category);
    } else {
      // Fallback for when used as a standalone example
      const element = document.getElementById(category);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarHeader>
            <div
              className={styles.logoContainer}
              onClick={() => handleCategorySelect("all")}
              style={{ cursor: "pointer" }}
            >
              <Layers className={styles.logo} />
              <span className={styles.logoText}>UI Gallery</span>
            </div>
          </SidebarHeader>
          <SidebarMenu>
            <SidebarGroup>
              <div className={styles.navSection}>
                <div className={styles.navLabel}>Components</div>
                <a
                  className={`${styles.navItem} ${
                    selectedCategory === "all" ? styles.navItemActive : ""
                  }`}
                  onClick={() => handleCategorySelect("all")}
                  role="button"
                  tabIndex={0}
                  aria-label="All Components"
                >
                  <Layers3 className={styles.navIcon} />
                  All Components
                </a>
                <a
                  className={`${styles.navItem} ${
                    selectedCategory === "theme" ? styles.navItemActive : ""
                  }`}
                  onClick={() => handleCategorySelect("theme")}
                  role="button"
                  tabIndex={0}
                  aria-label="Theme Variables"
                >
                  <Palette className={styles.navIcon} />
                  Theme Variables
                  <span className={styles.badge}>{COMPONENT_COUNTS.theme}</span>
                </a>
                <a
                  className={`${styles.navItem} ${
                    selectedCategory === "input" ? styles.navItemActive : ""
                  }`}
                  onClick={() => handleCategorySelect("input")}
                  role="button"
                  tabIndex={0}
                  aria-label="Input Components"
                >
                  <Type className={styles.navIcon} />
                  Input Components
                  <span className={styles.badge}>{COMPONENT_COUNTS.input}</span>
                </a>
                <a
                  className={`${styles.navItem} ${
                    selectedCategory === "layout" ? styles.navItemActive : ""
                  }`}
                  onClick={() => handleCategorySelect("layout")}
                  role="button"
                  tabIndex={0}
                  aria-label="Layout Components"
                >
                  <Layout className={styles.navIcon} />
                  Layout Components
                  <span className={styles.badge}>
                    {COMPONENT_COUNTS.layout}
                  </span>
                </a>
                <a
                  className={`${styles.navItem} ${
                    selectedCategory === "navigation"
                      ? styles.navItemActive
                      : ""
                  }`}
                  onClick={() => handleCategorySelect("navigation")}
                  role="button"
                  tabIndex={0}
                  aria-label="Navigation Components"
                >
                  <Navigation className={styles.navIcon} />
                  Navigation Components
                  <span className={styles.badge}>
                    {COMPONENT_COUNTS.navigation}
                  </span>
                </a>
                <a
                  className={`${styles.navItem} ${
                    selectedCategory === "overlay" ? styles.navItemActive : ""
                  }`}
                  onClick={() => handleCategorySelect("overlay")}
                  role="button"
                  tabIndex={0}
                  aria-label="Overlay Components"
                >
                  <Layers3 className={styles.navIcon} />
                  Overlay Components
                  <span className={styles.badge}>
                    {COMPONENT_COUNTS.overlay}
                  </span>
                </a>
                <a
                  className={`${styles.navItem} ${
                    selectedCategory === "display" ? styles.navItemActive : ""
                  }`}
                  onClick={() => handleCategorySelect("display")}
                  role="button"
                  tabIndex={0}
                  aria-label="Display Components"
                >
                  <MonitorSmartphone className={styles.navIcon} />
                  Display Components
                  <span className={styles.badge}>
                    {COMPONENT_COUNTS.display}
                  </span>
                </a>
                <a
                  className={`${styles.navItem} ${
                    selectedCategory === "feedback" ? styles.navItemActive : ""
                  }`}
                  onClick={() => handleCategorySelect("feedback")}
                  role="button"
                  tabIndex={0}
                  aria-label="Feedback Components"
                >
                  <MessageSquare className={styles.navIcon} />
                  Feedback Components
                  <span className={styles.badge}>
                    {COMPONENT_COUNTS.feedback}
                  </span>
                </a>
              </div>
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
