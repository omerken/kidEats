import * as React from "react";
import { Label } from "@/components/ui/label/label";
import { Input } from "@/components/ui/input/input";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group/radio-group";
import styles from "./label-example.module.css";

export function LabelExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Label with Input</h3>
        <div className={styles.formGroup}>
          <Label htmlFor="label-example-firstName">First name</Label>
          <Input
            id="label-example-firstName"
            placeholder="Enter your first name"
          />
        </div>
        <div className={styles.formGroup}>
          <Label htmlFor="label-example-email">Email address</Label>
          <Input
            id="label-example-email"
            type="email"
            placeholder="example@domain.com"
          />
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Label with Checkbox</h3>
        <div className={styles.checkboxGroup}>
          <Checkbox id="label-example-terms" />
          <Label htmlFor="label-example-terms">
            Accept terms and conditions
          </Label>
        </div>
        <div className={styles.checkboxGroup}>
          <Checkbox id="label-example-marketing" />
          <Label htmlFor="label-example-marketing">
            Receive marketing emails
          </Label>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Label with Radio Group</h3>
        <RadioGroup defaultValue="comfortable">
          <div className={styles.radioItem}>
            <RadioGroupItem value="default" id="label-example-default" />
            <Label htmlFor="label-example-default">Default</Label>
          </div>
          <div className={styles.radioItem}>
            <RadioGroupItem
              value="comfortable"
              id="label-example-comfortable"
            />
            <Label htmlFor="label-example-comfortable">Comfortable</Label>
          </div>
          <div className={styles.radioItem}>
            <RadioGroupItem value="compact" id="label-example-compact" />
            <Label htmlFor="label-example-compact">Compact</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
