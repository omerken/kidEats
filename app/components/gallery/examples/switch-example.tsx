import React from "react";
import { Switch } from "@/components/ui/switch/switch";
import styles from "./switch-example.module.css";

export function SwitchExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Basic Switch</h4>
        <div className={styles.switchItem}>
          <Switch id="airplane-mode" />
          <label htmlFor="airplane-mode" className={styles.label}>
            Airplane Mode
          </label>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Switch States</h4>
        <div className={styles.column}>
          <div className={styles.switchItem}>
            <Switch id="default-switch" />
            <label htmlFor="default-switch" className={styles.label}>
              Default
            </label>
          </div>

          <div className={styles.switchItem}>
            <Switch id="checked-switch" defaultChecked />
            <label htmlFor="checked-switch" className={styles.label}>
              Checked
            </label>
          </div>

          <div className={styles.switchItem}>
            <Switch id="disabled-switch" disabled />
            <label htmlFor="disabled-switch" className={styles.label}>
              Disabled
            </label>
          </div>

          <div className={styles.switchItem}>
            <Switch id="disabled-checked-switch" disabled defaultChecked />
            <label htmlFor="disabled-checked-switch" className={styles.label}>
              Disabled and Checked
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
