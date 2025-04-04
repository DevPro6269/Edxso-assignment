import React, { useEffect, useState } from 'react';

const Matrix = () => {
  const [clickedBox, setClickedBox] = useState([]); 
  const [animationIndex, setAnimationIndex] = useState(0); 
  const [matrix, setMatrix] = useState(new Array(9).fill("bg-white")); 

  
  function handleClick(e, key) {

    if (!clickedBox.includes(key)) {
      setClickedBox((prev) => {
        const updatedClickedBox = [...prev, key];
        return updatedClickedBox;
      });

  
      setMatrix((prev) => {
        const updatedMatrix = prev.map((item, index) => {
          return index === key ? "bg-green-500" : item;
        });
        return updatedMatrix;
      });
    }
  }

  useEffect(() => {
    if (clickedBox.length === 9) {
      const interval = setInterval(() => {
        setAnimationIndex((prev) => {
          const nextIndex = prev + 1;
          if (nextIndex === 9) {
            clearInterval(interval); 
          }
          return nextIndex;
        });
      }, 500); 
    }
  }, [clickedBox]); 

  
  useEffect(() => {
    console.log(animationIndex)
    if (clickedBox.length===9) {
      setMatrix((prev) => {
        const updatedMatrix = prev.map((item, index) => {
          
          if (clickedBox[animationIndex] === index) {
            return "bg-orange-500"; 
          }
          return item;
        });
        return updatedMatrix;
      });
    }
  }, [animationIndex, clickedBox]); 

  return (
    <section className="h-screen w-full justify-center items-center flex">
      <div className="grid h-[300px] w-[300px] gap-2 grid-cols-3 grid-rows-3">
        {matrix.map((item, index) => (
          <div
            id="box"
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`relative ${item} border-2 border-black`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Matrix;
