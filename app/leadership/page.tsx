import type { Metadata } from 'next'
import LeadershipContent from './leadership-content'

export const metadata: Metadata = {
  title: 'Leadership | JULSA',
  description:
    "Meet the executives, directors, and teams leading the Jimma University Law Students' Association.",
}

export default function LeadershipPage() {
  return <LeadershipContent />
}
