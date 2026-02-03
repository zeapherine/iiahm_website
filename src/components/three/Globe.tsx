"use client"

import { useMemo } from "react"
import { useTheme } from "next-themes"
import * as THREE from "three"
import { useLoader } from "@react-three/fiber"

export function Globe({ radius = 1.3 }: { radius?: number }) {
    const { theme } = useTheme()
    const isDark = theme === "dark"

    // Load textures
    const [map, lightsMap] = useLoader(THREE.TextureLoader, [
        "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg",
        "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_lights_2048.png"
    ])

    const globeColor = isDark ? "#0ea5e9" : "#1e293b"

    return (
        <group>
            {/* Atmosphere Glow Layer - Slightly closer to prevent clipping */}
            <mesh>
                <sphereGeometry args={[radius * 1.04, 64, 64]} />
                <meshBasicMaterial
                    color={isDark ? "#0ea5e9" : "#ffffff"}
                    transparent
                    opacity={0.12}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* World Map Mesh (Continents + City Lights) */}
            <mesh>
                <sphereGeometry args={[radius * 1.005, 64, 64]} />
                <meshPhongMaterial
                    map={map}
                    emissiveMap={lightsMap}
                    emissive={isDark ? new THREE.Color("#ffaa00") : new THREE.Color("#000000")}
                    emissiveIntensity={isDark ? 2.5 : 0}
                    transparent
                    opacity={isDark ? 1.0 : 0.8}
                    color={isDark ? "#ffffff" : "#ffffff"}
                    specular={new THREE.Color("#111111")}
                    shininess={5}
                />
            </mesh>

            {/* Ocean / Base Sphere */}
            <mesh>
                <sphereGeometry args={[radius, 64, 64]} />
                <meshPhongMaterial
                    color={isDark ? "#040d1a" : "#cbd5e1"}
                    transparent
                    opacity={1.0}
                    shininess={2}
                />
            </mesh>

            {/* Subtle Grid Layer - Very faint */}
            <mesh>
                <sphereGeometry args={[radius * 1.01, 32, 32]} />
                <meshBasicMaterial
                    color={globeColor}
                    wireframe
                    transparent
                    opacity={0.04}
                />
            </mesh>
        </group>
    )
}
