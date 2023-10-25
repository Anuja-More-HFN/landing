import React from "react";
import Link from "next/link";

function MenuItems() {
  const menuItemsData = [
    { id: 1, text: "HOME", href: "/" },
    { id: 2, text: "EVENTS", href: "/events" },
    { id: 3, text: "CONTACT", href: "/contact" },
    { id: 4, text: "ABOUT US", href: "/about" },
  ];

  return (
    <div className="menu_wrapper d-flex align-items-center">
      <ul className="list-unstyled d-flex align-items-center">
        {menuItemsData.map((item) => (
          <li key={item.id} className="mx-5">
            <Link href={item.href} className="text-decoration-none text-style">
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuItems;
