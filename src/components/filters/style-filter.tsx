import { cn } from "@/lib/utils"

interface StyleFilterProps {
  selectedStyles: string[]
  onChange: (styles: string[]) => void
}

const STYLES = ["Casual", "Formal", "Party", "Gym"]

export function StyleFilter({ selectedStyles, onChange }: StyleFilterProps) {
  const toggleStyle = (style: string) => {
    const newStyles = selectedStyles.includes(style)
      ? selectedStyles.filter((s) => s !== style)
      : [...selectedStyles, style]
    onChange(newStyles)
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Dress Style</h3>
      <div className="space-y-2">
        {STYLES.map((style) => (
          <button
            key={style}
            onClick={() => toggleStyle(style)}
            className={cn(
              "flex items-center w-full px-2 py-1.5 text-sm rounded-lg",
              selectedStyles.includes(style)
                ? "bg-gray-100"
                : "hover:bg-gray-50"
            )}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  )
}

