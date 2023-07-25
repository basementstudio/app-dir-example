import Link from 'next/link'

import { ClientComponent } from '../components/client-component'

const NotFound = () => {
  return (
    <div>
      <Link href="/">Back home</Link>
      <ClientComponent />
    </div>
  )
}

export default NotFound
