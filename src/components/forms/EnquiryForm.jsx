
import { useState } from "react";
import { Mail, Phone, Car, Loader2 } from "lucide-react";

const EnquiryForm = ({ title = "Book a Test Drive", variants = [] }) => {
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    // ▶️ TODO: send to Firebase / API, then…
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form
      onSubmit={submit}
      className="w-full max-w-lg p-8 mx-auto shadow-xl rounded-2xl bg-white/70 backdrop-blur-md"
    >
      <h3 className="mb-6 text-2xl font-semibold text-gray-900">{title}</h3>

      <label className="block pb-4">
        <span className="sr-only">Name</span>
        <input
          required
          placeholder="Your Name"
          className="w-full p-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:border-gray-800 focus:ring-0"
        />
      </label>

      <label className="relative block pb-4">
        <Phone className="absolute w-4 h-4 text-gray-500 left-3 top-3" />
        <input
          required
          type="tel"
          placeholder="Phone"
          className="w-full p-3 pl-10 placeholder-gray-500 border border-gray-300 rounded-lg focus:border-gray-800 focus:ring-0"
        />
      </label>

      <label className="relative block pb-4">
        <Mail className="absolute w-4 h-4 text-gray-500 left-3 top-3" />
        <input
          type="email"
          placeholder="Email (optional)"
          className="w-full p-3 pl-10 placeholder-gray-500 border border-gray-300 rounded-lg focus:border-gray-800 focus:ring-0"
        />
      </label>

      {variants.length > 0 && (
        <label className="relative block pb-4">
          <Car className="absolute w-4 h-4 text-gray-500 left-3 top-3" />
          <select
            required
            className="w-full p-3 pl-10 text-gray-700 border border-gray-300 rounded-lg focus:border-gray-800 focus:ring-0"
          >
            <option value="">Select Variant</option>
            {variants.map((v) => (
              <option key={v.variant}>{v.variant}</option>
            ))}
          </select>
        </label>
      )}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-white transition bg-gray-900 rounded-lg shadow-md hover:bg-gray-800 disabled:opacity-50"
      >
        {loading ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : null}
        {loading ? "Sending…" : "Submit"}
      </button>
    </form>
  );
};

export default EnquiryForm;
