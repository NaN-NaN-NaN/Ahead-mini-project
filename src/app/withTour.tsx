"use client";

import React from 'react';
import { NextStepProvider, NextStep, Tour } from 'nextstepjs';

const tourSteps: Tour[] = [
    {
        tour: "main-walkthrough",
        steps: [
            {
                icon: "👋",
                title: "Your Health Journey Starts Here",
                content: (
                    <div className="space-y-2 ">
                        <p>Welcome to your comprehensive health analysis. This report combines your MRI and blood data into a single, actionable roadmap.</p>
                        <p className="text-sm text-gray-500">We'll guide you through the data so you can focus on what matters most for you.</p>
                    </div>
                ),
                side: "bottom",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "📅",
                title: "Report History",
                content: (
                    <div className="space-y-2">
                        <p>You can click on the report selector to access your current results or previous versions to track your health progress over time.</p>
                    </div>
                ),
                selector: "#report-selector",
                side: "right",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "💪🏻",
                title: "Longevity Indicators",
                content: (
                    <div className="space-y-4">
                        <img
                            src="/images/step-3.gif"
                            alt="Calculation explanation"
                            className="rounded-lg w-full h-auto shadow-sm"
                        />
                        <div className="space-y-2">
                            <p>View your <b>Biological Age</b> and <b>Heart Risk Score</b>. Click to see how they are calculated. </p>
                            <p className="text-sm text-gray-500">These provide a high-level snapshot of your current health trajectory compared to your chronological age.</p>
                        </div>
                    </div>
                ),
                selector: "#section-longevity-indicators",
                side: "left",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "🔍",
                title: "Smart Filtering",
                content: (
                    <div className="space-y-2">
                        <p>Quickly filter the result by biomarker status "Out of Range", "In Range", "Optimal" or by Findings level "Minor", "Intermediate" or "Major".</p>
                    </div>
                ),
                selector: "#section-biomarker-filter",
                side: "left",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "👨‍⚕️",
                title: "Clinical Executive Summary",
                content: (
                    <div className="space-y-2">
                        <p>Read the specialized doctor's analysis. This section synthesizes your MRI and blood data into a clear narrative of your current health status.</p>
                    </div>
                ),
                selector: "#doctor-summary-card",
                side: "left",
                showControls: true,
                showSkip: true,
                pointerPadding: 10,
                pointerRadius: 8,
            },
            {
                icon: "👀",
                title: "Follow-up and Optimizations",
                content: (
                    <div className="space-y-2">
                        <p>Click on the "Follow-up" or "Optimizations" to view the recommended follow-up or lifestyle adjustments to close the loop on your findings.</p>
                    </div>
                ),
                selector: "#section-follow-up",
                side: "left",
                showControls: true,
                showSkip: true,
                pointerPadding: 10,
                pointerRadius: 8,
            },
            {
                icon: "📁",
                title: "System Categories",
                content: (
                    <div className="space-y-2">
                        <p>Your body is analyzed by system, click to check the details numbers by group.</p>
                        <p className="text-sm text-gray-500">The number and color indicate the special findings in the group. Hover to see the details. </p>
                    </div>
                ),
                selector: "#category-sidebar",
                side: "right",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "ℹ️",
                title: "Understanding the Data",
                content: (
                    <div className="space-y-2">
                        <img
                            src="/images/step-8.gif"
                            alt="Data explanation"
                            className="rounded-lg w-full h-auto shadow-sm"
                        />
                        <p>Click on the item for a detailed explanation of the clinical number range, your result, and what it means for your physiology.</p>
                    </div>
                ),
                selector: "#section-detail-datahighlight-eosinophiles",
                side: "left",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "📸",
                title: "MRI Imaging Insights",
                content: (
                    <div className="space-y-2">
                        <img
                            src="/images/step-9.gif"
                            alt="MRI explanation"
                            className="rounded-lg w-full h-auto shadow-sm"
                        />
                        <p>View your actual MRI findings here. We translate complex radiological imagery into visual highlights you can share with your specialist.</p>
                    </div>
                ),
                selector: "#section-detail-datahighlight-bandscheibenvorwölbungen",
                side: "left",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "🏁",
                title: "Your Personalized Action Plan",
                content: (
                    <div className="space-y-2">
                        <p>This is your roadmap to optimization. Access your recommended follow-ups and lifestyle adjustments to close the loop on your findings.</p>
                    </div>
                ),
                selector: "#section-action-plan",
                side: "top",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "🤖",
                title: "Continuous Support",
                content: (
                    <div className="space-y-2">
                        <p>Still have questions? Use our **AI Health Assistant** to ask specific questions about your report, or restart this guide at any time if you need a refresher.</p>
                    </div>
                ),
                selector: "#section-support",
                side: "right",
                showControls: true,
                showSkip: true,
            }
        ]
    }
];

export function withTour<P extends object>(Component: React.ComponentType<P>) {
    return function WrappedComponent(props: P) {
        // Force a resize event when the component mounts and tour might start
        // to ensure library recalculates positions after initial layout settles
        React.useEffect(() => {
            const triggerResize = () => {
                window.dispatchEvent(new Event('resize'));
            };

            // Trigger after a short delay
            const timer = setTimeout(triggerResize, 1000);

            // Also listen for potential DOM changes that might shift layout
            const observer = new MutationObserver(triggerResize);
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['data-nextstep-spotlight'] // Watch for tour step changes
            });

            return () => {
                clearTimeout(timer);
                observer.disconnect();
            };
        }, []);

        return (
            <NextStepProvider>
                <NextStep steps={tourSteps}>
                    <Component {...props} />
                </NextStep>
            </NextStepProvider>
        );
    };
}