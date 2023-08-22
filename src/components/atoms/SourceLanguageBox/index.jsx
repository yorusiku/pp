import React from "react";
import { recoil, useRecoilState } from "recoil";
import { sourceLanguageCheckAtom } from "../../../recoil/atom/sourceLanguageCheckAtom";

export default function SourceLanguageBox() {
  let [sourceLanguageCheck, setSourceLanguageCheck] = useRecoilState(
    sourceLanguageCheckAtom
  );

  return (
    <>
      <div>
        <textarea
          rows="10"
          cols="50"
          placeholder="번역할 내용을 입력해주세요."
          onChange={(e) => setSourceLanguageCheck(e.target.value)}
        ></textarea>
      </div>
      <div>{sourceLanguageCheck}</div>
    </>
  );
}
