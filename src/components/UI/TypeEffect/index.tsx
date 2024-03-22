import React, { useState, useEffect } from "react";

type TypewriterEffectProps = {
  texts: string[];
  interval: number;
};

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  interval,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
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
  }, [displayText, currentIndex, texts, interval]);

  return <span>{displayText}</span>;
};

export default TypewriterEffect;
