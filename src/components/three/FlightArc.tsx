"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { QuadraticBezierLine } from "@react-three/drei"
import { latLngToVector3 } from "./data"

interface FlightArcProps {
    start: [number, number]; // lat, lng
    end: [number, number];   // lat, lng
    radius: number;
    delay?: number;
}

export function FlightArc({ start, end, radius, delay = 0 }: FlightArcProps) {
    const lineRef = useRef<any>(null)

    const vStart = useMemo(() => {
        const [x, y, z] = latLngToVector3(start[0], start[1], radius)
        return new THREE.Vector3(x, y, z)
    }, [start, radius])

    const vEnd = useMemo(() => {
        const [x, y, z] = latLngToVector3(end[0], end[1], radius)
        return new THREE.Vector3(x, y, z)
    }, [end, radius])

    // Midpoint for the Bezier curve, pushed outward based on distance
    const vMid = useMemo(() => {
        const mid = new THREE.Vector3().addVectors(vStart, vEnd).multiplyScalar(0.5)
        const distance = vStart.distanceTo(vEnd)
        const height = radius + distance * 0.4 // Adjust height based on distance
        return mid.normalize().multiplyScalar(height)
    }, [vStart, vEnd, radius])

    useFrame((state) => {
        if (!lineRef.current) return
        const time = state.clock.getElapsedTime() - delay
        if (time < 0) {
            lineRef.current.visible = false
            return
        }
        lineRef.current.visible = true

        // Animate path length (simplified version using opacity or dash)
        // For a more complex draw-on effect, we'd use a custom shader
        // Here we'll use a subtle fade-in and constant presence
        const progress = Math.min(time / 2, 1) // 2s duration
        lineRef.current.material.opacity = progress * 0.6
    })

    return (
        <QuadraticBezierLine
            ref={lineRef}
            start={vStart}
            end={vEnd}
            mid={vMid}
            color="#0ea5e9"
            lineWidth={1.5}
            transparent
            opacity={0}
            dashed={false}
        />
    )
}
