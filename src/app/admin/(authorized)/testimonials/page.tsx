import AdminNav from "../_components/AdminNav";
import AddTestimony from "./_components/AddTestimony";
import Testimonials from "./_components/Testimonials";
import Testimony from "./_components/Testimony";
import { ITestimonial } from "@/interfaces/testimoial.interface";

const Page = async () => {
  let testimonials: ITestimonial[] = [];
  testimonials = await getTestimonials();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Testimonials initialTestimonials={testimonials} />
    </div>
  );
};

async function getTestimonials(): Promise<ITestimonial[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/testimonial`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const testimonials: ITestimonial[] = await res.json();
    return testimonials;
  } catch (error) {
    return [];
  }
}

export default Page;
