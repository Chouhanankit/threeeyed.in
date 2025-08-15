const PrivacyPolicy = () => {
  return (
    <div className="bg-white max-w-full lg:pt-35 pt-24  md:pt-28 py-16 text-gray-800 lg:px-10 px-4  mx-auto">
      <h1 className="lg:text-4xl text-3xl font-bold mb-8 text-[#EA7900] border-b border-gray-200 pb-2">
        Privacy & Cookie Policy
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#EA7900] mb-3">
          1. Introduction
        </h2>
        <p className="leading-relaxed">
          At <strong>Three-Eyed Limited</strong>, we respect your privacy. This
          policy explains how we collect, use, and protect your data when you
          visit our website or use our web development and marketing services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#EA7900] mb-3">
          2. Information We Collect
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Name, email, phone, company name</li>
          <li>Device and browser information</li>
          <li>Pages visited, time spent, referring URLs</li>
          <li>Form data (inquiries, applications, etc.)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#EA7900] mb-3">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>To respond to inquiries</li>
          <li>To provide and enhance our services</li>
          <li>To send marketing emails (only if subscribed)</li>
          <li>To analyze usage and improve UX</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#EA7900] mb-3">
          4. Cookie Policy
        </h2>
        <p className="mb-2">
          We use cookies to improve your experience. Cookies are small files
          stored on your device. Types include:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            <strong>Essential:</strong> Required for basic site functionality
          </li>
          <li>
            <strong>Analytics:</strong> Help us understand usage
          </li>
          <li>
            <strong>Marketing:</strong> Help deliver personalized ads
          </li>
        </ul>
        <p className="mt-3">
          Manage your cookies via the{" "}
          <span className="text-[#EA7900] font-medium">
            “Cookie Preferences”
          </span>{" "}
          option in our footer.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#EA7900] mb-3">
          5. Data Sharing & Security
        </h2>
        <p>
          We never sell your data. We may work with trusted third-party
          providers under strict confidentiality. We use modern security
          practices to protect your information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#EA7900] mb-3">
          6. Your Rights
        </h2>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Request your data</li>
          <li>Correct or delete data</li>
          <li>Withdraw consent</li>
          <li>Request a data copy</li>
        </ul>
        <p className="mt-2">
          Contact us at{" "}
          <a
            href="mailto:threeeyed.om@gmail.com"
            className="text-[#EA7900] underline"
          >
            threeeyed.om@gmail.com
          </a>{" "}
          for any rights requests.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-[#EA7900] mb-3">
          7. Updates
        </h2>
        <p>
          This policy may change over time. We’ll update this page with any
          revisions. Last updated: <strong>May 26, 2025</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#EA7900] mb-3">
          8. Contact
        </h2>
        <p>
          <strong>Three-Eyed Pvt. Ltd</strong>
          <br />
          Email:{" "}
          <a
            href="mailto:threeeyed.om@gmail.com"
            className="text-[#EA7900] underline"
          >
            threeeyed.om@gmail.com
          </a>
          <br />
          Location: Om Gurudev Plaza, Scheme No 54, Indore, Madhya Pradesh
          452010
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
