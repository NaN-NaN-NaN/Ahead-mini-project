"use client";
import React, { useState } from 'react';

const Summary = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      className="pt flex w-full scroll-mt-60 break-inside-avoid flex-col gap-16"
      aria-labelledby="section-highlights"
      data-section-id="highlights"
    >
      <section className="flex flex-col gap-4" aria-label="Report summary">
        <div className="text-lg">Summary</div>
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
                    style={{ maxHeight: isExpanded ? 'none' : '120px' }} // Dynamically set maxHeight
                  >
                    <div className="text-[15px] leading-[1.3] whitespace-pre-line">
                      Hello, Your recent health check-up provides a detailed
                      overview of your health, showing some very positive
                      developments alongside a few areas that warrant
                      attention. The most notable findings are related to
                      age-appropriate wear-and-tear in your spine. The MRI
                      shows disc bulges in your neck and lower back, with one
                      in your lower back causing a moderate narrowing of the
                      spinal canal, which can sometimes affect nerves. Your
                      blood tests indicate a persistent elevation in a type
                      of white blood cell called eosinophils, which can be a
                      sign of an allergic or inflammatory process, and may be
                      linked to fluid seen in the air cells behind your
                      ears. We also noted a mild reduction in your kidney
                      filtration rate, which often varies and can be
                      influenced by factors like hydration. On a very
                      positive note, your results show excellent
                      improvements in your metabolic health. Your blood
                      sugar and cholesterol values are now in an ideal
                      range, which is a wonderful achievement and greatly
                      benefits your cardiovascular health. Furthermore, your
                      body composition is outstanding, with very low levels
                      of abdominal and liver fat. Other findings, such as
                      small, simple cysts in your liver, are common and not
                      a cause for concern. You will find more details on all
                      these points in the full report below.
                    </div>
                  </div>
                  <div
                    className="pointer-events-none absolute right-0 bottom-0 left-0 h-20"
                    style={{
                      background:
                        'linear-gradient(to top, white, transparent)',
                      opacity: isExpanded ? 0 : 1, // Hide gradient when expanded
                    }}
                  />
                </div>
                <button className="mt-2 flex items-center gap-1.5 text-sm" onClick={toggleExpanded}>
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
                    className={`lucide lucide-chevron-down h-4 w-4 ${isExpanded ? 'rotate-180' : ''}`} // Rotate icon
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  {isExpanded ? 'Read less' : 'Read more'}
                </button>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              <div className="bg-background flex grow cursor-pointer items-center gap-3 rounded-2xl py-3 pr-6 pl-3">
                <div className="relative mx-2 h-16 w-16">
                  <div className="shadow-overlay absolute inset-0 flex h-full min-h-0 w-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-white z-10">
                    <img
                      alt="Physiotherapist Consultation"
                      className="h-16 w-16 object-cover"
                      src="images/image3.jpg"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm md:text-base">
                    1 clinical follow-ups
                  </div>
                  <div className="text-xs md:text-sm">
                    Specialist consultation
                  </div>
                </div>
                <div className="grow" />
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
                  className="lucide lucide-chevron-right size-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
              <div className="bg-background flex grow cursor-pointer items-center gap-3 rounded-2xl py-3 pr-6 pl-3">
                <div className="relative mx-2 h-16 w-16">
                  <div className="shadow-overlay absolute inset-0 flex h-full min-h-0 w-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-white translate-x-2 rotate-[4deg]">
                    <img
                      alt="Back muscle training"
                      className="h-16 w-16 object-cover"
                      src="images/image4.jpg"
                    />
                  </div>
                  <div className="shadow-overlay absolute inset-0 flex h-full min-h-0 w-full flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-white z-10">
                    <img
                      alt="Increase daily water intake"
                      className="h-16 w-16 object-cover"
                      src="images/image5.jpg"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-sm md:text-base">
                    2 health optimizations
                  </div>
                  <div className="text-xs md:text-sm">
                    Exercise, Nutrition
                  </div>
                </div>
                <div className="grow" />
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
                  className="lucide lucide-chevron-right size-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Summary;