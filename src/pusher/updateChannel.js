import Pusher from 'pusher-js'

Pusher.logToConsole = true
const pusher = new Pusher(PUSHER_APP_KEY, {
  encrypted: true
})

export const updateChannel = pusher.subscribe('update_channel')
