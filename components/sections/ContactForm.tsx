"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const inputClass = cn(
  "w-full bg-navy border border-white/10 rounded-xl px-4 py-3.5 text-cream placeholder:text-muted text-sm",
  "focus:outline-none focus:border-gold/60 focus:bg-navy-mid transition-all duration-200"
);

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
          <CheckCircle size={32} className="text-gold" />
        </div>
        <h3 className="font-display text-2xl font-bold text-cream">Message Sent!</h3>
        <p className="text-muted max-w-xs">Thanks for reaching out. I&apos;ll reply within 24 hours.</p>
        <Button onClick={() => setStatus("idle")} variant="ghost" size="sm">
          Send Another
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-cream/70 text-xs font-medium uppercase tracking-wider">Name</label>
          <input
            {...register("name")}
            placeholder="Your full name"
            className={inputClass}
          />
          {errors.name && (
            <p className="text-red-400 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="text-cream/70 text-xs font-medium uppercase tracking-wider">Email</label>
          <input
            {...register("email")}
            placeholder="your@email.com"
            className={inputClass}
          />
          {errors.email && (
            <p className="text-red-400 text-xs flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-cream/70 text-xs font-medium uppercase tracking-wider">Subject</label>
        <input
          {...register("subject")}
          placeholder="What's this about?"
          className={inputClass}
        />
        {errors.subject && (
          <p className="text-red-400 text-xs flex items-center gap-1">
            <AlertCircle size={12} /> {errors.subject.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label className="text-cream/70 text-xs font-medium uppercase tracking-wider">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell me about your project, timeline, and goals..."
          className={cn(inputClass, "resize-none")}
        />
        {errors.message && (
          <p className="text-red-400 text-xs flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm flex items-center gap-2">
          <AlertCircle size={14} /> Something went wrong. Please try again.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full justify-center">
        {status === "loading" ? "Sending..." : <>Send Message <Send size={16} /></>}
      </Button>
    </form>
  );
}
