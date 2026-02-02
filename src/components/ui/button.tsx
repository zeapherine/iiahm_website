"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-btn)] text-sm font-bold uppercase tracking-wider transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border-2 border-black active:translate-x-[1px] active:translate-y-[1px] active:shadow-none",
  {
    variants: {
      variant: {
        default: "bg-noir text-white shadow-hard hover:bg-noir/90 hover:shadow-glow",
        destructive:
          "bg-destructive text-white shadow-hard hover:bg-destructive/90",
        outline:
          "bg-white text-noir shadow-hard hover:bg-smoke",
        secondary:
          "bg-smoke text-noir shadow-hard hover:bg-smoke/80",
        ghost:
          "border-transparent hover:bg-smoke",
        link: "border-transparent text-primary underline-offset-4 hover:underline",
        accent: "bg-primary text-white shadow-hard hover:bg-primary-dark hover:shadow-glow",
        neon: "bg-neon-green text-noir shadow-hard hover:bg-neon-green/90",
        pink: "bg-hot-pink text-white shadow-hard hover:bg-hot-pink/90",
        ghost_white: "border-white text-white bg-transparent hover:bg-white/10"
      },
      size: {
        default: "h-12 px-8 py-2",
        xs: "h-8 gap-1 px-3 text-xs",
        sm: "h-10 gap-1.5 px-4",
        lg: "h-16 px-12 text-lg",
        icon: "size-12",
        "icon-xs": "size-8",
        "icon-sm": "size-10",
        "icon-lg": "size-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends React.ComponentProps<"button">,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  magnetic?: boolean
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  magnetic = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  // Magnetic Logic
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    x.set(distanceX * 0.4)
    y.set(distanceY * 0.4)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const content = (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )

  if (magnetic && !asChild) {
    return (
      <motion.button
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="inline-flex"
      >
        <Comp
          data-slot="button"
          data-variant={variant}
          data-size={size}
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </motion.button>
    )
  }

  return content
}

export { Button, buttonVariants }
