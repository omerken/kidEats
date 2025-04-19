import React, { useState } from "react";
import styles from "./form-example.module.css";
import { Input } from "@/components/ui/input/input";
import { Button } from "@/components/ui/button/button";
import { Checkbox } from "@/components/ui/checkbox/checkbox";
import { Label } from "@/components/ui/label/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";

export function FormExample() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "",
    bio: "",
    notifications: false,
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    role: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));

    // Clear error when user selects
    if (errors.role) {
      setErrors((prev) => ({ ...prev, role: "" }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, notifications: checked }));
  };

  const validateForm = () => {
    const newErrors = {
      username: "",
      email: "",
      role: "",
    };

    let isValid = true;

    if (!formData.username || formData.username.length < 2) {
      newErrors.username = "Username must be at least 2 characters.";
      isValid = false;
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.role) {
      newErrors.role = "Please select a role.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form data:", formData);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const handleReset = () => {
    setFormData({
      username: "",
      email: "",
      role: "",
      bio: "",
      notifications: false,
    });
    setErrors({
      username: "",
      email: "",
      role: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Registration Form</h3>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formField}>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="johndoe"
                value={formData.username}
                onChange={handleInputChange}
                className={errors.username ? styles.inputError : ""}
              />
              <div className={styles.helpText}>
                This will be your public display name.
              </div>
              {errors.username && (
                <div className={styles.errorMessage}>{errors.username}</div>
              )}
            </div>

            <div className={styles.formField}>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? styles.inputError : ""}
              />
              <div className={styles.helpText}>
                We'll never share your email with anyone else.
              </div>
              {errors.email && (
                <div className={styles.errorMessage}>{errors.email}</div>
              )}
            </div>

            <div className={styles.formField}>
              <Label htmlFor="role">Role</Label>
              <Select value={formData.role} onValueChange={handleSelectChange}>
                <SelectTrigger
                  id="role"
                  className={errors.role ? styles.inputError : ""}
                >
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                </SelectContent>
              </Select>
              <div className={styles.helpText}>Select your account role.</div>
              {errors.role && (
                <div className={styles.errorMessage}>{errors.role}</div>
              )}
            </div>

            <div className={styles.formField}>
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                name="bio"
                placeholder="Tell us about yourself"
                className={styles.textarea}
                value={formData.bio}
                onChange={handleInputChange}
              />
              <div className={styles.helpText}>
                A brief description about yourself.
              </div>
            </div>

            <div className={styles.checkboxField}>
              <div className={styles.checkboxWrapper}>
                <Checkbox
                  id="notifications"
                  checked={formData.notifications}
                  onCheckedChange={handleCheckboxChange}
                />
                <div>
                  <Label
                    htmlFor="notifications"
                    className={styles.checkboxLabel}
                  >
                    Email Notifications
                  </Label>
                  <div className={styles.helpText}>
                    Receive updates and newsletters.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formActions}>
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline" onClick={handleReset}>
                Reset
              </Button>
            </div>

            {isSubmitted && (
              <div className={styles.successMessage}>
                Form submitted successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
