import React from "react";
import styles from "./hover-card-example.module.css";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card/hover-card";
import { CalendarDays } from "lucide-react";

export function HoverCardExample() {
  return (
    <div className={styles.container}>
      <div className={styles.demo}>
        <HoverCard>
          <HoverCardTrigger asChild>
            <a href="#" className={styles.trigger}>
              @johndoe
            </a>
          </HoverCardTrigger>
          <HoverCardContent className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <img
                src="https://github.com/shadcn.png"
                alt="User avatar"
                className={styles.avatar}
              />
              <div className={styles.userInfo}>
                <div className={styles.userName}>John Doe</div>
                <div className={styles.userHandle}>@johndoe</div>
              </div>
            </div>
            <p className={styles.userBio}>
              UI/UX Designer and Frontend Developer. I create accessible and
              responsive web applications with React, Next.js, and TypeScript.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statValue}>204</div>
                <div className={styles.statLabel}>Posts</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>1.5K</div>
                <div className={styles.statLabel}>Followers</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statValue}>428</div>
                <div className={styles.statLabel}>Following</div>
              </div>
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>
                <CalendarDays className={styles.icon} />
                <span>Joined December 2021</span>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
