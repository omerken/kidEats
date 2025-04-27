"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import classNames from "classnames";
import styles from "./separator.module.css";

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={classNames(styles.root, orientation === "horizontal" ? styles.horizontal : styles.vertical, className)}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
