import { Link, useLocation } from "react-router-dom";

function Item({ to, label, icon }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center flex-1 py-2 ${
        active ? "text-blue-400" : "text-gray-300"
      }`}
    >
      <div className={`w-6 h-6 ${active ? "opacity-100" : "opacity-80"}`}>{icon}</div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}

export default function MobileTabBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur border-t border-blue-500 z-50">
      <div className="flex">
        <Item
          to="/"
          label="Home"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3l8 7h-3v8H7v-8H4l8-7z" />
            </svg>
          }
        />
        <Item
          to="/store"
          label="Store"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 4h10l3 6v2a5 5 0 01-5 5H9a5 5 0 01-5-5V10l3-6zm3 14h4v2h-4v-2z" />
            </svg>
          }
        />
        <Item
          to="/cart"
          label="Cart"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 6h13l-1.5 9H8.5L7 6zm-2 0H3V4h3l2.1 12.6A2 2 0 0010 18h8v2H10a4 4 0 01-3.9-3.2L5 6zM10 22a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          }
        />
        <Item
          to="/dashboard"
          label="Dashboard"
          icon={
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 13h8V3H3v10zm10 8h8V3h-8v18zM3 21h8v-6H3v6z" />
            </svg>
          }
        />
      </div>
    </div>
  );
}
