import { API_URL } from "@/lib/apiConfig";

export interface TripEnquiryPayload {
  name: string;
  email: string;
  phone: string;
  where: string;
  when: string;
  message: string;
  path: string;
  referrer: string;
  language: string;
  timezone: string;
  screen: string;
}

export async function submitTripEnquiry(payload: TripEnquiryPayload): Promise<void> {
  const response = await fetch(`${API_URL}/trip-enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Trip enquiry submission failed with status ${response.status}`);
  }
}
