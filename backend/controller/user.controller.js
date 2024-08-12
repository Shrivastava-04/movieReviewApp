import User from "../modal/user.modal.js";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const createUser = await new User({ name, email, password });
    createUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        name: name,
        email: email,
        password: password,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(400).json({ msg: "User creation failed" });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User do not exist" });
    } else if (user.password != password) {
      return res.status(400).json({ msg: "Password is incorrect" });
    } else {
      res.status(200).json({
        message: "User logged in successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ msg: "User creation failed" });
  }
};
