"use client";
import React, { useState } from 'react';

const Cardiovascular = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      className="scroll-mt-60 break-after-page"
      aria-labelledby="section-Cardiovascular01"
      data-section-id="Cardiovascular01"
      id="section-cardiovascular"
    >
      <section
        className="flex min-h-0 w-full grow flex-col gap-8"
        data-right-footer-text="Cardiovascular"
        aria-label="Cardiovascular"
      >
        <header className="hidden flex-col gap-4 md:flex">
          <div className="flex items-end justify-between text-lg">
            <div role="heading" aria-level={2}>
              Cardiovascular
            </div>
            <div
              className="flex gap-4 text-xs"
              role="status"
              aria-label="0 optimal, 8 normal, 0 out of range"
            >
              <div className="flex shrink-0 items-center gap-1">
                <span className="font-medium">0</span>
                <div> optimal</div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <span className="font-medium">8</span>
                <div> normal</div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <span className="font-medium">0</span>
                <div> out of range</div>
              </div>
            </div>
          </div>
        </header>
        <div
          className="flex w-full flex-col gap-5"
          role="list"
          aria-label="Test panels"
        >
          <div role="listitem">
            <div
              className="flex min-h-0 shrink-0 grow flex-col overflow-hidden w-full"
              role="article"
              aria-label="MRI Results"
            >
              <div className="mb-4 shrink-0">
                <div className="flex items-center justify-between font-medium">
                  <div className="text-base" role="heading" aria-level={3}>
                    MRI Results
                  </div>
                </div>
              </div>
              <div className="flex min-h-0 flex-1 grow flex-col overflow-visible">
                <ul
                  className="flex shrink-0 flex-col gap-2 overflow-visible"
                  role="list"
                  aria-label="Biomarker results"
                >
                  <li>
                    <div
                      className="text-card-foreground rounded-xl flex w-full shrink-0 cursor-pointer flex-col bg-white p-4"
                      role="article"
                      aria-label="Dominant left vertebral artery"
                    >
                      <div
                        className="flex flex-wrap items-start gap-3 transition-all duration-300 md:flex-nowrap"
                        role="region"
                        aria-label="Dominant left vertebral artery"
                        aria-expanded={isExpanded ? "true" : "false"} // Dynamic aria-expanded
                      >
                        <button
                          className="relative flex shrink-0 flex-col self-stretch md:transition-all md:duration-300 h-16 w-16"
                          aria-label="View medical image"
                        >
                          <div className="flex min-w-0 grow flex-col overflow-hidden rounded-lg">
                            <div className="flex w-full grow flex-col overflow-hidden rounded-xl">
                              <div className="flex min-h-0 w-full grow flex-col">
                                <div className="flex min-h-0 w-full grow flex-col invisible">
                                  <div className="group relative flex w-full grow touch-none flex-col gap-2 bg-black">
                                    <div className="absolute inset-0 z-20 h-full w-full flex-col bg-black hidden">
                                      <div className="flex min-h-0 grow flex-col items-center justify-center bg-black">
                                        <div className="border-4 border-t-4 border-gray-200 border-t-gray-600 rounded-full animate-spin aspect-square h-1/2 w-auto" />
                                      </div>
                                    </div>
                                    <div
                                      className="cornerstone-viewport h-full w-full bg-black pan-disabled"
                                      data-testid="dicom-viewer-container"
                                      tabIndex={-1}
                                      data-viewport-uid="viewport-2"
                                      data-rendering-engine-uid="sharedMriRenderingEngine"
                                      style={{ cursor: 'default' }}
                                      data-initial-parallel-scale="114.78218359888183"
                                      data-initial-focal-point="[0.00044267438352108,1.0012751817703247,104.78800201416016]"
                                      data-initial-position="[0.00044267438352108,-72.7760238647461,-31.675128936767578]"
                                    >
                                      <div
                                        className="viewport-element"
                                        style={{
                                          position: 'relative',
                                          width: '100%',
                                          height: '100%',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <canvas
                                          className="cornerstone-canvas"
                                          style={{
                                            position: 'absolute',
                                            width: '100%',
                                            height: '100%',
                                            imageRendering: 'pixelated',
                                          }}
                                          width="64"
                                          height="64"
                                        />
                                        <svg
                                          className="svg-layer"
                                          id="svg-layer-viewport-2"
                                          xmlns="http://www.w3.org/2000/svg"
                                          style={{
                                            width: '100%',
                                            height: '100%',
                                            pointerEvents: 'none',
                                            position: 'absolute',
                                          }}
                                        >
                                          <defs>
                                            <filter
                                              id="shadow-svg-layer-viewport-2"
                                              filterUnits="userSpaceOnUse"
                                            >
                                              <feOffset
                                                result="offOut"
                                                in="SourceGraphic"
                                                dx="0.5"
                                                dy="0.5"
                                              />
                                              <feColorMatrix
                                                result="matrixOut"
                                                in="offOut"
                                                in2="matrix"
                                                values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"
                                              />
                                              <feBlend
                                                in="SourceGraphic"
                                                in2="matrixOut"
                                                mode="normal"
                                              />
                                            </filter>
                                          </defs>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute top-1 right-1 cursor-pointer rounded bg-black/50 p-1 opacity-80 transition-opacity hover:opacity-100 md:block"
                            aria-hidden="true"
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
                              className="lucide lucide-expand h-4 w-4 text-white"
                            >
                              <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
                              <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
                              <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
                              <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
                            </svg>
                          </div>
                        </button>
                        <div
                          className="text-content flex-1 cursor-pointer text-left"
                          aria-expanded={isExpanded ? "true" : "false"} // Dynamic aria-expanded
                          aria-label="Dominant left vertebral artery, Normal. Expand details"
                          onClick={toggleExpanded} // Add onClick handler
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-base font-medium">
                              Dominant left vertebral artery
                            </span>
                            <span className="ml-2 flex items-center rounded-md bg-white px-0 py-1.5 text-gray-600">
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
                                className={`lucide lucide-chevron-down h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} // Rotate icon
                                aria-hidden="true"
                              >
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </span>
                          </div>
                          <div className="mt-1">
                            <button
                              className="flex shrink-0 grow-0 cursor-pointer items-center gap-1 transition-opacity hover:opacity-80"
                              type="button"
                              aria-haspopup="dialog"
                              aria-expanded="false"
                              aria-controls="radix-_r_16_"
                              data-state="closed"
                            >
                              <div>
                                <div className="flex items-center gap-1">
                                  <div className="h-2 w-2 rounded-full bg-deep-green-600" />
                                  <div className="h-2 w-2 rounded-full bg-gray-200" />
                                  <div className="h-2 w-2 rounded-full bg-gray-200" />
                                  <div className="h-2 w-2 rounded-full bg-gray-200" />
                                  <div className="h-2 w-2 rounded-full bg-gray-200" />
                                  &nbsp;
                                </div>
                              </div>
                              <div className="text-sm">Observation</div>
                            </button>
                          </div>
                        </div>
                        {isExpanded && ( // Conditionally render expanded content
                          <div className="expanded-details mt-2 p-2 border rounded">
                            {/* Placeholder for expanded details */}
                            <p>More details about Dominant left vertebral artery...</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Cardiovascular;
