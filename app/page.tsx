'use client';
import { useState } from 'react'
import { MouseEventHandler } from 'react';
import { LazyImage } from "./components/RandomCat";
import { random } from "lodash"

const generateId = () => random(1, 1323);

export default function Home() {

  const [images, setImages] = useState<Array<ICatImageItem>>([]);

  const addNewCat: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ICatImageItem = {
      id: generateId(),
      url: `https://cataas.com/cat?${generateId()}`
    }
    setImages([
      ...images,
      newImageItem
    ]);
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full sticky top-0 bg-blue text-black text-xl flex flex-col items-center justify-center py-4">
        <h1 className="font-mono text-white">
          React course with <span className="font-sans font-bold">TypeScript</span>
        </h1>
        <h2 className="font-black text-4xl sm:text-3xl md:text-4xl lg:text-5xl mt-3">
          Component Lazy Image
        </h2>
        <p className="font-base sm:text-sm md:text-base lg:text-lg xl:text-xl bg-white font-semibold px-2 mt-10">A generic React component for loading images with lazy loading</p>
        <p className="font-base sm:text-sm md:text-base lg:text-lg xl:text-xl bg-white font-semibold px-2 mt-3">Added images will not be downloaded until they are visible on the screen</p>
        <button className="font-mono bg-slate-100 text-blue uppercase rounded drop-shadow-xl px-3 pt-2 mt-14 animate-bounce hover:bg-white" onClick={addNewCat}>
          Add new cat
        </button>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 my-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-items-center gap-6">
          {images.map(({ id, url }) => (
            <LazyImage
              key={id}
              src={url}
              className="rounded-lg mb-2 max-h-96"
              onClick={() => console.log("meow")}
            />
          ))}
        </div>
      </div>
    </main>
  );
};  