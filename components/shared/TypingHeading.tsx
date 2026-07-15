"use client";

import React, { useEffect, useState } from "react";

interface TypingHeadingProps {
  staticText?: string;
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;

  // 🔥 Style control props
  className?: string;           // h1 wrapper
  staticTextClass?: string;     // static text
  dynamicTextClass?: string;    // typing text
  cursorClass?: string;         // cursor

  cursor?: boolean;
}

const TypingHeading: React.FC<TypingHeadingProps> = ({
  staticText = "",
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetweenWords = 1500,

  className = "",
  staticTextClass = "",
  dynamicTextClass = "",
  cursorClass = "",

  cursor = true,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }, typingSpeed);

      if (displayText === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      }, deletingSpeed);

      if (displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  const headingClassName = [
    "flex flex-wrap items-baseline gap-x-2 gap-y-2",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <h1 className={headingClassName}>
      {staticText && (
        <span className={staticTextClass}>{staticText} </span>
      )}

      <span className={dynamicTextClass}>
        {displayText}
        {cursor && (
          <span className={`ml-1 animate-pulse ${cursorClass}`}>
            |
          </span>
        )}
      </span>
    </h1>
  );
};

export default TypingHeading;
