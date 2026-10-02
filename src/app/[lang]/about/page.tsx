import { getDictionary } from "@/dictionaries";
import AboutClient from "./client";

export default async function Page(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang as 'en' | 'de');
  return <AboutClient dict={dict} />;
}
