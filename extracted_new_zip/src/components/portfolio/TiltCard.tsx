import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  onClick?: () => void;
}

export function TiltCard({ children, className, intensity = 10, onClick }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [touch, setTouch] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-intensity, intensity]);

  useEffect(() => {
    setTouch(window.matchMedia("(hover: none)").matches);
  }, []);

  if (touch) {
    // Touch devices: tilt never fires, so give a tactile press + wobble instead.
    return (
      <motion.div
        onClick={onClick}
        whileTap={{ scale: 0.97, rotate: -0.8 }}
        transition={{ type: "spring", stiffness: 320, damping: 22 }}
        className={cn("will-change-transform", className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 900 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}