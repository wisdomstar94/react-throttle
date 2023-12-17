"use client"

import { useThrottle } from "@/hooks/use-throttle/use-throttle.hook";

export default function Page() {
  const throttle = useThrottle({
    defaultThrottleTime: 1000,
    fn: () => {
      console.log('called!!');
    },
  });

  return (
    <>
      <button
        className="inline-flex px-2 py-0.5 text-sm text-black border border-black rounded-sm cursor-pointer hover:bg-gray-100"
        onClick={() => {
          throttle.callFn();
        }}>
        call fn
      </button>
      <div>
        console 창의 로그를 확인해주세요!
      </div>
    </>
  );
}
