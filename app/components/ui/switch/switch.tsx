"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import classNames from "classnames";
import styles from "./switch.module.css";

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={classNames(styles.root, className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb className={styles.thumb} />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
