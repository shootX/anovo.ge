"use client"

import ParallaxElement from "./parallax-element"

export function CircleShape({ className = "", ...props }) {
  return (
    <ParallaxElement className={`absolute rounded-full ${className}`} {...props}>
      <div className="h-full w-full rounded-full" />
    </ParallaxElement>
  )
}

export function SquareShape({ className = "", ...props }) {
  return (
    <ParallaxElement className={`absolute ${className}`} {...props}>
      <div className="h-full w-full rotate-45 transform" />
    </ParallaxElement>
  )
}

export function DotsPattern({ className = "", ...props }) {
  return (
    <ParallaxElement className={`absolute ${className}`} {...props}>
      <div className="grid h-full w-full grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="aspect-square rounded-full" />
        ))}
      </div>
    </ParallaxElement>
  )
}

export function LinePattern({ className = "", vertical = false, ...props }) {
  return (
    <ParallaxElement className={`absolute ${className}`} {...props}>
      <div className={`flex ${vertical ? "flex-col" : "flex-row"} h-full w-full gap-4`}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={vertical ? "h-full w-0.5" : "h-0.5 w-full"} />
        ))}
      </div>
    </ParallaxElement>
  )
}
