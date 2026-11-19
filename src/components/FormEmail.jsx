import { useState } from "react";
import { useT } from "../i18n/LanguageProvider";

const inputClass =
  "h-12 w-full rounded-[10px] border-[2px] border-[var(--border)] bg-card px-4 font-sans text-on-card placeholder:text-muted-card focus:outline-none focus:shadow-[3px_3px_0px_var(--accent)] transition-shadow";

const FormEmail = () => {
  const { t } = useT();
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
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="w-full">
      <h3 className="font-sans text-[1.25rem] font-bold text-on-card mb-4">
        {t("contact.formTitle")}
      </h3>

      {submitStatus === "success" && (
        <p className="mb-4 rounded-[10px] border-[2px] border-[var(--border)] bg-green px-4 py-3 font-sans text-sm font-bold text-on-card">
          {t("contact.success")}
        </p>
      )}
      {submitStatus === "error" && (
        <p className="mb-4 rounded-[10px] border-[2px] border-[var(--border)] bg-pink px-4 py-3 font-sans text-sm font-bold text-on-card">
          {t("contact.error")}
        </p>
      )}

      <form
        action="https://formsubmit.co/inyomanwahyu123@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
        autoComplete="off"
      >
        <input type="hidden" name="_subject" value="Pesan Baru dari Portfolio Website" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_format" value="plain" />

        <div className="flex flex-col gap-1.5">
          <label htmlFor="nama" className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-on-card">
            {t("contact.nameLabel")}
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            placeholder={t("contact.namePlaceholder")}
            className={inputClass}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-on-card">
            {t("contact.emailFieldLabel")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("contact.emailPlaceholder")}
            className={inputClass}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="pesan" className="font-sans text-xs font-bold uppercase tracking-[0.08em] text-on-card">
            {t("contact.messageLabel")}
          </label>
          <textarea
            name="pesan"
            id="pesan"
            rows="5"
            placeholder={t("contact.messagePlaceholder")}
            className="w-full resize-none rounded-[10px] border-[2px] border-[var(--border)] bg-card px-4 py-3 font-sans text-on-card placeholder:text-muted-card focus:outline-none focus:shadow-[3px_3px_0px_var(--accent)] transition-shadow"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-[16px] border-[3px] border-[var(--border)] bg-cta font-sans text-sm font-bold uppercase tracking-wider text-on-card shadow-[4px_4px_0px_var(--shadow)] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_var(--shadow)] active:translate-y-0 active:shadow-none disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <i className="ri-loader-4-line animate-spin"></i>
              {t("contact.sending")}
            </>
          ) : (
            <>
              <i className="ri-send-plane-fill"></i>
              {t("contact.send")}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default FormEmail;
