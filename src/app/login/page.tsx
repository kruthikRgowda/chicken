"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../auth.module.css";

interface Toast {
  id: string;
  type: "success" | "error";
  title: string;
  message: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: "success" | "error", title: string, message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      addToast("error", "Failed to sign in", "Please fill in all fields.");
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      addToast("error", "Invalid email", "Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      addToast(
        "success",
        "Welcome back!",
        "Authentication successful. Redirecting to workspace..."
      );
    }, 1500);
  };

  return (
    <div className={styles.authContainer}>
      {/* Glow backgrounds */}
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>

      {/* Toast Notification Container */}
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${styles.toast} ${
              toast.type === "success" ? styles.toastSuccess : styles.toastError
            }`}
          >
            <div className={styles.toastIcon}>
              {toast.type === "success" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
              )}
            </div>
            <div className={styles.toastContent}>
              <div className={styles.toastTitle}>{toast.title}</div>
              <div className={styles.toastMessage}>{toast.message}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.authWrapper}>
        {/* Left Side: Showcase */}
        <div className={styles.showcaseSide}>
          <div className={styles.brandHeader}>
            <svg
              className={styles.brandLogo}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            <span>Antigravity</span>
          </div>

          <div className={styles.showcaseContent}>
            <span className={styles.showcaseTag}>V2.0 RELEASE</span>
            <h1 className={styles.showcaseTitle}>
              Where ambition meets execution.
            </h1>
            <p className={styles.showcaseDesc}>
              Access a deep-stack coding workspace with unified agent orchestration, high-fidelity browser emulation, and instant builds.
            </p>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>99.9% uptime sandboxed runtimes</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Sub-millisecond hot module reloading</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span>Zero configuration environment variables</span>
              </div>
            </div>
          </div>

          <div className={styles.showcaseFooter}>
            © 2026 Antigravity Inc. All rights reserved.
          </div>
        </div>

        {/* Right Side: Form */}
        <div className={styles.formSide}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Sign in</h2>
            <p className={styles.formSubtitle}>
              New to Antigravity?
              <Link href="/signup" className={styles.formSubtitleLink}>
                Create an account
              </Link>
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className={styles.form}>
            {/* Email field */}
            <div className={styles.inputGroup}>
              <input
                id="login-email"
                type="email"
                className={styles.inputField}
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
              <label htmlFor="login-email" className={styles.inputLabel}>
                Email address
              </label>
            </div>

            {/* Password field */}
            <div className={styles.inputGroup}>
              <div className={styles.passwordWrapper}>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  className={`${styles.inputField} ${styles.passwordInput}`}
                  placeholder=" "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <label htmlFor="login-password" className={styles.inputLabel}>
                  Password
                </label>
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div className={styles.formActions}>
              <label className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  className={styles.checkboxInput}
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
              <a href="#" className={styles.forgotLink} onClick={(e) => {
                e.preventDefault();
                addToast("success", "Password Reset Link Sent", "Check your email for recovery instructions.");
              }}>
                Forgot password?
              </a>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ animation: "spin 1s linear infinite" }}
                  >
                    <style>{`
                      @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                      }
                    `}</style>
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeOpacity="0.25"
                    ></circle>
                    <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
                  </svg>
                  <span>Signing In...</span>
                </>
              ) : (
                <span>Sign In to Your Workspace</span>
              )}
            </button>

            {/* Divider */}
            <div className={styles.divider}>
              <span className={styles.dividerSpan}>or continue with</span>
            </div>

            {/* OAuth buttons */}
            <div className={styles.oauthGrid}>
              <button
                type="button"
                className={styles.oauthButton}
                onClick={() => addToast("success", "Google Login", "Connecting securely to Google...")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5.04c1.66 0 3.2.57 4.38 1.69l3.27-3.27C17.67 1.34 14.99 0 12 0 7.35 0 3.36 2.67 1.42 6.56l3.88 3A7.16 7.16 0 0 1 12 5.04z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.46a5.5 5.5 0 0 1-2.4 3.61l3.72 2.89c2.18-2.01 3.71-4.96 3.71-8.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.3 14.44a7.12 7.12 0 0 1 0-4.88l-3.88-3A11.96 11.96 0 0 0 0 12c0 2.01.5 3.9 1.42 5.56l3.88-3.12z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.97-1.07 7.96-2.91l-3.72-2.89a7.18 7.18 0 0 1-4.24 1.2c-3.79 0-7.01-2.56-8.16-6l-3.88 3A11.96 11.96 0 0 0 12 24z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>
              <button
                type="button"
                className={styles.oauthButton}
                onClick={() => addToast("success", "GitHub Login", "Connecting securely to GitHub...")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
                <span>Sign in with GitHub</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
