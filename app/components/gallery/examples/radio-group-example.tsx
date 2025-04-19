import React from "react";
import styles from "./radio-group-example.module.css";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group/radio-group";

export function RadioGroupExample() {
  return (
    <div className={styles.container}>
      <div className={styles.demo}>
        <div className={styles.radioExamples}>
          <div>
            <h4 className={styles.title}>
              Select your preferred notification method
            </h4>
            <RadioGroup defaultValue="email" className={styles.radioGroup}>
              <RadioGroupItem value="email" id="email" />
              <RadioGroupItem value="sms" id="sms" />
              <RadioGroupItem value="push" id="push" />
            </RadioGroup>
          </div>

          <div>
            <h4 className={styles.title}>Select your subscription plan</h4>
            <RadioGroup defaultValue="monthly" className={styles.radioGroup}>
              <RadioGroupItem value="monthly" id="monthly" />
              <RadioGroupItem value="yearly" id="yearly" />
              <RadioGroupItem value="lifetime" id="lifetime" />
            </RadioGroup>
          </div>

          <div>
            <h4 className={styles.title}>Disabled options example</h4>
            <RadioGroup defaultValue="option1" className={styles.radioGroup}>
              <RadioGroupItem value="option1" id="option1" />
              <RadioGroupItem value="option2" id="option2" disabled />
              <RadioGroupItem value="option3" id="option3" />
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
