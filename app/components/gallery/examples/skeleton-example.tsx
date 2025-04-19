import React from "react";
import { Skeleton } from "@/components/ui/skeleton/skeleton";
import styles from "./skeleton-example.module.css";

export function SkeletonExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Basic Shapes</h4>
        <div className={styles.basicShapes}>
          <Skeleton className={styles.rectangle} />
          <Skeleton className={styles.circle} />
          <Skeleton className={styles.line} />
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Card Skeleton</h4>
        <div className={styles.cardSkeleton}>
          <div className={styles.cardHeader}>
            <Skeleton className={styles.avatar} />
            <div className={styles.headerContent}>
              <Skeleton className={styles.title} />
              <Skeleton className={styles.subtitle} />
            </div>
          </div>
          <Skeleton className={styles.image} />
          <div className={styles.cardContent}>
            <Skeleton className={styles.text} />
            <Skeleton className={styles.text} />
            <Skeleton className={styles.text} style={{ width: "75%" }} />
          </div>
          <div className={styles.cardFooter}>
            <Skeleton className={styles.button} />
            <Skeleton className={styles.button} />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Table Skeleton</h4>
        <div className={styles.tableSkeleton}>
          <div className={styles.tableHeader}>
            <Skeleton className={styles.tableHeaderCell} />
            <Skeleton className={styles.tableHeaderCell} />
            <Skeleton className={styles.tableHeaderCell} />
          </div>
          {Array.from({ length: 3 }).map((_, rowIndex) => (
            <div key={rowIndex} className={styles.tableRow}>
              <Skeleton className={styles.tableCell} />
              <Skeleton className={styles.tableCell} />
              <Skeleton className={styles.tableCell} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
