'use client';
import { useRef, useEffect, useState } from "react";
import { ImgHTMLAttributes } from "react";

type LazyImageProps = { src: string };

type ImageNative = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNative

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);

    const [currentSrc, setCurrentSrc] = useState(
        "https://placehold.co/300/lightskyblue/white/?text=generating+a+cat&font=oswald"
    );

    useEffect(() => {
        // new observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setCurrentSrc(src)
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
    }, [src]);

    return (
        <img ref={node} src={currentSrc} {...imgProps} />
    )
}