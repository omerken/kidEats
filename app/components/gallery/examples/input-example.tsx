import React from "react";
import { Input } from "@/components/ui/input/input";
import styles from "./input-example.module.css";

export function InputExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Basic Input</h4>
        <Input placeholder="Enter your name" />
      </div>

      <div className={styles.section}>
        <h4>Input Types</h4>
        <div className={styles.column}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Number" />
          <Input type="date" />
        </div>
      </div>

      <div className={styles.section}>
        <h4>Input States</h4>
        <div className={styles.column}>
          <Input placeholder="Default" />
          <Input placeholder="Disabled" disabled />
          <Input placeholder="Read only" readOnly value="Read-only value" />
          <Input placeholder="With default value" defaultValue="Default text" />
        </div>
      </div>
    </div>
  );
}
