import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useForm } from "react-hook-form";
type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};
const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData: data }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      toast({
        title: "Message sent successfully!",
        description: "We will get back to you shortly.",
      });
      //   resetForm();
    } catch (error) {
      toast({
        title: "Error",
        description: (error as any).message || "Failed to send message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 flex flex-col gap-3"
    >
      <div>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <span className="text-sm text-orange-500">{errors.name.message}</span>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-sm text-orange-500">
            {errors.email.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <Input id="phoneNumber" {...register("phoneNumber")} />
        {errors.phoneNumber && (
          <span className="text-sm text-orange-500">
            {errors.phoneNumber.message}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <Textarea
          id="message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <span className="text-sm text-orange-500">
            {errors.message.message}
          </span>
        )}
      </div>
      <Button disabled={isSubmitting} type="submit" className="w-fit mt-3">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
