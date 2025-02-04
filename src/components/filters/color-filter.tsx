import { cn } from "@/lib/utils"

interface ColorFilterProps {
  selectedColors: string[]
  onChange: (colors: string[]) => void
}

const COLORS = [
  { name: "Green", class: "bg-green-500" },
  { name: "Red", class: "bg-red-500" },
  { name: "Yellow", class: "bg-yellow-500" },
  { name: "Orange", class: "bg-orange-500" },
  { name: "Blue", class: "bg-blue-500" },
  { name: "Purple", class: "bg-purple-500" },
  { name: "Pink", class: "bg-pink-500" },
  { name: "White", class: "bg-white border" },
  { name: "Black", class: "bg-black" },
]

export function ColorFilter({ selectedColors, onChange }: ColorFilterProps) {
  const toggleColor = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color]
    onChange(newColors)
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Colors</h3>
      <div className="flex flex-wrap gap-2">
        {COLORS.map((color) => (
          <button
            key={color.name}
            onClick={() => toggleColor(color.name)}
            className={cn(
              "w-8 h-8 rounded-full transition-transform",
              color.class,
              selectedColors.includes(color.name) && "ring-2 ring-black ring-offset-2",
              "hover:scale-110"
            )}
            title={color.name}
          >
            <span className="sr-only">{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

