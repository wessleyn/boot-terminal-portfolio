'use client';

import baguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';
import { useEffect } from 'react';

interface BaguetteBoxProps {
    selector?: string;
    options?: {
        animation?: 'slideIn' | 'fadeIn' | 'none';
        captions?: boolean;
        buttons?: 'auto' | boolean;
        fullScreen?: boolean;
        noScrollbars?: boolean;
        bodyClass?: string;
        titleTag?: boolean;
        async?: boolean;
        preload?: number;
        afterShow?: () => void;
        afterHide?: () => void;
        onChange?: (currentIndex: number, imagesCount: number) => void;
        overlayBackgroundColor?: string;
    };
}

export default function BaguetteBox({
    selector = '[data-bss-baguettebox]',
    options = { animation: 'slideIn' }
}: BaguetteBoxProps) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                baguetteBox.run(selector, options);
            }

            return () => {
                baguetteBox.destroy();
            };
        }
    }, [selector, options]);

    return null;
}
