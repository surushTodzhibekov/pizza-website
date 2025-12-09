import React, { useEffect } from "react";
import { CheckCircle, X } from "lucide-react";
import { TYPOGRAPHY, SHADOWS } from "../../constants/designTokens";

type ToastProps = {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
};

export const Toast: React.FC<ToastProps> = ({
  message,
  isVisible,
  onClose,
  duration = 3000,
}) => {
  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  // ---------------------------------------------------------------------------
  // render
  // ---------------------------------------------------------------------------
  if (!isVisible) return null;

  return (
    <div
      className="fixed top-24 right-4 sm:right-8 z-[9999] transform transition-all"
      style={{
        animation: "slideInRight 0.3s ease-out",
      }}
    >
      <div
        className="bg-gradient-to-r from-[#1E0C00] to-[#2A1200] rounded-2xl p-4 pr-12 flex items-center gap-3 min-w-[300px] max-w-[400px] border-2 border-[#FF6432]/30"
        style={{
          boxShadow: SHADOWS.cardShadow + ", 0 0 20px rgba(255, 100, 50, 0.3)",
        }}
      >
        {/* --------------------------------------------------------------------------*/}
        {/* Success Icon */}
        {/* --------------------------------------------------------------------------*/}

        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(215deg, #FF6432 0%, #FFA228 100%)",
          }}
        >
          <CheckCircle className="w-6 h-6 text-white" />
        </div>

        {/* --------------------------------------------------------------------------*/}
        {/* Message */}
        {/* --------------------------------------------------------------------------*/}

        <div className="flex-1">
          <p
            className="text-white font-medium"
            style={{
              fontSize: TYPOGRAPHY.fontSize.description,
            }}
          >
            {message}
          </p>
        </div>

        {/* --------------------------------------------------------------------------*/}
        {/* Close Button */}
        {/* --------------------------------------------------------------------------*/}

        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 hover:bg-[#FF6432]/20 rounded-full transition-colors"
        >
          <X size={18} style={{ color: "#FF6432" }} />
        </button>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
