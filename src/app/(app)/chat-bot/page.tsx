"use client";
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
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Message } from "@/modal/User";
import { acceptMessageSchema } from "@/schemas/acceptMessageSchema";
import { ApiResponse } from "@/types/apiResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { Loader2, RefreshCcw } from "lucide-react";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function ChatBot() {
  const form = useForm();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    console.log("data", data);
    try {
      const response = await axios.post<ApiResponse>("/api/suggest-messages");
    //   toast({
    //     title: "Success",
    //     description: response.data.message,
    //   });
    } catch (error) {
      console.log("error", error);
    //   const axiosError = error as AxiosError<ApiResponse>;
    //   let errorMessage = axiosError?.response?.data.message;
    //   toast({
    //     title: "Try again later.",
    //     description: error,
    //   });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="fixed bottom-10 left-0 right-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex justify-center items-center gap-4"
          >
            <FormField
              control={form.control}
              name="inquiryMessage"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Type your message here." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting} className="mt-0">
              Enter
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default ChatBot;
