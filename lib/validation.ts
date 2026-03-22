const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Spam patterns often use many dot-separated segments (e.g. u.lag.ege.tus.u.00@gmail.com)
const MAX_LOCAL_DOTS = 3

/**
 * Validates an email address with stricter rules to reduce spam submissions.
 *
 * In addition to the basic format check, this rejects:
 * - Leading or trailing dots in the local part (e.g. `.user@example.com`)
 * - Consecutive dots anywhere in the local part (e.g. `user..name@example.com`)
 * - More than 3 dots in the local part (e.g. `u.lag.ege.tus.u.00@gmail.com`)
 */
export function isValidEmail(email: string): boolean {
  if (!EMAIL_REGEX.test(email)) return false

  const local = email.split("@")[0] ?? ""

  if (local.startsWith(".") || local.endsWith(".")) return false
  if (local.includes("..")) return false
  if ((local.match(/\./g) ?? []).length > MAX_LOCAL_DOTS) return false

  return true
}
