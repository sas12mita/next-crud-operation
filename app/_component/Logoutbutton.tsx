"use client";

export default function LogoutButton() {
  return (
    <button
      onClick={() => alert("Logged out!")}
      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
}
