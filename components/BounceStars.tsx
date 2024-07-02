import { Star, StarHalf } from 'lucide-react'

export default function BounceStars() {
  return (

    <div className="flex items-center justify-center my-5 text-primary dark:text-orange-300">
      <Star className='animate-bounce transition-all rounded-full' />
      <Star className='animate-bounce transition-all rounded-full delay-150' />
      <Star className='animate-bounce transition-all rounded-full delay-300' />
      <Star className='animate-bounce transition-all rounded-full delay-500' />
      <Star className='animate-bounce transition-all rounded-full delay-700' />
    </div>
  )
}
