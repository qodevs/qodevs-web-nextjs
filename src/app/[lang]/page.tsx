import { Hero } from "@/components/sections/Hero";
import { AboutExpertise } from "@/components/sections/AboutExpertise";
import { ServicesAccordion } from "@/components/sections/ServicesAccordion";

import { getDictionary } from "@/dictionaries";

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const { lang } = params;
  const dict = await getDictionary(lang as 'en' | 'de');
  return (
    <main className="w-full bg-background">
      <div className="w-full relative">
        <Hero lang={lang} dict={dict.hero} />
      </div>
      
      <div className="w-full relative">
        <div className="flex flex-col justify-center">
          <AboutExpertise dict={dict.about_expertise} />
        </div>
        <div className="flex flex-col justify-center">
          <ServicesAccordion dict={dict.services_accordion} />
        </div>
      </div>
    </main>
  );
}
