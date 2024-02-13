'use client';
import { useState } from 'react'
import { MouseEventHandler } from 'react';
import { RandomCat } from "./components/RandomCat";

type ImageItem = { id: string, url: string }

const generateId = () => Math.random().toString(36).substr(2, 9)

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewCat: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: ImageItem = {
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
            <RandomCat image={url} />
          </div>
        ))}

      </div>
    </main>
  );
}
