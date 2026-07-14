"use client";

import {
  FormEvent,
  useRef,
  useState,
} from "react";
import emailjs from "@emailjs/browser";
import {
  Check,
  ChevronDown,
  LoaderCircle,
  Send,
} from "lucide-react";

type SubmissionState =
  | "idle"
  | "submitting"
  | "success"
  | "error";

const projectTypes = [
  "Smart contract engineering",
  "Regulated tokenization / RWA",
  "Web3 product development",
  "Cross-chain integration",
  "Full-stack application",
  "Other collaboration",
];

const labelClass = `
  group
  relative
  block
  min-w-0
  font-editorial
  text-[11px]
  uppercase
  tracking-[0.16em]
  text-foreground/70
`;

const fieldClass = `
  mt-2
  block
  w-full
  min-w-0
  border-0
  border-b
  border-line
  bg-transparent
  px-0
  py-4
  font-domaine
  text-xl
  normal-case
  tracking-normal
  text-foreground
  outline-none
  transition-colors
  duration-300
  placeholder:text-foreground/35
  focus:border-accent
  sm:text-2xl
`;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  const [feedbackMessage, setFeedbackMessage] =
    useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (submissionState === "submitting") {
      return;
    }

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;

    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmissionState("error");
      setFeedbackMessage(
        "Email service configuration is missing. Please check the EmailJS environment variables.",
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const fromName = String(
      formData.get("from_name") ?? "",
    ).trim();

    const fromEmail = String(
      formData.get("from_email") ?? "",
    ).trim();

    const projectType = String(
      formData.get("project_type") ?? "",
    ).trim();

    const message = String(
      formData.get("message") ?? "",
    ).trim();

    if (
      !fromName ||
      !fromEmail ||
      !projectType ||
      !message
    ) {
      setSubmissionState("error");
      setFeedbackMessage(
        "Please complete all required fields.",
      );
      return;
    }

    setSubmissionState("submitting");
    setFeedbackMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: fromName,
          from_email: fromEmail,
          reply_to: fromEmail,
          project_type: projectType,
          message,
          subject: `Portfolio enquiry from ${fromName} — ${projectType}`,
          submitted_at: new Intl.DateTimeFormat(
            "en-IN",
            {
              dateStyle: "full",
              timeStyle: "short",
            },
          ).format(new Date()),
        },
        {
          publicKey,
        },
      );

      form.reset();

      setSubmissionState("success");
      setFeedbackMessage(
        "Your project enquiry has been sent successfully. I will get back to you soon.",
      );
    } catch (error) {
      console.error("EmailJS submission error:", error);

      setSubmissionState("error");
      setFeedbackMessage(
        "The message could not be sent. Please check your connection and try again.",
      );
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="min-w-0"
      noValidate={false}
    >
      <div className="grid min-w-0 gap-x-10 gap-y-9 sm:grid-cols-2">
        <label className={labelClass}>
          <span className="transition-colors duration-300 group-focus-within:text-accent">
            01 / Your name
          </span>

          <input
            type="text"
            name="from_name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={80}
            placeholder="Your name"
            className={fieldClass}
          />
        </label>

        <label className={labelClass}>
          <span className="transition-colors duration-300 group-focus-within:text-accent">
            02 / Email address
          </span>

          <input
            type="email"
            name="from_email"
            autoComplete="email"
            required
            maxLength={120}
            placeholder="you@example.com"
            className={fieldClass}
          />
        </label>

        <label
          className={`${labelClass} sm:col-span-2`}
        >
          <span className="transition-colors duration-300 group-focus-within:text-accent">
            03 / Project type
          </span>

          <span className="relative block">
            <select
              name="project_type"
              required
              defaultValue=""
              className={`
                ${fieldClass}
                contact-select
                cursor-pointer
                appearance-none
                pr-10
              `}
            >
              <option value="" disabled>
                Select a focus
              </option>

              {projectTypes.map((projectType) => (
                <option
                  key={projectType}
                  value={projectType}
                >
                  {projectType}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              strokeWidth={1.4}
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-1
                top-1/2
                -translate-y-1/2
                transition-transform
                duration-300
                group-focus-within:rotate-180
              "
            />
          </span>
        </label>

        <label
          className={`${labelClass} sm:col-span-2`}
        >
          <span className="transition-colors duration-300 group-focus-within:text-accent">
            04 / Project brief
          </span>

          <textarea
            name="message"
            required
            minLength={10}
            maxLength={3000}
            rows={6}
            placeholder="Tell me about your product, requirements, timeline, and current stage."
            className={`
              ${fieldClass}
              resize-y
              leading-[1.4]
            `}
          />
        </label>
      </div>

      <div
        className="
          mt-10
          flex
          flex-col
          gap-5
          border-t
          border-line
          pt-8
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <p
          className="
            max-w-[46ch]
            font-editorial
            text-sm
            leading-[1.55]
            text-foreground/55
          "
        >
          Your details are used only to respond to
          this project enquiry.
        </p>

        <button
          type="submit"
          disabled={submissionState === "submitting"}
          className="
            ink-button
            group/button
            inline-flex
            min-h-12
            items-center
            justify-center
            gap-3
            disabled:cursor-not-allowed
            disabled:opacity-55
          "
        >
          {submissionState === "submitting" ? (
            <>
              Sending enquiry
              <LoaderCircle
                size={17}
                aria-hidden="true"
                className="animate-spin"
              />
            </>
          ) : submissionState === "success" ? (
            <>
              Enquiry sent
              <Check
                size={17}
                aria-hidden="true"
              />
            </>
          ) : (
            <>
              Send project enquiry
              <Send
                size={17}
                aria-hidden="true"
                className="
                  transition-transform
                  duration-500
                  ease-editorial
                  group-hover/button:-translate-y-0.5
                  group-hover/button:translate-x-0.5
                "
              />
            </>
          )}
        </button>
      </div>

      {feedbackMessage ? (
        <div
          role={
            submissionState === "error"
              ? "alert"
              : "status"
          }
          aria-live="polite"
          className={`
            mt-6
            border-l-2
            px-4
            py-3
            font-editorial
            text-sm
            leading-[1.5]
            ${
              submissionState === "success"
                ? "border-accent bg-accent/10 text-foreground"
                : "border-red-500 bg-red-500/10 text-foreground"
            }
          `}
        >
          {feedbackMessage}
        </div>
      ) : null}
    </form>
  );
}