"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface Card {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const AppleCardsCarousel = ({
  items,
  initialScroll = 0,
}: {
  items: Card[];
  initialScroll?: number;
}) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 300;
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 2);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-6 md:py-10 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div className={cn("absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l")}></div>

          <div className={cn("flex flex-row justify-start gap-2 md:gap-4 pl-2 md:pl-4", "max-w-7xl mx-auto")}>
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.1 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-2xl"
              >
                <Card card={item} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-4 md:mr-10">
          <button
            className="relative z-40 h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-4 w-4 md:h-6 md:w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-4 w-4 md:h-6 md:w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-2xl bg-gray-100 dark:bg-neutral-900 h-64 md:h-80 w-48 md:w-56 overflow-hidden flex flex-col items-start justify-start relative z-10"
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-4 md:p-6">
          <motion.p
            layoutId={layout ? `category-${card.title}` : undefined}
            className="text-white text-xs md:text-sm font-medium font-sans text-left"
          >
            AI Services
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="text-white text-lg md:text-xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-1 md:mt-2"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.image}
          alt={card.title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
      </motion.button>
      {open && (
        <div className="fixed inset-0 h-screen z-50 overflow-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={containerRef}
            layoutId={layout ? `card-${card.title}` : undefined}
            className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-4 md:my-10 p-4 md:p-8 rounded-2xl font-sans relative"
          >
            <button
              className="sticky top-2 md:top-4 h-6 w-6 md:h-8 md:w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
              onClick={handleClose}
            >
              <IconX className="h-4 w-4 md:h-6 md:w-6 text-neutral-100 dark:text-neutral-900" />
            </button>
            <motion.p
              layoutId={layout ? `category-${card.title}` : undefined}
              className="text-base font-medium text-black dark:text-white"
            >
              AI Services
            </motion.p>
            <motion.p
              layoutId={layout ? `title-${card.title}` : undefined}
              className="text-xl md:text-2xl font-semibold text-neutral-700 dark:text-white mt-2 md:mt-4"
            >
              {card.title}
            </motion.p>
            <div className="py-6 md:py-10">
              <BlurImage
                src={card.image}
                alt={card.title}
                height="400"
                width="800"
                className="md:rounded-lg object-cover w-full h-48 md:h-80"
              />
              <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {card.description}
                </p>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-neutral-700 dark:text-white mb-3 md:mb-4">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {card.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: {
  height?: string;
  width?: string;
  src: string;
  className?: string;
  alt?: string;
  [key: string]: any;
}) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width ? parseInt(width) : 800}
      height={height ? parseInt(height) : 400}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ?? "Background of a beautiful view"}
      {...rest}
    />
  );
};