"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import classNames from "classnames";
import styles from "./slider.module.css";

const Slider: React.FC<React.ComponentProps<typeof SliderPrimitive.Root>> = ({ className, ...props }) => (
  <SliderPrimitive.Root className={classNames(styles.root, className)} {...props}>
    <SliderPrimitive.Track className={styles.track}>
      <SliderPrimitive.Range className={styles.range} />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className={styles.thumb} />
  </SliderPrimitive.Root>
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
