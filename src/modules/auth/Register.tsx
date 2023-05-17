import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const REGISTER_SCHEMA = yup.object({
    email: yup.string().required("email is required").email("invalid email").trim(),
    password: yup.string().required("password is required"),
}).required();
const REGISTER_INITIALSTATE: { email: string, password: string } = {
    email: "",
    password: "",
}

function Register({ showLogin, setShowLogin }: { showLogin: any, setShowLogin: any }) {
    const { register, handleSubmit, formState: { errors } } = useForm<{ email: string, password: string }>({
        resolver: yupResolver(REGISTER_SCHEMA),
        defaultValues: REGISTER_INITIALSTATE,
    }
    );

    const onSubmit = (data: any, e: any) => console.log(data, e);
    const onError = (error: any, e: any) => console.log(error, e);
    return (
        <div id="Register" className={` fixed z-20 bg-[#fff] w-[300px] h-full transition-all duration-300 top-0 ${showLogin ? 'right-0 ' : '-right-[300px]'}`}>
            <div className=" heading flex justify-between bg-[#000] text-[#fff] mb-[20px] px-[20px] py-[28px] ">
                <h3 className="font-bold">SIGN IN</h3>
                <button onClick={() => setShowLogin(false)} className="close text-[12px] tracking-[0.6px]">CLOSE
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit, onError)}
                className="form mx-[20px] border-b-[#e2e2e2] border-b-[1px]">
                <div className="email flex flex-col mb-[20px]">
                    <label htmlFor="email">Email address <span className="text-[#e01020]">*</span></label>
                    <input className="border-[1px] border-[rgba(129,129,129,.25)]" type="text" id="email" {...register("email")} />
                    {errors.email && <p className="p-1 text-[13px] font-light  text-orange-500">{errors.email.message}</p>}

                </div>
                <div className="password mb-[20px]">
                    <div className="email flex flex-col">
                        <label htmlFor="password">Password <span className="text-[#e01020]">*</span></label>
                        <input className="border-[1px] border-[rgba(129,129,129,.25)]" type="password" id="password" {...register("password")} />
                        {errors.password && <p className="p-1 text-[13px] font-light  text-orange-500">{errors.password.message}</p>}
                    </div>
                </div>
                <p className="mb-[10px]">Lost your password?</p>
                <button className="w-full border-[#000] border-[2px] mt-[10px] mb-[20px] py-[10px] px-[20px] hover:bg-black hover:text-white duration-[350ms] " type="submit" >LOGIN</button>
            </form>
            <div className="register-question m-[20px]">
            </div>
        </div>
    );
}

export default Register;