import { Container } from "@/components/ui/Container";

type FooterProps = {
  rights: string;
};

export function Footer({ rights }: FooterProps) {
  return (
    <footer className="border-t border-[#141417]/8 bg-[#EAE4DA] py-8">
      <Container className="flex flex-col gap-2 text-[0.72rem] uppercase tracking-[0.16em] text-[#625d56] sm:flex-row sm:items-center sm:justify-between">
        <span>{rights}</span>
        <span>© {new Date().getFullYear()}</span>
      </Container>
    </footer>
  );
}
