"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Image from "next/image";

interface AccessContextType {
  hasAccess: boolean;
  unlock: (password: string) => boolean;
  logout: () => void;
}

const AccessContext = createContext<AccessContextType | null>(null);

const STORAGE_KEY = "rla_access_granted";
const ACCESS_PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD || "preview2025";

export function useAccess() {
  const context = useContext(AccessContext);
  if (!context) {
    throw new Error("useAccess must be used within AccessProvider");
  }
  return context;
}

function ComingSoonPage({ onUnlock }: { onUnlock: (password: string) => boolean }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPasswordField, setShowPasswordField] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onUnlock(password)) {
      setError("");
    } else {
      setError("Incorrect password");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="relative h-16 w-64 mx-auto mb-12">
          <Image
            src="/assets/img/logo-main.png"
            alt="Richards, Lathrop & Associates"
            fill
            sizes="256px"
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-5xl text-navy mb-6">
          Coming Soon
        </h1>

        <p className="text-lg text-navy/70 mb-8 font-sans">
          We&apos;re putting the finishing touches on something special.
          Our new website will be launching soon.
        </p>

        <div className="border-t border-navy/10 pt-8">
          <p className="text-sm text-navy/50 mb-4 font-sans">
            For inquiries, please contact us at
          </p>
          <a
            href="mailto:info@richardslathrop.com"
            className="text-gold hover:text-navy transition-colors font-medium"
          >
            info@richardslathrop.com
          </a>
        </div>

        {!showPasswordField ? (
          <button
            onClick={() => setShowPasswordField(true)}
            className="mt-12 text-xs text-navy/30 hover:text-navy/50 transition-colors font-sans"
          >
            Have a preview code?
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12">
            <div className="flex flex-col sm:flex-row gap-3 max-w-xs mx-auto">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter preview code"
                className="flex-1 px-4 py-2 border border-navy/20 bg-white text-navy text-sm font-sans focus:outline-none focus:border-gold"
                autoFocus
              />
              <button
                type="submit"
                className="px-6 py-2 bg-navy text-white text-sm font-medium hover:bg-gold transition-colors"
              >
                Enter
              </button>
            </div>
            {error && (
              <p className="mt-3 text-red-600 text-sm font-sans">{error}</p>
            )}
          </form>
        )}
      </div>

      <footer className="absolute bottom-8 text-xs text-navy/30 font-sans">
        © {new Date().getFullYear()} Richards, Lathrop & Associates
      </footer>
    </div>
  );
}

export function AccessProvider({ children }: { children: ReactNode }) {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    // Check for password in query string (e.g., ?public=pre1125)
    const urlParams = new URLSearchParams(window.location.search);
    const queryPassword = urlParams.get("public");

    if (queryPassword === ACCESS_PASSWORD) {
      // Valid password in URL - grant access and clean up the URL
      localStorage.setItem(STORAGE_KEY, "true");
      setHasAccess(true);

      // Remove the query param from URL without reload
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, "", newUrl);
      return;
    }

    // Fall back to checking localStorage
    const stored = localStorage.getItem(STORAGE_KEY);
    setHasAccess(stored === "true");
  }, []);

  const unlock = (password: string): boolean => {
    if (password === ACCESS_PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setHasAccess(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setHasAccess(false);
  };

  // Show nothing while checking localStorage (prevents flash)
  if (hasAccess === null) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="relative h-12 w-48">
          <Image
            src="/assets/img/logo-main.png"
            alt="Loading..."
            fill
            sizes="192px"
            className="object-contain animate-pulse"
            priority
          />
        </div>
      </div>
    );
  }

  if (!hasAccess) {
    return <ComingSoonPage onUnlock={unlock} />;
  }

  return (
    <AccessContext.Provider value={{ hasAccess, unlock, logout }}>
      {children}
    </AccessContext.Provider>
  );
}
