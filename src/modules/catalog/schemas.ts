import { z } from "zod";

const text = z.string().trim().min(1);

export const categoryInputSchema = z.object({
  name: text.max(120),
  slug: z.string().trim().min(1).max(140).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  active: z.boolean().default(true),
  sortOrder: z.number().int().min(0).default(0),
});

export const productInputSchema = z.object({
  categoryId: z.uuid(),
  name: text.max(160),
  description: z.string().trim().max(1000).nullable().optional(),
  priceAmount: z.number().int().nonnegative(),
  imageKey: z.string().trim().max(500).nullable().optional(),
  imageAlt: z.string().trim().max(160).nullable().optional(),
  available: z.boolean().default(true),
  published: z.boolean().default(true),
  featured: z.boolean().default(false),
  sortOrder: z.number().int().min(0).default(0),
});

export const menuSettingsInputSchema = z.object({
  businessName: text.max(160),
  whatsappPhone: z.string().trim().regex(/^\+?[0-9]{8,16}$/),
  whatsappMessage: text.max(500),
  currency: z.literal("ARS").default("ARS"),
});

export type CategoryInput = z.infer<typeof categoryInputSchema>;
export type ProductInput = z.infer<typeof productInputSchema>;
export type MenuSettingsInput = z.infer<typeof menuSettingsInputSchema>;
