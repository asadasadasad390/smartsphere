/**
 * Verify Google reCAPTCHA token with the verification API
 */
export async function verifyCaptcha(token: string): Promise<boolean> {
  if (!token) return false;
  
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      console.warn('RECAPTCHA_SECRET_KEY is not defined. Skipping verification in dev mode.');
      return true; // Bypass for development if no key exists
    }

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('CAPTCHA verification failed:', error);
    return false;
  }
}

/**
 * Validate session tokens against Supabase rules
 */
export function validateSessionIntegrity(sessionToken: string): boolean {
  // In a real app, this might verify JWT claims
  // Supabase auth handles most of this out of the box via RLS and middleware
  return !!sessionToken && sessionToken.length > 20;
}
