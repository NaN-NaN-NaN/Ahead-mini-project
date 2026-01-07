import React, { useState } from 'react';
import { useNextStep } from 'nextstepjs';
import ChatInterface from './ChatInterface';

const Sidebar = () => {
  const { startNextStep } = useNextStep();
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRestartTour = () => {
    startNextStep('main-walkthrough');
    setIsSupportOpen(false);
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setIsSupportOpen(false);
  };

  return (
    <aside
      className="mx-10 hidden shrink-0 flex-col md:flex md:w-[322px] relative h-full"
      aria-label="Report sidebar"
    >
      <div role="presentation" >
        <div className="pt-6">
          <nav
            id="sidebar-nav"
            className="shadow-soft flex h-[38px] w-full items-center gap-1 rounded-full bg-white p-1 md:w-[322px]"
            aria-label="Report views"
          >
            <img
              alt="Ahead"
              loading="lazy"
              width="28"
              height="28"
              decoding="async"
              data-nimg="1"
              className="h-7 w-7"
              src="images/image1.svg"
              style={{ color: 'transparent' }}
            />
            <div
              className="no-scrollbar flex grow items-center justify-evenly gap-1 overflow-x-auto"
              role="tablist"
              aria-label="View selection"
            >
              <button
                role="tab"
                aria-selected="false"
                aria-disabled="false"
                tabIndex={-1}
                className="shrink-0 rounded-full px-3 pt-[6px] pb-[7px] text-xs whitespace-nowrap transition-colors md:text-sm hover:text-foreground cursor-pointer"
              >
                Home
              </button>
              <button
                role="tab"
                aria-selected="true"
                aria-disabled="false"
                tabIndex={0}
                className="shrink-0 rounded-full px-3 pt-[6px] pb-[7px] text-xs whitespace-nowrap transition-colors md:text-sm bg-selected font-medium"
              >
                Health report
              </button>
              <button
                id="section-action-plan"
                role="tab"
                aria-selected="false"
                aria-disabled="false"
                tabIndex={-1}
                className="shrink-0 rounded-full px-3 pt-[6px] pb-[7px] text-xs whitespace-nowrap transition-colors md:text-sm hover:text-foreground cursor-pointer"
              >
                Action plan
              </button>
            </div>
          </nav>
        </div>
        <header
          className="mt-8 mb-5 w-full"
          aria-label="Report title"
        >
          <div role="heading" aria-level={1}>
            <div className="flex flex-col gap-1">
              <div className="flex w-full items-center gap-2 text-2xl leading-tight">
                Health report
              </div>
            </div>
          </div>
        </header>
      </div>
      <section
        id="report-selector"
        className="shadow-soft flex w-full min-w-0 flex-col rounded-[20px] bg-white px-2 pt-2"
        aria-label="Report selector"
      >
        <button
          className="relative flex cursor-pointer flex-col gap-3 rounded-2xl p-3 text-left bg-selected"
          aria-expanded="false"
          aria-haspopup="listbox"
          aria-label="Selected report - click to change"
          type="button"
          aria-controls="radix-_r_0_"
          data-state="closed"
        >
          <div className="text-sm">Selected report</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                <img
                  alt=""
                  className="size-full rounded-lg object-cover"
                  src="https://booking.aheadhealth.com//Package_Advanced.jpg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[15px] leading-none">
                  Advanced + 2 add-ons
                </span>
                <span className="text-muted-foreground text-xs leading-none">
                  19 May 2025
                </span>
              </div>
            </div>
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
              className="lucide lucide-chevron-down h-4 w-4 shrink-0"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </button>
        <div
          className="flex items-center"
          role="group"
          aria-label="Report actions"
        >
          <button
            className="flex h-12 grow cursor-pointer items-center justify-center gap-1.5 text-sm leading-none"
            aria-label="View details"
          >
            <div className="text-accent-foreground flex items-center justify-center rounded-full text-sm leading-none bg-selected h-4 w-4">
              <div>i</div>
            </div>
            <span>View details</span>
          </button>
          <div
            className="bg-selected h-3 w-px"
            role="separator"
            aria-hidden="true"
          />
          <button
            className="flex h-12 grow cursor-pointer items-center justify-center gap-1.5 text-sm leading-none"
            aria-label="Share report"
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
              className="lucide lucide-download h-4 w-4"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            <span>Share report</span>
          </button>
        </div>
      </section>
      <div
        className="mt-6 shrink min-h-0 overflow-y-auto"
        role="presentation"
      >
        <nav
          id="organ-systems-nav"
          className="shadow-soft flex flex-col rounded-[20px] bg-white p-2"
          aria-label="Organ systems navigation"
        >
          <ul role="list" className="flex flex-col">
            <li aria-label="Summary">
              <a
                href="#highlights"
                className="group"
                aria-label="Summary"
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors hover:bg-selected/50"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm">Summary</span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  />
                  <div aria-hidden="true" />
                </div>
              </a>
            </li>
            <li aria-label="Brain & nervous, 1 findings out of range"
              id="category-sidebar"
            >
              <a
                href="#Nervous05"
                className="group"
                aria-label="Brain & nervous, 1 findings out of range"
                onClick={() => scrollToId('section-brain-and-nervous')}
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors hover:bg-selected/50"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm">Brain & nervous</span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  >
                    <div data-state="closed">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-deep-green-600" />
                        </div>
                        <span className="text-xs font-medium">
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true">
                    <div className="flex h-1.5 items-center gap-3">
                      <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                        <div
                          className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '90%',
                            minWidth: '10px',
                          }}
                        />
                        <div
                          className="bg-aubergine-500 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '10%',
                            minWidth: '10px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li aria-label="Cardiovascular, 0 findings out of range">
              <a
                href="#Cardiovascular01"
                className="group"
                aria-label="Cardiovascular, 0 findings out of range"
                onClick={() => scrollToId('section-cardiovascular')}
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors hover:bg-selected/50"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm">Cardiovascular</span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  >
                    <div data-state="closed">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-deep-green-600" />
                        </div>
                        <span className="text-xs font-medium">
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true">
                    <div className="flex h-1.5 items-center gap-3">
                      <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                        <div
                          className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '100%',
                            minWidth: '10px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li aria-label="Respiratory, 0 findings out of range">
              <a
                href="#Respiratory02"
                className="group"
                aria-label="Respiratory, 0 findings out of range"
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors hover:bg-selected/50"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm">Respiratory</span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  >
                    <div data-state="closed">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-deep-green-600" />
                        </div>
                        <span className="text-xs font-medium">
                          2
                        </span>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true">
                    <div className="flex h-1.5 items-center gap-3">
                      <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                        <div className="h-full w-full rounded-full bg-zinc-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li aria-label="Metabolic, 0 findings out of range">
              <a
                href="#Metabolic09"
                className="group"
                aria-label="Metabolic, 0 findings out of range"
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors hover:bg-selected/50"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm">Metabolic</span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  />
                  <div aria-hidden="true">
                    <div className="flex h-1.5 items-center gap-3">
                      <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                        <div
                          className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '100%',
                            minWidth: '10px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li aria-label="Liver & digestive, 0 findings out of range">
              <a
                href="#Digestive03"
                className="group"
                aria-label="Liver & digestive, 0 findings out of range"
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors hover:bg-selected/50"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm">Liver & digestive</span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  >
                    <div data-state="closed">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-deep-green-600" />
                        </div>
                        <span className="text-xs font-medium">
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true">
                    <div className="flex h-1.5 items-center gap-3">
                      <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                        <div
                          className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '100%',
                            minWidth: '10px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li aria-label="Kidney & electrolytes, 1 findings out of range">
              <a
                href="#Urinary04"
                className="group"
                aria-label="Kidney & electrolytes, 1 findings out of range"
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors hover:bg-selected/50"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm">
                    Kidney & electrolytes
                  </span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  />
                  <div aria-hidden="true">
                    <div className="flex h-1.5 items-center gap-3">
                      <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                        <div
                          className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '90%',
                            minWidth: '10px',
                          }}
                        />
                        <div
                          className="bg-aubergine-500 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '10%',
                            minWidth: '10px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li aria-label="Muscle & bone, 0 findings out of range">
              <a
                href="#Msk08"
                className="group"
                aria-label="Muscle & bone, 0 findings out of range"
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors hover:bg-selected/50"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm">Muscle & bone</span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  >
                    <div data-state="closed">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-deep-green-600" />
                          <div className="h-1.5 w-1.5 rounded-full bg-light-green-600" />
                        </div>
                        <span className="text-xs font-medium">
                          4
                        </span>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true">
                    <div className="flex h-1.5 items-center gap-3">
                      <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                        <div
                          className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '100%',
                            minWidth: '10px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li aria-label="Thyroid, 0 findings out of range">
              <a
                href="#Endocrine06"
                className="group section-active"
                aria-label="Thyroid, 0 findings out of range"
                aria-current="true"
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors bg-selected"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm font-medium">
                    Thyroid
                  </span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  >
                    <div data-state="closed">
                      <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-light-green-600" />
                        </div>
                        <span className="text-xs font-medium">
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                  <div aria-hidden="true">
                    <div className="flex h-1.5 items-center gap-3">
                      <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                        <div
                          className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '100%',
                            minWidth: '10px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li aria-label="Blood, 0 findings out of range">
              <a
                href="#Hematologic10"
                className="group"
                aria-label="Blood, 0 findings out of range"
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors hover:bg-selected/50"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm">Blood</span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  />
                  <div aria-hidden="true">
                    <div className="flex h-1.5 items-center gap-3">
                      <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                        <div
                          className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '100%',
                            minWidth: '10px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li aria-label="Immune health, 2 findings out of range">
              <a
                href="#Lymphatic11"
                className="group"
                aria-label="Immune health, 2 findings out of range"
              >
                <div
                  className="grid h-[43px] cursor-pointer items-center gap-3 rounded-xl p-3 transition-colors hover:bg-selected/50"
                  style={{
                    gridTemplateColumns: '1fr 40px 80px',
                  }}
                >
                  <span className="text-sm">Immune health</span>
                  <div
                    className="flex justify-end"
                    aria-hidden="true"
                  />
                  <div aria-hidden="true">
                    <div className="flex h-1.5 items-center gap-3">
                      <div className="flex h-full flex-1 gap-0.5 overflow-hidden rounded-full">
                        <div
                          className="bg-deep-green-400 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '85.7143%',
                            minWidth: '10px',
                          }}
                        />
                        <div
                          className="bg-aubergine-500 h-full rounded-full transition-opacity opacity-100"
                          style={{
                            width: '14.2857%',
                            minWidth: '10px',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </nav>

      </div>

      {/* Support Section */}
      <div className="mt-4 pt-4 relative"
        id="section-support">
        {isSupportOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
            <button
              onClick={handleRestartTour}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span className="text-lg">🔄</span>
              Restart Tour
            </button>
            <div className="h-px bg-gray-100" />
            <button
              onClick={handleOpenChat}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span className="text-lg">🤖</span>
              Ask AI
            </button>
          </div>
        )}

        <button
          onClick={() => setIsSupportOpen(!isSupportOpen)}
          className={`flex w-full items-center gap-3 rounded-2xl p-3 text-left transition-colors cursor-pointer ${isSupportOpen ? 'bg-selected border-selected' : 'bg-white hover:bg-gray-50'}`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
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
              className="lucide lucide-info h-5 w-5 text-gray-600"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <span className="text-sm font-medium">Support</span>
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
            className={`lucide lucide-chevron-down h-4 w-4 ml-auto transition-transform ${isSupportOpen ? 'rotate-180' : ''}`}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      {isChatOpen && <ChatInterface onClose={() => setIsChatOpen(false)} />}
      <div className="flex-1" />s
    </aside>
  );
};

export default Sidebar;
