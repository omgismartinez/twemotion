'use client'

import { icon } from '@/ui/bubble/settings'
import { motion, MotionValue, useMotionValue } from 'framer-motion'
import { useIconTransform } from './icon'

export function Item({ row, col, planeX, planeY }: { row: number, col: number, planeX: MotionValue, planeY: MotionValue }) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const scale = useMotionValue(1)
    const borderRadius = useMotionValue(16)

    // Calculate the origin x and y offsets of this icon based on 
    // its column and row position
    const xOffset = (col * icon.width) + (col * icon.margin);
    const yOffset = (row * icon.height) + (row * icon.margin);

    // Transform the icon's x, y and scale based on the position of the draggable plane
    useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset, borderRadius })
    return (
        <motion.div
            style={{
                x,
                y,
                scale,
                width: icon.width,
                height: icon.height,
                borderRadius,
                // This will change the color of an icon every render. In production
                // you'd want to save this as a ref or similar. But here it makes a nice
                // visual indicator that we're doing all this without any re-renders :)
                background: `#fff`
            }}
        />
    )
}
