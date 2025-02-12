import CreateListingForm from "@/components/CreateListingForm"

export default function CreateListingPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Create New Listing</h1>
      <CreateListingForm />
    </div>
  )
}