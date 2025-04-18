"use client"

import { useState } from "react"
import toast from "react-hot-toast"
import { Loader2 } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
    name: z.string().min(3, {
        message: "Name must contain at least 3 characters.",
    }),
    email: z.string().email("Please enter a valid email."),
    message: z.string().min(10, {
        message: "Please write something more descriptive.",
    }),
    social: z.string().url().optional().or(z.literal("")),
});

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false)

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsLoading(true)
            console.log(values);
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            });

            form.reset();

            if (response.status === 200) {
                toast.success("Message sent successfully!");
            }
        } catch (err) {
            console.log("Err!", err);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsLoading(false)
        }
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
            social: "",
        },
    })

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 min-w-full transition-all duration-300"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl">Name <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your name"
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
                            <FormLabel className="text-xl">Email <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your email"
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
                            <FormLabel className="text-xl">Message <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Enter your message"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="social"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl">Social (optional)</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Link for social account"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="hover:bg-opacity-85 text-dark-1 bg-primary-1 transition-all duration-300"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Submit"
                    )}
                </Button>
            </form>
        </Form>
    )
}