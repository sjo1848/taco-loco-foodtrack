import { menuSettingsInputSchema, type MenuSettingsInput } from "@/modules/catalog/schemas";
import { settingsRepository } from "@/modules/settings/repository";

export const settingsService = {
  get: () => settingsRepository.get(),
  update(input: unknown) {
    return settingsRepository.upsert(menuSettingsInputSchema.parse(input));
  },
};

export function normalizeWhatsAppUrl(phone: string, message: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export type PublicSettings = Pick<MenuSettingsInput, "businessName" | "whatsappPhone" | "whatsappMessage" | "currency">;
