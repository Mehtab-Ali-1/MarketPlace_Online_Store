import { cn } from "@/lib/utils"

interface CategoryFilterProps {
  selectedCategories: string[]
  onChange: (categories: string[]) => void
}

const CATEGORIES = [
  "T-shirts",
  "Shorts",
  "Shirts",
  "Hoodie",
  "Jeans"
]

export function CategoryFilter({ selectedCategories, onChange }: CategoryFilterProps) {
  const toggleCategory = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]
    onChange(newCategories)
  }

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Categories</h3>
      <div className="space-y-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => toggleCategory(category)}
            className={cn(
              "flex items-center w-full px-2 py-1.5 text-sm rounded-lg",
              selectedCategories.includes(category)
                ? "bg-gray-100"
                : "hover:bg-gray-50"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

