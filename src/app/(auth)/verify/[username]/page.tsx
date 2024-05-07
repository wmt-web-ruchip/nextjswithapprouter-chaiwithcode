import { useToast } from "@/components/ui/use-toast";
import { verifySchema } from "@/schemas/verifySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function VerifyAccount() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      code: "",
    },
  });

  return <div>VerifyAccount</div>;
}

export default VerifyAccount;
