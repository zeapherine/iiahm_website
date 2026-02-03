import { Organization, WithContext, EducationalOrganization, LocalBusiness } from 'schema-dts';

// Organization Schema
export const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IIAHM - International Institute of Aviation and Hotel Management",
    alternateName: "IIAHM",
    url: "https://www.ianinstitute.in",
    logo: "https://www.ianinstitute.in/logo.png",
    sameAs: [
        "https://www.facebook.com/IaninstituteKokrajhar/",
        "https://www.instagram.com/ianinstitute/",
        "https://www.linkedin.com/in/ianinstitute/"
    ],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-93942-37112",
        contactType: "admissions",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Assamese"]
    }
};

// Educational Organization Schema
export const educationalOrgSchema: WithContext<EducationalOrganization> = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "IIAHM - International Institute of Aviation and Hotel Management",
    url: "https://www.ianinstitute.in",
    description: "The premier gateway to international careers in Aviation and Hotel Management for the talented youth of Northeast India.",
    address: {
        "@type": "PostalAddress",
        streetAddress: "SBI Building, 4th Floor, Tengapara",
        addressLocality: "Kokrajhar",
        addressRegion: "Assam",
        postalCode: "783370",
        addressCountry: "IN"
    },
    telephone: "+91-93942-37112",
    email: "ian@ianinstitute.in",
    foundingDate: "2020",
    areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 26.4,
            longitude: 90.27
        },
        geoRadius: "500 km"
    }
};

// Local Business Schema
export const localBusinessSchema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "IIAHM Kokrajhar",
    image: "https://www.ianinstitute.in/og-image.jpg",
    "@id": "https://www.ianinstitute.in",
    url: "https://www.ianinstitute.in",
    telephone: "+91-93942-37112",
    address: {
        "@type": "PostalAddress",
        streetAddress: "SBI Building, 4th Floor, Tengapara",
        addressLocality: "Kokrajhar",
        addressRegion: "Assam",
        postalCode: "783370",
        addressCountry: "IN"
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 26.4,
        longitude: 90.27
    },
    openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00"
    },
    priceRange: "$$"
};

// JSON-LD Script Component
interface JsonLdProps {
    data: WithContext<Organization | EducationalOrganization | LocalBusiness>;
}

export function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Combined JSON-LD for all schemas
export function AllJsonLd() {
    return (
        <>
            <JsonLd data={organizationSchema} />
            <JsonLd data={educationalOrgSchema} />
            <JsonLd data={localBusinessSchema} />
        </>
    );
}
