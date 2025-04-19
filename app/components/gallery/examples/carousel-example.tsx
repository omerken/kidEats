import React from "react";
import styles from "./carousel-example.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";

export function CarouselExample() {
  return (
    <div className={styles.container}>
      <Carousel className={styles.carousel}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className={styles.slide}>
                <span className={styles.number}>Slide {index + 1}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className={styles.navigationWrapper}>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
