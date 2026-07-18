"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export interface TripPlan {
  when: string;
  where: string;
}

interface TripPlanContextValue {
  plan: TripPlan | null;
  submitPlan: (plan: TripPlan) => void;
  clearPlan: () => void;
}

const TripPlanContext = createContext<TripPlanContextValue | null>(null);

export function TripPlanProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [plan, setPlan] = useState<TripPlan | null>(null);

  return (
    <TripPlanContext.Provider
      value={{
        plan,
        submitPlan: setPlan,
        clearPlan: () => setPlan(null),
      }}
    >
      {children}
    </TripPlanContext.Provider>
  );
}

export function useTripPlan() {
  const context = useContext(TripPlanContext);
  if (!context) {
    throw new Error("useTripPlan must be used within a TripPlanProvider");
  }
  return context;
}
