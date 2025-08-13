import { Inngest } from "inngest"

export const inngest = new Inngest({ 
  id: "lovable-clone",
  signingKey: process.env.INNGEST_SIGNING_KEY,
})
