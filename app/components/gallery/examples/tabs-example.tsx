import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs/tabs";
import styles from "./tabs-example.module.css";

export function TabsExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Basic Tabs</h4>
        <Tabs defaultValue="account" className={styles.tabs}>
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className={styles.tabContent}>
            <p>Account settings and preferences.</p>
            <div className={styles.fakeInput}>name@example.com</div>
          </TabsContent>
          <TabsContent value="password" className={styles.tabContent}>
            <p>Change your password here.</p>
            <div className={styles.fakeInput}>••••••••</div>
          </TabsContent>
        </Tabs>
      </div>

      <div className={styles.section}>
        <h4>Multiple Tabs</h4>
        <Tabs defaultValue="tab1" className={styles.tabs}>
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            <TabsTrigger value="tab4">Tab 4</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className={styles.tabContent}>
            <p>Content for Tab 1</p>
          </TabsContent>
          <TabsContent value="tab2" className={styles.tabContent}>
            <p>Content for Tab 2</p>
          </TabsContent>
          <TabsContent value="tab3" className={styles.tabContent}>
            <p>Content for Tab 3</p>
          </TabsContent>
          <TabsContent value="tab4" className={styles.tabContent}>
            <p>Content for Tab 4</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
