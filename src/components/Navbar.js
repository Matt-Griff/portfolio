export default function Navbar() {
    return (
        <div className=" text-white w-screen h-[50px] items-center justify-end bg-black bg-opacity-50 underline text-2xl gap-10 md:flex hidden fixed top-0 z-50">
            <div>
                <a href="#about">About Me</a>
            </div>
            <div>
                <a href="#skills">Skills</a>
            </div>
            <div>
                <a href="#projects">Projects</a>
            </div>
            <div className="mr-10">
                <a href="#education">Education</a>
            </div>
        </div>
    );
}
