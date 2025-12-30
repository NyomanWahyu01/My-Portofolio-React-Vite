import { useState } from 'react';

const FormEmail = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-9 py-7">
      <h2 className="text-2xl font-semibold text-center mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        Kirim pesan melalui Form Email Berikut :
      </h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center animate-fadeIn" data-aos="fade-up">
          <i className="ri-checkbox-circle-fill text-2xl mb-2"></i>
          <p className="font-semibold">Pesan berhasil dikirim! Terima kasih atas pesan Anda.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center animate-fadeIn" data-aos="fade-up">
          <i className="ri-error-warning-fill text-2xl mb-2"></i>
          <p className="font-semibold">Gagal mengirim pesan. Silakan coba lagi.</p>
        </div>
      )}

      <form
        action="https://formsubmit.co/inyomanwahyu123@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="bg-linear-to-br from-zinc-800 to-zinc-900 p-6 sm:p-10 w-full rounded-xl border border-zinc-700 shadow-2xl"
        autoComplete="off"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        {/* Hidden inputs untuk konfigurasi FormSubmit */}
        <input type="hidden" name="_to" value="trisnawinda088@gmail.com" />
        <input type="hidden" name="_subject" value="📧 Pesan Baru dari Portfolio Website" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + window.location.pathname + "?success=true" : ""} />
        <input type="hidden" name="_autoresponse" value="Terima kasih telah menghubungi saya! Saya akan membalas pesan Anda segera." />
        
        {/* Formatting untuk email yang lebih rapi */}
        <input type="hidden" name="_format" value="plain" />
        
        {/* Template URL - Jika sudah di-deploy, uncomment baris berikut dan ganti dengan URL template Anda */}
        {/* <input type="hidden" name="_template" value={typeof window !== 'undefined' ? window.location.origin + '/email-template.html' : 'box'} /> */}

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <label htmlFor="nama" className="font-semibold text-white flex items-center gap-2">
              <i className="ri-user-line text-sky-400"></i>
              Nama Lengkap
            </label>
            <input 
              type="text" 
              id="nama"
              name="nama" 
              placeholder="Masukkan Nama Anda" 
              className="border border-zinc-600 bg-zinc-900/50 text-white p-3.5 rounded-lg w-full focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300 placeholder:text-zinc-500" 
              required
            />
          </div>

          <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <label htmlFor="email" className="font-semibold text-white flex items-center gap-2">
              <i className="ri-mail-line text-sky-400"></i>
              Email
            </label>
            <input 
              type="email" 
              id="email"
              name="email" 
              placeholder="Masukkan Email Anda" 
              className="border border-zinc-600 bg-zinc-900/50 text-white p-3.5 rounded-lg w-full focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300 placeholder:text-zinc-500" 
              required 
            />
          </div>

          <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <label htmlFor="pesan" className="font-semibold text-white flex items-center gap-2">
              <i className="ri-message-3-line text-sky-400"></i>
              Pesan
            </label>
            <textarea 
              name="pesan" 
              id="pesan" 
              cols="45" 
              rows="7" 
              placeholder="Pesan Yang Ingin DiSampaikan" 
              className="border border-zinc-600 bg-zinc-900/50 text-white p-3.5 rounded-lg w-full focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all duration-300 resize-none placeholder:text-zinc-500" 
              required
            ></textarea>
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-linear-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 p-4 rounded-lg w-full cursor-pointer border border-sky-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30 font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <i className="ri-loader-4-line animate-spin"></i>
                  MENGIRIM...
                </>
              ) : (
                <>
                  <i className="ri-send-plane-fill"></i>
                  KIRIM PESAN
                </>
              )}
            </button>
          </div>
        </div>
      </form>      
    </div>
  );
};

export default FormEmail;