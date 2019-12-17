// import io from 'socket.io-client'
// import feathers, { FeathersClient } from '@feathersjs/client'
// import socketio from '@feathersjs/socketio-client'
// import auth from '@feathersjs/authentication-client'

// const socket = io('http://localhost:3030')
// const client: FeathersClient = feathers()
// client.configure(feathers.socketio(socket))
// client.configure(feathers.authentication({
//   storage: window.localStorage
// }))
// console.log(feathers, client)
// export default client


import io from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'

const socket = io('http://localhost:3030')

const client = feathers()

client.configure(socketio(socket))

client.configure(auth())

export default client