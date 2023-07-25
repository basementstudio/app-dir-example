'use client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const ClientComponent = () => {
  const router = useRouter()

  useEffect(() => {
    console.log('ClientComponent mounted', router)
  })
  return <div>A client component</div>
}
