import { getDictionary } from "@/dictionaries";

export default async function ImprintPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const { lang } = params;
  const dict = await getDictionary(lang as 'en' | 'de');
  const t = dict.imprint;

  return (
    <main className="w-full pt-32 pb-24 bg-background min-h-[calc(100vh-20rem)]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-12 border-b border-border pb-8">
          <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
            {t.info_title}
          </p>
        </div>

        <div className="space-y-12 text-foreground/80 leading-relaxed font-body-md">
          {/* General Info */}
          <section className="space-y-4">
            <div className="p-6 bg-surface-container-lowest rounded-none">
              <p className="font-semibold text-foreground">{t.info_text1}</p>
              <p className="mt-2">{t.info_text2}</p>
              <p>{t.info_text3}</p>
            </div>
          </section>

          {/* Managing Director & Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-3">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest max-w-[260px] leading-relaxed">{t.managing_director_title}</h3>
              <p className="text-lg font-semibold text-foreground">{t.managing_director_name}</p>
            </section>
            
            <section className="space-y-3">
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">{t.contact_title}</h3>
              <p className="font-medium text-foreground">{t.contact_phone}</p>
              <p className="font-medium text-primary">{t.contact_email}</p>
            </section>
          </div>

          {/* Responsible Content */}
          <section className="space-y-3 border-t border-border pt-8">
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">{t.responsible_title}</h3>
            <p className="text-lg font-semibold text-foreground">{t.responsible_name}</p>
          </section>

          {/* Liability for Content */}
          <section className="space-y-3 pt-4">
            <h3 className="text-xl font-bold text-foreground">{t.liability_content_title}</h3>
            <p>{t.liability_content_text1}</p>
            <p className="pt-2">{t.liability_content_text2}</p>
          </section>

          {/* Liability for Links */}
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">{t.liability_links_title}</h3>
            <p>{t.liability_links_text}</p>
          </section>

          {/* Copyright */}
          <section className="space-y-3">
            <h3 className="text-xl font-bold text-foreground">{t.copyright_title}</h3>
            <p>{t.copyright_text}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
