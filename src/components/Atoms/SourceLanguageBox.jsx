import React from "react";
import { recoil, useRecoilState } from "recoil";
import sourceLanguageToAtom from "../../recoil/atom/sourceLanguageToAtom";

export default function SourceLanguageBox() {
  let [sourceLanguageCheck, setSourceLanguageCheck] =
    useRecoilState(sourceLanguageToAtom);
  let sourceLanguageToAtom = (e) => {
    // return setSourceLanguageCheck(e.target.value)
    console.log(e.target);
    // return
  };

  return (
    <>
      <div>
        <textarea
          onClick={() => sourceLanguageToAtom()}
          placeholder="번역할 내용을 입력해주세요."
        ></textarea>
      </div>
    </>
  );
}
