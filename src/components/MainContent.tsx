import React from 'react';
import Summary from './sections/Summary';
import BrainAndNervous from './sections/BrainAndNervous';
import Cardiovascular from './sections/Cardiovascular';
import Highlight from './sections/Highlight';

const MainContent = () => {
  return (
    <main
      className="flex flex-1 min-h-0 min-w-0 flex-col"
      aria-label="Health Report main content"
    >

      <div
        className="relative flex flex-1 min-h-0 w-full flex-col overflow-y-auto pb-10"
        tabIndex={0}
        aria-label="Health Report Content"
        data-scroll-container="true"
        style={{ outline: 'none' }}
      >
        <div className="absolute top-6 right-10 z-40 hidden overflow-visible md:block" >
          <button
            className="hover:bg-light shadow-soft flex h-[38px] cursor-pointer items-center gap-2 rounded-full bg-white py-2 pr-1 pl-3 transition-colors focus:outline-none"
            aria-label="My account" aria-expanded="false" aria-haspopup="dialog"
            type="button" aria-controls="radix-_r_t_" data-state="closed" id="section-my-account">
            <svg
              className="h-4 w-4 md:hidden" viewBox="0 0 16 8" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line x1="0.75" y1="7.25" x2="15.25" y2="7.25" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round"></line>
              <line x1="0.75" y1="1.25" x2="15.25" y2="1.25" stroke="currentColor"
                strokeWidth="1.5" strokeLinecap="round"></line>
            </svg><span className="hidden text-sm md:inline" >My account</span><span
              className="relative flex shrink-0 rounded-full h-7 w-7 overflow-hidden"><span
                className="flex h-full w-full items-center justify-center rounded-full bg-primary/50"><svg
                  className="h-7 w-7" viewBox="0 0 64 64" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1518_41063)">
                    <path
                      d="M31.3563 42.3339C34.7078 42.3339 37.8054 41.3894 40.2835 39.7847C42.203 38.5559 44.7014 38.759 46.3873 40.2925C51.0693 44.5378 53.7302 50.5603 53.72 56.8876V59.5993C53.72 62.4023 51.4451 64.6672 48.642 64.6672H14.0707C11.2676 64.6672 8.99262 62.4023 8.99262 59.5993V56.8876C8.9723 50.5705 11.6332 44.5378 16.3152 40.3027C18.0011 38.7691 20.5096 38.566 22.419 39.7949C24.9072 41.3894 27.9947 42.3339 31.3563 42.3339Z"
                      fill="url(#paint1_linear_1518_41063)" fillOpacity="0.2">
                    </path>
                    <path
                      d="M31.3563 42.3339C34.7078 42.3339 37.8054 41.3894 40.2835 39.7847C42.203 38.5559 44.7014 38.759 46.3873 40.2925C51.0693 44.5378 53.7302 50.5603 53.72 56.8876V59.5993C53.72 62.4023 51.4451 64.6672 48.642 64.6672H14.0707C11.2676 64.6672 8.99262 62.4023 8.99262 59.5993V56.8876C8.9723 50.5705 11.6332 44.5378 16.3152 40.3027C18.0011 38.7691 20.5096 38.566 22.419 39.7949C24.9072 41.3894 27.9947 42.3339 31.3563 42.3339Z"
                      fill="#182D56"></path>
                    <path
                      d="M31.3562 37.813C38.3002 37.813 43.9294 32.1837 43.9294 25.2397C43.9294 18.2957 38.3002 12.6665 31.3562 12.6665C24.4122 12.6665 18.7829 18.2957 18.7829 25.2397C18.7829 32.1837 24.4122 37.813 31.3562 37.813Z"
                      fill="url(#paint2_linear_1518_41063)" fillOpacity="0.2">
                    </path>
                    <path
                      d="M31.3562 37.813C38.3002 37.813 43.9294 32.1837 43.9294 25.2397C43.9294 18.2957 38.3002 12.6665 31.3562 12.6665C24.4122 12.6665 18.7829 18.2957 18.7829 25.2397C18.7829 32.1837 24.4122 37.813 31.3562 37.813Z"
                      fill="#182D56"></path>
                  </g>
                  <defs>
                    <linearGradient id="paint0_linear_1518_41063" x1="-9.6"
                      y1="-75.2" x2="45.6" y2="32" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#93B6EE"></stop>
                      <stop offset="1" stopColor="#5182D0"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1518_41063" x1="2.28337"
                      y1="8.80977" x2="17.0803" y2="58.8573"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#93B6EE"></stop>
                      <stop offset="1" stopColor="#5182D0"></stop>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1518_41063" x1="15.011"
                      y1="-16.8806" x2="36.6998" y2="25.2397"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#93B6EE"></stop>
                      <stop offset="1" stopColor="#5182D0"></stop>
                    </linearGradient>
                    <clipPath id="clip0_1518_41063">
                      <rect width="64" height="64" rx="32" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg></span></span></button></div>
        <div className="mt-60 mb-4" >
          <section
            className="flex w-full grow flex-col items-center"
            aria-label="Summary statistics"

          >
            <div className="report-content-container hidden grid-cols-2 gap-4 px-4 md:grid"

            >
              <div id="section-longevity-indicators" className="col-span-2 grid grid-cols-2 gap-4">
                <div className="col-span-1" >
                  <div
                    className="shadow-soft flex aspect-square flex-col rounded-2xl p-4 md:aspect-auto w-full bg-cover bg-center bg-no-repeat text-white relative h-[165px] shrink-0 overflow-hidden pt-3 pb-5 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Biological age"
                    style={{
                      backgroundImage:
                        'url("/images/summary_bg_1.png")',
                    }}

                  >
                    <div className="absolute top-4 right-4">
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer data-[active=&quot;true&quot;]:bg-lightgrey hover:bg-lightgrey hover:text-accent-foreground border-none rounded-full bg-[#6a6a6a]/25 p-0 px-1.5 py-1.5"
                        aria-label="More information about Biological age"
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
                          className="lucide lucide-plus h-4 w-4 bg-transparent text-white"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex h-full flex-col gap-3">
                      <div className="flex flex-col">
                        <div className="text-[40px] leading-none font-medium">
                          37
                        </div>
                        <div className="mt-1">Biological age</div>
                      </div>
                      <div className="flex grow flex-col justify-end">
                        <div className="shrink-0">
                          <div className="text-foreground relative h-2 w-full">
                            <div className="absolute top-1/2 left-0 h-2 w-full -translate-y-1/2 rounded-[40px] bg-white/20" />
                            <div
                              className="absolute top-1/2 h-2 -translate-y-1/2 rounded-[40px] bg-white"
                              style={{ left: '47.746%', right: '0px' }}
                            />
                            <div
                              className="absolute top-1/2 z-10 flex h-5 -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 rounded-[40px] bg-white px-2"
                              style={{ left: '47.746%' }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-arrow-down h-5 w-3"
                              >
                                <path d="M12 5v14" />
                                <path d="m19 12-7 7-7-7" />
                              </svg>
                              <span className="text-[14px] leading-none">
                                1
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-1 shrink-0 text-sm">
                        <div className="max-w-[270px]">
                          Your biological age is{' '}
                          <span className="font-medium">1</span> years younger
                          than your actual age.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div
                    className="shadow-soft flex aspect-square flex-col rounded-2xl p-4 md:aspect-auto w-full bg-cover bg-center bg-no-repeat text-white relative h-[165px] shrink-0 overflow-hidden pt-3 pb-5 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    aria-label="Biological age"
                    style={{
                      backgroundImage:
                        'url("/images/summary_bg_2.png")',
                    }}
                  >
                    <div className="absolute top-4 right-4">
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer data-[active=&quot;true&quot;]:bg-lightgrey hover:bg-lightgrey hover:text-accent-foreground border-none rounded-full bg-[#6a6a6a]/25 p-0 px-1.5 py-1.5"
                        aria-label="More information about Biological age"
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
                          className="lucide lucide-plus h-4 w-4 bg-transparent text-white"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5v14" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex h-full flex-col gap-3">
                      <div className="flex flex-col">
                        <div className="text-[40px] leading-none font-medium">
                          1.4%
                        </div>
                        <div className="mt-1">Heart risk score</div>
                      </div>
                      <div className="flex grow flex-col justify-end">
                        <div className="shrink-0">
                          <div className="text-foreground relative h-2 w-full">
                            <div className="absolute top-1/2 left-0 h-2 w-full -translate-y-1/2 rounded-[40px] bg-white/20" />
                            <div
                              className="absolute top-1/2 h-2 -translate-y-1/2 rounded-[40px] bg-white"
                              style={{ right: '87.746%', left: '0px' }}
                            />

                          </div>
                        </div>
                      </div>
                      <div className="mt-1 shrink-0 text-sm">
                        <div className="max-w-[270px]">
                          Your 10-year cardiovascular risk is
                          <br></br>
                          considered Low-to-moderate (0%-2.5%).
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="section-biomarker-filter" className="col-span-2 grid grid-cols-2 gap-4">
                <div
                  className="shadow-soft flex aspect-square flex-col rounded-2xl p-4 md:aspect-auto text-foreground grow border-2 border-transparent bg-white relative h-[165px] shrink-0 overflow-hidden pt-3 pb-5 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label="Biomarkers"
                >
                  <div className="flex h-full flex-col gap-3">
                    <div className="flex flex-col">
                      <div className="text-[40px] leading-none font-medium">
                        89
                      </div>
                      <div className="mt-1">Biomarkers</div>
                    </div>
                    <div className="flex grow flex-col justify-end">
                      <div className="shrink-0">
                        <div className="flex items-center gap-3 h-2">
                          <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                            <div
                              className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100 cursor-pointer hover:opacity-80"
                              style={{
                                width: '94.382%',
                                minWidth: '10px',
                              }}
                            />
                            <div
                              className="bg-aubergine-500 h-full rounded-full transition-opacity opacity-100 cursor-pointer hover:opacity-80"
                              style={{
                                width: '5.61798%',
                                minWidth: '10px',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 shrink-0 text-sm">
                      <div className="flex gap-2">
                        <div className="justify-center rounded-[40px] px-[8px] pt-[2px] pb-[1px] text-xs text-foreground border border-border shadow-none hover:border-selected flex items-center gap-1.5 font-normal transition-all hover:bg-muted/50 cursor-pointer">
                          <div className="font-medium">0</div>{' '}
                          <div className="shrink-0">optimal</div>
                        </div>
                        <div className="justify-center rounded-[40px] px-[8px] pt-[2px] pb-[1px] text-xs text-foreground border border-border shadow-none hover:border-selected flex items-center gap-1.5 font-normal transition-all hover:bg-muted/50 cursor-pointer">
                          <div className="font-medium">84</div>{' '}
                          <div className="shrink-0">in range</div>
                        </div>
                        <div className="justify-center rounded-[40px] px-[8px] pt-[2px] pb-[1px] text-xs text-foreground border border-border shadow-none hover:border-selected flex items-center gap-1.5 font-normal transition-all hover:bg-muted/50 cursor-pointer">
                          <div className="font-medium">5</div>{' '}
                          <div className="shrink-0">out of range</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div
                  className="shadow-soft flex aspect-square flex-col rounded-2xl p-4 md:aspect-auto text-foreground grow border-2 border-transparent bg-white relative h-[165px] shrink-0 overflow-hidden pt-3 pb-5 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label="Findings"
                >
                  <div className="flex h-full flex-col gap-3">
                    <div className="flex flex-col">
                      <div className="text-[40px] leading-none font-medium">
                        10
                      </div>
                      <div className="mt-1">Findings</div>
                    </div>
                    <div className="flex grow flex-col justify-end" />
                    <div className="mt-1 shrink-0 text-sm">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="justify-center rounded-[40px] px-[8px] pt-[2px] pb-[1px] text-xs text-foreground border border-border shadow-none hover:border-selected flex items-center gap-1.5 font-normal transition-all hover:bg-muted/50 cursor-pointer">
                          <div className="bg-deep-green-600 mb-[2px] h-1.5 w-1.5 rounded-full" />
                          <div className="font-medium">6</div>{' '}
                          <div className="shrink-0">Observation</div>
                        </div>
                        <div className="justify-center rounded-[40px] px-[8px] pt-[2px] pb-[1px] text-xs text-foreground border border-border shadow-none hover:border-selected flex items-center gap-1.5 font-normal transition-all hover:bg-muted/50 cursor-pointer">
                          <div className="bg-light-green-600 mb-[2px] h-1.5 w-1.5 rounded-full" />
                          <div className="font-medium">4</div>{' '}
                          <div className="shrink-0">Minor</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="report-content-container md:hidden">
              <div className="flex w-full flex-col gap-4 px-4">
                <div
                  className="shadow-soft flex aspect-square flex-col rounded-2xl p-4 md:aspect-auto w-full bg-cover bg-center bg-no-repeat text-white relative h-[165px] shrink-0 overflow-hidden pt-3 pb-5 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label="Biological age"
                  style={{
                    backgroundImage:
                      'url("/images/summary_bg_2.png")',
                  }}
                >
                  <div className="absolute top-4 right-4">
                    <button
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer data-[active=&quot;true&quot;]:bg-lightgrey hover:bg-lightgrey hover:text-accent-foreground border-none rounded-full bg-[#6a6a6a]/25 p-0 px-1.5 py-1.5"
                      aria-label="More information about Biological age"
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
                        className="lucide lucide-plus h-4 w-4 bg-transparent text-white"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex h-full flex-col gap-3">
                    <div className="flex flex-col">
                      <div className="text-[40px] leading-none font-medium">
                        37
                      </div>
                      <div className="mt-1">Biological age</div>
                    </div>
                    <div className="flex grow flex-col justify-end">
                      <div className="shrink-0">
                        <div className="text-foreground relative h-2 w-full">
                          <div className="absolute top-1/2 left-0 h-2 w-full -translate-y-1/2 rounded-[40px] bg-white/20" />
                          <div
                            className="absolute top-1/2 h-2 -translate-y-1/2 rounded-[40px] bg-white"
                            style={{ left: '47.746%', right: '0px' }}
                          />
                          <div
                            className="absolute top-1/2 z-10 flex h-5 -translate-x-1/2 -translate-y-1/2 items-center gap-0.5 rounded-[40px] bg-white px-2"
                            style={{ left: '47.746%' }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-arrow-down h-5 w-3"
                            >
                              <path d="M12 5v14" />
                              <path d="m19 12-7 7-7-7" />
                            </svg>
                            <span className="text-[14px] leading-none">
                              1
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 shrink-0 text-sm">
                      <div className="max-w-[270px]">
                        Your biological age is{' '}
                        <span className="font-medium">1</span> years younger
                        than your actual age.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="shadow-soft flex aspect-square flex-col rounded-2xl p-4 md:aspect-auto text-foreground grow border-2 border-transparent bg-white relative h-[165px] shrink-0 overflow-hidden pt-3 pb-5 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label="Biomarkers"
                >
                  <div className="flex h-full flex-col gap-3">
                    <div className="flex flex-col">
                      <div className="text-[40px] leading-none font-medium">
                        89
                      </div>
                      <div className="mt-1">Biomarkers</div>
                    </div>
                    <div className="flex grow flex-col justify-end">
                      <div className="shrink-0">
                        <div className="flex items-center gap-3 h-2">
                          <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                            <div
                              className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100 cursor-pointer hover:opacity-80"
                              style={{
                                width: '94.382%',
                                minWidth: '10px',
                              }}
                            />
                            <div
                              className="bg-aubergine-500 h-full rounded-full transition-opacity opacity-100 cursor-pointer hover:opacity-80"
                              style={{
                                width: '5.61798%',
                                minWidth: '10px',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-1 shrink-0 text-sm">
                      <div className="flex gap-2">
                        <div className="justify-center rounded-[40px] px-[8px] pt-[2px] pb-[1px] text-xs text-foreground border border-border shadow-none hover:border-selected flex items-center gap-1.5 font-normal transition-all hover:bg-muted/50 cursor-pointer">
                          <div className="font-medium">0</div>{' '}
                          <div className="shrink-0">optimal</div>
                        </div>
                        <div className="justify-center rounded-[40px] px-[8px] pt-[2px] pb-[1px] text-xs text-foreground border border-border shadow-none hover:border-selected flex items-center gap-1.5 font-normal transition-all hover:bg-muted/50 cursor-pointer">
                          <div className="font-medium">84</div>{' '}
                          <div className="shrink-0">in range</div>
                        </div>
                        <div className="justify-center rounded-[40px] px-[8px] pt-[2px] pb-[1px] text-xs text-foreground border border-border shadow-none hover:border-selected flex items-center gap-1.5 font-normal transition-all hover:bg-muted/50 cursor-pointer">
                          <div className="font-medium">5</div>{' '}
                          <div className="shrink-0">out of range</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="shadow-soft flex aspect-square flex-col rounded-2xl p-4 md:aspect-auto text-foreground grow border-2 border-transparent bg-white relative h-[165px] shrink-0 overflow-hidden pt-3 pb-5 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label="Findings"
                >
                  <div className="flex h-full flex-col gap-3">
                    <div className="flex flex-col">
                      <div className="text-[40px] leading-none font-medium">
                        10
                      </div>
                      <div className="mt-1">Findings</div>
                    </div>
                    <div className="flex grow flex-col justify-end" />
                    <div className="mt-1 shrink-0 text-sm">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="justify-center rounded-[40px] px-[8px] pt-[2px] pb-[1px] text-xs text-foreground border border-border shadow-none hover:border-selected flex items-center gap-1.5 font-normal transition-all hover:bg-muted/50 cursor-pointer">
                          <div className="bg-deep-green-600 mb-[2px] h-1.5 w-1.5 rounded-full" />
                          <div className="font-medium">6</div>{' '}
                          <div className="shrink-0">Observation</div>
                        </div>
                        <div className="justify-center rounded-[40px] px-[8px] pt-[2px] pb-[1px] text-xs text-foreground border border-border shadow-none hover:border-selected flex items-center gap-1.5 font-normal transition-all hover:bg-muted/50 cursor-pointer">
                          <div className="bg-light-green-600 mb-[2px] h-1.5 w-1.5 rounded-full" />
                          <div className="font-medium">4</div>{' '}
                          <div className="shrink-0">Minor</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="flex grow flex-col report-pdf-wrapper"
          role="region"
          aria-label="Health report results"
        >
          <div className="flex w-full flex-col items-center pt-10">
            <div className="report-content-container">
              <div className="hidden flex-col gap-16 md:flex">

                <Summary />
                <Highlight />
                <BrainAndNervous />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
