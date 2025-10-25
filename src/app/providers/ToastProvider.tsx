import { Toaster } from "sonner";
import React, { type ReactNode } from "react";

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    return (
        <>
            {children}
            <Toaster
                richColors
                position="top-right"
                duration={4000}
                closeButton
            />
        </>
    );
};
