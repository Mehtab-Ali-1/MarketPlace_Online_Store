import * as Slider from "@radix-ui/react-slider"

interface PriceFilterProps {
  range: [number, number]
  onChange: (range: [number, number]) => void
}

export function PriceFilter({ range, onChange }: PriceFilterProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Price</h3>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={range}
        max={200}
        min={50}
        step={1}
        onValueChange={onChange as (value: number[]) => void}
      >
        <Slider.Track className="bg-gray-200 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-black rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-black rounded-full hover:bg-gray-900 focus:outline-none"
          aria-label="Min price"
        />
        <Slider.Thumb
          className="block w-5 h-5 bg-black rounded-full hover:bg-gray-900 focus:outline-none"
          aria-label="Max price"
        />
      </Slider.Root>
      <div className="flex justify-between text-sm text-gray-500">
        <span>${range[0]}</span>
        <span>${range[1]}</span>
      </div>
    </div>
  )
}

