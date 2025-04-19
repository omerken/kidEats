import React from "react";
import styles from "./toaster-example.module.css";
import { Button } from "@/components/ui/button/button";
import { useToast } from "@/hooks/use-toast";
import {
  InfoIcon,
  AlertTriangle,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export function ToasterExample() {
  const { toast } = useToast();

  const showToast = (
    type?: "default" | "position" | "persistent" | "styled"
  ) => {
    switch (type) {
      case "position":
        // We can't actually control position but we can illustrate it with styling
        toast({
          title: "Position Example",
          description:
            "Toasts typically appear at the bottom-right of the screen by default on desktop",
          className: styles.positionToast,
        });
        break;
      case "persistent":
        toast({
          title: "Persistent Toast",
          description: "This toast will stay visible until manually dismissed.",
          duration: Infinity,
          className: styles.positionToast,
        });
        break;
      case "styled":
        toast({
          title: "Custom Styled Toast",
          description:
            "Toasts can be styled to match your application's design language",
          className: styles.customStyled,
        });
        break;
      default:
        toast({
          title: "Default Toast",
          description: "This is a standard toast notification",
          className: styles.defaultToast,
        });
        break;
    }
  };

  const showIconToast = (type: "info" | "warning" | "success") => {
    const icons = {
      info: <InfoIcon className={styles.infoIcon} />,
      warning: <AlertTriangle className={styles.warningIcon} />,
      success: <CheckCircle className={styles.successIcon} />,
    };

    const titles = {
      info: "Information",
      warning: "Warning",
      success: "Success",
    };

    const descriptions = {
      info: "This is an informational notification.",
      warning: "This is a warning notification.",
      success: "Operation completed successfully!",
    };

    toast({
      title: titles[type],
      description: descriptions[type],
      className: styles[type],
      icon: icons[type],
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Toast Types</h4>
        <p className={styles.description}>
          The Toaster component can display different types of toast
          notifications.
        </p>
        <div className={styles.actions}>
          <Button onClick={() => showToast()} className={styles.button}>
            Default Toast
          </Button>
          <Button
            onClick={() => showToast("position")}
            className={styles.button}
          >
            Position Example
          </Button>
          <Button
            onClick={() => showToast("persistent")}
            className={styles.button}
          >
            Persistent Toast
          </Button>
          <Button onClick={() => showToast("styled")} className={styles.button}>
            Styled Toast
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Toast with Icons</h4>
        <p className={styles.description}>
          Toasts can include icons to provide visual cues about the type of
          notification.
        </p>
        <div className={styles.actions}>
          <Button
            onClick={() => showIconToast("info")}
            className={styles.infoButton}
          >
            <InfoIcon size={16} className={styles.buttonIcon} />
            Info
          </Button>
          <Button
            onClick={() => showIconToast("warning")}
            className={styles.warningButton}
          >
            <AlertTriangle size={16} className={styles.buttonIcon} />
            Warning
          </Button>
          <Button
            onClick={() => showIconToast("success")}
            className={styles.successButton}
          >
            <CheckCircle size={16} className={styles.buttonIcon} />
            Success
          </Button>
        </div>
      </div>

      <div className={styles.infoNote}>
        <p>
          <strong>Note:</strong> The Toaster component is added once at the
          application root level. It manages toast notifications across the
          entire app. In most implementations, toasts appear at the bottom-right
          corner of the screen on desktop and at the bottom on mobile. The
          position is controlled by the component's internal styling and not
          typically configurable per-toast.
        </p>
      </div>
    </div>
  );
}
