import { getDictionary } from "@/dictionaries";

export default async function PrivacyPolicyPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const { lang } = params;
  const dict = await getDictionary(lang as 'en' | 'de');
  const t = dict.privacy;

  return (
    <main className="w-full pt-32 pb-24 bg-background min-h-[calc(100vh-20rem)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-12 border-b border-border pb-8">
          <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
            {t.as_of}
          </p>
        </div>

        <div className="space-y-12 text-foreground/80 leading-relaxed font-body-md">
          {/* Who we are */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">{t.who_we_are_title}</h2>
            <div className="p-6 bg-surface-container-lowest rounded-none">
              <p className="font-semibold text-foreground">{t.who_we_are_text1}</p>
              <p className="mt-2">{t.who_we_are_text2}</p>
              <p>{t.who_we_are_text3}</p>
              <p className="mt-4 font-mono text-primary">{t.who_we_are_text4}</p>
            </div>
          </section>

          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">{t.s1_title}</h3>
            <p>{t.s1_text}</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">{t.s2_title}</h3>
            <p>{t.s2_text}</p>
            <div className="pl-4 border-l-2 border-primary mt-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">{t.who_we_are_text1}</p>
              <p>{t.who_we_are_text2}</p>
              <p>{t.who_we_are_text3}</p>
              <p className="mt-1">{t.who_we_are_text4}</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">{t.s3_title}</h3>
            <p>{t.s3_text}</p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">{t.s4_title}</h3>
            <p>{t.s4_text}</p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">{t.s5_title}</h3>
            <p>{t.s5_text}</p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">{t.s6_title}</h3>
            <p>{t.s6_text}</p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">{t.s7_title}</h3>
            <p>{t.s7_text}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
