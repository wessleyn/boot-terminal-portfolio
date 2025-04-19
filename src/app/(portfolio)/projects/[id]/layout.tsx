import Script from 'next/script';
import React from 'react';
import fetchProject from './_actions/fetchProject';

export default async function ProjectLayout({
    children,
    params
}: {
    children: React.ReactNode,
    params: Promise<{ id: string }>
}) {
    const project = await fetchProject((await params).id);

    // Use optional chaining to safely access the property
    const hasAnalyticsChart = 'hasAnalyticsChart' in project ? project.hasAnalyticsChart : false;

    return (
        <>
            {children}

            {/* Include analytics script only for project-2 */}
            {hasAnalyticsChart && (
                <Script
                    src="/assets/js/analytics-fetch.js"
                    strategy="afterInteractive"
                />
            )}
        </>
    );
}