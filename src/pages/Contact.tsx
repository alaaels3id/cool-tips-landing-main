import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import { Mail, MessageSquare, User, Send } from "lucide-react";

const Contact = () => {
    const { t } = useTranslation();

    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        subject: z.string().min(5, {
            message: "Subject must be at least 5 characters.",
        }),
        message: z.string().min(10, {
            message: "Message must be at least 10 characters.",
        }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast.success(t("contact.form.success"), {
            description: t("contact.form.success_desc"),
        });
        form.reset();
    }

    return (
        <main className="min-h-screen bg-background">
            <Header />

            <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center space-y-4 mb-16">
                            <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                                {t("contact.subtitle")}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
                                {t("contact.title")}
                            </h1>
                            <p className="text-muted-foreground text-lg font-mono uppercase max-w-2xl mx-auto">
                                {t("contact.description")}
                            </p>
                        </div>

                        {/* Form */}
                        <div className="bg-card border border-border p-8 md:p-12 shadow-sm">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                                        <User className="w-4 h-4 text-primary" />
                                                        {t("contact.form.name")}
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={t("contact.form.name_placeholder")}
                                                            className="bg-muted/30 border-border focus:border-primary transition-colors"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                                        <Mail className="w-4 h-4 text-primary" />
                                                        {t("contact.form.email")}
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="email"
                                                            placeholder={t("contact.form.email_placeholder")}
                                                            className="bg-muted/30 border-border focus:border-primary transition-colors"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    <FormField
                                        control={form.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                                                    <MessageSquare className="w-4 h-4 text-primary" />
                                                    {t("contact.form.subject")}
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder={t("contact.form.subject_placeholder")}
                                                        className="bg-muted/30 border-border focus:border-primary transition-colors"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-bold uppercase tracking-widest text-xs">
                                                    {t("contact.form.message")}
                                                </FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder={t("contact.form.message_placeholder")}
                                                        className="min-h-[150px] bg-muted/30 border-border focus:border-primary transition-colors resize-none"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="w-full md:w-auto px-12 py-6 font-bold uppercase tracking-widest text-sm rounded-none hover:scale-105 transition-transform"
                                        disabled={form.formState.isSubmitting}
                                    >
                                        {form.formState.isSubmitting ? (
                                            t("contact.form.sending")
                                        ) : (
                                            <>
                                                {t("contact.form.submit")}
                                                <Send className="ml-2 w-4 h-4" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Contact;
