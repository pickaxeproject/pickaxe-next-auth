// This is an example of how to access a session from an API route
import { getServerSession } from "next-auth/next"
import { authOptions } from "/app/api/auth/[...nextauth]/route"

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  res.json(session)
}
