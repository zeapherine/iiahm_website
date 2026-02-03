"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { latLngToVector3 } from "./data"

interface DestinationMarkerProps {
    lat: number;
    lng: number;
    radius: number;
    color?: string;
    size?: number;
    delay?: number;
}

export function DestinationMarker({ lat, lng, radius, color = "#22c55e", size = 0.04, delay = 0 }: DestinationMarkerProps) {
    const meshRef = useRef<THREE.Mesh>(null)
    const pos = useMemo(() => latLngToVector3(lat, lng, radius), [lat, lng, radius])

    useFrame((state) => {
        if (!meshRef.current) return
        const time = state.clock.getElapsedTime() - delay
        if (time < 0) {
            meshRef.current.visible = false
            return
        }
        meshRef.current.visible = true

        // Pulse effect
        const pulse = Math.sin(time * 3) * 0.2 + 1.1
        meshRef.current.scale.setScalar(pulse)

        // Rotation to face outward
        meshRef.current.lookAt(0, 0, 0)
    })

    return (
        <mesh ref={meshRef} position={pos}>
            <sphereGeometry args={[size, 16, 16]} />
            <meshBasicMaterial color={color} transparent opacity={0.8} />

            {/* Outer Glow Ring */}
            <mesh scale={[1.5, 1.5, 1.5]}>
                <sphereGeometry args={[size, 16, 16]} />
                <meshBasicMaterial color={color} transparent opacity={0.2} />
            </mesh>
        </mesh>
    )
}
