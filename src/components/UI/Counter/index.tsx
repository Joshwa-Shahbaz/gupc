import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
// styles
import {
  Check,
  ContentWrapperStyled,
  CounterTextStyled,
  CounterWrapperStyled,
  DividerLineStyled,
} from "./styled";

import { useMediaQuery } from "react-responsive";
import theme from "../../../config/theme";

type CounterProps = {
  data: {
    start: number;
    end: number;
    duration: number;
    text: string;
    suffix: string;
    prefix: string;
  }[];
};

const Counter: React.FC<CounterProps> = ({ data }) => {
  const [inView, setInView] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      if (entries[0].isIntersecting) {
        setInView(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const isBiggerMobile = useMediaQuery({
    query: `(min-width: ${theme.breakpoints.biggerMobile}px)`,
  });

  return (
    <CounterWrapperStyled ref={counterRef}>
      <Check>
        {data.map((val, index, array) => {
          const lastLine = index === array.length - 1;
          return (
            <React.Fragment key={index}>
              <ContentWrapperStyled>
                {inView && (
                  <h5>
                    {val.prefix}
                    <CountUp
                      start={val.start}
                      end={val.end}
                      duration={val.duration}
                      useEasing={true}
                      useGrouping={true}
                      separator=","
                    />
                    {val.suffix}
                  </h5>
                )}
                <CounterTextStyled>{val.text}</CounterTextStyled>
              </ContentWrapperStyled>
              {!lastLine && <DividerLineStyled />}
            </React.Fragment>
          );
        })}
      </Check>
    </CounterWrapperStyled>
  );
};

export default Counter;
