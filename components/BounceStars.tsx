import { Star, StarHalf } from 'lucide-react'

export default function BounceStars() {
  return (
 
          <div className="flex items-center justify-center my-5 text-orange-500">
                                    <Star  className='animate-bounce transition-all'/>
                                    <Star className='animate-bounce transition-all delay-150'/>
                                    <Star className='animate-bounce transition-all delay-300'/>
                                    <Star className='animate-bounce transition-all delay-500'/>
                                    <Star className='animate-bounce transition-all delay-700'/>
                                </div>
 
  )
}


{/* stars  */}
                            
 {/* <p className="text-7xl bg-gradient-to-b from-primary to-neutral-100 bg-clip-text text-transparent font-bold">
          Better Design for 
        </p> */}