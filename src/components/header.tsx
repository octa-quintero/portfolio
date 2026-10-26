import { navItems, profile } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <a href="#" className="font-semibold">
          {profile.name}
        </a>
        <ul className="hidden gap-6 text-sm text-muted sm:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
