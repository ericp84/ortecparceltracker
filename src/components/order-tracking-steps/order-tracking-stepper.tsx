"use client";

import { Check } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import OrderParcelsStatus from "./order-parcels-status";

type Step = {
  title: string;
};

type StepperProps = {
  steps: Step[];
  currentStep: number;
};

export function OrderTrackingStepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex flex-col justify-between h-full space-y-0">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="flex items-start relative h-28">
            {/* Icône + Trait */}
            <div className="flex flex-col items-center relative h-full">
              {/* Cercle */}
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center border-2 z-10",
                  isCompleted
                    ? "bg-red-600 border-red-600 text-white"
                    : isActive
                    ? "border-red-600 text-red-600 bg-white"
                    : "border-gray-300 text-gray-400 bg-white"
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full",
                      isActive ? "bg-red-600" : ""
                    )}
                  />
                )}
              </div>

              {/* Trait vertical */}
              {!isLast && (
                <div
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 top-12 w-[10px] h-[calc(100%-1rem)]",
                    isCompleted ? "bg-red-600" : "bg-gray-300"
                  )}
                />
              )}
            </div>

            {/* Texte */}
            <div className="ml-4">
              <p
                className={cn(
                  "font-semibold",
                  isCompleted || isActive ? "text-black" : "text-gray-400"
                )}
              >
                {step.title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
