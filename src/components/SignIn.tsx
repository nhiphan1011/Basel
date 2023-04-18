function SignIn({ showLogin, setShowLogin }: { showLogin: any, setShowLogin: any }) {
    return (
        // <div className={`absolute transition-all duration-300 left-0 z-50 w-screen h-screen bg-[rgba(0,0,0,.7)] ${showLogin ? 'visible' : 'hidden'}`}>
        <div id="signIn" className={`absolute z-50 bg-[#fff] w-[300px] h-screen transition-all duration-300 ${showLogin ? 'right-0' : '-right-[300px]'}`}>
            <div className=" heading flex justify-between bg-[#000] text-[#fff] mb-[20px] px-[20px] py-[28px] ">
                <h3 className="font-bold">SIGN IN</h3>
                <button onClick={() => setShowLogin(false)} className="close text-[12px] tracking-[0.6px]">CLOSE
                </button>
            </div>
            <form className="form mx-[20px] border-b-[#e2e2e2] border-b-[1px]   ">
                <div className="email flex flex-col mb-[20px]">
                    <label htmlFor="username">Email address <span className="text-[#e01020]">*</span></label>
                    <input className="border-[1px] border-[rgba(129,129,129,.25)]" type="text" id="username" />
                </div>
                <div className="password mb-[20px]">
                    <div className="email flex flex-col">
                        <label htmlFor="passwordside">Password <span className="text-[#e01020]">*</span></label>
                        <input className="border-[1px] border-[rgba(129,129,129,.25)]" type="text" id="passwordside" />
                    </div>
                </div>
                <p className="mb-[10px]">Lost your password?</p>
                <input className="w-full border-[#000] border-[2px] mt-[10px] mb-[20px] py-[10px] px-[20px]" type="submit" value="LOGIN"></input>
            </form>
            <div className="register-question m-[20px]">

            </div>
        </div>
        // </div>
    );
}

export default SignIn;