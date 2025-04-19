import React from "react";
import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card/card";
import styles from "./card-example.module.css";

export function CardExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Basic Card</h4>
        <Card className={styles.card}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This is the main content of the card. You can place any elements
              here.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      </div>

      <div className={styles.section}>
        <h4>Info Card</h4>
        <Card className={styles.card}>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={styles.row}>
              <span className={styles.label}>Name:</span>
              <span>John Doe</span>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>Email:</span>
              <span>john.doe@example.com</span>
            </div>
            <div className={styles.row}>
              <span className={styles.label}>Status:</span>
              <span className={styles.badge}>Active</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
