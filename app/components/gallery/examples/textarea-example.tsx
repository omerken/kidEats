import React from "react";
import { Textarea } from "@/components/ui/textarea/textarea";
import styles from "./textarea-example.module.css";

export function TextareaExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Basic Textarea</h4>
        <Textarea placeholder="Enter your message" />
      </div>

      <div className={styles.section}>
        <h4>Textarea States</h4>
        <div className={styles.column}>
          <Textarea placeholder="Default" />
          <Textarea placeholder="Disabled" disabled />
          <Textarea
            placeholder="Read only"
            readOnly
            value="This is a read-only textarea content that cannot be modified by the user."
          />
          <Textarea
            placeholder="With default value"
            defaultValue="This textarea contains some default text that the user can edit."
          />
        </div>
      </div>

      <div className={styles.section}>
        <h4>Sized Textarea</h4>
        <Textarea placeholder="Textarea with custom rows" rows={5} />
      </div>
    </div>
  );
}
