import axios from "@/config/axios.config";
import { AxiosError } from "axios";

export interface MembershipApplication {
  user_id: string;
  membership_level: string;
  sign: string;
  created_at: string;
  updated_at: string;
  status: "pending" | "approved" | "rejected";
  registration_no: string;
  roll_no: string;
  avatar: string;
  title: string;
  first_name: string;
  last_name: string;
  degree: string;
  discipline: string;
  graduation_date: string;
  enrollment_date: string;
}

const fetchMembershipApplications = async (): Promise<
  MembershipApplication[] | undefined
> => {
  try {
    const response = await axios.get("/api/admin/membership-applications");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data;
    }
  }
};

export default fetchMembershipApplications;