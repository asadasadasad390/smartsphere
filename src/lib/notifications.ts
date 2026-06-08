export interface EmailPayload {
  to: string;
  subject: string;
  body: string;
}

export class NotificationService {
  /**
   * Stub for sending emails via EmailJS or SMTP
   */
  async sendEmail(payload: EmailPayload): Promise<boolean> {
    console.log(`[NotificationService] Sending email to ${payload.to}...`);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    console.log(`[NotificationService] Email sent successfully.`);
    return true;
  }

  /**
   * System notification logic for dashboard alerts
   */
  async sendAlert(userId: string, message: string): Promise<void> {
    console.log(`[NotificationService] New Alert for ${userId}: ${message}`);
    // In a real app, this would save to a notifications table in Supabase
  }
}

export const notifier = new NotificationService();
