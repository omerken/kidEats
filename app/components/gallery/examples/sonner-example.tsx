import React from "react";
import styles from "./sonner-example.module.css";
import { Button } from "@/components/ui/button/button";
import { useToast } from "@/hooks/use-toast";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  InfoIcon,
  BellRing,
  Timer,
  Layers,
} from "lucide-react";

export function SonnerExample() {
  const { toast } = useToast();

  // Show a success toast
  const showSuccess = () => {
    toast({
      title: "Success",
      description: "Your action has been completed successfully.",
      className: styles.successToast,
      icon: <CheckCircle className={styles.successIcon} />,
    });
  };

  // Show an error toast
  const showError = () => {
    toast({
      title: "Error",
      description: "There was a problem with your request.",
      className: styles.errorToast,
      icon: <XCircle className={styles.errorIcon} />,
    });
  };

  // Show a warning toast
  const showWarning = () => {
    toast({
      title: "Warning",
      description: "This action might have consequences.",
      className: styles.warningToast,
      icon: <AlertTriangle className={styles.warningIcon} />,
    });
  };

  // Show an info toast
  const showInfo = () => {
    toast({
      title: "Information",
      description: "Here's something you should know.",
      className: styles.infoToast,
      icon: <InfoIcon className={styles.infoIcon} />,
    });
  };

  // Show a toast with an action
  const showActionToast = () => {
    toast({
      title: "New Message",
      description: "You received a new message from Alex.",
      className: styles.actionToast,
      icon: <BellRing className={styles.actionIcon} />,
      action: (
        <Button
          onClick={() => console.log("Viewed message")}
          variant="secondary"
          size="sm"
          className={styles.actionButton}
        >
          View
        </Button>
      ),
    });
  };

  // Show a promise toast
  const showPromiseToast = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.3) {
          resolve("Success! Data has been fetched.");
        } else {
          reject("Failed! Could not fetch data.");
        }
      }, 2000);
    });

    toast({
      title: "Loading",
      description: "Fetching your data...",
      className: styles.loadingToast,
      icon: <Timer className={styles.loadingIcon} />,
    });

    promise
      .then((message) => {
        toast({
          title: "Success",
          description: message as string,
          className: styles.successToast,
          icon: <CheckCircle className={styles.successIcon} />,
        });
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error,
          className: styles.errorToast,
          icon: <XCircle className={styles.errorIcon} />,
        });
      });
  };

  // Show multiple toasts at once
  const showMultipleToasts = () => {
    toast({
      title: "First Notification",
      description: "This is the first toast notification.",
      className: styles.multiToast,
      icon: <Layers className={styles.multiIcon} />,
    });

    setTimeout(() => {
      toast({
        title: "Second Notification",
        description: "This is the second toast notification.",
        className: styles.multiToast,
        icon: <Layers className={styles.multiIcon} />,
      });
    }, 500);

    setTimeout(() => {
      toast({
        title: "Third Notification",
        description: "This is the third toast notification.",
        className: styles.multiToast,
        icon: <Layers className={styles.multiIcon} />,
      });
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Notification Types</h3>
        <p className={styles.description}>
          Modern toast notifications with different styles and purposes.
        </p>
        <div className={styles.actions}>
          <Button
            onClick={showSuccess}
            className={`${styles.button} ${styles.successButton}`}
          >
            <CheckCircle size={16} className={styles.buttonIcon} />
            Success
          </Button>
          <Button
            onClick={showError}
            className={`${styles.button} ${styles.errorButton}`}
          >
            <XCircle size={16} className={styles.buttonIcon} />
            Error
          </Button>
          <Button
            onClick={showWarning}
            className={`${styles.button} ${styles.warningButton}`}
          >
            <AlertTriangle size={16} className={styles.buttonIcon} />
            Warning
          </Button>
          <Button
            onClick={showInfo}
            className={`${styles.button} ${styles.infoButton}`}
          >
            <InfoIcon size={16} className={styles.buttonIcon} />
            Info
          </Button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Advanced Features</h3>
        <p className={styles.description}>
          More complex toast notifications with interactive elements.
        </p>
        <div className={styles.actions}>
          <Button onClick={showActionToast} className={styles.button}>
            <BellRing size={16} className={styles.buttonIcon} />
            With Action
          </Button>
          <Button onClick={showPromiseToast} className={styles.button}>
            <Timer size={16} className={styles.buttonIcon} />
            Promise Toast
          </Button>
          <Button onClick={showMultipleToasts} className={styles.button}>
            <Layers size={16} className={styles.buttonIcon} />
            Multiple Toasts
          </Button>
        </div>
      </div>

      <div className={styles.infoNote}>
        <p>
          <strong>Note:</strong> The Sonner component is a modern, minimal toast
          notification system that provides a smooth user experience. It
          supports various notification types, promise-based notifications, and
          custom styling options. The examples above demonstrate different
          notification styles and behaviors that would be available in a full
          Sonner implementation.
        </p>
      </div>
    </div>
  );
}
