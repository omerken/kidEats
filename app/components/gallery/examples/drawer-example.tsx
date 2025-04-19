import React from "react";
import styles from "./drawer-example.module.css";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer/drawer";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";

export function DrawerExample() {
  return (
    <div className={styles.container}>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className={styles.drawerContent}>
            <DrawerHeader className={styles.header}>
              <DrawerTitle>Edit Profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you're done.
              </DrawerDescription>
            </DrawerHeader>

            <div className={styles.formFields}>
              <div className={styles.formField}>
                <Label htmlFor="drawer-name">Name</Label>
                <Input
                  id="drawer-name"
                  placeholder="Enter your name"
                  defaultValue="John Doe"
                />
              </div>

              <div className={styles.formField}>
                <Label htmlFor="drawer-username">Username</Label>
                <Input
                  id="drawer-username"
                  placeholder="Enter your username"
                  defaultValue="johndoe"
                />
              </div>

              <div className={styles.formField}>
                <Label htmlFor="drawer-bio">Bio</Label>
                <textarea
                  id="drawer-bio"
                  className={styles.textarea}
                  placeholder="Tell us about yourself"
                  defaultValue="I'm a software developer based in New York City. I enjoy building web applications and contributing to open source projects."
                />
              </div>
            </div>

            <DrawerFooter className={styles.footer}>
              <Button variant="outline" className={styles.cancelButton}>
                Cancel
              </Button>
              <Button>Save changes</Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
