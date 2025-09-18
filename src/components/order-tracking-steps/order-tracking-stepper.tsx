"use client";

import { Check } from "lucide-react";
import OrderParcelsStatus from "./order-parcels-status";
import React from "react";
import { cn } from "@/lib/utils";

type SubStep = {
  title: string;
};

type Step = {
  title: string;
  events: SubStep[];
};

type StepperProps = {
  steps: Step[];
  currentStep: number;
};

export function OrderTrackingStepper({ steps, currentStep }: StepperProps) {
  let eventCounter = 0;

  return (
    <div className="flex flex-col justify-between h-full space-y-0 border border-gray-300 p-6 rounded-2xl">
      {steps.map((step, index) => {
        const firstEventIndexOfGroup = eventCounter;
        const lastEventIndexOfGroup = eventCounter + step.events.length - 1;

        const isMainStepCompleted = currentStep > lastEventIndexOfGroup;
        const isMainStepActive =
          currentStep >= firstEventIndexOfGroup &&
          currentStep <= lastEventIndexOfGroup;

        const isLastGroup = index === steps.length - 1;

        // On met à jour le compteur pour la prochaine itération
        eventCounter += step.events.length;

        return (
          <div key={index} className="flex items-start relative pb-8">
            <div className="flex flex-col items-center relative h-full">
              {/* Le gros point pour l'étape principale */}
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 shrink-0",
                  isMainStepCompleted
                    ? "bg-red-600 border-red-600 text-white"
                    : isMainStepActive
                    ? "border-red-600 text-red-600 bg-white"
                    : "border-gray-300 text-gray-400 bg-white"
                )}
              >
                {isMainStepCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <div className="w-3 h-3 bg-gray-300 rounded-full" />
                )}
              </div>

              {/* La ligne de connexion entre les étapes principales */}
              {!isLastGroup && (
                <div
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-12 w-1 h-full",
                    isMainStepCompleted ? "bg-red-600" : "bg-gray-300"
                  )}
                />
              )}
            </div>

            <div className="ml-4 flex-grow">
              {/* Titre de l'étape principale */}
              <p
                className={cn(
                  "font-semibold text-lg",
                  isMainStepCompleted || isMainStepActive
                    ? "text-black"
                    : "text-gray-400"
                )}
              >
                {step.title}
              </p>

              {/* Boucle pour afficher les sous-étapes (events) */}
              <div className="mt-2 space-y-1">
                {step.events.map((event, subIndex) => {
                  const globalEventIndex = firstEventIndexOfGroup + subIndex;
                  const isEventActive = globalEventIndex === currentStep;
                  const isEventCompleted = globalEventIndex < currentStep;

                  return (
                    <div key={subIndex} className="flex items-center">
                      <span
                        className={cn(
                          "mr-2 text-xs",
                          isEventActive
                            ? "text-red-600 animate-ping"
                            : isEventCompleted
                            ? "text-green-600"
                            : "text-gray-400"
                        )}
                      >
                        {isEventActive ? "●" : "●"}
                      </span>
                      <p
                        className={cn(
                          "text-sm",
                          isEventActive
                            ? "text-red-600 font-bold"
                            : isEventCompleted
                            ? "text-gray-500"
                            : "text-gray-400"
                        )}
                      >
                        {event.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      <OrderParcelsStatus />
    </div>
  );
}
