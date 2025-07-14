import React from 'react';
import type { Metadata } from "next";
import PromoPage from '@/components/PromoPage';

// Metadata for this specific page
export const metadata: Metadata = {
    title: "Exclusive Collection | Adidas Premium Athletic Wear",
    description: "Explore Adidas exclusive collection featuring Ultraboost 22, Stan Smith Limited, and NMD R1 V2. Premium athletic wear with cutting-edge technology. Special offers available.",
    keywords: "Adidas exclusive, Ultraboost 22, Stan Smith Limited, NMD R1 V2, premium sneakers, athletic wear, limited edition",
    openGraph: {
        title: "Exclusive Collection | Adidas Premium Athletic Wear",
        description: "Explore Adidas exclusive collection featuring Ultraboost 22, Stan Smith Limited, and NMD R1 V2. Premium athletic wear with cutting-edge technology.",
        url: "https://adidas-exclusives.com/promo",
    },
};


export default function PromotionPage() {
    return (
        <>
            <PromoPage />
        </>
    )
}