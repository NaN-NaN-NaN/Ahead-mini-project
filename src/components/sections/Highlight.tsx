import React from 'react';

const Highlight = () => {
  return (
    <section className="flex flex-col gap-5"
      aria-label="Report highlights">
      <div className="flex min-h-0 w-full shrink-0 grow flex-col overflow-hidden"
        role="article" aria-label="Highlights">
        <div className="mb-4 shrink-0">
          <div
            className="flex items-center justify-between font-medium">
            <div className="text-base" role="heading"
              aria-level="3">Highlights</div>
          </div>
        </div>
        <div
          className="flex min-h-0 flex-1 grow flex-col overflow-visible">
          <ul className="flex shrink-0 flex-col gap-2 overflow-visible"
            role="list" aria-label="Biomarker results">
            <li id="section-detail-datahighlight-eosinophiles">
              <div className="text-card-foreground rounded-xl flex w-full shrink-0 cursor-pointer flex-col bg-white p-4"
                role="article"
                aria-label="Eosinophiles">
                <div
                  className="flex items-end justify-between gap-4">
                  <div className="flex min-w-0 flex-col">
                    <h3
                      className="text-sm leading-[110%] font-normal text-gray-900">
                      Eosinophiles</h3>
                    <div
                      className="mt-1 flex items-end gap-1.5">
                      <span
                        className="text-[32px] leading-none font-medium text-gray-900">12.0</span><span
                          className="pb-[1px] font-mono text-[9px] leading-3 font-normal tracking-wider text-gray-900 uppercase">%</span>
                    </div>
                    <div className="mt-2"><span
                      className="w-fit truncate rounded-[40px] px-2 py-0.5 text-[11px] leading-[13px] font-medium text-nowrap print:text-black text-aubergine-600 bg-aubergine-50 print:bg-aubergine-100"
                      role="status">High</span>
                    </div>
                  </div>
                  <div className="relative shrink-0 overflow-hidden"
                    style={{ width: '143px', height: '79px' }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded"
                      style={{ inset: '0px 12px 0px 0px' }}>
                      <div className="absolute right-0 left-0 rounded bg-gradient-to-r from-transparent to-aubergine-200"
                        style={{ top: '0%', height: '55%' }}>
                      </div>
                      <div className="absolute rounded-full bg-aubergine-500"
                        style={{ width: '5px', right: '2px', top: 'calc(88.3333% + 2px)', height: 'calc(11.6667% - 4px)' }}>
                      </div>
                      <div className="absolute rounded-full bg-deep-green-500"
                        style={{ width: '5px', right: '2px', top: 'calc(55% + 2px)', height: 'calc(33.3333% - 4px)' }}>
                      </div>
                      <div className="absolute rounded-full bg-aubergine-500"
                        style={{ width: '5px', right: '2px', top: 'calc(0% + 2px)', height: 'calc(55% - 4px)' }}>
                      </div>
                    </div>
                    <div className="absolute border-l border-dashed border-gray-400 opacity-20"
                      style={{ left: '75%', top: '0px', bottom: '0px' }}>
                    </div>
                    <div className="absolute flex items-center justify-center rounded-full border-2 border-gray-900 bg-gray-900"
                      style={{ width: '10px', height: '10px', left: '75%', top: '11.6667%', transform: 'translate(-50%, -50%)' }}>
                      <div
                        className="h-1 w-1 rounded-full bg-white">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="text-card-foreground rounded-xl flex w-full shrink-0 cursor-pointer flex-col bg-white p-4"
                role="article"
                aria-label="estimated Glomerular Filtration Rate (eGFR)">
                <div
                  className="flex items-end justify-between gap-4">
                  <div className="flex min-w-0 flex-col">
                    <h3
                      className="text-sm leading-[110%] font-normal text-gray-900">
                      estimated Glomerular
                      Filtration Rate (eGFR)</h3>
                    <div
                      className="mt-1 flex items-end gap-1.5">
                      <span
                        className="text-[32px] leading-none font-medium text-gray-900">82</span><span
                          className="pb-[1px] font-mono text-[9px] leading-3 font-normal tracking-wider text-gray-900 uppercase">ML/MIN/1.73M2</span>
                    </div>
                    <div className="mt-2"><span
                      className="w-fit truncate rounded-[40px] px-2 py-0.5 text-[11px] leading-[13px] font-medium text-nowrap print:text-black text-deep-green-900 bg-deep-green-50 print:bg-deep-green-100"
                      role="status">Normal</span>
                    </div>
                  </div>
                  <div className="relative shrink-0 overflow-hidden"
                    style={{ width: '143px', height: '79px' }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded"
                      style={{ inset: '0px 12px 0px 0px' }}>
                      <div className="absolute right-0 left-0 rounded bg-gradient-to-r from-transparent to-deep-green-200"
                        style={{ top: '39.9123%', height: '25.4386%' }}>
                      </div>
                      <div className="absolute rounded-full bg-rust-500"
                        style={{ width: '5px', right: '2px', top: 'calc(66.2281% + 2px)', height: 'calc(25.4386% - 4px)' }}>
                      </div>
                      <div className="absolute rounded-full bg-deep-green-500"
                        style={{ width: '5px', right: '2px', top: 'calc(39.9123% + 2px)', height: 'calc(25.4386% - 4px)' }}>
                      </div>
                      <div className="absolute rounded-full bg-deep-green-700"
                        style={{ width: '5px', right: '2px', top: 'calc(0% + 2px)', height: 'calc(39.0351% - 4px)' }}>
                      </div>
                    </div>
                    <div className="absolute border-l border-dashed border-gray-400 opacity-20"
                      style={{ left: '75%', top: '0px', bottom: '0px' }}>
                    </div>
                    <div className="absolute flex items-center justify-center rounded-full border-2 border-gray-900 bg-gray-900"
                      style={{ width: '10px', height: '10px', left: '75%', top: '46.0526%', transform: 'translate(-50%, -50%)' }}>
                      <div
                        className="h-1 w-1 rounded-full bg-white">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="text-card-foreground rounded-xl flex w-full shrink-0 cursor-pointer flex-col bg-white p-4"
                role="article"
                aria-label="Liver fat fraction (%PDFF)">
                <div
                  className="flex items-end justify-between gap-4">
                  <div className="flex min-w-0 flex-col">
                    <h3
                      className="text-sm leading-[110%] font-normal text-gray-900">
                      Liver fat fraction (%PDFF)
                    </h3>
                    <div
                      className="mt-1 flex items-end gap-1.5">
                      <span
                        className="text-[32px] leading-none font-medium text-gray-900">1.1</span><span
                          className="pb-[1px] font-mono text-[9px] leading-3 font-normal tracking-wider text-gray-900 uppercase">%</span>
                    </div>
                    <div className="mt-2"><span
                      className="w-fit truncate rounded-[40px] px-2 py-0.5 text-[11px] leading-[13px] font-medium text-nowrap print:text-black text-deep-green-900 bg-deep-green-50 print:bg-deep-green-100"
                      role="status">Normal</span>
                    </div>
                  </div>
                  <div className="relative shrink-0 overflow-hidden"
                    style={{ width: '143px', height: '79px' }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden rounded"
                      style={{ inset: '0px 12px 0px 0px' }}>
                      <div className="absolute right-0 left-0 rounded bg-gradient-to-r from-transparent to-deep-green-200"
                        style={{ top: '71.6667%', height: '28.3333%' }}>
                      </div>
                      <div className="absolute rounded-full bg-deep-green-500"
                        style={{ width: '5px', right: '2px', top: 'calc(71.6667% + 2px)', height: 'calc(28.3333% - 4px)' }}>
                      </div>
                      <div className="absolute rounded-full bg-aubergine-500"
                        style={{ width: '5px', right: '2px', top: 'calc(0% + 2px)', height: 'calc(71.6667% - 4px)' }}>
                      </div>
                    </div>
                    <div className="absolute border-l border-dashed border-gray-400 opacity-20"
                      style={{ left: '75%', top: '0px', bottom: '0px' }}>
                    </div>
                    <div className="absolute flex items-center justify-center rounded-full border-2 border-gray-900 bg-gray-900"
                      style={{ width: '10px', height: '10px', left: '75%', top: '88%', transform: 'translate(-50%, -50%)' }}>
                      <div
                        className="h-1 w-1 rounded-full bg-white">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="text-card-foreground rounded-xl flex w-full shrink-0 cursor-pointer flex-col bg-white p-4"
                id="section-detail-datahighlight-bandscheibenvorwölbungen"
                role="article"
                aria-label="Bandscheibenvorwölbungen und leichte Einengung des Wirbelkanals in der Halswirbelsäule">
                <div className="flex flex-wrap items-start gap-3 transition-all duration-300 md:flex-nowrap"
                  role="region"
                  aria-label="Bandscheibenvorwölbungen und leichte Einengung des Wirbelkanals in der Halswirbelsäule"
                  aria-expanded="false"><button
                    className="relative flex shrink-0 flex-col self-stretch md:transition-all md:duration-300 h-16 w-16"
                    aria-label="View medical image">
                    <div
                      className="flex min-w-0 grow flex-col overflow-hidden rounded-lg">
                      <div
                        className="flex w-full grow flex-col overflow-hidden rounded-xl">
                        <div
                          className="flex min-h-0 w-full grow flex-col">
                          <div
                            className="flex min-h-0 w-full grow flex-col">
                            <div
                              className="group relative flex w-full grow touch-none flex-col gap-2 bg-black">
                              <div
                                className="absolute inset-0 z-20 h-full w-full flex-col bg-black hidden">
                                <div
                                  className="flex min-h-0 grow flex-col items-center justify-center bg-black">
                                  <div
                                    className="border-4 border-t-4 border-gray-200 border-t-gray-600 rounded-full animate-spin aspect-square h-1/2 w-auto">
                                  </div>
                                </div>
                              </div>
                              <div className="cornerstone-viewport h-full w-full bg-black pan-disabled"
                                data-testid="dicom-viewer-container"
                                tabIndex="-1"
                                data-viewport-uid="viewport-2"
                                data-rendering-engine-uid="sharedMriRenderingEngine"
                                style={{ cursor: 'default' }}
                                data-initial-parallel-scale="80"
                                data-initial-focal-point="[41.76322555541992,-0.23539525270462036,-24.634662628173828]"
                                data-initial-position="[438.1667594909668,-0.23539525270462036,-21.338459014892578]">
                                <div className="viewport-element"
                                  style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                                  <canvas
                                    className="cornerstone-canvas"
                                    style={{ position: 'absolute', width: '100%', height: '100%', imageRendering: 'pixelated' }}
                                    width="48"
                                    height="48"></canvas><svg
                                      className="svg-layer"
                                      id="svg-layer-viewport-2"
                                      xmlns="http://www.w3.org/2000/svg"
                                      style={{ width: '100%', height: '100%', pointerEvents: 'none', position: 'absolute' }}>
                                    <defs>
                                      <filter
                                        id="shadow-svg-layer-viewport-2"
                                        filterUnits="userSpaceOnUse">
                                        <feOffset
                                          result="offOut"
                                          in="SourceGraphic"
                                          dx="0.5"
                                          dy="0.5">
                                        </feOffset>
                                        <feColorMatrix
                                          result="matrixOut"
                                          in="offOut"
                                          in2="matrix"
                                          values="0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0">
                                        </feColorMatrix>
                                        <feBlend
                                          in="SourceGraphic"
                                          in2="matrixOut"
                                          mode="normal">
                                        </feBlend>
                                      </filter>
                                    </defs>
                                    <circle
                                      data-id="poi-marker-257-894-7-6-circle"
                                      cx="32.00000007152558"
                                      cy="31.999980661395853"
                                      r="6.504760020122319"
                                      stroke="rgb(96, 165, 250)"
                                      fill="transparent"
                                      strokeWidth="2"
                                      fillOpacity="1"
                                      strokeOpacity="1">
                                    </circle>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1 right-1 cursor-pointer rounded bg-black/50 p-1 opacity-80 transition-opacity hover:opacity-100 md:block"
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-expand h-4 w-4 text-white"
                      >
                        <path
                          d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8">
                        </path>
                        <path
                          d="M3 16.2V21m0 0h4.8M3 21l6-6">
                        </path>
                        <path
                          d="M21 7.8V3m0 0h-4.8M21 3l-6 6">
                        </path>
                        <path
                          d="M3 7.8V3m0 0h4.8M3 3l6 6">
                        </path>
                      </svg></div>
                  </button>
                  <button
                    className="text-content flex-1 cursor-pointer text-left"
                    aria-expanded="false"
                    aria-label="Bandscheibenvorwölbungen und leichte Einengung des Wirbelkanals in der Halswirbelsäule, Intermediate. Expand details"

                  >
                    <div
                      className="flex items-center justify-between">
                      <span
                        className="text-base font-medium">Bandscheibenvorwölbungen
                        und leichte Einengung
                        des Wirbelkanals in der
                        Halswirbelsäule</span><span
                          className="ml-2 flex items-center rounded-md bg-white px-0 py-1.5 text-gray-600"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-chevron-down h-4 w-4 transition-transform"
                            aria-hidden="true">
                          <path
                            d="m6 9 6 6 6-6">
                          </path>
                        </svg></span></div>
                    <div className="mt-1">
                      <div className="flex shrink-0 grow-0 cursor-pointer items-center gap-1 transition-opacity hover:opacity-80"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-_r_11_"
                        data-state="closed">
                        <div>
                          <div
                            className="flex items-center gap-1">
                            <div
                              className="h-2 w-2 rounded-full bg-sand-600">
                            </div>
                            <div
                              className="h-2 w-2 rounded-full bg-sand-600">
                            </div>
                            <div
                              className="h-2 w-2 rounded-full bg-sand-600">
                            </div>
                            <div
                              className="h-2 w-2 rounded-full bg-gray-200">
                            </div>
                            <div
                              className="h-2 w-2 rounded-full bg-gray-200">
                            </div>&nbsp;
                          </div>
                        </div>
                        <div className="text-sm">
                          Intermediate finding
                        </div>
                      </div>
                    </div>
                  </button></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
