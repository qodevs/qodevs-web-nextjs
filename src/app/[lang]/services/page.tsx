import { getDictionary } from "@/dictionaries";
import ServicesClient from "./client";

export default async function Page(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang as 'en' | 'de');
  return <ServicesClient dict={dict} />;
}
