import React from "react";
import { Link } from "react-router-dom";
import ImageToMainPage from "../Atoms/PapaGymImage";
import SourceToTargetLan from "../Atoms/SourceToTargetLan";
import TargetLanguageBox from "../Atoms/TargetLanguageBox";
import SourceLanguageBox from "../Atoms/SourceLanguageBox";

export default function Header() {
  return (
    <>
      <div className="headerline">
        {/* 로고, 누르면 /로 이동 */}
        <Link to="/">
          <ImageToMainPage />
        </Link>
        <SourceToTargetLan />

        <div>header11</div>
        <div>header</div>
      </div>
      <div className="sourceAndTarget">
        <SourceLanguageBox />
        <TargetLanguageBox />
      </div>
    </>
  );
}
