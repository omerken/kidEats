import React from "react";
import styles from "./separator-example.module.css";
import { Separator } from "@/components/ui/separator/separator";

export function SeparatorExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Horizontal Separator</h4>
        <div className={styles.demo}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h5>Introduction</h5>
              <p>
                Separators help divide content into clear sections and groups,
                aiding in visual organization of a layout.
              </p>
            </div>
            <Separator className={styles.separator} />
            <div className={styles.text}>
              <h5>Usage Guidelines</h5>
              <p>
                Use separators sparingly to avoid creating too many fragmented
                sections. They work best when content needs clear visual
                distinction.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Vertical Separator</h4>
        <div className={styles.demo}>
          <div className={styles.verticalContainer}>
            <div className={styles.column}>
              <h5>Left Column</h5>
              <p>This content is in the left section of the layout.</p>
            </div>
            <Separator
              orientation="vertical"
              className={styles.verticalSeparator}
            />
            <div className={styles.column}>
              <h5>Right Column</h5>
              <p>This content is in the right section of the layout.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Decorative Separator</h4>
        <div className={styles.demo}>
          <div className={styles.decorativeExample}>
            <h5 className={styles.decorativeTitle}>Section Title</h5>
            <Separator className={styles.decorativeSeparator} />
            <p>
              This separator has custom styling to make it more visually
              appealing.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Separators in a List</h4>
        <div className={styles.demo}>
          <div className={styles.listExample}>
            <div className={styles.listItem}>First Item</div>
            <Separator className={styles.listSeparator} />
            <div className={styles.listItem}>Second Item</div>
            <Separator className={styles.listSeparator} />
            <div className={styles.listItem}>Third Item</div>
            <Separator className={styles.listSeparator} />
            <div className={styles.listItem}>Fourth Item</div>
          </div>
        </div>
      </div>
    </div>
  );
}
