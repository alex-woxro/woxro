'use client';

import { useEffect, useRef, useState } from "react"

const Dummy2 = () => {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState(false);

  console.log("myElementIsVisible", myElementIsVisible);

  useEffect(() => {
    console.log("my ref alex", myRef);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });

    observer.observe(myRef.current);

    // Cleanup observer on component unmount
    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, []);

  return (
    <div className="flex h-screen bg-black justify-center items-center">
      <div className="w-5rem bg-yellow-50">hello</div>
      <div className="flex flex-col gap-5 text-white">
        <div className={`transition-colors duration-3000 ${myElementIsVisible ? 'text-green-500' : 'text-white'}`}>alexxxxxxxxxxxxxxxxxxxxxx</div>
        <div ref={myRef} className={`transition-colors duration-3000 ${myElementIsVisible ? 'text-pink-500' : 'text-white'}`}>alexxxxxxxxxxxxxxxxxxxxxx</div>
      </div>
    </div>
  );
}

export default Dummy2;