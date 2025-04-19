import React from "react";
import styles from "./aspect-ratio-example.module.css";
import { AspectRatio } from "@/components/ui/aspect-ratio/aspect-ratio";

export function AspectRatioExample() {
  return (
    <div className={styles.container}>
      <div className={styles.examples}>
        <div className={styles.example}>
          <h4>1:1 (Square)</h4>
          <div className={styles.aspectWrapper}>
            <AspectRatio ratio={1 / 1}>
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Photo by Drew Beamer"
                className={styles.image}
              />
            </AspectRatio>
          </div>
        </div>

        <div className={styles.example}>
          <h4>16:9 (Widescreen)</h4>
          <div className={styles.aspectWrapper}>
            <AspectRatio ratio={16 / 9}>
              <img
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&dpr=2&q=80"
                alt="Photo by Devin Avery"
                className={styles.image}
              />
            </AspectRatio>
          </div>
        </div>

        <div className={styles.example}>
          <h4>4:3 (Standard)</h4>
          <div className={styles.aspectWrapper}>
            <AspectRatio ratio={4 / 3}>
              <img
                src="https://images.unsplash.com/photo-1548263594-a71ea65a8598?w=800&dpr=2&q=80"
                alt="Photo by Paul Blenkhorn"
                className={styles.image}
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
}
