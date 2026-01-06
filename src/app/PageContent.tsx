"use client";

import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import { withTour } from './withTour';
import { useNextStep } from 'nextstepjs';

const PageContent = () => {
  const { startNextStep } = useNextStep();

  useEffect(() => {
    startNextStep('main-walkthrough');
  }, []);

  return (
    <>
      <div className="bg-background h-full w-full print:bg-white">
        <div className="flex h-full w-full flex-col">
          <div
            role="region"
            aria-label="Notifications (F8)"
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          >
            <ol
              tabIndex={-1}
              className="fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
            />
          </div>
          <div className="flex h-dvh grow flex-col gap-4 overflow-hidden">
            <article
              className="relative flex min-h-0 w-full grow flex-col"
              aria-label="Health Report"
            >
              <div className="pointer-events-none absolute top-0 left-0 z-60 h-full w-full transition-all duration-300 bg-transparent">
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-label="Details panel"
                  className="absolute top-0 right-0 z-40 flex h-full min-h-0 w-full flex-col overflow-y-auto bg-white transition-transform duration-300 md:w-[700px] translate-x-full"
                >
                  <div className="absolute top-3 right-3 z-50">
                    <button
                      className="bg-background flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full border-none"
                      aria-label="Close panel"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-x h-4 w-4"
                        aria-hidden="true"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex min-h-0 shrink-0 grow flex-col bg-white px-4 py-6 md:p-10" />
                </div>
              </div>
              <div
                role="alert"
                aria-live="polite"
                className="fixed inset-x-0 bottom-8 z-50 flex justify-center px-4 transition-all duration-300 ease-out translate-y-0 opacity-100"
              >
                <div className="flex max-w-full items-start gap-3 rounded-xl bg-[#182d56] py-3 pr-4 pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-info mt-0.5 h-4 w-4 shrink-0 text-white"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  <div className="min-w-0 flex-1 text-sm text-white">
                    <span>This is an older report. </span>
                    <a
                      className="underline underline-offset-2"
                      href="/report/8a2da030-af57-470e-b359-0783887bc214"
                    >
                      View your latest one
                    </a>
                  </div>
                  <button
                    className="mt-0.5 shrink-0 text-white/70 transition-colors hover:text-white"
                    aria-label="Dismiss"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-x h-3 w-3"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex min-h-0 flex-1" role="presentation">
                <Sidebar />
                <MainContent />
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

const PageWithTour = withTour(PageContent);

export default PageWithTour;
