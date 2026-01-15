"use client";

import "./announcement.scss";

import React, { useEffect, useState } from "react";

import DOMPurify from "dompurify";
import announcementsData from "@data/announcements.json";

const announcementIcons = {
  general: "📢",
  event: "📅",
  alert: "⚠️",
  hiring: "🔍",
  promotion: "🎉",
  weather: "🌦️",
  blank: "",
};

const Announcement = () => {
  const [announcement, setAnnouncement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasBannerBeenDismissed = sessionStorage.getItem("announcementDismissed");

    if (hasBannerBeenDismissed === "true") {
      setIsVisible(false);
    } else {
      const currentDate = new Date();
      const activeAnnouncements = announcementsData.filter(
        (announcement) =>
          new Date(announcement.startDate) <= currentDate && currentDate <= new Date(announcement.endDate)
      );

      // Sort active announcements by start date in descending order and select the latest one
      const latestAnnouncement = activeAnnouncements.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))[0];

      setAnnouncement(latestAnnouncement || null);
      if (latestAnnouncement) {
        setIsVisible(true);
      }
    }
  }, []);

  const dismissBanner = () => {
    setIsVisible(false);
    sessionStorage.setItem("announcementDismissed", "true");
  };

  if (!announcement) {
    return null;
  }

  const icon = announcementIcons[announcement.type] || "📢";

  return (
    <aside
      id="announcement-banner"
      className={`announcement announcement--${announcement.type} ${!isVisible ? "announcement--hide" : ""}`}
    >
      {announcement.type && <span className="announcement__icon">{icon}</span>}
      <p
        className="announcement__message"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(announcement.message) }}
      ></p>
      <button
        onClick={dismissBanner}
        className="btn btn__close-button"
        title="close"
        aria-label="close announcment banner"
      >
        X
      </button>
    </aside>
  );
};

export default Announcement;
