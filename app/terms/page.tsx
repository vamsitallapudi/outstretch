import type { Metadata } from "next"
import { LegalPage, CompanyContact, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Terms of Service — outstretch.ai",
  description: `Terms for using outstretch.ai, operated by ${COMPANY.name}.`,
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="6 November 2026">
      <div>
        <p>
          These terms apply to your use of outstretch.ai, a website operated by{" "}
          {COMPANY.name} (&ldquo;Outstretch&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;), a company incorporated in India (CIN {COMPANY.cin}).
          By using this website you agree to them.
        </p>
        <p className="mt-3">
          Our product MovieBoard AI has its own terms at{" "}
          <a href="https://movieboard.ai/terms">movieboard.ai/terms</a>.
          Consulting or development work is governed by the written agreement
          we sign with each client.
        </p>
      </div>

      <div>
        <h2>Using this website</h2>
        <ul>
          <li>Use the site lawfully and do not try to disrupt or misuse it.</li>
          <li>
            Do not send spam, malicious code or misleading information through
            the contact form.
          </li>
        </ul>
      </div>

      <div>
        <h2>Content</h2>
        <p>
          The text, design and graphics on this site belong to Outstretch or
          its licensors. You may share links to the site, but you may not copy
          or republish its content for commercial use without our permission.
        </p>
      </div>

      <div>
        <h2>No professional advice</h2>
        <p>
          Content on this site is general information about our services. It
          is not a quote or an offer, and it is not advice for your specific
          situation.
        </p>
      </div>

      <div>
        <h2>Liability</h2>
        <p>
          The site is provided &ldquo;as is&rdquo;. To the extent the law
          allows, we are not liable for losses arising from using the site or
          relying on its content.
        </p>
      </div>

      <div>
        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of India. Courts in Hyderabad,
          Telangana have jurisdiction.
        </p>
      </div>

      <div>
        <h2>Changes</h2>
        <p>
          We may update these terms. The date at the top shows the latest
          version.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <CompanyContact />
      </div>
    </LegalPage>
  )
}
