"use client";

import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SOCIAL_LINKS } from "@/lib/constants";
import { AtSign, MapPin, Phone, Send } from "lucide-react";
import { SendMessage } from "@/actions/contact.action";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const toastId = toast.loading("Sending....");
    try {
      const res = await SendMessage(formData);

      if (res.success) {
        toast.success(res.message);
        handleResetForm();
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      toast.dismiss(toastId);
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-purple-600 mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto"
          >
            Have a question or want to work together? Feel free to reach out to
            me using the form below or through my contact information.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex gap-4 flex-col md:flex-row"
        >
          <motion.div variants={itemVariants} className="flex-1">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                    <AtSign className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a
                      href={`mailto:${SOCIAL_LINKS.email}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {SOCIAL_LINKS.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a
                      href={`tel:${SOCIAL_LINKS.phone}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {SOCIAL_LINKS.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-600/20 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-400">
                      Coochbehar, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 sm:px-6 md:px-8 py-8 "
            >
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 focus:border-purple-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 focus:border-purple-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-700 focus:border-purple-500"
                    placeholder="Project Discussion"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-800 border-gray-700 h-32 focus:border-purple-500 resize-none"
                    placeholder="Write your Message...."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
