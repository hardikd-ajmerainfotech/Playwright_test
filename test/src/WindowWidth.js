import { useEffect, useState } from 'react';

export default function WindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [increment, setIncrement]= useState(0);
  useEffect(() => {
    const listener = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, []);

  
  return (
    <>
    <p >Window is {windowWidth > 600 ? 'wide' : 'narrow'}</p>
    
    </>
  );
}