import { humanize } from './stringUtils'

export const tagColorMap = {
  'registered': '#1AB6F6', // bright blue
  'accepted': '#1AB6F6', // bright blue
  'rejected': '#FF6D78', // red
  'confirmed': '#24BAB9', // turquoise
  'waitlisted': '#21E1C9', // green
  'attended': '#584AD3' // purple
}

export function tagColorFromRole (role) {
  const color = tagColorMap[role.toLowerCase()]
  if (color) {
    return color
  }
  return '#415263' // gray black
}
