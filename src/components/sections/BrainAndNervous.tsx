"use client";
import React, { useState } from 'react';

const BrainAndNervous = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      className="scroll-mt-60 break-after-page"
      aria-labelledby="section-brain-and-nervous"
      data-section-id="brain-and-nervous"
    >
      <section
        className="flex min-h-0 w-full grow flex-col gap-8"
        data-right-footer-text="Brain & nervous"
        aria-label="Brain & nervous"
        id="section-brain-and-nervous"
      >
        <header className="hidden flex-col gap-4 md:flex">
          <div className="flex items-end justify-between text-lg">
            <div role="heading" aria-level={2}>
              Brain & nervous
            </div>
            <div
              className="flex gap-4 text-xs"
              role="status"
              aria-label="0 optimal, 9 normal, 1 out of range"
            >
              <div className="flex shrink-0 items-center gap-1">
                <span className="font-medium">0</span>
                <div> optimal</div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <span className="font-medium">9</span>
                <div> normal</div>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <span className="font-medium">1</span>
                <div> out of range</div>
              </div>
            </div>
          </div>
          <div className="text-card-foreground rounded-xl bg-white p-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex w-full flex-row items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-7 w-7">
                      <img
                        className="aspect-square h-full w-full"
                        alt="Doctor avatar"
                        src="images/image2.png"
                      />
                    </span>
                    <div className="text-[15px]">
                      Prof. Dr. med. Olivio Donati
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col overflow-hidden">
                  <div className="relative flex shrink-0 flex-col overflow-hidden">
                    <div
                      className="overflow-hidden whitespace-pre-line transition-all duration-300 shrink-1"
                      style={{ maxHeight: '120px' }} // This should also be dynamic
                    >
                      <div className="text-[15px] leading-[1.3] whitespace-pre-line">
                        The analysis of your brain scan shows that the
                        volume of your thalamus is slightly above the
                        typical reference range. The thalamus is a key
                        structure in the centre of the brain that acts as
                        a relay station for information. A value that is
                        minimally outside the standard range can be a
                        normal variation for an individual and is not
                        necessarily a cause for concern. Your MRI also
                        identified an enlarged Virchow-Robin space. These
                        are normal, fluid-filled channels that surround
                        small blood vessels in the brain. It is very
                        common to see them on an MRI, and this finding is
                        considered a descriptive observation of your
                        brain's anatomy. We also noted that the volumes of
                        several other brain regions, such as your cortical
                        gray matter, are within the expected range but
                        appear smaller compared to your previous scan.
                        Volume measurements can vary between scans for a
                        number of reasons. Given these combined
                        observations, continued monitoring of these
                        volumes in a future scan is advisable to
                        understand any potential trend over the long term.
                        Supporting your brain health through regular
                        physical activity, a balanced diet, and managing
                        stress is always beneficial.
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute right-0 bottom-0 left-0 h-20"
                      style={{
                        background:
                          'linear-gradient(to top, white, transparent)',
                      }}
                    />
                  </div>
                  <button className="mt-2 flex items-center gap-1.5 text-sm">
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
                      className="lucide lucide-chevron-down h-4 w-4"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    Read more
                  </button>
                </div>
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
                      aria-label="Enlarged perivascular space in the brain"
                    >
                      <div
                        className="flex flex-wrap items-start gap-3 transition-all duration-300 md:flex-nowrap"
                        role="region"
                        aria-label="Enlarged perivascular space in the brain"
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
                                  <div className="relative flex h-full w-full touch-none flex-col bg-black">
                                    <div className="absolute inset-0 z-20 h-full w-full flex-col bg-black hidden">
                                      <div className="flex min-h-0 grow flex-col items-center justify-center bg-black">
                                        <div className="border-4 border-t-4 border-gray-200 border-t-gray-600 rounded-full animate-spin aspect-square h-1/2 w-auto" />
                                      </div>
                                    </div>
                                    <div
                                      className="cornerstone-viewport h-full w-full bg-black pan-disabled"
                                      style={{
                                        width: '100%',
                                        height: '100%',
                                        cursor: 'default',
                                      }}
                                      tabIndex={-1}
                                      data-viewport-uid="viewport_1767652636576"
                                      data-rendering-engine-uid="sharedMriRenderingEngine"
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
                                          id="svg-layer-viewport_1767652636576"
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
                                              id="shadow-svg-layer-viewport_1767652636576"
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
                          aria-label="Enlarged perivascular space in the brain, Normal. Expand details"
                          onClick={toggleExpanded} // Add onClick handler
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-base font-medium">
                              Enlarged perivascular space in the brain
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
                              aria-controls="radix-_r_12_"
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
                            <p>More details about Enlarged perivascular space in the brain...</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div role="listitem">
            <div
              className="flex min-h-0 shrink-0 grow flex-col overflow-hidden w-full"
              role="article"
              aria-label="Brain volumetry MRI"
            >
              <div className="mb-4 shrink-0">
                <div className="flex items-center justify-between font-medium">
                  <div className="text-base" role="heading" aria-level={3}>
                    Brain volumetry MRI
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
                      aria-label="Thalamus volume"
                    >
                      <div
                        className="flex flex-wrap items-start gap-3 transition-all duration-300 md:flex-nowrap"
                        role="region"
                        aria-label="Thalamus volume"
                      >
                        <div
                          className="text-content flex-1 cursor-pointer text-left"
                          aria-label="Thalamus volume, Out of range. Expand details"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-base font-medium">
                              Thalamus volume
                            </span>
                          </div>
                          <div className="mt-1">
                            <button
                              className="flex shrink-0 grow-0 cursor-pointer items-center gap-1 transition-opacity hover:opacity-80"
                              type="button"
                            >
                              <div className="text-sm">Out of range</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div role="listitem">
            <div className="flex min-h-0 shrink-0 grow flex-col overflow-hidden w-full" role="article"
              aria-label="Brain volumetry MRI">
              <div className="mb-4 shrink-0">
                <div className="flex items-center justify-between font-medium">
                  <div className="text-base" role="heading" aria-level={3}>Brain volumetry MRI</div>
                </div>
              </div>
              <div className="flex min-h-0 flex-1 grow flex-col overflow-visible">
                <ul className="flex shrink-0 flex-col gap-2 overflow-visible" role="list"
                  aria-label="Biomarker results">
                  <li>
                    <div
                      className="text-card-foreground rounded-xl flex w-full shrink-0 cursor-pointer flex-col bg-white p-4"
                      role="article" aria-label="Thalamus volume">
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex min-w-0 flex-col">
                          <h3 className="text-sm leading-[110%] font-normal text-gray-900">Thalamus
                            volume</h3>
                          <div className="mt-1 flex items-end gap-1.5"><span
                            className="text-[32px] leading-none font-medium text-gray-900">1.10</span><span
                              className="pb-[1px] font-mono text-[9px] leading-3 font-normal tracking-wider text-gray-900 uppercase">%</span>
                          </div>
                          <div className="mt-2"><span
                            className="w-fit truncate rounded-[40px] px-2 py-0.5 text-[11px] leading-[13px] font-medium text-nowrap print:text-black text-aubergine-600 bg-aubergine-50 print:bg-aubergine-100"
                            role="status">Above range</span></div>
                        </div>
                        <div className="relative shrink-0 overflow-hidden"
                          style={{ width: '143px', height: '79px' }}>
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded"
                            style={{ inset: '0px 12px 0px 0px' }}>
                            <div
                              className="absolute right-0 left-0 rounded bg-gradient-to-r from-transparent to-aubergine-200"
                              style={{ top: '0%', height: '38.8889%' }}></div>
                            <div className="absolute rounded-full bg-aubergine-500"
                              style={{ width: '5px', right: '2px', top: 'calc(65.2778% + 2px)', height: 'calc(34.7222% - 4px)' }}>
                            </div>
                            <div className="absolute rounded-full bg-deep-green-500"
                              style={{ width: '5px', right: '2px', top: 'calc(38.8889% + 2px)', height: 'calc(26.3889% - 4px)' }}>
                            </div>
                            <div className="absolute rounded-full bg-aubergine-500"
                              style={{ width: '5px', right: '2px', top: 'calc(0% + 2px)', height: 'calc(38.8889% - 4px)' }}>
                            </div>
                          </div>
                          <div className="absolute border-l border-dashed border-gray-400 opacity-20"
                            style={{ left: '75%', top: '0px', bottom: '0px' }}></div>
                          <div
                            className="absolute flex items-center justify-center rounded-full bg-gray-900 opacity-40"
                            style={{ width: '10px', height: '10px', left: '51%', top: '65.2778%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                          <div
                            className="absolute flex items-center justify-center rounded-full bg-gray-900 opacity-40"
                            style={{ width: '10px', height: '10px', left: '63%', top: '36.1111%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                          <div
                            className="absolute flex items-center justify-center rounded-full border-2 border-gray-900 bg-gray-900"
                            style={{ width: '10px', height: '10px', left: '75%', top: '36.1111%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="text-card-foreground rounded-xl flex w-full shrink-0 cursor-pointer flex-col bg-white p-4"
                      role="article" aria-label="Cortical gray matter volume">
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex min-w-0 flex-col">
                          <h3 className="text-sm leading-[110%] font-normal text-gray-900">Cortical gray
                            matter volume</h3>
                          <div className="mt-1 flex items-end gap-1.5"><span
                            className="text-[32px] leading-none font-medium text-gray-900">34.2</span><span
                              className="pb-[1px] font-mono text-[9px] leading-3 font-normal tracking-wider text-gray-900 uppercase">%</span>
                          </div>
                          <div className="mt-2"><span
                            className="w-fit truncate rounded-[40px] px-2 py-0.5 text-[11px] leading-[13px] font-medium text-nowrap print:text-black text-deep-green-900 bg-deep-green-50 print:bg-deep-green-100"
                            role="status">Normal range</span></div>
                        </div>
                        <div className="relative shrink-0 overflow-hidden"
                          style={{ width: '143px', height: '79px' }}>
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded"
                            style={{ inset: '0px 12px 0px 0px' }}>
                            <div
                              className="absolute right-0 left-0 rounded bg-gradient-to-r from-transparent to-deep-green-200"
                              style={{ top: '30.6667%', height: '19.6667%' }}></div>
                            <div className="absolute rounded-full bg-aubergine-500"
                              style={{ width: '5px', right: '2px', top: 'calc(50.3333% + 2px)', height: 'calc(49.6667% - 4px)' }}>
                            </div>
                            <div className="absolute rounded-full bg-deep-green-500"
                              style={{ width: '5px', right: '2px', top: 'calc(30.6667% + 2px)', height: 'calc(19.6667% - 4px)' }}>
                            </div>
                            <div className="absolute rounded-full bg-aubergine-500"
                              style={{ width: '5px', right: '2px', top: 'calc(0% + 2px)', height: 'calc(30.6667% - 4px)' }}>
                            </div>
                          </div>
                          <div className="absolute border-l border-dashed border-gray-400 opacity-20"
                            style={{ left: '75%', top: '0px', bottom: '0px' }}></div>
                          <div
                            className="absolute flex items-center justify-center rounded-full bg-gray-900 opacity-40"
                            style={{ width: '10px', height: '10px', left: '51%', top: '30.3333%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                          <div
                            className="absolute flex items-center justify-center rounded-full bg-gray-900 opacity-40"
                            style={{ width: '10px', height: '10px', left: '63%', top: '44.3333%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                          <div
                            className="absolute flex items-center justify-center rounded-full border-2 border-gray-900 bg-gray-900"
                            style={{ width: '10px', height: '10px', left: '75%', top: '44.3333%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="text-card-foreground rounded-xl flex w-full shrink-0 cursor-pointer flex-col bg-white p-4"
                      role="article" aria-label="Frontal lobe volume (left)">
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex min-w-0 flex-col">
                          <h3 className="text-sm leading-[110%] font-normal text-gray-900">Frontal lobe
                            volume (left)</h3>
                          <div className="mt-1 flex items-end gap-1.5"><span
                            className="text-[32px] leading-none font-medium text-gray-900">6.67</span><span
                              className="pb-[1px] font-mono text-[9px] leading-3 font-normal tracking-wider text-gray-900 uppercase">%</span>
                          </div>
                          <div className="mt-2"><span
                            className="w-fit truncate rounded-[40px] px-2 py-0.5 text-[11px] leading-[13px] font-medium text-nowrap print:text-black text-deep-green-900 bg-deep-green-50 print:bg-deep-green-100"
                            role="status">Normal range</span></div>
                        </div>
                        <div className="relative shrink-0 overflow-hidden"
                          style={{ width: '143px', height: '79px' }}>
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded"
                            style={{ inset: '0px 12px 0px 0px' }}>
                            <div
                              className="absolute right-0 left-0 rounded bg-gradient-to-r from-transparent to-deep-green-200"
                              style={{ top: '29.3056%', height: '18.8889%' }}></div>
                            <div className="absolute rounded-full bg-aubergine-500"
                              style={{ width: '5px', right: '2px', top: 'calc(48.1944% + 2px)', height: 'calc(51.8056% - 4px)' }}>
                            </div>
                            <div className="absolute rounded-full bg-deep-green-500"
                              style={{ width: '5px', right: '2px', top: 'calc(29.3056% + 2px)', height: 'calc(18.8889% - 4px)' }}>
                            </div>
                            <div className="absolute rounded-full bg-aubergine-500"
                              style={{ width: '5px', right: '2px', top: 'calc(0% + 2px)', height: 'calc(29.3056% - 4px)' }}>
                            </div>
                          </div>
                          <div className="absolute border-l border-dashed border-gray-400 opacity-20"
                            style={{ left: '75%', top: '0px', bottom: '0px' }}></div>
                          <div
                            className="absolute flex items-center justify-center rounded-full bg-gray-900 opacity-40"
                            style={{ width: '10px', height: '10px', left: '51%', top: '26.25%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                          <div
                            className="absolute flex items-center justify-center rounded-full bg-gray-900 opacity-40"
                            style={{ width: '10px', height: '10px', left: '63%', top: '40.6944%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                          <div
                            className="absolute flex items-center justify-center rounded-full border-2 border-gray-900 bg-gray-900"
                            style={{ width: '10px', height: '10px', left: '75%', top: '40.6944%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="text-card-foreground rounded-xl flex w-full shrink-0 cursor-pointer flex-col bg-white p-4"
                      role="article" aria-label="Frontal lobe volume (right)">
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex min-w-0 flex-col">
                          <h3 className="text-sm leading-[110%] font-normal text-gray-900">Frontal lobe
                            volume (right)</h3>
                          <div className="mt-1 flex items-end gap-1.5"><span
                            className="text-[32px] leading-none font-medium text-gray-900">6.52</span><span
                              className="pb-[1px] font-mono text-[9px] leading-3 font-normal tracking-wider text-gray-900 uppercase">%</span>
                          </div>
                          <div className="mt-2"><span
                            className="w-fit truncate rounded-[40px] px-2 py-0.5 text-[11px] leading-[13px] font-medium text-nowrap print:text-black text-deep-green-900 bg-deep-green-50 print:bg-deep-green-100"
                            role="status">Normal range</span></div>
                        </div>
                        <div className="relative shrink-0 overflow-hidden"
                          style={{ width: '143px', height: '79px' }}>
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded"
                            style={{ inset: '0px 12px 0px 0px' }}>
                            <div
                              className="absolute right-0 left-0 rounded bg-gradient-to-r from-transparent to-deep-green-200"
                              style={{ top: '33.4722%', height: '17.3611%' }}></div>
                            <div className="absolute rounded-full bg-aubergine-500"
                              style={{ width: '5px', right: '2px', top: 'calc(50.8333% + 2px)', height: 'calc(49.1667% - 4px)' }}>
                            </div>
                            <div className="absolute rounded-full bg-deep-green-500"
                              style={{ width: '5px', right: '2px', top: 'calc(33.4722% + 2px)', height: 'calc(17.3611% - 4px)' }}>
                            </div>
                            <div className="absolute rounded-full bg-aubergine-500"
                              style={{ width: '5px', right: '2px', top: 'calc(0% + 2px)', height: 'calc(33.4722% - 4px)' }}>
                            </div>
                          </div>
                          <div className="absolute border-l border-dashed border-gray-400 opacity-20"
                            style={{ left: '75%', top: '0px', bottom: '0px' }}></div>
                          <div
                            className="absolute flex items-center justify-center rounded-full bg-gray-900 opacity-40"
                            style={{ width: '10px', height: '10px', left: '63%', top: '26.3889%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                          <div
                            className="absolute flex items-center justify-center rounded-full border-2 border-gray-900 bg-gray-900"
                            style={{ width: '10px', height: '10px', left: '75%', top: '42.7778%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="text-card-foreground rounded-xl flex w-full shrink-0 cursor-pointer flex-col bg-white p-4"
                      role="article" aria-label="Hippocampus volume">
                      <div className="flex items-end justify-between gap-4">
                        <div className="flex min-w-0 flex-col">
                          <h3 className="text-sm leading-[110%] font-normal text-gray-900">Hippocampus
                            volume</h3>
                          <div className="mt-1 flex items-end gap-1.5"><span
                            className="text-[32px] leading-none font-medium text-gray-900">0.42</span><span
                              className="pb-[1px] font-mono text-[9px] leading-3 font-normal tracking-wider text-gray-900 uppercase">%</span>
                          </div>
                          <div className="mt-2"><span
                            className="w-fit truncate rounded-[40px] px-2 py-0.5 text-[11px] leading-[13px] font-medium text-nowrap print:text-black text-deep-green-900 bg-deep-green-50 print:bg-deep-green-100"
                            role="status">Normal range</span></div>
                        </div>
                        <div className="relative shrink-0 overflow-hidden"
                          style={{ width: '143px', height: '79px' }}>
                          <div
                            className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded"
                            style={{ inset: '0px 12px 0px 0px' }}>
                            <div
                              className="absolute right-0 left-0 rounded bg-gradient-to-r from-transparent to-deep-green-200"
                              style={{ top: '29.1667%', height: '20.8333%' }}></div>
                            <div className="absolute rounded-full bg-aubergine-500"
                              style={{ width: '5px', right: '2px', top: 'calc(50% + 2px)', height: 'calc(50% - 4px)' }}>
                            </div>
                            <div className="absolute rounded-full bg-deep-green-500"
                              style={{ width: '5px', right: '2px', top: 'calc(29.1667% + 2px)', height: 'calc(20.8333% - 4px)' }}>
                            </div>
                            <div className="absolute rounded-full bg-aubergine-500"
                              style={{ width: '5px', right: '2px', top: 'calc(0% + 2px)', height: 'calc(29.1667% - 4px)' }}>
                            </div>
                          </div>
                          <div className="absolute border-l border-dashed border-gray-400 opacity-20"
                            style={{ left: '75%', top: '0px', bottom: '0px' }}></div>
                          <div
                            className="absolute flex items-center justify-center rounded-full border-2 border-gray-900 bg-gray-900"
                            style={{ width: '10px', height: '10px', left: '75%', top: '45.8333%', transform: 'translate(-50%, -50%)' }}>
                            <div className="h-1 w-1 rounded-full bg-white"></div>
                          </div>
                        </div>
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

export default BrainAndNervous;
