"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import classNames from "classnames";
import styles from "./label.module.css";

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={classNames(styles.label, className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
