import { BaseService } from "./common/base-service";
import { LoginInput } from "@/lib/validations/auth";

class AuthService extends BaseService {
  async login(data: LoginInput) {
    return this.post("/auth/login", data);
  }

  async logout() {
    return this.post("/auth/logout");
  }

  async register(data: LoginInput) {
    return this.post("/auth/register", data);
  }

  async refreshToken() {
    return this.post("/auth/refresh");
  }
}

export const authService = new AuthService();

