import cookie from "cookie";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.USER_NAME &&
      password === process.env.PASSWORD
    ) {
      res.setHeaders(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("Success");
    } else {
      res.status(400).json("Invalid Credentials");
    }
  }
};
export default handler;
