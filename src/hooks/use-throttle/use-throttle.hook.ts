import { useRef } from "react";
import { IUseThrottle } from "./use-throttle.interface";

export function useThrottle(props: IUseThrottle.Props) {
  const {
    defaultThrottleTime,
    fn,
  } = props;

  const latestCalledTimestamp = useRef<number>(0);

  function callFn(throttleTime?: number) {
    const _throttleTime = throttleTime ?? defaultThrottleTime;

    if (Date.now() - latestCalledTimestamp.current < _throttleTime) {
      return;
    }

    latestCalledTimestamp.current = Date.now();
    fn();    
  }

  return {
    callFn,
  };
}