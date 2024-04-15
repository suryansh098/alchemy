import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Resolves conflicts in classes and merges tailwind classes
 * eg: px-2 py-2 -> p-2
 * @param inputs array of class values
 * @returns merged class names with no conflicts
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}