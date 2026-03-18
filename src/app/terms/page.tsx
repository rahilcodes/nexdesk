export const metadata = {
  title: 'Terms & Conditions | NEXDESK',
  description: 'Terms and conditions for NEXDESK coworking space in Kondapur.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-white text-black">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none prose-zinc">
          <p className="text-zinc-600 mb-8">
            Welcome to NEXDESK. By using our coworking space and services, you agree to the following terms and conditions. Please read them carefully.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Security Deposit & Billing</h2>
              <ul className="list-disc pl-5 space-y-2 text-zinc-700">
                <li>A 3-month security deposit is mandatory for all dedicated desks, private cabins, and team offices.</li>
                <li>Our billing cycle is strictly monthly. Invoices must be cleared by the 5th of every month.</li>
                <li>There are no refunds on advance payments under any circumstances.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Usage & Availability</h2>
              <ul className="list-disc pl-5 space-y-2 text-zinc-700">
                <li>All workspace usage, including daily passes and hot desks, is subject to availability.</li>
                <li>Free conference room usage is subject to a fair usage policy and must be booked in advance via our front desk.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Conduct & Policies</h2>
              <ul className="list-disc pl-5 space-y-2 text-zinc-700">
                <li>No illegal activities whatsoever are allowed on the premises.</li>
                <li>All members are required to maintain professional conduct at all times to ensure a peaceful environment for everyone.</li>
                <li>Smoking is strictly prohibited inside the indoor premises.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Damages & Rights</h2>
              <ul className="list-disc pl-5 space-y-2 text-zinc-700">
                <li>Any damages to NEXDESK property, furniture, or equipment caused by a member or their guests will be directly chargeable to the member.</li>
                <li>Management rights are reserved. We retain the right to terminate membership without notice for violation of these terms.</li>
              </ul>
            </section>
          </div>

          <p className="text-zinc-500 mt-12 text-sm italic">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </main>
  );
}
