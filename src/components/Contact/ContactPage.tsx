"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Gristela } from "@/lib/font";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (formRef.current) {
      gsap.from(formRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }

    if (infoRef.current) {
      gsap.from(infoRef.current.children, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const formObject = Object.fromEntries(formData.entries());

      formObject.to_name = "Siddhesh Lakhani";

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formObject,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
        setSuccess(true);
        formRef.current.reset();
      } catch (error) {
        console.error("Failed to send email:", error);
      }
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-midnight to-primary-dark text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <h1
          ref={titleRef}
          className={`text-5xl ${Gristela.className} md:text-7xl text-center mb-16 text-gray-200`}
        >
          Get in Touch
        </h1>

        <div className="flex flex-row gap-12">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-8 bg-black/40 p-6 rounded-lg shadow-lg w-1/2"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Name
              </label>
              <Input
                id="name"
                name="from_name"
                className="bg-[#2b2b3e] border-[#444457] text-white"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Email
              </label>
              <Input
                id="email"
                name="from_email"
                type="email"
                className="bg-[#2b2b3e] border-[#444457] text-white"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-gray-300"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                className="bg-[#2b2b3e] border-[#444457] text-white h-40"
                placeholder="Write your message"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-overlay duration-300 transition-colors hover:bg-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
            {success && (
              <p className="text-green-400 text-center">
                Message sent successfully!
              </p>
            )}
          </form>

          <div className="w-1/2">
            <div ref={infoRef} className="space-y-8">
              <div className="p-6 bg-black/40 rounded-lg shadow-lg">
                <h2 className="text-2xl font-light mb-4 text-gray-200">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-blue-400" />
                    <Link
                      href="mailto:lakhani.siddhesh@gmail.com"
                      className="text-gray-300"
                    >
                      lakhani.siddhesh@gmail.com
                    </Link>
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">+91 7021969223</span>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">Mumbai, India</span>
                  </p>
                </div>
              </div>
              <div className="p-6 bg-black/40 rounded-lg shadow-lg">
                <h2 className="text-2xl font-light mb-4 text-gray-200">
                  Connect
                </h2>
                <p className="text-gray-400 mb-4">
                  Feel free to reach out through any of the channels above or
                  connect with me on social media.
                </p>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.linkedin.com/in/siddhesh-lakhani"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://www.github.com/sid-lakhani"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="https://www.instagram.com/sidlakhani_"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="https://www.twitter.com/sidlakhani_"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Twitter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
