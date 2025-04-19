"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import classNames from "classnames";
import styles from "./toggle-group.module.css";

type ToggleVariants = {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
};

const ToggleGroupContext = React.createContext<ToggleVariants>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    ToggleVariants
>(
  (
    { className, variant = "default", size = "default", children, ...props },
    ref
  ) => (
    <ToggleGroupPrimitive.Root
      ref={ref}
      className={classNames(styles.root, className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
);
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ComponentRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    ToggleVariants
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);
  const itemVariant = variant || context.variant;
  const itemSize = size || context.size;

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={classNames(
        styles.item,
        itemVariant === "default" && styles.itemDefault,
        itemVariant === "outline" && styles.itemOutline,
        itemSize === "sm" && styles.sizeSm,
        itemSize === "default" && styles.sizeDefault,
        itemSize === "lg" && styles.sizeLg,
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
