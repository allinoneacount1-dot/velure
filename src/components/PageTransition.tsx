"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const Easing: [number, number, number, number] = [0.76, 0, 0.24, 1];

const curtainVariants = {
  initial: { scaleY: 0, originY: 0 },
  animate: {
    scaleY: 0,
    originY: 0,
    transition: { duration: 0.6, ease: Easing },
  },
  exit: {
    scaleY: 1,
    originY: 0,
    transition: { duration: 0.6, ease: Easing },
  },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  const handleTransition = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setDisplayChildren(children);
      setIsTransitioning(false);
    }, 600);
  }, [children]);

  useEffect(() => {
    handleTransition();
  }, [pathname, handleTransition]);

  return (
    <>
      <AnimatePresence mode="sync">
        {isTransitioning && (
          <motion.div
            key="curtain"
            className="fixed inset-0 z-[9990] bg-alabaster"
            variants={curtainVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>
      {displayChildren}
    </>
  );
}
