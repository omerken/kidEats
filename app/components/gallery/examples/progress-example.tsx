import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress/progress";
import styles from "./progress-example.module.css";

export function ProgressExample() {
  const [progress, setProgress] = useState(13);

  // Simulate progress animation for demo
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Basic Progress</h4>
        <Progress value={progress} className={styles.progress} />
        <div className={styles.label}>{progress}%</div>
      </div>

      <div className={styles.section}>
        <h4>Static Values</h4>
        <div className={styles.column}>
          <div>
            <Progress value={0} className={styles.progress} />
            <div className={styles.label}>0%</div>
          </div>

          <div>
            <Progress value={25} className={styles.progress} />
            <div className={styles.label}>25%</div>
          </div>

          <div>
            <Progress value={50} className={styles.progress} />
            <div className={styles.label}>50%</div>
          </div>

          <div>
            <Progress value={75} className={styles.progress} />
            <div className={styles.label}>75%</div>
          </div>

          <div>
            <Progress value={100} className={styles.progress} />
            <div className={styles.label}>100%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
