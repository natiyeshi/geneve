import Link from "next/link"

interface ExperienceButtonProps {
  label: string
  href: string
  active?: boolean
}

export function ExperienceButton({ label, href, active = false }: ExperienceButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3 border  text-sm font-medium transition-all duration-300 rounded-full group ${active ? 'bg-primary text-white hover:bg-primary/80 border-primary' : 'text-white  hover:bg-white border-white hover:text-[#09163A] '}`}
    >
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </Link>
  )
}
