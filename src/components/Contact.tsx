import React, { useState } from "react";
import { MapPin, Send, Github, Phone } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    );
    const body = encodeURIComponent(
      `Hi Kidus,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:kidusasrat10@gmail.com?subject=${subject}&body=${body}`;

    // Trigger mail client in a user-gesture friendly way
    const link = document.createElement("a");
    link.href = mailtoLink;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Fallback for browsers that ignore programmatic anchor clicks
    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone ,
      
      title: "Call Me",
      value: "+251 961463044",
      link: "tel:+251961463044",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/kmax11",
      link: "https://github.com/kmax11",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Addis Ababa,Ethiopia",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-black" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Get In <span className="gold-text">Touch</span>
          </h2>
          <div className="gold-divider mx-auto mb-4"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology. Feel free to reach
            out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-center p-4 rounded-lg transition-colors ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg mr-4 ${
                      darkMode ? "bg-white" : "bg-black"
                    }`}
                  >
                    <info.icon
                      size={20}
                      className={darkMode ? "text-black" : "text-white"}
                    />
                  </div>
                  <div>
                    <h4
                      className={`font-medium ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {info.title}
                    </h4>
                    <p
                      className={`${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`p-8 rounded-lg shadow-lg ${
              darkMode
                ? "bg-gray-900 border border-gray-800"
                : "bg-gray-50 border border-gray-200"
            }`}
          >
            <h3
              className={`text-2xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors resize-none ${
                    darkMode
                      ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                  darkMode
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
