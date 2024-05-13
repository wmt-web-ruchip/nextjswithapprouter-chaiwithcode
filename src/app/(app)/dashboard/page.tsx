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

function Dashboard() {
  // const [messages, setMessages] = useState<Message[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [isSwitchingLoading, setIsSwitchLoading] = useState(false);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const handleDeleteMessage = (messageId: string) => {
  //   setMessages(messages.filter((message) => message._id !== messageId));
  // };

  // const { data } = useSession();
  // console.log("session", data);
  // const form = useForm({
  //   resolver: zodResolver(acceptMessageSchema),
  // });
  // const { register, handleSubmit, watch, setValue } = form;

  // const acceptMessages = watch("acceptMessages");

  // const fetchAcceptMessage = useCallback(async () => {
  //   setIsSwitchLoading(true);
  //   try {
  //     const response = await axios.get<ApiResponse>("/api/accept-message");
  //     setValue("acceptMessages", response.data.isAcceptingMessage);
  //   } catch (error) {
  //     const axiosError = error as AxiosError<ApiResponse>;
  //     toast({
  //       title: "Error",
  //       description:
  //         axiosError.response?.data.message ||
  //         "Failed to fetch the accept message setting.",
  //     });
  //   } finally {
  //     setIsSwitchLoading(false);
  //   }
  // }, [setValue]);

  // const fetchMessages = useCallback(
  //   async (refresh: boolean) => {
  //     setLoading(true);
  //     setIsSwitchLoading(false);
  //     try {
  //       const response = await axios.get<ApiResponse>("/api/get-messages");
  //       setMessages(response.data.messages || []);
  //       if (refresh) {
  //         toast({
  //           title: "Refreshed messages",
  //           description: "Showing latest messages.",
  //         });
  //       }
  //     } catch (error) {
  //       const axiosError = error as AxiosError<ApiResponse>;
  //       toast({
  //         title: "Error",
  //         description:
  //           axiosError.response?.data.message || "Failed to fetch messages.",
  //       });
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [setLoading, setMessages]
  // );

  // useEffect(() => {
  //   if (!data || !data.user) return;
  //   fetchMessages(false);
  //   fetchAcceptMessage();
  // }, [data, setValue, fetchMessages, fetchAcceptMessage]);

  // const handleSwitchChange = async () => {
  //   try {
  //     const response = await axios.post<ApiResponse>("/api/accept-message", {
  //       acceptMessage: !acceptMessages,
  //     });
  //     setValue("acceptMessages", !acceptMessages);
  //     toast({
  //       title: response?.data?.message,
  //     });
  //   } catch (error) {
  //     const axiosError = error as AxiosError<ApiResponse>;
  //     toast({
  //       title: "Error",
  //       description:
  //         axiosError.response?.data.message || "Failed to fetch messages.",
  //     });
  //   } finally {
  //   }
  // };

  // const username = data?.user?.username;
  // console.log("username", username);
  // const baseUrl = `${window.location.protocol}//${window.location.host}`
  // const profileUrl = `${baseUrl}/u/${username}`;

  // const copyToClipboard = () => {
  //   navigator.clipboard.writeText(profileUrl);
  //   toast({
  //     title: "URL Copied!",
  //     description: "Profile URL has been copied to clipboard.",
  //   });
  // };

  const form = useForm();
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    console.log("data", data);
    try {
      const response = await axios.post<ApiResponse>("/api/inquiry-form", data);
      toast({
        title: "Success",
        description: response.data.message,
      });
      
    } catch (error) {
      console.log("error in signup of user", error);
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError?.response?.data.message;
      toast({
        title: "Failed to submit the inquiry form.",
        description: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    // <div className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
    //   <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>

    //   <div className="mb-4">
    //     <h2 className="text-lg font-semibold mb-2">Copy Your Unique Link</h2>{" "}
    //     <div className="flex items-center">
    //       <input
    //         type="text"
    //         value={profileUrl}
    //         disabled
    //         className="input input-bordered w-full p-2 mr-2"
    //       />
    //       <Button onClick={copyToClipboard}>Copy</Button>
    //     </div>
    //   </div>

    //   <div className="mb-4">
    //     <Switch
    //       {...register("acceptMessages")}
    //       checked={acceptMessages}
    //       onCheckedChange={handleSwitchChange}
    //       disabled={isSwitchingLoading}
    //     />
    //     <span className="ml-2">
    //       Accept Messages: {acceptMessages ? "On" : "Off"}
    //     </span>
    //   </div>
    //   <Separator />

    //   <Button
    //     className="mt-4"
    //     variant="outline"
    //     onClick={(e) => {
    //       e.preventDefault();
    //       fetchMessages(true);
    //     }}
    //   >
    //     {loading ? (
    //       <Loader2 className="h-4 w-4 animate-spin" />
    //     ) : (
    //       <RefreshCcw className="h-4 w-4" />
    //     )}
    //   </Button>
    //   <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
    //     {/* {messages.length > 0 ? (
    //       messages.map((message, index) => (
    //         <MessageCard
    //           key={message._id}
    //           message={message}
    //           onMessageDelete={handleDeleteMessage}
    //         />
    //       ))
    //     ) : (
    //       <p>No messages to display.</p>
    //     )} */}
    //   </div>
    // </div>

    <>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email:" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PhoneNumber</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone number:"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="inquiryMessage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Inquiry Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your message here." {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default Dashboard;
