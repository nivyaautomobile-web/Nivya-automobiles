import { useState } from "react";
import Input from "../ui/input";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    alert("Form submitted!");
    console.log("Submitted Data:", formData);

    // ✅ Reset form after submission
    setFormData({
      email: "",
      phone: "",
      name: "",
      message: "",
    });

    // ✅ Clear any error messages as well
    setErrors({});
  }
};

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>
        <div>
          <Input
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <Input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <textarea
          name="message"
          rows={6}
          placeholder="Message"
          className="w-full px-4 py-3 text-sm bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="px-8 py-3 font-semibold text-white bg-teal-600 rounded-md shadow hover:bg-teal-700"
      >
        Submit
      </button>
    </form>
  );
}
