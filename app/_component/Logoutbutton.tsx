"use client";

import { logoutAction } from "./actions/auth";

export default function LogoutButton({ onLogout }: { onLogout?: () => void }) {
  const handleLogout = async () => {
    await logoutAction(); // delete server cookie
    if (onLogout) onLogout(); // update client state
    window.location.href = "/login"; // redirect after logout
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 bg-red-600 text-white rounded"
    >
      Logout
    </button>
  );
}
