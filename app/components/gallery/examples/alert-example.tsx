import React from "react";
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from "@/components/ui/alert/alert";
import styles from "./alert-example.module.css";

export function AlertExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Basic Alert</h4>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>

      <div className={styles.section}>
        <h4>Alert Variants</h4>
        <div className={styles.column}>
          <Alert>
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a default alert — check it out!
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Alert with Icon</h4>
        <Alert className={styles.withIcon}>
          <div className={styles.icon}>ℹ️</div>
          <div>
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              Your password will expire in 7 days. Please consider updating it.
            </AlertDescription>
          </div>
        </Alert>
      </div>
    </div>
  );
}
