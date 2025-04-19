import * as React from "react";
import classNames from "classnames";
import styles from "./skeleton.module.css";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={classNames(styles.skeleton, className)} {...props} />;
}

export { Skeleton };
