import React from "react";
import instance from "../../../api/apis";
import { useRecoilValue } from "recoil";
import { sourceLanguageCheckAtom } from "../../../recoil/atom/sourceLanguageCheckAtom";

export default function SourceAndTargetBTN() {
  let sourceCheckAtom = useRecoilValue(sourceLanguageCheckAtom);
  let translateURL = "n2mt";

  let translateApi = async (targetLang) => {
    try {
      const response = await instance.post(
        translateURL,
        `source=ko&target=en&text=${targetLang}`
      );
      const translatedText = response.data.message.result.translatedText;
      // 여기서 번역 결과(translatedText)를 사용하거나 상태로 저장할 수 있습니다.
      console.log("Translated Text:", translatedText);
    } catch (error) {
      console.error("Translation Error:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        style={{ width: "100px", height: "100px" }}
        onClick={() => translateApi(sourceCheckAtom)}
      >
        번역버튼
      </button>
    </>
  );
}
