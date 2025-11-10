const { EMAIL, PASSWORD } = process.env;
if (!EMAIL || !PASSWORD) {
  throw new Error("Missing EMAIL or PASSWORD in environment variables");
}

interface LoginData {
  email: string;
  password: string;
  wrongEmail: string;
  wrongPassword: string;
}

const loginData: LoginData = {
  email: EMAIL,
  password: PASSWORD,
  wrongEmail: "n/a",
  wrongPassword: "n/a",
};

export default loginData;
