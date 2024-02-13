'use client';
import { useRef, useEffect, useState } from "react";

type Props = { image: string };

export const RandomCat = ({ image }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);

    const [src, setSrc] = useState(
        "https://placehold.co/600x400/cadetblue/white/?text=generating+a+cat&font=oswald"
    );

    useEffect(() => {
        // new observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setSrc(image)
                }
            })
        }, { threshold: 1.0 })

        // observe node
        if (node.current) {
            observer.observe(node.current);
        }

        // disconect
        return () => {
            observer.disconnect();
        }
    }, [image]);

    return (
        <img ref={node} width={350} height="auto" src={src} />
    )
}