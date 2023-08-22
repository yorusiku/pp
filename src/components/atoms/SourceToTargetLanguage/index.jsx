import React from "react";
import { useRecoilState } from "recoil";
import { languageCheckState } from "../../../recoil/atom/languageCheck";

// isLanKo는 boolean으로 현재언어상태가 한국어가맞는지체크

export default function SourceToTargetLan() {
  const [check, setCheck] = useRecoilState(languageCheckState);

  const isLanguageCheck = () => {
    // check가 true면 false로 false면 true로 상태변경
    return check ? setCheck(false) : setCheck(true);
  };

  return (
    <div>
      {check ? (
        <span onClick={() => isLanguageCheck()}>KO➡️JP</span>
      ) : (
        <span onClick={() => isLanguageCheck()}>JP➡️KO</span>
      )}
    </div>
  );
}
