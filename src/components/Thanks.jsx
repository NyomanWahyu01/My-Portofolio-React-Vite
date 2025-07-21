import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-950 text-white px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-sky-500">Terima Kasih!</h1>
        <p className="text-lg opacity-80 mb-8">
          Pesan Anda telah berhasil dikirim. Saya akan segera menghubungi Anda kembali.
        </p>
        <Link
          to="/"
          className="inline-block bg-sky-600 hover:bg-sky-700 transition-all duration-200 text-white px-6 py-3 rounded-md font-medium"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
};

export default Thanks;
