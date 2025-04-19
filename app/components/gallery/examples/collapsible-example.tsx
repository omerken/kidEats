import React, { useState } from "react";
import styles from "./collapsible-example.module.css";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible/collapsible";
import { Button } from "@/components/ui/button/button";
import { ChevronsUpDown } from "lucide-react";

export function CollapsibleExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className={styles.collapsible}
      >
        <div className={styles.header}>
          <h4>Collapsible Content</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className={styles.trigger}>
              <ChevronsUpDown className={styles.icon} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>

        <div className={styles.preview}>
          Preview of the content. Click the button to see more...
        </div>

        <CollapsibleContent className={styles.content}>
          <div className={styles.contentInner}>
            <p>
              This is the collapsible content. It can be expanded or collapsed
              with the trigger button. Collapsibles are useful for reducing UI
              clutter when you have content that doesn't need to be visible all
              the time.
            </p>
            <p>
              They're commonly used in FAQs, settings panels, navigation menus,
              and anywhere you need to save space while keeping content
              accessible.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
