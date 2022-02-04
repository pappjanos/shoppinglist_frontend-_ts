import Service from "../abstract/service";
import Api from "../../../apis/api.json";

class UserService extends Service {
  constructor() {
    super(Api[window.location.host].AUTH_SERVICE_URL);
    /*
    this.api.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.api.interceptors.response.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );*/
  }

  login({ email, password }: { email: string; password: string }) {
    return this.api.post("/login", {
      email,
      password,
    });
  }

  register(user: any) {
    return this.api.post("/register", user);
  }

  sendVerifyEmail(token: string) {
    this.api.defaults.headers.common.Authorization = `Bearer ${token}`;
    return this.api.post("/send-verification-email");
  }

  verifyEmail(token: string) {
    return this.api.post(`/verify-email?token=${token}`);
  }
}

const userService = new UserService();

export default userService;
