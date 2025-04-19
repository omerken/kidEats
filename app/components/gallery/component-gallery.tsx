import React, { useState, useCallback } from "react";
import styles from "./component-gallery.module.css";
import { ButtonExample } from "./examples/button-example";
import { InputExample } from "./examples/input-example";
import { TextareaExample } from "./examples/textarea-example";
import { CheckboxExample } from "./examples/checkbox-example";
import { SwitchExample } from "./examples/switch-example";
import { CardExample } from "./examples/card-example";
import { BadgeExample } from "./examples/badge-example";
import { AvatarExample } from "./examples/avatar-example";
import { TooltipExample } from "./examples/tooltip-example";
import { BreadcrumbExample } from "./examples/breadcrumb-example";
import { AlertExample } from "./examples/alert-example";
import { ProgressExample } from "./examples/progress-example";
import { TabsExample } from "./examples/tabs-example";
import { AccordionExample } from "./examples/accordion-example";
import { AlertDialogExample } from "./examples/alert-dialog-example";
import { AspectRatioExample } from "./examples/aspect-ratio-example";
import { CalendarExample } from "./examples/calendar-example";
import { CarouselExample } from "./examples/carousel-example";
import { ChartExample } from "./examples/chart-example";
import { CollapsibleExample } from "./examples/collapsible-example";
import { CommandExample } from "./examples/command-example";
import { ContextMenuExample } from "./examples/context-menu-example";
import { DialogExample } from "./examples/dialog-example";
import { DrawerExample } from "./examples/drawer-example";
import { DropdownMenuExample } from "./examples/dropdown-menu-example";
import { HoverCardExample } from "./examples/hover-card-example";
import { PopoverExample } from "./examples/popover-example";
import { RadioGroupExample } from "./examples/radio-group-example";
import { SliderExample } from "./examples/slider-example";
import { SelectExample } from "./examples/select-example";
import { ToastExample } from "./examples/toast-example";
import { SkeletonExample } from "./examples/skeleton-example";
import { SheetExample } from "./examples/sheet-example";
import { PaginationExample } from "./examples/pagination-example";
import { ToggleExample } from "./examples/toggle-example";
import { TableExample } from "./examples/table-example";
import { SeparatorExample } from "./examples/separator-example";
import { LabelExample } from "./examples/label-example";
import { InputOTPExample } from "./examples/input-otp-example";
import { FormExample } from "./examples/form-example";
import { ResizableExample } from "./examples/resizable-example";
import { SidebarExample } from "./examples/sidebar-example";
import { MenubarExample } from "./examples/menubar-example";
import { NavigationMenuExample } from "./examples/navigation-menu-example";
import { ScrollAreaExample } from "./examples/scroll-area-example";
import { ToasterExample } from "./examples/toaster-example";
import { SonnerExample } from "./examples/sonner-example";

interface ComponentExampleProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function ComponentExample({
  title,
  description,
  children,
}: ComponentExampleProps) {
  return (
    <div className={styles["component-example"]}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles["component-demo"]}>{children}</div>
    </div>
  );
}

interface ComponentSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

function ComponentSection({ title, children, id }: ComponentSectionProps) {
  return (
    <section className={styles["component-section"]} id={id}>
      <h2>{title}</h2>
      <div className={styles["component-grid"]}>{children}</div>
    </section>
  );
}

// Updated GallerySidebar that enables navigation
function GallerySidebar() {
  const handleCategorySelect = useCallback((category: string) => {
    if (category === "all") {
      // Scroll to the top of the page for "All Components"
      const header = document.getElementById("gallery-header");
      if (header) {
        header.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    } else {
      const element = document.getElementById(`section-${category}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className={styles["gallery-sidebar"]}>
      <SidebarExample onCategorySelect={handleCategorySelect} />
    </div>
  );
}

export function ComponentGallery() {
  return (
    <div className={styles["gallery-with-sidebar"]}>
      <GallerySidebar />
      <div className={styles["gallery-main"]}>
        <div className={styles["component-gallery"]}>
          <div className={styles["gallery-header"]} id="gallery-header">
            <h1>UI Component Gallery</h1>
            <p>A showcase of all available UI components in the application</p>
          </div>

          <ComponentSection title="Input Components" id="section-input">
            <ComponentExample
              title="Button"
              description="Buttons allow users to trigger an action or event with a single click."
            >
              <ButtonExample />
            </ComponentExample>

            <ComponentExample
              title="Checkbox"
              description="Checkbox components allow users to select one or multiple items from a set."
            >
              <CheckboxExample />
            </ComponentExample>

            <ComponentExample
              title="Form"
              description="Form components provide a structured way to collect and validate user input using various form controls."
            >
              <FormExample />
            </ComponentExample>

            <ComponentExample
              title="Input"
              description="Input components allow users to enter text and data in a form or interface."
            >
              <InputExample />
            </ComponentExample>

            <ComponentExample
              title="Input OTP"
              description="Input OTP components allow users to enter one-time password codes with individual character inputs."
            >
              <InputOTPExample />
            </ComponentExample>

            <ComponentExample
              title="Radio Group"
              description="Radio Group components allow users to select a single option from a set of mutually exclusive choices."
            >
              <RadioGroupExample />
            </ComponentExample>

            <ComponentExample
              title="Select"
              description="Select components allow users to choose one option from a dropdown list."
            >
              <SelectExample />
            </ComponentExample>

            <ComponentExample
              title="Slider"
              description="Slider components allow users to select a value or range from a given range."
            >
              <SliderExample />
            </ComponentExample>

            <ComponentExample
              title="Switch"
              description="Switch components are used for toggling between enabled or disabled states."
            >
              <SwitchExample />
            </ComponentExample>

            <ComponentExample
              title="Textarea"
              description="Textarea components provide a multi-line text input for longer content."
            >
              <TextareaExample />
            </ComponentExample>

            <ComponentExample
              title="Toggle"
              description="Toggle components allow users to switch between different states or options, often used for toolbar controls."
            >
              <ToggleExample />
            </ComponentExample>
          </ComponentSection>

          <ComponentSection title="Layout Components" id="section-layout">
            <ComponentExample
              title="Accordion"
              description="Accordions display collapsible content panels for presenting information in a limited space."
            >
              <AccordionExample />
            </ComponentExample>

            <ComponentExample
              title="Aspect Ratio"
              description="Aspect Ratio enforces a specific ratio for its contents, useful for images, videos, and other media."
            >
              <AspectRatioExample />
            </ComponentExample>

            <ComponentExample
              title="Card"
              description="Cards are surfaces that display content and actions on a single topic."
            >
              <CardExample />
            </ComponentExample>

            <ComponentExample
              title="Collapsible"
              description="Collapsibles help hide and show content with a simple animation to save space."
            >
              <CollapsibleExample />
            </ComponentExample>

            <ComponentExample
              title="Resizable"
              description="Resizable components allow users to adjust the size of panels by dragging handles, useful for creating customizable layouts and interfaces."
            >
              <ResizableExample />
            </ComponentExample>

            <ComponentExample
              title="Separator"
              description="Separators are used to create visual divisions between content, in both horizontal and vertical orientations."
            >
              <SeparatorExample />
            </ComponentExample>

            <ComponentExample
              title="Sheet"
              description="Sheets slide in from the edge of the screen and can be positioned at any side."
            >
              <SheetExample />
            </ComponentExample>

            <ComponentExample
              title="Table"
              description="Tables display data in rows and columns with sorting, selection, and responsive features."
            >
              <TableExample />
            </ComponentExample>

            <ComponentExample
              title="Tabs"
              description="Tabs organize content into multiple sections and allow users to navigate between them."
            >
              <TabsExample />
            </ComponentExample>
          </ComponentSection>

          <ComponentSection
            title="Navigation Components"
            id="section-navigation"
          >
            <ComponentExample
              title="Breadcrumb"
              description="Breadcrumbs help users navigate and understand their location within a website's hierarchy."
            >
              <BreadcrumbExample />
            </ComponentExample>

            <ComponentExample
              title="Menubar"
              description="Menubar components provide application-style dropdown menus for navigation and commands, similar to desktop applications."
            >
              <MenubarExample />
            </ComponentExample>

            <ComponentExample
              title="Navigation Menu"
              description="Navigation Menus provide a responsive navigation interface for websites and applications, featuring dropdowns with rich content."
            >
              <NavigationMenuExample />
            </ComponentExample>

            <ComponentExample
              title="Pagination"
              description="Pagination helps users navigate through multi-page content or large data sets."
            >
              <PaginationExample />
            </ComponentExample>
          </ComponentSection>

          <ComponentSection title="Overlay Components" id="section-overlay">
            <ComponentExample
              title="Alert Dialog"
              description="Alert dialogs are modal dialogs that interrupt the user with important content and require a response."
            >
              <AlertDialogExample />
            </ComponentExample>

            <ComponentExample
              title="Context Menu"
              description="Context menus display a list of actions or options when users right-click on an element."
            >
              <ContextMenuExample />
            </ComponentExample>

            <ComponentExample
              title="Dialog"
              description="Dialogs display content that requires user interaction in a layer above the page."
            >
              <DialogExample />
            </ComponentExample>

            <ComponentExample
              title="Drawer"
              description="Drawers slide in from the edge of the screen to reveal content like navigation or forms."
            >
              <DrawerExample />
            </ComponentExample>

            <ComponentExample
              title="Dropdown Menu"
              description="Dropdown menus display a list of actions or options when a trigger button is clicked."
            >
              <DropdownMenuExample />
            </ComponentExample>

            <ComponentExample
              title="Hover Card"
              description="Hover cards display floating content when users hover over a trigger element."
            >
              <HoverCardExample />
            </ComponentExample>

            <ComponentExample
              title="Popover"
              description="Popovers display floating content in relation to a trigger element when clicked."
            >
              <PopoverExample />
            </ComponentExample>

            <ComponentExample
              title="Tooltip"
              description="Tooltips display additional information on hover or focus."
            >
              <TooltipExample />
            </ComponentExample>
          </ComponentSection>

          <ComponentSection title="Display Components" id="section-display">
            <ComponentExample
              title="Alert"
              description="Alerts display important messages to the user."
            >
              <AlertExample />
            </ComponentExample>

            <ComponentExample
              title="Avatar"
              description="Avatars are used to represent a user or entity."
            >
              <AvatarExample />
            </ComponentExample>

            <ComponentExample
              title="Badge"
              description="Badges are small status descriptors for UI elements."
            >
              <BadgeExample />
            </ComponentExample>

            <ComponentExample
              title="Calendar"
              description="Calendar components allow users to select dates and date ranges."
            >
              <CalendarExample />
            </ComponentExample>

            <ComponentExample
              title="Carousel"
              description="Carousels display multiple pieces of content in a rotating slideshow."
            >
              <CarouselExample />
            </ComponentExample>

            <ComponentExample
              title="Chart"
              description="Charts visualize data in various formats like line charts, bar charts, and more."
            >
              <ChartExample />
            </ComponentExample>

            <ComponentExample
              title="Command"
              description="Command menus provide searchable actions in a modal or inline interface."
            >
              <CommandExample />
            </ComponentExample>

            <ComponentExample
              title="Label"
              description="Label components provide accessible text labels for form controls like inputs, checkboxes, and radio buttons."
            >
              <LabelExample />
            </ComponentExample>

            <ComponentExample
              title="Progress"
              description="Progress bars indicate the completion status of an operation."
            >
              <ProgressExample />
            </ComponentExample>

            <ComponentExample
              title="Scroll Area"
              description="Scroll Areas provide a scrollable container with custom scrollbars that maintain a consistent design across different browsers and platforms."
            >
              <ScrollAreaExample />
            </ComponentExample>

            <ComponentExample
              title="Skeleton"
              description="Skeletons provide a low-fidelity representation of content before it's loaded, reducing load-time frustration."
            >
              <SkeletonExample />
            </ComponentExample>
          </ComponentSection>

          <ComponentSection title="Feedback Components" id="section-feedback">
            <ComponentExample
              title="Toast"
              description="Toasts provide brief notifications or feedback messages to users."
            >
              <ToastExample />
            </ComponentExample>

            <ComponentExample
              title="Toaster"
              description="The Toaster component manages the display of toast notifications in different positions and with various configurations."
            >
              <ToasterExample />
            </ComponentExample>

            <ComponentExample
              title="Sonner"
              description="Sonner provides modern, visually appealing toast notifications with support for different types, actions, and promise-based notifications."
            >
              <SonnerExample />
            </ComponentExample>
          </ComponentSection>
        </div>
      </div>
    </div>
  );
}
