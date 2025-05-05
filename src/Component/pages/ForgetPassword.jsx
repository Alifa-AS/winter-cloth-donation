import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase/firebase.config";

const ForgetPassword = () => {
//   const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  //  run when the component first loads
  useEffect(() => {
    document.title = "Forget Password";
    const queryParams = new URLSearchParams(location.search);
    const emailParams = queryParams.get("email");
    if (emailParams) {
      setEmail(emailParams);
    }
  }, [location]);


  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("please provide a valid Email.");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("Reset Password link sent to your Email.");
          window.open("https://mail.google.com/", "_blank");
        })
        .catch((error) => {
          toast.error(error.message || "something Went Wrong!");
        });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-indigo-50">
      <ToastContainer />
      <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
        <h2 className="text-3xl font-bold text-center">Reset Your Password</h2>
        <form onSubmit={handleResetPassword} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
