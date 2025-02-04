import { cn } from "@/lib/utils"

interface SizeFilterProps {
  selectedSizes: string[]
  onChange: (sizes: string[]) => void
}

const SIZES = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
]

export function SizeFilter({ selectedSizes, onChange }: SizeFilterProps) {
  const toggleSize = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size]
    onChange(newSizes)
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Size</h3>
      <div className="grid grid-cols-2 gap-2">
        {SIZES.map((size) => (
          <button
            key={size}
            onClick={() => toggleSize(size)}
            className={cn(
              "px-3 py-1 text-sm border rounded-full",
              selectedSizes.includes(size)
                ? "bg-black text-white border-black"
                : "border-gray-200 hover:border-black"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}

