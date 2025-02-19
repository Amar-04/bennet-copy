import ContactForm from "@/app/components/contact/ContactForm";

export default function Home() {
  return (
    <div className=" flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8 pb-14">
        <ContactForm />
      </main>
    </div>
  );
}
