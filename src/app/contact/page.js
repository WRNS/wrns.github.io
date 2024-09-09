"use client";

import "./contact.scss";

import * as yup from "yup";

import { ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";
import React, { useCallback, useState } from "react";

import Hero from "@components/Hero/hero";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .nullable()
    .transform((o, c) => (o === "" ? null : c))
    .matches(/^[a-zA-Z]+$/, "First name should only contain letters"),
  lastName: yup
    .string()
    .nullable()
    .transform((o, c) => (o === "" ? null : c))
    .matches(/^[a-zA-Z]+$/, "Last name should only contain letters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  enquiry: yup.string().required("Message is required").max(1000, "Message cannot exceed 1000 characters"),
  consent: yup.bool().oneOf([true], "Required"),
});

export default function Contact() {
  const [charCount, setCharCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { executeRecaptcha } = useReCaptcha();

  const onSubmit = useCallback(
    async (data) => {
      try {
        // Generate ReCaptcha token
        const token = await executeRecaptcha("form_submit");

        // Attach generated token to your API requests and validate it on the server
        const response = await fetch("/api/form-submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data,
            token,
          }),
        });

        // Handle the response
        if (response.ok) {
          console.log("Form submitted successfully!");
        } else {
          console.error("Form submission error", response.statusText);
        }
      } catch (error) {
        console.error("Form submission error", error);
      }
    },
    [executeRecaptcha]
  );

  const handleSubmitWrapper = handleSubmit((data) => {
    console.log("Submit Handler Called");
    onSubmit(data);
  });

  return (
    <main>
      <Hero image={"images/girls-talking.jpg"} title="Get in Touch" imagePosition="50% 0%" />

      <section className="section__layout">
        <h2 className="section__heading">Send Us a Message</h2>

        <form onSubmit={handleSubmitWrapper} className="contact-form">
          {/* <form onSubmit={handleSubmit(onSubmit)} className="contact-form"> */}
          <div className="contact-form__name-group">
            <div className="contact-form__group">
              <label htmlFor="firstName" className="contact-form__label">
                First Name
              </label>
              <input id="firstName" className="contact-form__input" {...register("firstName")} />
              {errors.firstName && <p className="contact-form__error">{errors.firstName.message}</p>}
            </div>

            <div className="contact-form__group">
              <label htmlFor="lastName" className="contact-form__label">
                Last Name
              </label>
              <input id="lastName" className="contact-form__input" {...register("lastName")} />
              {errors.lastName && <p className="contact-form__error">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="contact-form__group">
            <label htmlFor="email" className="contact-form__label">
              Email*
            </label>
            <input id="email" className="contact-form__input" {...register("email")} />
            {errors.email && <p className="contact-form__error">{errors.email.message}</p>}
          </div>

          <div className="contact-form__group">
            <label htmlFor="subject" className="contact-form__label">
              Subject*
            </label>
            <input id="subject" className="contact-form__input" {...register("subject")} />
            {errors.subject && <p className="contact-form__error">{errors.subject.message}</p>}
          </div>

          <div className="contact-form__group">
            <label htmlFor="enquiry" className="contact-form__label">
              Your Message*
            </label>
            <textarea
              id="enquiry"
              className="contact-form__textarea"
              {...register("enquiry")}
              onChange={(e) => setCharCount(e.target.value.length)}
            ></textarea>
            <div className="contact-form__char-count">{charCount}/1000</div>
            {errors.enquiry && <p className="contact-form__error">{errors.enquiry.message}</p>}
          </div>

          <div className="contact-form__group">
            <label className="contact-form__label">
              <input type="checkbox" className="contact-form__checkbox" {...register("consent")} />I consent to being
              contacted by representatives of Winton Road.
            </label>
            {errors.consent && <p className="contact-form__error">{errors.consent.message}</p>}
          </div>

          <button type="submit" className="contact-form__submit btn caps">
            Send Message <span className="contact-form__chevron">›</span>
          </button>
          <p>
            <small>
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
              <a href="https://policies.google.com/terms">Terms of Service</a> apply.
            </small>
          </p>
        </form>
      </section>
    </main>
  );
}
