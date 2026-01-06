import React from 'react';
import Summary from './sections/Summary';
import BrainAndNervous from './sections/BrainAndNervous';
import Cardiovascular from './sections/Cardiovascular';

const MainContent = () => {
  return (
    <main
      className="flex h-full w-full grow flex-col md:items-center"
      aria-label="Health Report main content"
    >
      <div
        className="relative flex w-full flex-col overflow-y-auto pb-10"
        tabIndex={0}
        aria-label="Health Report Content"
        data-scroll-container="true"
        style={{ outline: 'none' }}
      >
        <div className="mt-6 mb-4">
          <section
            className="flex w-full grow flex-col items-center"
            aria-label="Summary statistics"
          >
            <div className="report-content-container hidden grid-cols-2 gap-4 px-4 md:grid">
              <div className="col-span-2">
                <div
                  className="shadow-soft flex aspect-square flex-col rounded-2xl p-4 md:aspect-auto w-full bg-cover bg-center bg-no-repeat text-white relative h-[165px] shrink-0 overflow-hidden pt-3 pb-5 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  aria-label="Biological age"
                  style={{
                    backgroundImage:
                      'url("/images/backgrounds/summary_bg_1.png")',
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
              <div className="">
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
              </div>
              <div className="">
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
                      'url("/images/backgrounds/summary_bg_1.png")',
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
                <BrainAndNervous />
                <Cardiovascular />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
