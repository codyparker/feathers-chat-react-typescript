type Message = {
  _id: string,
  text: string,
  user: User,
  createdAt: number,
}

type User = {
  _id: string,
  email: string,
  password: string,
  githubId: string,
  avatar: string,
}