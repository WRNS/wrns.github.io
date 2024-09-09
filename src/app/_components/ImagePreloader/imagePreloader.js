"use client";

import { useEffect } from "react";

// This component is used to preload images to reduce load times.
// It should be called from the primary entry point into the app (homepage).
// The images can then be served from cache instead of loaded during navigation.

const useImagePreloader = (imageUrls) => {
  useEffect(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [imageUrls]);
};

export default useImagePreloader;
