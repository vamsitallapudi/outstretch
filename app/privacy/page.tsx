import type { Metadata } from "next"
import { LegalPage, CompanyContact, COMPANY } from "@/components/LegalPage"

export const metadata: Metadata = {
  title: "Privacy Policy — outstretch.ai",
  description: `How ${COMPANY.name} handles information on outstretch.ai.`,
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="6 November 2026">
      <div>
        <p>
          outstretch.ai is operated by {COMPANY.name} (&ldquo;Outstretch&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;). This policy explains what
          information we collect through this website and how we use it.
        </p>
        <p className="mt-3">
          Our product MovieBoard AI has its own privacy policy at{" "}
          <a href="https://movieboard.ai/privacy">movieboard.ai/privacy</a>,
          which covers the MovieBoard AI website and apps.
        </p>
      </div>

      <div>
        <h2>What we collect</h2>
        <ul>
          <li>
            <strong className="text-zinc-300">Contact form:</strong> your name,
            email address, company (optional), the service you are interested
            in and your message.
          </li>
          <li>
            <strong className="text-zinc-300">Emails you send us:</strong> the
            content of your email and your email address.
          </li>
          <li>
            <strong className="text-zinc-300">Basic server logs:</strong> our
            hosting provider records technical data such as IP address, browser
            type and pages requested, to keep the site running and secure.
          </li>
        </ul>
        <p className="mt-3">
          This website does not use advertising cookies or tracking pixels, and
          it does not ask for payment details.
        </p>
      </div>

      <div>
        <h2>How we use it</h2>
        <p>
          We use your details only to reply to your enquiry, discuss work you
          ask us about, and keep records of that conversation. We do not sell
          your information or use it for advertising.
        </p>
      </div>

      <div>
        <h2>Who processes it</h2>
        <ul>
          <li>Vercel hosts this website.</li>
          <li>Resend delivers contact form messages to our inbox.</li>
          <li>Zoho hosts our email.</li>
        </ul>
        <p className="mt-3">
          These providers process data on our behalf and may store it outside
          India. We share information with authorities only when the law
          requires it.
        </p>
      </div>

      <div>
        <h2>How long we keep it</h2>
        <p>
          We keep enquiries for as long as needed to respond and for our
          business records, and delete them on request unless the law requires
          us to keep them.
        </p>
      </div>

      <div>
        <h2>Your rights</h2>
        <p>
          You can ask us to access, correct or delete your information, or
          withdraw consent, by emailing{" "}
          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We reply
          within 30 days. This includes your rights under India&apos;s Digital
          Personal Data Protection Act, 2023.
        </p>
      </div>

      <div>
        <h2>Changes</h2>
        <p>
          If we change this policy, we will update the date at the top of this
          page.
        </p>
      </div>

      <div>
        <h2>Contact</h2>
        <CompanyContact />
      </div>
    </LegalPage>
  )
}
