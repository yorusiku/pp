import { atom, Recoil, selector } from "recoil";

export const sourceLanguageCheckAtom = atom({
  key: "sourceLanguageCheckAtom",
  default: "ko",
});
