"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Price must be a positive number.",
  }),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 5000000, {
      message: "Image must be less than 5MB.",
    })
    .optional(),
})

export default function CreateListingForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    //try {
    //  const formData = new FormData()
    //  formData.append("title", values.title)
    //  formData.append("description", values.description)
    //  formData.append("price", values.price)
    //  if (values.image) {
    //    formData.append("image", values.image)
    //  }
    //
    //  const result = await createListing(formData)
    //  if (result.success) {
    //    toast({
    //      title: "Listing created",
    //      description: "Your listing has been successfully created.",
    //    })
    //    router.push("/listings")
    //  } else {
    //    throw new Error(result.error)
    //  }
    //} catch (error) {
    //  toast({
    //    title: "Error",
    //    description: "There was an error creating your listing. Please try again.",
    //    variant: "destructive",
    //  })
    //} finally {
    //  setIsSubmitting(false)
    //}
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter listing title" {...field} />
              </FormControl>
              <FormDescription>Give your listing a catchy title.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe your listing" className="resize-none" {...field} />
              </FormControl>
              <FormDescription>Provide details about your listing.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" step="0.01" placeholder="Enter price" {...field} />
              </FormControl>
              <FormDescription>Set a price for your listing.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0])} />
              </FormControl>
              <FormDescription>Upload an image for your listing (max 5MB).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating..." : "Create Listing"}
        </Button>
      </form>
    </Form>
  )
}

