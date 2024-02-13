'use client';
import { useState } from 'react'
import { RandomCat } from "./components/RandomCat";

type ImageItems = { id: string, url: string }

const generateId = () => Math.random().toString(36).substr(2, 9)

export default function Home() {
  const [images, setImages] = useState<Array<ImageItems>>([
    { id: generateId(), url: `https://cataas.com/cat?${generateId()}` },
    { id: generateId(), url: `https://cataas.com/cat?${generateId()}` },
    { id: generateId(), url: `https://cataas.com/cat?${generateId()}` },
    { id: generateId(), url: `https://cataas.com/cat?${generateId()}` },
  ]);

  return (
    <main>
      <div className="m-9">
        <h1 className="text-3xl font-bold">una flor para otra flor</h1>

        {images.map(({ id, url }) => (
          <div className='my-9' key={id}>
            <RandomCat image={url} />
          </div>
        ))}

      </div>
    </main>
  );
}
