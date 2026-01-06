"use client";

import React from 'react';
import { NextStepProvider, NextStep, Tour } from 'nextstepjs';

// Define your 8 steps here
const tourSteps: Tour[] = [
    {
        tour: "main-walkthrough",
        steps: [
            {
                icon: "👋",
                title: "Welcome to Ahead Health",
                content: (
                    <div className="space-y-2">
                        <p>Let's take a quick tour of your new Health Report dashboard.</p>
                        <img src="/images/cat-smile.gif" alt="Welcome" className="rounded-lg w-full" />
                    </div>
                ),
                side: "bottom",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "🧭",
                title: "Navigation",
                content: (
                    <div className="space-y-2">
                        <p>Switch between Home, Health Report, and Action Plan views here.</p>
                        <img src="/images/cat-smile.gif" alt="Navigation" className="rounded-lg w-full" />
                    </div>
                ),
                selector: "#sidebar-nav",
                side: "right",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "📄",
                title: "Report Selector",
                content: (
                    <div className="space-y-2">
                        <p>View details of your selected report or switch to a different one.</p>
                        <img src="/images/cat-smile.gif" alt="Report Selector" className="rounded-lg w-full" />
                    </div>
                ),
                selector: "#report-selector",
                side: "right",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "🫁",
                title: "Organ Systems",
                content: (
                    <div className="space-y-2">
                        <p>Navigate through different organ systems and view their status depending on your results.</p>
                        <img src="/images/cat-smile.gif" alt="Organ Systems" className="rounded-lg w-full" />
                    </div>
                ),
                selector: "#organ-systems-nav",
                side: "right",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "📊",
                title: "Summary Statistics",
                content: (
                    <div className="space-y-2">
                        <p>Get a quick overview of your Biological Age, Biomarkers, and Key Findings.</p>
                        <img src="/images/cat-smile.gif" alt="Summary Statistics" className="rounded-lg w-full" />
                    </div>
                ),
                selector: "#summary-statistics",
                side: "bottom",
                showControls: true,
                showSkip: true,
            },
            {
                icon: "✨",
                title: "You're All Set!",
                content: (
                    <div className="space-y-2">
                        <p>Explore your health data and take action on your insights. scroll down to see more details.</p>
                        <img src="/images/cat-smile.gif" alt="All Set" className="rounded-lg w-full" />
                    </div>
                ),
                side: "bottom",
                showControls: true,
                showSkip: true,
            }
        ]
    }
];

export function withTour<P extends object>(Component: React.ComponentType<P>) {
    return function WrappedComponent(props: P) {
        return (
            <NextStepProvider>
                <NextStep steps={tourSteps}>
                    <Component {...props} />
                </NextStep>
            </NextStepProvider>
        );
    };
}