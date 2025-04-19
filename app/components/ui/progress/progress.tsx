"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import classNames from "classnames";
import styles from "./progress.module.css";

const Progress = React.forwardRef<
  React.ComponentRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={classNames(styles.root, className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={styles.indicator}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
