import React from "react";
import { Button } from "@/components/ui/button/button";
import styles from "./button-example.module.css";

export function ButtonExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Button Variants</h4>
        <div className={styles.row}>
          <Button>Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Button Sizes</h4>
        <div className={styles.row}>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">Icon</Button>
        </div>
      </div>
    </div>
  );
}
