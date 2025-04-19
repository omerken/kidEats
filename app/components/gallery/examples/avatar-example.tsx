import React from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar/avatar";
import styles from "./avatar-example.module.css";

export function AvatarExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4>Basic Avatar</h4>
        <div className={styles.row}>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Avatar with Fallback</h4>
        <div className={styles.row}>
          <Avatar>
            <AvatarImage src="https://broken-link.jpg" alt="Broken Image" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://broken-link.jpg" alt="Broken Image" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://broken-link.jpg" alt="Broken Image" />
            <AvatarFallback>MK</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className={styles.section}>
        <h4>Sizes</h4>
        <div className={styles.row}>
          <Avatar className={styles.small}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>

          <Avatar className={styles.large}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
