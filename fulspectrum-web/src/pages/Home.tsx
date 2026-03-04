import { useEffect, useState } from "react";
import { env } from "../config/env";
import type { PingResponse } from "../types/api";

type PingState = PingResponse | { error: string } | null;

export default function Home() {
  const [ping, setPing] = useState<PingState>(null);

  useEffect(() => {
    fetch(`${env.API_BASE_URL}/api/v1/ping`)
      .then((r) => r.json() as Promise<PingResponse>)
      .then(setPing)
      .catch((e) => setPing({ error: String(e) }));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">FulSpectrum</h1>

      <p className="mt-2 text-sm opacity-80">
        API: <span className="font-mono">{env.API_BASE_URL}</span>
      </p>

      <pre className="mt-4 text-xs border p-3 rounded-md overflow-auto">
        {JSON.stringify(ping, null, 2)}
      </pre>
    </div>
  );
}