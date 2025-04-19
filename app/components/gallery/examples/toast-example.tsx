import React from "react";
import styles from "./toast-example.module.css";
import { Button } from "@/components/ui/button/button";
import { useToast } from "@/hooks/use-toast";

export function ToastExample() {
  const { toast } = useToast();

  const showDefaultToast = () => {
    toast({
      title: "Default Toast",
      description: "This is a default toast notification.",
    });
  };

  const showDestructiveToast = () => {
    toast({
      variant: "destructive",
      title: "Destructive Toast",
      description: "This action cannot be undone.",
    });
  };

  const showToastWithAction = () => {
    toast({
      title: "New Message",
      description: "You received a new message from a user.",
      action: (
        <Button
          variant="outline"
          size="sm"
          onClick={() => console.log("Toast action clicked")}
        >
          View
        </Button>
      ),
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Toast Examples</h4>
        <p className={styles.description}>
          Toast components display brief, temporary notifications that appear at
          the edge of the screen. Click the buttons below to see different types
          of toasts.
        </p>
        <div className={styles.actions}>
          <Button onClick={showDefaultToast} className={styles.button}>
            Default Toast
          </Button>
          <Button
            onClick={showDestructiveToast}
            variant="destructive"
            className={styles.button}
          >
            Destructive Toast
          </Button>
          <Button
            onClick={showToastWithAction}
            variant="outline"
            className={styles.button}
          >
            Toast with Action
          </Button>
        </div>
      </div>
    </div>
  );
}
