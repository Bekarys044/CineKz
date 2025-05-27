import { useLocation } from "react-router-dom";


function AboutUsers() {
     const location = useLocation();
     const { email, password } = location.state || {};

  return (
    <div className="w-full py-[100px]">
      <div className="w-[80%] mx-auto border border-[var(--footerhover)]">
        <div className="w-full h-[300px] bg-[var(--footerhover)] flex justify-center items-center gap-5">
          <h2 className="text-[20px] font-semibold text-[var(--theme-color2)]">
            User Info
          </h2>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Password:</strong> {password}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsers
