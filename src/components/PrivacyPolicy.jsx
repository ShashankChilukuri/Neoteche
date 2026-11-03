import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Fresh-Logo.png";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy - GymFlow | Neoteche";
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans [color-scheme:light]">
      {/* Top Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 text-gray-900 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Neoteche logo" className="w-7 h-7 object-contain" />
            <span className="font-bold text-lg tracking-tight">NEOTECHE</span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Document Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        <article className="space-y-10">

          {/* Title & Metadata */}
          <header className="border-b border-gray-200 pb-8 space-y-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Privacy Policy – GymFlow
            </h1>
            <p className="text-lg text-gray-700 font-medium">
              GymFlow – Gym Management and WhatsApp Automation Platform
            </p>

            <div className="pt-2 text-sm text-gray-600 space-y-1 border-t border-gray-100 mt-4">
              <p><strong>Company:</strong> Neoteche – New Wave in Technology</p>
              <p><strong>Website:</strong> <a href="https://www.neoteche.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.neoteche.in</a></p>
              <p><strong>Official Email:</strong> <a href="mailto:support@neoteche.tech" className="text-blue-600 hover:underline">support@neoteche.tech</a></p>
              <p><strong>Contact / Phone:</strong> <a href="tel:+916281308416" className="text-blue-600 hover:underline">+91 62813 08416</a></p>
              <p><strong>Effective Date:</strong> 3 November 2026</p>
              <p><strong>Last Updated:</strong> 3 November 2026</p>
            </div>
          </header>

          {/* Document Body */}
          <div className="text-base text-gray-700 leading-relaxed space-y-8">

            {/* 1. Introduction */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                1. Introduction
              </h2>
              <p>
                Welcome to <strong>GymFlow</strong>, a gym management and WhatsApp automation platform developed, owned, and operated by <strong>Neoteche</strong> ("we", "our", or "us").
              </p>
              <p>
                Neoteche is a technology company providing software solutions, web applications, automation services, and SaaS products to businesses and professionals.
              </p>
              <p>
                We respect your privacy and are committed to protecting the personal information you share with us through GymFlow and its connected services. This Privacy Policy explains how we collect, use, store, process, disclose, and safeguard personal information when gym owners, gym staff, and gym members access or use GymFlow.
              </p>
              <p>
                By accessing or using our services, you acknowledge that you have read and agreed to this Privacy Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                2. Information We Collect
              </h2>
              <p>
                To provide gym management and notification features, GymFlow collects and processes information in the following categories:
              </p>

              <div className="space-y-4 pl-2">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    A. Gym Owner & Administrator Information
                  </h3>
                  <p>When gym owners register and manage their accounts on GymFlow, we collect:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Full Name.</li>
                    <li>Official Email address.</li>
                    <li>Contact phone number / WhatsApp number.</li>
                    <li>Gym or fitness center name, address, and business information.</li>
                    <li>Account login credentials and security tokens.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    B. Gym Member Information (Processed on Behalf of Gym Businesses)
                  </h3>
                  <p>
                    Gym owners input member records into GymFlow to run their facility operations. This information includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Member full name.</li>
                    <li>Mobile phone number.</li>
                    <li>Membership plan, package, and subscription details.</li>
                    <li>Membership commencement date and expiry date.</li>
                    <li>Payment records, payment methods, fees paid, and pending balance.</li>
                    <li>Renewal history and attendance records.</li>
                    <li>Additional member information entered directly by gym staff.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    C. WhatsApp Integration & Delivery Data
                  </h3>
                  <p>When GymFlow sends automated notifications on behalf of a gym, we process:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Connected WhatsApp Business Account identifiers.</li>
                    <li>Sender business phone number details.</li>
                    <li>Integration keys and authorization tokens.</li>
                    <li>Pre-approved message template content and variables.</li>
                    <li>Message dispatch timestamps, delivery receipts, and status logs.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg text-sm text-gray-700">
                <strong>Service Clarification:</strong> GymFlow primarily uses WhatsApp to send outbound administrative notifications, renewal alerts, and payment receipts on behalf of participating gyms. GymFlow is not designed as an inbound customer support chat channel for individual gym members. Gym members should contact their gym management directly for assistance.
              </div>
            </section>

            {/* 3. How We Use Your Information */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                3. How We Use Your Information
              </h2>
              <p>We use collected information solely for genuine business and operational purposes, including:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>To provide, operate, maintain, and support the GymFlow platform.</li>
                <li>To authenticate users, manage permissions, and enforce account security.</li>
                <li>To organize gym membership directories, billing dates, and renewal trackers.</li>
                <li>To dispatch automated WhatsApp notifications (membership expiry reminders, renewal notices, payment confirmations, and welcome messages) on behalf of gyms.</li>
                <li>To maintain accurate service logs, delivery history, and system audit trails.</li>
                <li>To address customer support inquiries, technical issues, and billing requests.</li>
                <li>To monitor application performance, troubleshoot bugs, and improve reliability.</li>
                <li>To detect and prevent fraudulent activities, unauthorized access, and policy violations.</li>
                <li>To comply with statutory, accounting, and legal requirements.</li>
              </ul>
              <p>
                We do not use personal information for any secondary purpose without obtaining appropriate legal basis or consent.
              </p>
            </section>

            {/* 4. WhatsApp Business Platform Integration */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                4. WhatsApp Business Platform Integration
              </h2>
              <p>
                GymFlow integrates with the <strong>WhatsApp Business Platform</strong> (provided by Meta Platforms Inc.) to deliver automated service-related alerts on behalf of gyms.
              </p>
              <p>These automated messages include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Membership renewal reminders prior to expiry.</li>
                <li>Membership expiry notices.</li>
                <li>Payment confirmations and digital receipts.</li>
                <li>Welcome notifications for newly enrolled members.</li>
                <li>Gym schedule updates and operational notices.</li>
              </ul>
              <p>
                <strong>Gym Responsibility:</strong> Participating gym businesses are responsible for verifying that they have lawful permission, explicit consent, or another valid legal ground under applicable regulations to collect member numbers and trigger notifications through GymFlow.
              </p>
              <p className="text-sm text-gray-600">
                All WhatsApp messaging complies with Meta's messaging policies and approved message template standards. We do not control Meta's independent data processing conducted under its own privacy policies.
              </p>
            </section>

            {/* 5. Data Sharing and Third-Party Services */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                5. Data Sharing and Third-Party Services
              </h2>
              <p>
                <strong>We do not sell, rent, or trade personal information to third parties.</strong>
              </p>
              <p>
                We only share personal data with vetted third-party service providers when essential to deliver GymFlow services:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Meta Platforms Inc. (WhatsApp Business Platform):</strong> To transmit approved automated notifications and authenticate business API accounts.
                </li>
                <li>
                  <strong>Hosting and Infrastructure Providers:</strong> Secure cloud servers and database hosts (including Vercel, Hostinger, and managed database clusters) to host the application backend securely.
                </li>
                <li>
                  <strong>Automation Services:</strong> Workflow automation engines (such as n8n) used to trigger notifications according to gym renewal timelines.
                </li>
                <li>
                  <strong>Payment Processors:</strong> PCI-DSS compliant payment gateways where subscription billing is processed.
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                All service providers process information strictly according to contractual obligations, relevant data protection standards, and their published privacy policies.
              </p>
            </section>

            {/* 6. Data Storage and Security */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                6. Data Storage and Security
              </h2>
              <p>
                We take rigorous technical and administrative precautions to safeguard personal data against unauthorized access, destruction, loss, or alteration:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>End-to-end HTTPS encryption for all data transmitted across the web.</li>
                <li>Secure credential hashing and encrypted storage for API keys and tokens.</li>
                <li>Role-based access restrictions limiting internal database access to authorized personnel only.</li>
                <li>Continuous server monitoring, firewalls, and regular security patching.</li>
              </ul>
              <p className="text-sm text-gray-600">
                However, no internet transmission or electronic database can guarantee absolute, 100% security.
              </p>
            </section>

            {/* 7. Data Retention */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                7. Data Retention
              </h2>
              <p>
                We retain personal data only for the duration required to provide GymFlow services, maintain gym owner accounts, satisfy statutory accounting and tax obligations, resolve disputes, and enforce our agreements.
              </p>
              <p>
                When data is no longer necessary for these operational and legal purposes, it is securely deleted or anonymized in accordance with our routine data disposal procedures.
              </p>
            </section>

            {/* 8. Data Deletion and Account Termination */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                8. Data Deletion and Account Termination
              </h2>
              <p>
                Users have the right to request deletion of their personal information and associated records:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>For Gym Owners:</strong> You may request complete account termination and deletion of all business and member records stored in GymFlow by emailing <strong>support@neoteche.tech</strong> or contacting us by phone at <strong>+91 62813 08416</strong>.
                </li>
                <li>
                  <strong>For Gym Members:</strong> Gym members should contact their respective gym management to update, correct, or delete their membership records. If the gym is unreachable, members may contact our privacy desk directly.
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                We review, verify, and fulfill eligible deletion requests within the timeframe mandated by applicable law (typically within 30 days).
              </p>
            </section>

            {/* 9. User Rights and Choices */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                9. User Rights and Choices
              </h2>
              <p>
                Under applicable privacy laws (including India's Digital Personal Data Protection Act, 2023), you may hold the following statutory rights:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>The right to access and obtain a summary of your personal data processed by us.</li>
                <li>The right to request correction or updating of incomplete or inaccurate data.</li>
                <li>The right to request erasure and deletion of your personal data.</li>
                <li>The right to withdraw previously granted consent.</li>
                <li>The right to file a grievance with our designated Grievance Officer.</li>
              </ul>
              <p>
                To exercise any of these rights, please write to us at <strong>support@neoteche.tech</strong>.
              </p>
            </section>

            {/* 10. Cookies and Tracking Technologies */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                10. Cookies and Tracking Technologies
              </h2>
              <p>
                GymFlow uses only essential session cookies and tokens needed to preserve login states, verify user identities, and secure dashboard operations. We do not deploy third-party advertising or cross-site tracking cookies.
              </p>
              <p className="text-sm text-gray-600">
                You can manage or disable cookies via your browser settings. Note that disabling essential cookies may prevent you from logging into the platform.
              </p>
            </section>

            {/* 11. International Data Processing */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                11. International Data Processing
              </h2>
              <p>
                Some of our infrastructure providers (such as Meta API networks) operate globally distributed servers. Where cross-border data routing occurs, we take appropriate steps to verify that data is handled in compliance with applicable data protection requirements.
              </p>
            </section>

            {/* 12. Children's Privacy */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                12. Children's Privacy
              </h2>
              <p>
                GymFlow is an administrative business tool designed for adult gym owners and staff (18 years and older). We do not knowingly collect personal data directly from children. Gym owners are responsible for securing verifiable parental or guardian consent before recording information for minor gym members.
              </p>
            </section>

            {/* 13. Third-Party Websites and Services */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                13. Third-Party Websites and Services
              </h2>
              <p>
                Our platform may contain links to external sites or third-party resources. We have no control over and assume no liability for the content, privacy policies, or practices of external services.
              </p>
            </section>

            {/* 14. Changes to This Privacy Policy */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                14. Changes to This Privacy Policy
              </h2>
              <p>
                We may modify this Privacy Policy from time to time to accommodate changes in our platform, legal requirements, or operational needs. Updated versions will be published on this page with a revised "Last Updated" date.
              </p>
            </section>

            {/* 15. Contact Information and Grievance Requests */}
            <section className="space-y-3 pt-6 border-t border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                15. Contact Information and Grievance Requests
              </h2>
              <p>
                If you have questions, feedback, data deletion requests, or grievances relating to this Privacy Policy or GymFlow, please contact our team:
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm space-y-1.5 mt-3">
                <p><strong>Company:</strong> Neoteche – New Wave in Technology</p>
                <p><strong>Product:</strong> GymFlow (Gym Management & WhatsApp Automation)</p>
                <p><strong>Website:</strong> <a href="https://www.neoteche.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.neoteche.in</a></p>
                <p><strong>Official Email:</strong> <a href="mailto:support@neoteche.tech" className="text-blue-600 hover:underline">support@neoteche.tech</a></p>
                <p><strong>Contact Number:</strong> <a href="tel:+916281308416" className="text-blue-600 hover:underline">+91 62813 08416</a></p>
                <p><strong>Address:</strong> India · Operating Globally</p>
              </div>
            </section>

            {/* 16. Applicable Law */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                16. Applicable Law
              </h2>
              <p>
                This Privacy Policy is governed by and construed under the laws of the Republic of India, including the <strong>Information Technology Act, 2000</strong>, the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, and applicable rules framed thereunder.
              </p>
            </section>

          </div>

          {/* Document Signoff */}
          <footer className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 Neoteche – New Wave in Technology. All Rights Reserved.</p>
            <p className="text-xs text-gray-400 mt-1">GymFlow is a software product developed and operated by Neoteche.</p>
          </footer>

        </article>
      </main>

      {/* Clean Document Footer */}
      <footer className="border-t border-gray-200 py-6 bg-gray-50 text-center text-xs text-gray-500">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Neoteche. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <a href="tel:+916281308416" className="text-gray-600 hover:text-gray-900">+91 62813 08416</a>
            <a href="mailto:support@neoteche.tech" className="text-gray-600 hover:text-gray-900">support@neoteche.tech</a>
          </div>
        </div>
      </footer>
    </div>
  );
}