"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/shared/Container";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6 text-theme-orange" />,
    title: "Our Location",
    details: [
      "Sheniani HQ 1234 Builders",
      "Avenue, Suite 500 Tbilisi, Georgia",
    ],
  },
  {
    icon: <Phone className="h-6 w-6 text-theme-orange" />,
    title: "Phone",
    details: ["+995 599 123 456"],
  },
  {
    icon: <Mail className="h-6 w-6 text-theme-orange" />,
    title: "Email",
    details: ["hi@beresin.com"],
  },
  {
    icon: <Globe className="h-6 w-6 text-theme-orange" />,
    title: "Website",
    details: ["www.sheniani.com"],
  },
];

const ContactInfoItem = ({
  icon,
  title,
  details,
}: {
  icon: React.ReactNode;
  title: string;
  details: string[];
}) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 font-lato mt-1">
        {details.map((line, i) => (
          <span key={i}>
            {line}
            {i < details.length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  </div>
);

export default function GetInTouchForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full py-16 md:py-24">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Details */}
          <div className="w-full lg:w-1/2">
            <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">
              Get In Touch
            </h2>
            <p className="mt-2 xl:text-base sm:text-base text-sm font-lato text-gray-600">
              Faucibus commodo a aenean et sit quisque ipsum. Consequat eu id ut
              dolor felis quis. Sagittis a sapien pulvinar etiam.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-15">
              {contactInfo.map((item, index) => (
                <ContactInfoItem key={index} {...item} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 rounded-lg p-6 md:p-8 lg:p-10 "
            >
              <div className="mb-6">
                <label
                  htmlFor="firstName"
                  className="block text-lg font-semibold mb-2"
                >
                  Name
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="h-12 bg-white shadow-none border-0"
                  />
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="h-12 bg-white shadow-none border-0"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="h-12 bg-white shadow-none border-0"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="min-h-[120px] bg-white resize-none shadow-none border-0"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-theme-orange hover:bg-theme-orange/90 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
