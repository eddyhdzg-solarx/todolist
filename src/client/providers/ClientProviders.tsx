import { TRPCProvider } from "./tRPCProvider/TRPCProvider";

interface ClientProvidersProps {
  children: React.ReactNode;
  headers: Headers;
}

export function ClientProviders({ children, headers }: ClientProvidersProps) {
  return <TRPCProvider headers={headers}>{children}</TRPCProvider>;
}
