export function WhatsAppCTA({ href }: { href: string }) {
  return <div className="whatsapp-cta"><a className="whatsapp-cta__button" href={href} rel="noreferrer" target="_blank"><span aria-hidden="true">◉</span><span>Pedir por WhatsApp</span></a></div>;
}
