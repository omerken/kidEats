import React from "react";
import styles from "./slider-example.module.css";
import { Slider } from "@/components/ui/slider/slider";

export function SliderExample() {
  return (
    <div className={styles.container}>
      <div className={styles.demo}>
        <div className={styles.sliderExamples}>
          <div className={styles.sliderExample}>
            <h4 className={styles.title}>Basic Slider</h4>
            <p className={styles.description}>
              A simple slider with default settings
            </p>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>

          <div className={styles.sliderExample}>
            <h4 className={styles.title}>Range Slider</h4>
            <p className={styles.description}>
              Select a range between two values
            </p>
            <Slider defaultValue={[25, 75]} max={100} step={1} />
          </div>

          <div className={styles.sliderExample}>
            <h4 className={styles.title}>Slider with Value Display</h4>
            <p className={styles.description}>Shows the current value</p>
            <Slider defaultValue={[40]} max={100} step={1} />
          </div>

          <div className={styles.sliderExample}>
            <h4 className={styles.title}>Disabled Slider</h4>
            <p className={styles.description}>Cannot be interacted with</p>
            <Slider defaultValue={[60]} max={100} step={1} disabled />
          </div>
        </div>
      </div>
    </div>
  );
}
