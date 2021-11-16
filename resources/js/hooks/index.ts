import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T) {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export function isUndefined<T>(value: T): boolean {
    return typeof value === "undefined";
}

export function isNotUndefined<T>(value: T): boolean {
    return !isUndefined<T>(value);
}
