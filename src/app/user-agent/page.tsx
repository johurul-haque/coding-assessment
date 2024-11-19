import { UserAgent } from "@/views/userAgent";
import { headers } from 'next/headers';

export default async function UserAgentRoot() {
  const userAgent = headers().get('user-agent');

  return <UserAgent userAgent={userAgent} />;
};
