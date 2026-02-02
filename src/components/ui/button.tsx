"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, useMotionValue, useSpring } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-btn)] text-sm font-bold uppercase tracking-wider transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none border border-slate-700 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg border-primary",
        destructive: "bg-destructive text-white shadow-md hover:bg-destructive/90",
        outline: "bg-white text-primary border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300",
        secondary: "bg-slate-100 text-primary shadow-sm hover:bg-slate-200",
        ghost: "border-transparent hover:bg-slate-100 hover:text-primary",
        link: "border-transparent text-primary underline-offset-4 hover:underline shadow-none",
        accent: "bg-accent text-white border-accent shadow-md hover:bg-accent/90 hover:shadow-glow",
        ghost_white: "border-white/30 text-white bg-white/5 hover:bg-white/10 backdrop-blur-sm",
        neon: "bg-neon-green text-black border-4 border-black shadow-hard hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      },
      size: {
        default: "h-12 px-8 py-2",
        xs: "h-8 gap-1 px-3 text-xs",
        sm: "h-10 gap-1.5 px-6",
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
      <motion.span
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
      </motion.span>
    )
  }

  return content
}

export { Button, buttonVariants }
