import { useEffect, useState } from "react";
import { Phone, Mail, Instagram, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_PHONE_RAW } from "@/config";
import { trackEvent } from "@/lib/analytics";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [showFallback, setShowFallback] = useState(false);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    try {
      const draft = localStorage.getItem("contact_draft");
      if (draft) setFormData(JSON.parse(draft));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("contact_draft", JSON.stringify(formData));
    } catch {}
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs: { [k: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.message.trim() || formData.message.trim().length < 6) errs.message = "Please enter a short message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildMessage = () => `Hi Nimit,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}\n\n--\nSent from portfolio website`;

  const copyMessageToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({ title: "Copied", description: "Message copied to clipboard. Paste it in WhatsApp to send." });
      trackEvent("contact_copy_fallback");
    } catch (e) {
      toast({ title: "Copy failed", description: "Unable to copy automatically. Please copy the message manually." });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      trackEvent("contact_submit_attempt", { via: "whatsapp" });
      const message = buildMessage();
      setLastMessage(message);
      const webUrl = `https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(message)}`;

      const newWin = window.open(webUrl, "_blank");
      if (newWin === null) {
        setShowFallback(true);
        await copyMessageToClipboard(message);
        trackEvent("contact_submit_fallback_copy");
      } else {
        toast({ title: "Opening WhatsApp", description: "You'll be redirected to WhatsApp to send your message." });
        trackEvent("contact_submit_success");
      }

      localStorage.removeItem("contact_draft");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Unable to open WhatsApp. Please try the copy fallback." });
      trackEvent("contact_submit_error", { error: String(err) });
      setShowFallback(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-6 md:py-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />

      <div className="container mx-auto relative z-10 px-[12px]">
        {/* Section header */}
        <div className="relative mb-16 text-center">
          <span className="hidden md:block font-display text-[8rem] md:text-[12rem] text-primary/10 absolute -top-16 left-1/2 -translate-x-1/2 select-none leading-none">05</span>
          <div className="relative z-10">
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">Let's Connect</span>
            <h2 className="font-display text-5xl md:text-7xl tracking-wider mt-2">GET IN <span className="gradient-text">TOUCH</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">Ready to bring your event to life? Let's create something memorable together.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info - Left side */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-display text-2xl tracking-wider mb-8">CONTACT <span className="text-primary">INFO</span></h3>

            <a href="tel:+918591272101" className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-all group">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"><Phone className="w-5 h-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                <p className="text-foreground font-medium">+91 8591272101</p>
              </div>
            </a>

            <a href="mailto:muninimit@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-all group">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"><Mail className="w-5 h-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="text-foreground font-medium">muninimit@gmail.com</p>
              </div>
            </a>

            <a href="https://instagram.com/nimit_muni_7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/50 transition-all group">
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"><Instagram className="w-5 h-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Instagram</p>
                <p className="text-foreground font-medium">@nimit_muni_7</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30">
              <div className="p-3 rounded-lg bg-primary/10"><MapPin className="w-5 h-5 text-primary" /></div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                <p className="text-foreground font-medium">Mumbai, India</p>
              </div>
            </div>
          </div>

          {/* Contact Form - Right side */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10">
              <h3 className="font-display text-2xl tracking-wider mb-8">BOOK ME FOR YOUR <span className="text-primary">EVENT</span></h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Your Name</label>
                    <Input name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} className="bg-background/50 border-border focus:border-primary h-12" />
                    {errors.name && <p id="err-name" className="text-sm text-destructive mt-1">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground uppercase tracking-wider">Your Email</label>
                    <Input name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="bg-background/50 border-border focus:border-primary h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">Phone Number</label>
                  <Input name="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} className="bg-background/50 border-border focus:border-primary h-12" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-muted-foreground uppercase tracking-wider">Tell me about your event</label>
                  <Textarea name="message" placeholder="Event type, date, location, and any specific requirements..." value={formData.message} onChange={handleChange} required aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined} rows={5} className="bg-background/50 border-border focus:border-primary resize-none" />
                  {errors.message && <p id="err-message" className="text-sm text-destructive mt-1">{errors.message}</p>}
                </div>

                <Button type="submit" disabled={isSubmitting} aria-disabled={isSubmitting} className="w-full font-display text-lg tracking-wider py-3 md:py-6 hover-glow rounded-xl">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                {showFallback && (
                  <div className="mt-4 p-4 rounded-lg bg-muted/20 border border-border/20">
                    <p className="text-sm mb-2">We couldn't open WhatsApp automatically. You can copy your message and paste it into WhatsApp, or open the link manually.</p>
                    <label className="sr-only" htmlFor="wa-message">WhatsApp message</label>
                    <textarea id="wa-message" readOnly value={lastMessage} className="w-full min-h-[120px] p-3 rounded-md bg-background/60 text-sm" />
                    <div className="mt-3 flex gap-2">
                      <Button type="button" onClick={() => copyMessageToClipboard(lastMessage)} className="rounded-md">Copy message</Button>
                      <a href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(lastMessage)}`} target="_blank" rel="noreferrer" className="inline-block">
                        <Button type="button" className="rounded-md">Open WhatsApp</Button>
                      </a>
                      <Button type="button" variant="ghost" onClick={() => setShowFallback(false)}>Close</Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Footer - reduced spacing */}
        <div className="mt-0 pt-4 pb-4 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="font-display text-xl tracking-wider">NIMIT <span className="text-primary">MUNI</span></p>
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;