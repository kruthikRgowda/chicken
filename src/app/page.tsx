"use client";

import React from "react";
import Link from "next/link";
import styles from "./auth.module.css";

export default function LandingPage() {
  return (
    <div className={styles.authContainer}>
      {/* Pulsing Atmospheric Glow Blobs in the Background */}
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>

      {/* Main Container */}
      <div className={styles.authWrapper} style={{ minHeight: "560px", maxWidth: "800px" }}>
        {/* Showcase / visual side */}
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

          <div className={styles.showcaseContent} style={{ marginTop: "40px" }}>
            <span className={styles.showcaseTag}>Get Started</span>
            <h1 className={styles.showcaseTitle} style={{ fontSize: "2.2rem" }}>
              The Next-Gen Dev Workspace.
            </h1>
            <p className={styles.showcaseDesc}>
              A highly performant sandbox environment for coding, testing, and scaling your web applications with integrated AI assistance.
            </p>
          </div>

          <div className={styles.showcaseFooter}>
            © 2026 Antigravity Inc.
          </div>
        </div>

        {/* Action Panel Side */}
        <div className={styles.formSide} style={{ flex: 1, padding: "48px" }}>
          <div className={styles.formHeader} style={{ marginBottom: "40px" }}>
            <h2 className={styles.formTitle}>Welcome to the Workspace</h2>
            <p className={styles.formSubtitle}>
              Please sign in to access your projects or register a new account.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Link href="/login" style={{ textDecoration: "none" }}>
              <button
                className={styles.submitButton}
                style={{ width: "100%", padding: "16px 20px" }}
              >
                <span>Sign In to Workspace</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </Link>

            <Link href="/signup" style={{ textDecoration: "none" }}>
              <button
                className={styles.oauthButton}
                style={{ width: "100%", padding: "16px 20px", display: "flex", justifyContent: "center", gap: "8px" }}
              >
                <span>Create a New Account</span>
              </button>
            </Link>
          </div>

          <div className={styles.divider} style={{ margin: "28px 0" }}>
            <span className={styles.dividerSpan}>features</span>
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "space-around" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <span style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)" }}>Canary</span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Next.js Core</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <span style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-secondary)" }}>React 19</span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Modern Hooks</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
              <span style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-success)" }}>Pure CSS</span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Fast & Lightweight</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
