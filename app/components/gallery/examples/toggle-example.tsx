import React from "react";
import styles from "./toggle-example.module.css";
import { Toggle } from "@/components/ui/toggle/toggle";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group/toggle-group";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react";

export function ToggleExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Basic Toggle</h4>
        <div className={styles.row}>
          <Toggle aria-label="Toggle bold">
            <Bold className={styles.icon} />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <Italic className={styles.icon} />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className={styles.icon} />
          </Toggle>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Toggle Variants</h4>
        <div className={styles.row}>
          <Toggle variant="default" aria-label="Toggle bold">
            Default
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            Outline
          </Toggle>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Toggle Sizes</h4>
        <div className={styles.row}>
          <Toggle size="sm" aria-label="Small toggle">
            <Bold className={styles.iconSm} />
          </Toggle>
          <Toggle size="default" aria-label="Default toggle">
            <Bold className={styles.icon} />
          </Toggle>
          <Toggle size="lg" aria-label="Large toggle">
            <Bold className={styles.iconLg} />
          </Toggle>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Toggle Group (Single)</h4>
        <div className={styles.row}>
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className={styles.icon} />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className={styles.icon} />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className={styles.icon} />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="Justify">
              <AlignJustify className={styles.icon} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Toggle Group (Multiple)</h4>
        <div className={styles.row}>
          <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className={styles.icon} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className={styles.icon} />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className={styles.icon} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Toggle Group Variants</h4>
        <div className={styles.stack}>
          <ToggleGroup type="single" variant="default">
            <ToggleGroupItem value="1">Default 1</ToggleGroupItem>
            <ToggleGroupItem value="2">Default 2</ToggleGroupItem>
            <ToggleGroupItem value="3">Default 3</ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup type="single" variant="outline">
            <ToggleGroupItem value="1">Outline 1</ToggleGroupItem>
            <ToggleGroupItem value="2">Outline 2</ToggleGroupItem>
            <ToggleGroupItem value="3">Outline 3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Toggle Group Sizes</h4>
        <div className={styles.stack}>
          <ToggleGroup type="single" size="sm">
            <ToggleGroupItem value="1">Small</ToggleGroupItem>
            <ToggleGroupItem value="2">Small</ToggleGroupItem>
            <ToggleGroupItem value="3">Small</ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup type="single" size="default">
            <ToggleGroupItem value="1">Default</ToggleGroupItem>
            <ToggleGroupItem value="2">Default</ToggleGroupItem>
            <ToggleGroupItem value="3">Default</ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup type="single" size="lg">
            <ToggleGroupItem value="1">Large</ToggleGroupItem>
            <ToggleGroupItem value="2">Large</ToggleGroupItem>
            <ToggleGroupItem value="3">Large</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}
