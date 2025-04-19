import React from "react";
import styles from "./sheet-example.module.css";
import { Button } from "@/components/ui/button/button";
import { Input } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet/sheet";

export function SheetExample() {
  return (
    <div className={styles.container}>
      <div className={styles.positionExamples}>
        <div className={styles.exampleCard}>
          <h4>Right Side</h4>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Right</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className={styles.formFields}>
                <div className={styles.formField}>
                  <Label htmlFor="name-right">Name</Label>
                  <Input id="name-right" defaultValue="John Doe" />
                </div>
                <div className={styles.formField}>
                  <Label htmlFor="username-right">Username</Label>
                  <Input id="username-right" defaultValue="johndoe" />
                </div>
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <div className={styles.exampleCard}>
          <h4>Left Side</h4>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate to different sections of the application.
                </SheetDescription>
              </SheetHeader>
              <nav className={styles.nav}>
                <Button variant="ghost" className={styles.navItem}>
                  Home
                </Button>
                <Button variant="ghost" className={styles.navItem}>
                  Dashboard
                </Button>
                <Button variant="ghost" className={styles.navItem}>
                  Settings
                </Button>
                <Button variant="ghost" className={styles.navItem}>
                  Profile
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className={styles.exampleCard}>
          <h4>Top Side</h4>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Top</Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription>
                  View your recent notifications.
                </SheetDescription>
              </SheetHeader>
              <div className={styles.notificationList}>
                <div className={styles.notification}>
                  <div className={styles.notificationTitle}>
                    New message received
                  </div>
                  <div className={styles.notificationText}>
                    You have a new message from Jane Smith.
                  </div>
                </div>
                <div className={styles.notification}>
                  <div className={styles.notificationTitle}>
                    System update completed
                  </div>
                  <div className={styles.notificationText}>
                    Your system has been updated to the latest version.
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className={styles.exampleCard}>
          <h4>Bottom Side</h4>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Music Player</SheetTitle>
                <SheetDescription>
                  Control your music playback.
                </SheetDescription>
              </SheetHeader>
              <div className={styles.playerControls}>
                <div className={styles.songInfo}>
                  <div className={styles.songTitle}>Awesome Song</div>
                  <div className={styles.songArtist}>Great Artist</div>
                </div>
                <div className={styles.controls}>
                  <Button
                    variant="outline"
                    size="icon"
                    className={styles.controlButton}
                  >
                    ⏮
                  </Button>
                  <Button className={styles.playButton}>▶</Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className={styles.controlButton}
                  >
                    ⏭
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
