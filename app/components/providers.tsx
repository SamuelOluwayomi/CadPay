"use client";

import { SolanaProvider } from "@solana/react-hooks";
import { PropsWithChildren } from "react";
import { CivicAuthProvider } from "@civic/auth/react";

import { autoDiscover, createClient } from "@solana/client";

const client = createClient({
  endpoint: "https://api.devnet.solana.com",
  walletConnectors: autoDiscover(),
});

export function Providers({ children }: PropsWithChildren) {
  return (
    <CivicAuthProvider clientId="96ad1d25-b994-4331-aece-adea4bcc7b45">
      <SolanaProvider client={client}>{children}</SolanaProvider>
    </CivicAuthProvider>
  );
}
