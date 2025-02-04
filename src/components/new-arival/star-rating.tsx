import { Star } from 'lucide-react'

interface StarRatingProps {
  rating: number
  count?: number
}

export function StarRating({ rating, count }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-muted text-muted-foreground"
            }`}
          />
        ))}
      </div>
      {count && <span className="text-sm text-muted-foreground">({count})</span>}
    </div>
  )
}

