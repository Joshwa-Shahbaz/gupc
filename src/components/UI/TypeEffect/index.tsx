import React, { useState, useEffect } from "react";

type TypewriterEffectProps = {
  texts: string[];
  interval: number;
  start: boolean;
};

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  interval,
  start,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (start) {
      const timeout = setTimeout(() => {
        const currentText = texts[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText(
            (prevText) => prevText + currentText[displayText.length]
          );
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setDisplayText("");
        }
      }, interval);

      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, texts, interval, start]);

  return <span>{displayText}</span>;
};

export default TypewriterEffect;
