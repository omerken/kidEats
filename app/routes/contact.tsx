import type { Route } from "./+types/contact";
import { useState } from "react";
import { Button } from "../components/ui/button/button";
import { Input } from "../components/ui/input/input";
import { Textarea } from "../components/ui/textarea/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import styles from "./contact.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - KidEats" },
    {
      name: "description",
      content: "Get in touch with KidEats support team for questions about orders, accounts, or feedback",
    },
  ];
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroDescription}>
            We're here to help! Get in touch with our friendly support team for any questions or feedback.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <div className={styles.contactGrid}>
            {/* Contact Form */}
            <Card className={styles.contactForm}>
              <CardHeader>
                <CardTitle className={styles.formTitle}>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={styles.input}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={styles.input}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={styles.input}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={styles.textarea}
                      placeholder="Tell us how we can help..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className={styles.submitButton}>
                    <Send size={16} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className={styles.contactInfo}>
              <Card className={styles.infoCard}>
                <CardHeader>
                  <CardTitle className={styles.infoTitle}>Get in Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our support team
                  </CardDescription>
                </CardHeader>
                <CardContent className={styles.infoContent}>
                  <div className={styles.infoItem}>
                    <Mail className={styles.infoIcon} />
                    <div className={styles.infoDetails}>
                      <h4 className={styles.infoLabel}>Email</h4>
                      <p className={styles.infoValue}>support@kideats.com</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <Phone className={styles.infoIcon} />
                    <div className={styles.infoDetails}>
                      <h4 className={styles.infoLabel}>Phone</h4>
                      <p className={styles.infoValue}>1-800-KID-EATS</p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <MapPin className={styles.infoIcon} />
                    <div className={styles.infoDetails}>
                      <h4 className={styles.infoLabel}>Address</h4>
                      <p className={styles.infoValue}>
                        123 Family Street<br />
                        Kid City, KC 12345
                      </p>
                    </div>
                  </div>

                  <div className={styles.infoItem}>
                    <Clock className={styles.infoIcon} />
                    <div className={styles.infoDetails}>
                      <h4 className={styles.infoLabel}>Support Hours</h4>
                      <p className={styles.infoValue}>
                        Monday - Friday: 8am - 8pm<br />
                        Saturday - Sunday: 10am - 6pm
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.faqCard}>
                <CardHeader>
                  <CardTitle className={styles.faqTitle}>Quick Help</CardTitle>
                  <CardDescription>
                    Common questions and answers
                  </CardDescription>
                </CardHeader>
                <CardContent className={styles.faqContent}>
                  <div className={styles.faqItem}>
                    <h4 className={styles.faqQuestion}>How do I approve my child's order?</h4>
                    <p className={styles.faqAnswer}>
                      Log into your Parent Dashboard to review and approve pending orders.
                    </p>
                  </div>

                  <div className={styles.faqItem}>
                    <h4 className={styles.faqQuestion}>Can I set spending limits?</h4>
                    <p className={styles.faqAnswer}>
                      Yes! Set weekly budgets and track spending in your dashboard.
                    </p>
                  </div>

                  <div className={styles.faqItem}>
                    <h4 className={styles.faqQuestion}>How do food restrictions work?</h4>
                    <p className={styles.faqAnswer}>
                      Block specific foods or categories to match your family's dietary needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
