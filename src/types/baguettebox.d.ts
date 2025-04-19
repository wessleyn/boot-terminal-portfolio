declare module 'baguettebox.js' {
    interface BaguetteBoxOptions {
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
    }

    // Define the module's exports directly
    const baguetteBox: {
        run: (selector: string, options?: BaguetteBoxOptions) => void;
        destroy: () => void;
    };

    export = baguetteBox;
}
