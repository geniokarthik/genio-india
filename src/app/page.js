"use client";
import React, { useState, useEffect } from "react";
import EnHome from "src/app/en/home/page";
import JaHome from "src/app/ja/home/page";

export default function Main() {
  const [langFlg, setLangFlg] = useState('')
  useEffect(() => {
    setLangFlg(localStorage.getItem("lang"))
  })
  return (
    <main>
      {(langFlg === 'IndFlgIcon' || !langFlg) ? <EnHome /> : <JaHome />}
    </main>
  )
}