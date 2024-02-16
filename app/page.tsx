'use client';
import { useState } from 'react'
import { MouseEventHandler } from 'react';
import { LazyImage } from "./components/RandomCat";

const generateId = () => Math.random().toString(36).substr(2, 9)

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
    <main className='flex flex-col items-center'>
      <div className="m-9">
        <h1 className="text-3xl font-bold">Random cats!</h1>
        <button onClick={addNewCat}>Add a random cat</button>
        {images.map(({ id, url }) => (
          <div className='my-9' key={id}>
            <LazyImage
              src={url}
              width={350}
              height="auto"
              onClick={() => console.log('meow')}
            />
          </div>
        ))}

      </div>
    </main>
  );
}
