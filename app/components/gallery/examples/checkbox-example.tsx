import React from "react";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import styles from "./checkbox-example.module.css";

export function CheckboxExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Basic Checkbox</h4>
        <div className={styles.checkboxItem}>
          <Checkbox id="terms" />
          <label htmlFor="terms" className={styles.label}>
            Accept terms and conditions
          </label>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Checkbox States</h4>
        <div className={styles.column}>
          <div className={styles.checkboxItem}>
            <Checkbox id="default" />
            <label htmlFor="default" className={styles.label}>
              Default
            </label>
          </div>

          <div className={styles.checkboxItem}>
            <Checkbox id="checked" defaultChecked />
            <label htmlFor="checked" className={styles.label}>
              Checked
            </label>
          </div>

          <div className={styles.checkboxItem}>
            <Checkbox id="disabled" disabled />
            <label htmlFor="disabled" className={styles.label}>
              Disabled
            </label>
          </div>

          <div className={styles.checkboxItem}>
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <label htmlFor="disabled-checked" className={styles.label}>
              Disabled and Checked
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
