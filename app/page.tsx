"use client";
import { useWalletConnection } from "@solana/react-hooks";
import { VaultCard } from "./components/vault-card";
import { Hero } from "./components/hero";

export default function Home() {
  const { connectors, connect, disconnect, wallet, status } =
    useWalletConnection();

  const address = wallet?.account.address.toString();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <Hero />

      <main className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16">
        <section className="w-full max-w-3xl space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <p className="text-lg font-semibold">Wallet connection</p>
              <p className="text-sm text-gray-400">
                Pick any discovered connector and manage connect / disconnect in
                one spot.
              </p>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">
              {status === "connected" ? "Connected" : "Not connected"}
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => connect(connector.id)}
                disabled={status === "connecting"}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-left text-sm font-medium transition hover:-translate-y-0.5 hover:border-blue-500/50 hover:shadow-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="flex flex-col">
                  <span className="text-base text-white">{connector.name}</span>
                  <span className="text-xs text-gray-400">
                    {status === "connecting"
                      ? "Connecting…"
                      : status === "connected" &&
                        wallet?.connector.id === connector.id
                        ? "Active"
                        : "Tap to connect"}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="h-2.5 w-2.5 rounded-full bg-white/20 transition group-hover:bg-blue-500"
                />
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 text-sm">
            <span className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs text-gray-300">
              {address ?? "No wallet connected"}
            </span>
            <button
              onClick={() => disconnect()}
              disabled={status !== "connected"}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-medium text-white transition hover:-translate-y-0.5 hover:bg-red-500/10 hover:text-red-400 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            >
              Disconnect
            </button>
          </div>
        </section>

        {/* Vault Program Section */}
        <VaultCard />
      </main>
    </div>
  );
}
