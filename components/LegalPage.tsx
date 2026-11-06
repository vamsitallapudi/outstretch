export const COMPANY = {
  name: "Outstretch Technologies Private Limited",
  cin: "U62011TS2026PTC225119",
  address:
    "324/AA, Flat No. 401, Tuberose, Ananda Poetree, Rangareddy, Telangana 500089, India",
  email: "support@outstretch.ai",
  phone: "+91 70138 84389",
}

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <section className="pt-40 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-4">
          Legal
        </p>
        <h1
          className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-3"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          {title}
        </h1>
        <p className="text-sm text-zinc-500 mb-12">Last updated: {updated}</p>
        <div className="space-y-8 text-zinc-400 leading-relaxed [&_h2]:text-white [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-orange-500 [&_a:hover]:underline">
          {children}
        </div>
      </div>
    </section>
  )
}

export function CompanyContact() {
  return (
    <p>
      {COMPANY.name}
      <br />
      CIN {COMPANY.cin}
      <br />
      {COMPANY.address}
      <br />
      <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> · {COMPANY.phone}
    </p>
  )
}
