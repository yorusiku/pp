import React from "react";
import { recoil, useRecoilState } from "recoil";

export default function TargetLanguageBox() {
  return (
    <>
      <div>
        <textarea placeholder="번역된 내용이 출력됩니다.."></textarea>
      </div>
    </>
  );
}
