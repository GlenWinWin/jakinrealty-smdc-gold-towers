"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultUnit?: string;
}

function ModalContent({ isOpen, onClose, defaultUnit }: LeadCaptureModalProps) {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    phone: "",
    propertyName: "SMDC Gold Towers",
    targetUnitType: defaultUnit || "1-Bedroom RESO (Popular)",
    preferredFinancing: "Bank Financing",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; msg: string }>({
    type: null,
    msg: "",
  });

  // Dynamic pURL Pre-Fill
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      email: searchParams.get("email") || prev.email,
      companyName: searchParams.get("company") || searchParams.get("name") || prev.companyName,
      phone: searchParams.get("phone") || prev.phone,
      targetUnitType: defaultUnit || prev.targetUnitType,
    }));
  }, [searchParams, defaultUnit]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: null, msg: "" });

    if (!formData.email.trim()) {
      setStatus({ type: "error", msg: "Please provide a valid email address." });
      return;
    }

    if (!formData.companyName.trim()) {
      setStatus({ type: "error", msg: "Please provide your name or company name." });
      return;
    }

    if (!formData.phone.trim()) {
      setStatus({ type: "error", msg: "Please provide your contact number." });
      return;
    }

    setLoading(true);

    const payload = {
      email: formData.email.trim(),
      companyName: formData.companyName.trim(),
      phone: formData.phone.trim(),
      propertyName: formData.propertyName.trim(),
      targetUnitType: formData.targetUnitType.trim(),
      preferredFinancing: formData.preferredFinancing,
      source: "new-lead-website",
    };

    try {
      const res = await fetch("https://email-blast-automated.vercel.app/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (res.status === 200 || res.status === 201) {
        setStatus({
          type: "success",
          msg: "Executive Brief dispatched! Check your email inbox.",
        });
        setTimeout(() => onClose(), 2500);
      } else {
        setStatus({
          type: "error",
          msg: data.error || data.message || "Failed to submit. Please check your details.",
        });
      }
    } catch {
      setStatus({ type: "error", msg: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#F5F2EB] p-7 text-[#0B1F3A] shadow-2xl border border-[#C59B27]/40">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl font-bold text-gray-500 hover:text-black leading-none"
        >
          &times;
        </button>

        <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-[#0B1F3A]">
          Claim Project Brief & Pricing
        </h3>
        <p className="mt-1 text-xs text-gray-600">SMDC Gold Towers RESO • Direct Central Verification</p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 text-left">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider">
              Corporate / Personal Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#C59B27]"
              placeholder="lead@company.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider">
                Name / Company <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#C59B27]"
                placeholder="Enterprise Corp"
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-1 w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#C59B27]"
                placeholder="+63917XXXXXXX"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider">Target Unit</label>
              <select
                value={formData.targetUnitType}
                onChange={(e) => setFormData({ ...formData, targetUnitType: e.target.value })}
                className="mt-1 w-full rounded border border-gray-300 bg-white px-2 py-2 text-xs outline-none focus:border-[#C59B27]"
              >
                <option value="Studio RESO">Studio RESO</option>
                <option value="1-Bedroom RESO (Popular)">1-Bedroom RESO</option>
                <option value="1-BR End Corner RESO">1-BR End Corner RESO</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider">Financing Scheme</label>
              <select
                value={formData.preferredFinancing}
                onChange={(e) => setFormData({ ...formData, preferredFinancing: e.target.value })}
                className="mt-1 w-full rounded border border-gray-300 bg-white px-2 py-2 text-xs outline-none focus:border-[#C59B27]"
              >
                <option value="Bank Financing">Bank Financing</option>
                <option value="In-House Financing">In-House Financing</option>
                <option value="Cash Payment">Cash Payment</option>
              </select>
            </div>
          </div>

          {status.msg && (
            <div
              className={`rounded p-2.5 text-xs font-semibold ${
                status.type === "success"
                  ? "border border-green-300 bg-green-100 text-green-800"
                  : "border border-red-300 bg-red-100 text-red-800"
              }`}
            >
              {status.msg}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-[#C59B27] py-3 font-serif text-xs font-bold uppercase tracking-wider text-[#0B1F3A] hover:bg-[#DFB743] transition disabled:opacity-50"
          >
            {loading ? "Sending Payload..." : "Confirm & Send Brief"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function LeadCaptureModal(props: LeadCaptureModalProps) {
  return (
    <Suspense fallback={null}>
      <ModalContent {...props} />
    </Suspense>
  );
}