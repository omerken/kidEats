"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import classNames from "classnames";
import styles from "./radio-group.module.css";

const RadioGroup: React.FC<React.ComponentProps<typeof RadioGroupPrimitive.Root>> = ({ className, ...props }) => (
  <RadioGroupPrimitive.Root />
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem: React.FC<React.ComponentProps<typeof RadioGroupPrimitive.Item>> = ({ className, ...props }) => (
  <RadioGroupPrimitive.Item className={classNames(styles.item, className)} {...props}>
    <RadioGroupPrimitive.Indicator className={styles.indicator}>
      <Circle className={styles.icon} />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
