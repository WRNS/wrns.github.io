"use client";

import React, { useEffect, useState } from "react";
import Modal from "../modal";

const DISMISS_KEY = "wrns:splash:dismissed";

/**
 * RocTheDay wraps the presentational Modal with:
 * - expiry logic (stops after 2025-12-03 00:00 local)
 * - sessionStorage dismissal
 * - the specific messaging + links
 */
export default function RocTheDay() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            const dismissed = sessionStorage.getItem(DISMISS_KEY);
            // December is month 11 (0-based index), so (2025, 11, 3) is 2025-12-03 00:00 local
            const expiry = new Date(2025, 11, 3, 0, 0, 0);
            const now = new Date();
            if (now < expiry && !dismissed) {
                setVisible(true);
            }
        } catch (e) {
            // ignore storage errors
        }
    }, []);

    function dismiss() {
        try {
            sessionStorage.setItem(DISMISS_KEY, "1");
        } catch (e) { }
        setVisible(false);
    }

    return (
        <Modal visible={visible} onDismiss={dismiss} ariaLabel="ROC the Day splash">
            <h2 className="wrns-splash__title">Get ready to ROC the Day — December 2</h2>

            <p className="wrns-splash__body">
                On Tuesday, December 2nd Winton Road Nursery School will be participating in ROC the Day,
                a 24-hour giving event to support local non-profits. Last year the WRNS community raised $1,055,
                help us do even more this year!
            </p>

            <div className="wrns-splash__actions">
                <a
                    className="wrns-splash__btn wrns-splash__btn--primary"
                    href="https://www.unitedwayrocflx.org/roc-the-day/causes/WRNS"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Ready to help WRNS Roc the Day?</span>
                    <span>Donate on December 2</span>
                </a>

                <a
                    className="wrns-splash__btn wrns-splash__btn--secondary"
                    href="https://www.facebook.com/WintonRoadNurserySchool"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span>Help spread the word.</span><span>Share on Facebook</span>
                </a>
            </div>
        </Modal>
    );
}