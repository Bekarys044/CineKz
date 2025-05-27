import { X } from "lucide-react";
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Form({ Close }) {
  const [forminfo, setFormInfo] = useState({ email: "", password: "" });
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/aboutUsers", { state: forminfo }); // деректерді жіберу
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-[var(--theme-bg)] flex flex-col gap-4 p-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] shadow rounded'
    >
      <section className='flex justify-end items-center'>
        <X onClick={Close} className='text-[var(--body-text-color)] cursor-pointer' />
      </section>

      <div className="text-2xl font-bold text-center text-[var(--footerhover)]">KazMovie</div>

      <p className="text-center text-[var(--body-text-color)]">Log in with your account</p>

      <div className="w-[90%] mx-auto h-[1px] bg-[var(--body-text-color)]"></div>

      <div className="w-[90%] mx-auto flex flex-col gap-4">
        <label>Email:</label>
        <input
          name="email"
          value={forminfo.email}
          onChange={handleChange}
          type="text"
          className="w-full px-2 py-2 bg-[var(--border-white-color)] border border-[var(--body-text-color)] hover:border-[var(--footerhover)] rounded-md"
        />

        <label>Password:</label>
        <input
          name="password"
          value={forminfo.password}
          onChange={handleChange}
          type="password"
          className="w-full px-2 py-2 bg-[var(--border-white-color)] border border-[var(--body-text-color)] hover:border-[var(--footerhover)] rounded-md"
        />

        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={check}
              onChange={() => setCheck(!check)}
              className="w-4 h-4 cursor-pointer"
            />
            <label className="text-[var(--body-text-color)]">Remember me</label>
          </div>
          <a href="#" className="text-[var(--footerhover)]">Forgot password?</a>
        </div>

        <button
          type='submit'
          className='w-full bg-[var(--footerhover)] hover:bg-[var(--theme-color2)] text-white p-[6px] border border-[var(--body-text-color)] rounded flex items-center justify-center gap-2 mt-2'
        >
          <LogoutIcon className='text-white' />
          <span className="hover:translate-x-1 transition-transform">Sign in</span>
        </button>
      </div>
    </form>
  );
}

export default Form;
