import React, { useState, useEffect } from 'react';

export default function PreLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-bg">
      <i className="ri-loader-4-line animate-spin text-4xl text-cta"></i>
    </div>
  );
}