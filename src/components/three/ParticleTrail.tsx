"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { latLngToVector3 } from "./data"

interface ParticleTrailProps {
    start: [number, number];
    end: [number, number];
    radius: number;
    delay?: number;
    count?: number;
}

export function ParticleTrail({ start, end, radius, delay = 0, count = 5 }: ParticleTrailProps) {
    const groupRef = useRef<THREE.Group>(null)

    const vStart = useMemo(() => {
        const [x, y, z] = latLngToVector3(start[0], start[1], radius)
        return new THREE.Vector3(x, y, z)
    }, [start, radius])

    const vEnd = useMemo(() => {
        const [x, y, z] = latLngToVector3(end[0], end[1], radius)
        return new THREE.Vector3(x, y, z)
    }, [end, radius])

    const curve = useMemo(() => {
        const mid = new THREE.Vector3().addVectors(vStart, vEnd).multiplyScalar(0.5)
        const distance = vStart.distanceTo(vEnd)
        const height = radius + distance * 0.4
        const vMid = mid.normalize().multiplyScalar(height)
        return new THREE.QuadraticBezierCurve3(vStart, vMid, vEnd)
    }, [vStart, vEnd, radius])

    const particles = useMemo(() => {
        return Array.from({ length: count }).map((_, i) => ({
            offset: i / count,
            speed: 0.2 + Math.random() * 0.1
        }))
    }, [count])

    useFrame((state) => {
        if (!groupRef.current) return
        const time = state.clock.getElapsedTime() - delay
        if (time < 0) {
            groupRef.current.visible = false
            return
        }
        groupRef.current.visible = true

        groupRef.current.children.forEach((child, i) => {
            const p = particles[i]
            const progress = (time * p.speed + p.offset) % 1
            const pos = curve.getPointAt(progress)
            child.position.copy(pos)

            // Fade out at ends
            const opacity = Math.sin(progress * Math.PI)
            if ((child as any).material) {
                (child as any).material.opacity = opacity * 0.8
            }
        })
    })

    return (
        <group ref={groupRef}>
            {particles.map((_, i) => (
                <mesh key={i}>
                    <sphereGeometry args={[0.012, 8, 8]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0} />
                </mesh>
            ))}
        </group>
    )
}
