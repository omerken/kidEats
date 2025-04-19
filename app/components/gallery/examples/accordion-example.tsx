import React from "react";
import styles from "./accordion-example.module.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";

export function AccordionExample() {
  return (
    <div className={styles.container}>
      <Accordion type="single" collapsible className={styles.accordion}>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is an accordion?</AccordionTrigger>
          <AccordionContent>
            An accordion is a vertically stacked set of interactive headings
            that each reveal a section of content.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How to use accordions</AccordionTrigger>
          <AccordionContent>
            Use accordions to streamline your interface by hiding content until
            it's needed. They're commonly used for FAQs, nested navigation, or
            to reduce scrolling on pages with multiple sections.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Best practices</AccordionTrigger>
          <AccordionContent>
            Keep header text short and descriptive. Ensure content within each
            panel relates directly to its header. Consider accessibility by
            ensuring keyboard navigation works properly.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
