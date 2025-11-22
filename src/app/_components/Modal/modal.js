"use client";

import React from "react";
import "./modal.scss";

/**
 * Presentational modal. Controlled externally via `visible` and `onDismiss`.
 */
export default function Modal({ visible = false, onDismiss = () => {}, ariaLabel = "Modal", children }) {
    if (!visible) return null;

    return (
        <div className="wrns-splash" role="dialog" aria-modal="true" aria-label={ariaLabel}>
            <div className="wrns-splash__backdrop" onClick={onDismiss} />
            <div className="wrns-splash__panel">
                <button className="wrns-splash__close" onClick={onDismiss} aria-label="Close modal">×</button>
                {children}
            </div>
        </div>
    );
}