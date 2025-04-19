import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area/scroll-area";
import { Image, Code, Calendar, Mail } from "lucide-react";
import styles from "./scroll-area-example.module.css";

export function ScrollAreaExample() {
  // Content for text scrolling example
  const articleContent = (
    <div className={styles.articleContent}>
      <h3 className={styles.articleTitle}>Understanding Scroll Areas</h3>
      <div className={styles.articleMeta}>
        <span>
          <Calendar size={14} /> May 20, 2023
        </span>
        <span>
          <Mail size={14} /> 5 comments
        </span>
      </div>

      <div className={styles.imageContainer}>
        <Image size={24} />
        <span style={{ marginLeft: 8 }}>Image Placeholder</span>
      </div>

      <div>
        <span className={styles.tag}>UI Components</span>
        <span className={styles.tag}>React</span>
        <span className={styles.tag}>Accessibility</span>
        <span className={styles.tag}>UX Design</span>
      </div>

      <p>
        Scroll areas are essential UI elements that enable content to be viewed
        in a constrained space. By implementing custom scrollbars, we can
        maintain design consistency across different operating systems and
        browsers while enhancing the user experience.
      </p>

      <p>
        Modern web applications often require custom scrolling behaviors to
        accommodate different types of content. From long text articles to
        horizontal image galleries, a flexible scroll area component can address
        these needs while maintaining accessibility.
      </p>

      <p>
        When implementing scroll areas, it's important to consider both
        horizontal and vertical scrolling needs. Some content types, like data
        tables or image galleries, benefit from horizontal scrolling
        capabilities, while article content typically requires vertical
        scrolling.
      </p>

      <p>
        Accessibility considerations are also crucial when implementing custom
        scroll behaviors. Ensure that keyboard navigation works properly and
        that the scrollbar is visible and intuitive for all users.
      </p>
    </div>
  );

  // Content for horizontal scrolling example
  const cards = Array.from({ length: 10 }, (_, i) => (
    <div key={i} className={styles.card}>
      <div className={styles.cardImage}>Card {i + 1}</div>
      <div className={styles.cardContent}>
        <h4 className={styles.cardTitle}>Card Title {i + 1}</h4>
        <p>Brief description for card {i + 1}</p>
      </div>
    </div>
  ));

  // Mixed content for another example
  const mixedContent = (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className={styles.mixedItem}>
          <h4>Item {i + 1}</h4>
          <p>
            This is a mixed content item that demonstrates scrolling with
            different content types.
          </p>
          {i % 2 === 0 && (
            <div className={styles.imageContainer}>
              <Code size={24} />
              <span style={{ marginLeft: 8 }}>Visual Element {i + 1}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Vertical Scrolling</h2>
        <p>
          A standard scroll area for vertical content with custom scrollbar
          styling.
        </p>

        <div className={styles.exampleRow}>
          <ScrollArea className={styles.scrollDemo}>
            {articleContent}
          </ScrollArea>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Horizontal Scrolling</h2>
        <p>Horizontal scroll area for card galleries or similar content.</p>

        <div className={styles.exampleRow}>
          <ScrollArea
            className={`${styles.scrollDemo} ${styles.scrollDemoWide}`}
          >
            <div className={styles.horizontalContent}>{cards}</div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Mixed Content</h2>
        <p>
          Both horizontal and vertical scrolling may be needed for mixed content
          types.
        </p>

        <div className={styles.exampleRow}>
          <ScrollArea className={styles.scrollDemo}>{mixedContent}</ScrollArea>
        </div>
      </section>
    </div>
  );
}
