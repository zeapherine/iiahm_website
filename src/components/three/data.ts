export interface Destination {
    name: string;
    lat: number;
    lng: number;
    placements: number;
}

// Origin: Kokrajhar, Assam, India
export const ORIGIN: Destination = {
    name: "Kokrajhar",
    lat: 26.3986,
    lng: 90.2727,
    placements: 0 // Not applicable for origin
};

export const DESTINATIONS: Destination[] = [
    { name: "Dubai", lat: 25.2048, lng: 55.2708, placements: 145 },
    { name: "Doha", lat: 25.2854, lng: 51.5310, placements: 76 },
    { name: "Riyadh", lat: 24.7136, lng: 46.6753, placements: 42 },
    { name: "Abu Dhabi", lat: 24.4539, lng: 54.3773, placements: 38 },
    { name: "Muscat", lat: 23.5859, lng: 58.4059, placements: 24 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198, placements: 92 },
    { name: "Bangkok", lat: 13.7563, lng: 100.5018, placements: 54 },
    { name: "Colombo", lat: 6.9271, lng: 79.8612, placements: 18 },
    { name: "Male", lat: 4.1755, lng: 73.5093, placements: 22 },
    { name: "Kuala Lumpur", lat: 3.1390, lng: 101.6869, placements: 26 },
    { name: "London", lat: 51.5074, lng: -0.1278, placements: 58 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093, placements: 28 }
];

export function latLngToVector3(lat: number, lng: number, radius: number) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);

    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);

    return [x, y, z] as [number, number, number];
}
