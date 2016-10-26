export const statusColorMap = {
  'registered': '#FD44AB', // turquoise
  'accepted': '#1AB6F6', // bright blue
  'rejected': '#FF6D78', // red
  'confirmed': '#21E1C9', // turquoise
  'waitlisted': '#F4DC4D', // yellow
  'attended': '#70338B' // purple
}

export const statusMessageMap = {
  'registered': 'Thanks for registering for HackDuke! Please check back later for your status. Good luck!',
  'accepted': 'Congratulations! You’ve been accepted to HackDuke! Please confirm ',
  'rejected': 'Unfortunately, we were unable to offer you a spot at HackDuke this year. Thank you for your interest, and we hope to hear from you next year. ',
  'confirmed': 'Whoo! Thanks for confirming your attendance. We can’t wait to see you at Duke!',
  'waitlisted': 'Hang tight! You’ve been put on our waitlist. We will send you an email if a spot opens up!',
  'attended': 'Thanks for attending HackDuke! See you next year!'
}

export function statusColorFromRole (status) {
  const color = statusColorMap[status.toLowerCase()]
  if (color) {
    return color
  }
  return '#415263' // gray black
}

export function statusMessageFromRole (status) {
  const message = statusMessageMap[status.toLowerCase()]
  if (message) {
    return message
  }
  return 'Thanks for registering for HackDuke! Please check back later for your status. Good luck!'
}
