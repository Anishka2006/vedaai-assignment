import { create } from "zustand";

interface AssignmentStore {
  generatedPaper: any;

  setGeneratedPaper: (
    paper: any
  ) => void;
}

export const useAssignmentStore =
  create<AssignmentStore>((set) => ({
    generatedPaper: null,

    setGeneratedPaper: (
      generatedPaper
    ) =>
      set({
        generatedPaper,
      }),
  }));