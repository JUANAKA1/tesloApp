import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "../interfaces/auth.response";

interface Props {
  fullName: string;
  email: string;
  password: string;
}
export const registerAction = async ({
  fullName,
  email,
  password,
}: Props): Promise<AuthResponse> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
      fullName,
      email,
      password,
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
