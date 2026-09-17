import { apiClient } from "@/lib/apiClient";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslation } from "react-i18next";
import AppLayout from "@/components/layout/AppLayout";
import SEO from "@/components/seo/SEO";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MessageSquare, User, Send, CheckCircle2, Youtube, Github } from "lucide-react";
import { YouTubeIcon } from "@/components/common/YouTubeIcon";
import { XIcon } from "@/components/common/XIcon";
import { FacebookIcon } from "@/components/common/FacebookIcon";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(4, {
    message: "Subject must be at least 4 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiClient.sendContact(values);
      setSubmitted(true);
      toast.success(t("contact.form.success_title"), {
        description: t("contact.form.success_desc"),
      });
      form.reset();
    } catch (err: any) {
      toast.error(err.message || "Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AppLayout>
      <SEO
        title={t("contact.title")}
        description={t("contact.subtitle")}
      />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{t("contact.badge")}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-card border border-border/80 rounded-3xl p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {t("contact.form.success_title")}
                </h3>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                  {t("contact.form.success_desc")}
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="rounded-xl mt-4"
                >
                  {t("contact.form.send_another")}
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">{t("contact.form.name")}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="w-4 h-4 text-muted-foreground absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
                            <Input
                              placeholder={t("contact.form.name_placeholder")}
                              className="pl-10 rtl:pl-4 rtl:pr-10 h-11 bg-background rounded-xl"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">{t("contact.form.email")}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-muted-foreground absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2" />
                            <Input
                              type="email"
                              placeholder={t("contact.form.email_placeholder")}
                              className="pl-10 rtl:pl-4 rtl:pr-10 h-11 bg-background rounded-xl"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Subject */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">{t("contact.form.subject")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("contact.form.subject_placeholder")}
                            className="h-11 bg-background rounded-xl"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">{t("contact.form.message")}</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Textarea
                              placeholder={t("contact.form.message_placeholder")}
                              className="min-h-[140px] bg-background rounded-xl resize-y"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 font-bold text-base rounded-xl gap-2 shadow-lg shadow-primary/10"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>{t("contact.form.sending")}</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 rtl:rotate-180" />
                        <span>{t("contact.form.submit")}</span>
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>

          {/* Social Channels & Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-secondary/30 border border-border/80 space-y-6">
              <h3 className="text-xl font-bold">{t("contact.sidebar.title")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("contact.sidebar.desc")}
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="https://www.youtube.com/@coooltips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/70 hover:border-[#FF0000]/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF0000]/10 flex items-center justify-center shrink-0">
                    <YouTubeIcon className="w-6 h-6" variant="red" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-[#FF0000] transition-colors">
                      {t("contact.sidebar.youtube")}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">@coooltips</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/coooltips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/70 hover:border-[#1877F2]/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center shrink-0">
                    <FacebookIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-[#1877F2] transition-colors">
                      {t("contact.sidebar.facebook")}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">facebook.com/coooltips</p>
                  </div>
                </a>

                <a
                  href="https://github.com/coooltips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/70 hover:border-foreground/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-foreground transition-colors">
                      {t("contact.sidebar.github")}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">github.com/coooltips</p>
                  </div>
                </a>

                <a
                  href="https://x.com/coool_tips"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/70 hover:border-foreground/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary text-foreground flex items-center justify-center shrink-0 border border-border/50">
                    <XIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                      {t("contact.sidebar.twitter")}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">@coool_tips</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/70 text-xs text-muted-foreground leading-relaxed">
              <span className="font-bold text-foreground block mb-1">
                {t("contact.sidebar.privacy_notice_title")}
              </span>
              {t("contact.sidebar.privacy_notice_desc")}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
