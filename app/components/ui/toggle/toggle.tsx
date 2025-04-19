"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import classNames from "classnames";
import styles from "./toggle.module.css";

interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant = "default", size = "default", ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={classNames(
      styles.toggle,
      styles[variant],
      size === "sm" && styles.sizeSm,
      size === "default" && styles.sizeDefault,
      size === "lg" && styles.sizeLg,
      className
    )}
    {...props}
  />
));
Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
export type { ToggleProps };
