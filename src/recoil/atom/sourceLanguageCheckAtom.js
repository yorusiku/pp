import { atom, selector } from "recoil";

export const sourceLanguageCheckAtom = atom({
  key: "sourceLanguageCheckAtom",
  default: "ko",
});

export const sourceLanguageCheckSelector = selector({
  key: "sourceLanguageCheckSelector",
  get: ({ get }) => get(sourceLanguageCheckAtom),
});
