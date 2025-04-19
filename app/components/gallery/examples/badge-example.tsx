import React from "react";
import { Badge } from "@/components/ui/badge/badge";
import styles from "./badge-example.module.css";

export function BadgeExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Badge Variants</h4>
        <div className={styles.row}>
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Badge Usage Examples</h4>
        <div className={styles.row}>
          <Badge>New</Badge>
          <Badge variant="secondary">In Progress</Badge>
          <Badge variant="destructive">Error</Badge>
          <Badge variant="outline">Beta</Badge>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Badge with Icons</h4>
        <div className={styles.row}>
          <Badge className={styles.iconBadge}>
            <span className={styles.dot}></span>
            Online
          </Badge>
          <Badge variant="secondary" className={styles.iconBadge}>
            <span className={styles.star}>★</span>
            Featured
          </Badge>
        </div>
      </div>
    </div>
  );
}
