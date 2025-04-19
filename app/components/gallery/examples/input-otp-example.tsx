import React, { useState } from "react";
import styles from "./input-otp-example.module.css";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp/input-otp";
import { Button } from "@/components/ui/button/button";

export function InputOTPExample() {
  const [value, setValue] = useState("");
  const [shortValue, setShortValue] = useState("");
  const [separatorValue, setSeparatorValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Verification code submitted: ${value}`);
  };

  const handleReset = () => {
    setValue("");
    setShortValue("");
    setSeparatorValue("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Standard OTP Input (6 digits)</h3>
        <div className={styles.otpContainer}>
          <InputOTP
            maxLength={6}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <div className={styles.actions}>
            <Button onClick={handleSubmit} disabled={value.length < 6}>
              Verify Code
            </Button>
          </div>
          {value && (
            <div className={styles.previewText}>Current value: {value}</div>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Short OTP Input (4 digits)</h3>
        <div className={styles.otpContainer}>
          <InputOTP
            maxLength={4}
            value={shortValue}
            onChange={(newValue) => setShortValue(newValue)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>

          {shortValue && (
            <div className={styles.previewText}>
              Current value: {shortValue}
            </div>
          )}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>OTP Input with Separators</h3>
        <div className={styles.otpContainer}>
          <InputOTP
            maxLength={6}
            value={separatorValue}
            onChange={(newValue) => setSeparatorValue(newValue)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSeparator />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSeparator />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          {separatorValue && (
            <div className={styles.previewText}>
              Current value: {separatorValue}
            </div>
          )}
        </div>
      </div>

      <div className={styles.resetContainer}>
        <Button variant="outline" onClick={handleReset}>
          Reset All Examples
        </Button>
      </div>
    </div>
  );
}
