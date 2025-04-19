import React from "react";
import styles from "./popover-example.module.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover/popover";
import { Button } from "@/components/ui/button/button";

export function PopoverExample() {
  return (
    <div className={styles.container}>
      <div className={styles.demo}>
        <Popover>
          <PopoverTrigger asChild>
            <Button>Edit Profile</Button>
          </PopoverTrigger>
          <PopoverContent className={styles.popoverContent}>
            <div className={styles.input}>
              <label className={styles.inputLabel} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                className={styles.inputField}
                defaultValue="John Doe"
              />
            </div>
            <div className={styles.input}>
              <label className={styles.inputLabel} htmlFor="username">
                Username
              </label>
              <input
                id="username"
                className={styles.inputField}
                defaultValue="@johndoe"
              />
            </div>
            <div className={styles.buttonGroup}>
              <button
                className={`${styles.popoverButton} ${styles.cancelButton}`}
              >
                Cancel
              </button>
              <button
                className={`${styles.popoverButton} ${styles.submitButton}`}
              >
                Save
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
