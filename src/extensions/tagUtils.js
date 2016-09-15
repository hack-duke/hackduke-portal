import { humanize } from './stringUtils'

export const tagColorMap = {
  'participant': '#EE5A63',
  'participant accepted': '#1A7790', // grey blue
  'participant rejected': '#EE5A63', // red
  'participant waitlisted': '#FEC60D', // yellow
  'participant confirmed': '#24BAB9', // turquoise
  'mentor': '#584AD3', // purple
  'speaker': '#24A0EC', // blue
  'judge': '#415263' // gray black
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
