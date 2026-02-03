"use client"

import { Suspense, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Float, Stars } from "@react-three/drei"
import { Globe } from "./Globe"
import { FlightArc } from "./FlightArc"
import { DestinationMarker } from "./DestinationMarker"
import { ParticleTrail } from "./ParticleTrail"
import { ORIGIN, DESTINATIONS } from "./data"

export function FlightPathGlobe() {
    const arcRadius = 1.3

    return (
        <div className="w-full h-full min-h-[500px] relative">
            <Canvas dpr={[1, 2]} shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={45} />

                {/* Space Atmosphere */}
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} intensity={2.5} color="#fffcf0" /> {/* Brighter Sun */}
                <directionalLight
                    position={[-5, 5, 5]}
                    intensity={1.5}
                    color="#e0f2fe" // Strong Moonlight
                />

                <Suspense fallback={null}>
                    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                        {/* Initial rotation to center India (90E) */}
                        <group rotation={[Math.PI * 0.15, -Math.PI * 1.0, 0]}>
                            <Globe radius={arcRadius} />

                            {/* Origin Point - Kokrajhar */}
                            <DestinationMarker
                                lat={ORIGIN.lat}
                                lng={ORIGIN.lng}
                                radius={arcRadius}
                                color="#f59e0b" // Amber for origin
                                size={0.06}
                            />

                            {/* Destinations & Arcs */}
                            {DESTINATIONS.map((dest, i) => (
                                <group key={dest.name}>
                                    <FlightArc
                                        start={[ORIGIN.lat, ORIGIN.lng]}
                                        end={[dest.lat, dest.lng]}
                                        radius={arcRadius}
                                        delay={1 + i * 0.5}
                                    />
                                    <DestinationMarker
                                        lat={dest.lat}
                                        lng={dest.lng}
                                        radius={arcRadius}
                                        delay={2 + i * 0.5}
                                    />
                                    <ParticleTrail
                                        start={[ORIGIN.lat, ORIGIN.lng]}
                                        end={[dest.lat, dest.lng]}
                                        radius={arcRadius}
                                        delay={1 + i * 0.5}
                                    />
                                </group>
                            ))}
                        </group>
                    </Float>
                </Suspense>

                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    autoRotate
                    autoRotateSpeed={0.3}
                    makeDefault
                />
            </Canvas>

            {/* Label for India/Home - Optional Overlay */}
            <div className="absolute bottom-4 left-4 bg-background/50 backdrop-blur-sm p-2 rounded-lg border border-border text-[10px] uppercase font-bold tracking-widest text-muted-foreground pointer-events-none">
                Global Careers Originating from India
            </div>
        </div>
    )
}
