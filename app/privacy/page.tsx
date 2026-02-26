import type { Metadata } from "next";
import {
  TutorialLayout,
  HeroSection,
  SectionDivider,
  Paragraph,
  InfoBox,
  NoteBox,
  TipBox,
  WarningBox,
} from "@localm/tutorial-framework";
import { SITE_CONFIG } from "@/config/site";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for LocalM\u2122 Tuts — how we collect, use, and protect your data.",
  openGraph: {
    title: "Privacy Policy | LocalM\u2122 Tuts",
    description: "Privacy policy for LocalM\u2122 Tuts.",
    type: "article",
  },
};

// ─── Shared legal text styles ─────────────────────────────────────────────

const sectionStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--tf-space-4)",
  padding: "var(--tf-space-6) 0",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--tf-font-display)",
  fontWeight: 700,
  fontSize: "var(--tf-text-xl)",
  color: "var(--tf-text-primary)",
  margin: 0,
  paddingBottom: "var(--tf-space-2)",
  borderBottom: "1px solid var(--tf-border-subtle)",
};

const subheadingStyle: React.CSSProperties = {
  fontFamily: "var(--tf-font-display)",
  fontWeight: 600,
  fontSize: "var(--tf-text-md)",
  color: "var(--tf-text-primary)",
  margin: 0,
  marginTop: "var(--tf-space-2)",
};

const listStyle: React.CSSProperties = {
  fontFamily: "var(--tf-font-body)",
  fontSize: "var(--tf-text-sm)",
  color: "var(--tf-text-secondary)",
  lineHeight: 1.7,
  paddingLeft: "1.5rem",
  margin: 0,
  display: "flex",
  flexDirection: "column" as const,
  gap: "var(--tf-space-2)",
};

const tableWrapperStyle: React.CSSProperties = {
  width: "100%",
  overflowX: "auto",
  borderRadius: "var(--tf-radius-lg)",
  border: "1px solid var(--tf-border-subtle)",
  background: "var(--tf-bg-surface)",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse" as const,
  fontSize: "var(--tf-text-sm)",
  fontFamily: "var(--tf-font-body)",
};

const thStyle: React.CSSProperties = {
  textAlign: "left" as const,
  padding: "var(--tf-space-3) var(--tf-space-5)",
  borderBottom: "2px solid var(--tf-border-default)",
  background: "var(--tf-bg-elevated)",
  color: "var(--tf-text-primary)",
  fontWeight: 600,
  fontSize: "var(--tf-text-xs)",
  textTransform: "uppercase" as const,
  letterSpacing: "var(--tf-tracking-wide)",
};

const tdStyle: React.CSSProperties = {
  padding: "var(--tf-space-3) var(--tf-space-5)",
  borderBottom: "1px solid var(--tf-border-subtle)",
  color: "var(--tf-text-secondary)",
  verticalAlign: "top" as const,
  lineHeight: 1.6,
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function PrivacyPage() {
  return (
    <TutorialLayout
      header={{ ...SITE_CONFIG.header, currentPath: "/privacy/" }}
      footer={SITE_CONFIG.footer}
      maxWidth="narrow"
    >
      <HeroSection
        eyebrow="Legal"
        headline="Privacy Policy"
        subheading="How we collect, use, and protect your information."
        tags={["Privacy", "GDPR", "Data Protection"]}
      />

      <NoteBox title="Effective Date">
        February 26, 2026 &middot; Last Updated: February 26, 2026
      </NoteBox>

      {/* ── Plain-Language Summary ─────────────────────────────────────── */}
      <SectionDivider label="Summary (Plain Language)" />

      <InfoBox title="Privacy at a Glance">
        Here is a quick overview. The full policy follows below.
      </InfoBox>

      <Paragraph>
        <strong>What we collect:</strong> Basic analytics data (pages visited,
        time on page, device type, approximate location by country) via Google
        Analytics. We do not collect names, emails, or personal identifiers.
      </Paragraph>
      <Paragraph>
        <strong>Why:</strong> To understand which tutorials are popular, how
        visitors navigate the site, and to improve content quality.
      </Paragraph>
      <Paragraph>
        <strong>Cookies:</strong> Google Analytics sets cookies to distinguish
        users. No advertising or tracking cookies are used.
      </Paragraph>
      <Paragraph>
        <strong>Your rights:</strong> Under GDPR and similar laws, you can opt
        out of analytics tracking, request data deletion, or ask us what data we
        hold. Details in the GDPR section below.
      </Paragraph>
      <Paragraph>
        <strong>Third parties:</strong> We share no data with third parties
        beyond what Google Analytics processes on our behalf.
      </Paragraph>

      {/* ── Full Policy ────────────────────────────────────────────────── */}
      <SectionDivider label="Full Privacy Policy" />

      {/* 1. Introduction */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>1. Introduction</h2>
        <Paragraph>
          This Privacy Policy explains how LocalM™ (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and safeguards
          information when you visit the LocalM™ Tuts website (&ldquo;the
          Site&rdquo;). We are committed to protecting your privacy and
          processing data in compliance with the General Data Protection
          Regulation (GDPR), the UK Data Protection Act, the California Consumer
          Privacy Act (CCPA), and other applicable data protection laws.
        </Paragraph>
      </div>

      {/* 2. Data Controller */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>2. Data Controller</h2>
        <Paragraph>
          The data controller for this Site is LocalM™. For any privacy-related
          inquiries, contact us via the social channels listed on the Site or
          through our GitHub repository.
        </Paragraph>
      </div>

      {/* 3. What We Collect */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>3. Information We Collect</h2>

        <h3 style={subheadingStyle}>3.1 Information Collected Automatically</h3>
        <Paragraph>
          When you visit the Site, Google Analytics (GA4) automatically
          collects:
        </Paragraph>

        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Data Type</th>
                <th style={thStyle}>Purpose</th>
                <th style={thStyle}>Legal Basis (GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Pages visited, time on page</td>
                <td style={tdStyle}>Understand content engagement</td>
                <td style={tdStyle}>Legitimate interest</td>
              </tr>
              <tr>
                <td style={tdStyle}>Device type, browser, OS</td>
                <td style={tdStyle}>Ensure compatibility</td>
                <td style={tdStyle}>Legitimate interest</td>
              </tr>
              <tr>
                <td style={tdStyle}>Approximate location (country level)</td>
                <td style={tdStyle}>Understand audience geography</td>
                <td style={tdStyle}>Legitimate interest</td>
              </tr>
              <tr>
                <td style={tdStyle}>Referral source (how you found us)</td>
                <td style={tdStyle}>Measure marketing effectiveness</td>
                <td style={tdStyle}>Legitimate interest</td>
              </tr>
              <tr>
                <td style={tdStyle}>Anonymized IP address</td>
                <td style={tdStyle}>GA4 IP anonymization (default)</td>
                <td style={tdStyle}>Legitimate interest</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={subheadingStyle}>3.2 Information We Do Not Collect</h3>
        <ul style={listStyle}>
          <li>Names, email addresses, or contact information.</li>
          <li>Payment or financial information.</li>
          <li>Social media account details.</li>
          <li>
            Any user-generated content or account data (the Site has no
            accounts).
          </li>
        </ul>
      </div>

      {/* 4. Google Analytics */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>4. Google Analytics</h2>
        <Paragraph>
          We use Google Analytics 4 (GA4), a web analytics service provided by
          Google LLC (&ldquo;Google&rdquo;). GA4 uses cookies and similar
          technologies to collect and analyze information about how visitors use
          the Site.
        </Paragraph>
        <ul style={listStyle}>
          <li>
            <strong>Provider:</strong> Google LLC, 1600 Amphitheatre Parkway,
            Mountain View, CA 94043, USA.
          </li>
          <li>
            <strong>Data Processing:</strong> Google may process data on servers
            outside the EEA. Google participates in the EU-U.S. Data Privacy
            Framework.
          </li>
          <li>
            <strong>IP Anonymization:</strong> GA4 anonymizes IP addresses by
            default. We do not collect or store full IP addresses.
          </li>
          <li>
            <strong>Data Retention:</strong> Analytics data is retained for 14
            months, after which it is automatically deleted.
          </li>
          <li>
            <strong>No Advertising Features:</strong> We have not enabled Google
            Ads, remarketing, or demographic reporting features.
          </li>
        </ul>
        <TipBox title="Opt Out of Google Analytics">
          You can opt out by installing the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--tf-color-primary-light)" }}
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          , or by disabling cookies in your browser settings.
        </TipBox>
      </div>

      {/* 5. Cookies */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>5. Cookies</h2>
        <Paragraph>
          Cookies are small text files stored on your device. The Site uses the
          following types of cookies:
        </Paragraph>

        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Cookie</th>
                <th style={thStyle}>Provider</th>
                <th style={thStyle}>Purpose</th>
                <th style={thStyle}>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>_ga</td>
                <td style={tdStyle}>Google Analytics</td>
                <td style={tdStyle}>Distinguish unique users</td>
                <td style={tdStyle}>2 years</td>
              </tr>
              <tr>
                <td style={tdStyle}>_ga_*</td>
                <td style={tdStyle}>Google Analytics</td>
                <td style={tdStyle}>Persist session state</td>
                <td style={tdStyle}>2 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Paragraph>
          We do not use advertising cookies, social media tracking cookies, or
          any third-party cookies beyond Google Analytics.
        </Paragraph>
      </div>

      {/* 6. GDPR */}
      <SectionDivider label="GDPR Compliance" />

      <div style={sectionStyle}>
        <h2 style={headingStyle}>6. Your Rights Under GDPR</h2>
        <Paragraph>
          If you are located in the European Economic Area (EEA), the United
          Kingdom, or Switzerland, you have the following rights under the
          General Data Protection Regulation:
        </Paragraph>

        <h3 style={subheadingStyle}>6.1 Right of Access (Article 15)</h3>
        <Paragraph>
          You have the right to request a copy of the personal data we hold
          about you. Since we only collect anonymized analytics data, individual
          data access requests will typically return no personally identifiable
          information.
        </Paragraph>

        <h3 style={subheadingStyle}>6.2 Right to Rectification (Article 16)</h3>
        <Paragraph>
          You may request correction of inaccurate personal data. As we do not
          collect personal identifiers, this right has limited applicability to
          our processing activities.
        </Paragraph>

        <h3 style={subheadingStyle}>6.3 Right to Erasure (Article 17)</h3>
        <Paragraph>
          You have the right to request deletion of your personal data. You can
          exercise this right by clearing your browser cookies and opting out of
          Google Analytics. We can also request deletion of your data from
          Google Analytics on your behalf.
        </Paragraph>

        <h3 style={subheadingStyle}>
          6.4 Right to Restrict Processing (Article 18)
        </h3>
        <Paragraph>
          You may request that we restrict processing of your data. This can be
          achieved by opting out of analytics as described in Section 4.
        </Paragraph>

        <h3 style={subheadingStyle}>
          6.5 Right to Data Portability (Article 20)
        </h3>
        <Paragraph>
          You have the right to receive your personal data in a structured,
          commonly used, and machine-readable format. Given the anonymized
          nature of our data collection, this right is of limited applicability.
        </Paragraph>

        <h3 style={subheadingStyle}>6.6 Right to Object (Article 21)</h3>
        <Paragraph>
          You have the right to object to the processing of your personal data
          based on legitimate interest. To exercise this right, opt out of
          Google Analytics using the browser add-on or cookie settings.
        </Paragraph>

        <h3 style={subheadingStyle}>6.7 Right to Lodge a Complaint</h3>
        <Paragraph>
          You have the right to lodge a complaint with your local data
          protection supervisory authority if you believe our processing of your
          personal data infringes the GDPR.
        </Paragraph>

        <WarningBox title="Exercising Your Rights">
          To exercise any of these rights, please contact us via the channels
          listed in the Contact section. We will respond within 30 days as
          required by GDPR.
        </WarningBox>
      </div>

      {/* 7. Legal Basis */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>7. Legal Basis for Processing</h2>
        <Paragraph>
          Under GDPR Article 6, our legal basis for processing analytics data is{" "}
          <strong>legitimate interest</strong> (Article 6(1)(f)) — specifically,
          our interest in understanding how visitors use the Site to improve
          content and user experience. We have conducted a Legitimate Interest
          Assessment and determined that this processing does not override your
          rights and freedoms, given:
        </Paragraph>
        <ul style={listStyle}>
          <li>All data is anonymized and aggregated.</li>
          <li>No personal identifiers are collected.</li>
          <li>You can easily opt out at any time.</li>
          <li>The processing is limited to analytics purposes only.</li>
        </ul>
      </div>

      {/* 8. International Transfers */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>8. International Data Transfers</h2>
        <Paragraph>
          Google Analytics may process data outside the EEA. Google relies on
          Standard Contractual Clauses (SCCs) and the EU-U.S. Data Privacy
          Framework as legal mechanisms for international data transfers. For
          more information, see{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--tf-color-primary-light)" }}
          >
            Google&apos;s Privacy Policy
          </a>
          .
        </Paragraph>
      </div>

      {/* 9. Data Security */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>9. Data Security</h2>
        <Paragraph>
          The Site is served as static HTML over HTTPS. We do not operate
          databases, user accounts, or backend servers that store personal data.
          Analytics data is secured by Google&apos;s infrastructure in
          accordance with their security certifications (ISO 27001, SOC 2).
        </Paragraph>
      </div>

      {/* 10. Children */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>10. Children&apos;s Privacy</h2>
        <Paragraph>
          The Site is not directed at children under 16 years of age. We do not
          knowingly collect personal data from children. If you believe a child
          has provided us with personal data, please contact us and we will
          promptly delete it.
        </Paragraph>
      </div>

      {/* 11. Third-Party Links */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>11. Third-Party Links</h2>
        <Paragraph>
          The Site contains links to external websites (GitHub, YouTube, social
          media platforms). We are not responsible for the privacy practices of
          these third-party sites. We encourage you to review their privacy
          policies.
        </Paragraph>
      </div>

      {/* 12. Changes */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>12. Changes to This Policy</h2>
        <Paragraph>
          We may update this Privacy Policy to reflect changes in our practices
          or for legal, operational, or regulatory reasons. The updated policy
          will be posted on this page with a revised effective date. Material
          changes will be noted at the top of the policy.
        </Paragraph>
      </div>

      {/* 13. Contact */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>13. Contact</h2>
        <Paragraph>
          For privacy-related questions or to exercise your data rights, please
          reach out via our social channels listed on the Site or open an issue
          on our GitHub repository.
        </Paragraph>
      </div>

      <NoteBox title="Last Updated">
        This Privacy Policy was last updated on February 26, 2026.
      </NoteBox>
    </TutorialLayout>
  );
}
