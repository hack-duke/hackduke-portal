import { humanize } from './stringUtils'

export const tagColorMap = {
  'registered': '#EE5A63',
  'accepted': '#1A7790', // grey blue
  'rejected': '#EE5A63', // red
  'confirmed': '#24BAB9', // turquoise
  'waitlisted': '#FEC60D', // yellow
  'attended': '#584AD3' // purple
}

export function tagColorFromRole (role) {
  const tag = tagFromRole(role)
  const color = tagColorMap[tag.toLowerCase()]
  if (color) {
    return color
  }
  return '#415263' // gray black
}

export function tagFromRole (role) {
  return humanize(Object.keys(role)[0])
}

export function topLevelTagFromRole (role) {
  return tagFromRole(role).toLowerCase().split(' ')[0]
}

export const allTopLevelTags = Object.keys(tagColorMap).map(key => key.split(' ')[0])

export function findRoleObjectForTag (tag, roles) {
  for (let i = 0; i < roles.length; i++) {
    if (Object.keys(roles[i])[0].includes(tag)) {
      return Object.values(roles[i])[0]
    }
  }
}
