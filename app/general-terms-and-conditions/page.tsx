import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'General Terms And Conditions - Philip Ghering',
  description: 'View the general terms and conditions for my services as a freelance full-stack Node.js developer. Transparency about liability, payment, intellectual property, and more.',
  robots: 'noindex, nofollow',
}

export default function GeneralTermsAndConditions() {
  return (
    <div className="font-sans text-gray-400 pb-20">
      <header className="max-w-4xl mx-auto p-6 mb-12 mt-6">
        <h1 className="text-3xl font-bold animate-bg-image bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Philip Ghering
        </h1>
      </header>

      <main
        lang="en"
        className="max-w-4xl mx-auto px-6"
      >
        <h2 className="text-2xl font-semibold mb-4">
          General Terms And Conditions
        </h2>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            1. Applicability
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              These terms and conditions apply to all offers, agreements, and assignments carried out by the Contractor, unless expressly agreed otherwise in writing.
            </li>
            <li>
              Deviations from these terms are only valid if confirmed in writing by both parties.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">
            2. Execution of the assignment
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              The Contractor will perform the work to the best of their ability and in accordance with the agreed scope.
            </li>
            <li>
              If, during execution, it becomes clear that modifications are necessary, these will only be implemented after consultation and written approval by the Client.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">3. Delivery and completion</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Deadlines are indicative and never binding, unless explicitly agreed otherwise in writing.
            </li>
            <li>
              After delivery, the Client is responsible for the use and management of the delivered systems and data.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">4. Liability</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              The Contractor is only liable for direct damage that can be demonstrably attributed to a shortcoming on their part.
            </li>
            <li>
              Any liability is limited to the invoice value of the specific assignment.
            </li>
            <li>
              The Contractor shall never be liable for indirect damage such as consequential loss, loss of profit, or data loss.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">5. Payment</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Payment is processed via Tentoo Payroll Services.
            </li>
            <li>
              Invoices must be paid within 14 days of the invoice date, unless agreed otherwise in writing.
            </li>
            <li>
              If the payment term is exceeded, the Contractor may suspend work until payment has been made.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">6. Intellectual property</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              All configurations, scripts, and documents developed or delivered by the Contractor remain the property of the Contractor until full payment has been received.
            </li>
            <li>
              After full payment, the Client obtains a non-exclusive license to use the delivered work indefinitely.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">7. Hosting and third-party services</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              If the Client uses third-party services such as DigitalOcean or S3 storage, the terms and conditions of those providers apply.
            </li>
            <li>
              The Contractor is not liable for downtime, outages, or price changes at external providers.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">8. Force majeure</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              The Contractor is not obliged to fulfill any obligation if prevented from doing so by force majeure.
            </li>
            <li>
              Force majeure includes, but is not limited to: hosting provider outages, internet connection failures, and circumstances beyond the Contractor’s control.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">9. Termination</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Both parties may terminate the agreement early with a notice period of 14 days, unless otherwise agreed.
            </li>
            <li>
              In the event of early termination, work already performed will be invoiced proportionally.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">10. Governing law</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              This agreement is governed by the laws of the Netherlands.
            </li>
            <li>
              Any disputes will be submitted to the competent court in the district where the Contractor is established.
            </li>
          </ol>
        </section>

        <p className="text-sm text-gray-500 mt-12">
          Last revision: 26 August 2025
        </p>
      </main>
    </div>
  );
}
