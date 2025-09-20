export default function Navbar() {
    return (
        <div className="flex text-white w-screen h-[50px] justify-evenly items-center bg-black bg-opacity-50 underline text-2xl">
            <div>
                <a href="#about">About Me</a>
            </div>
            <div>
                <a href="#skills">Skills</a>
            </div>
            <div>
                <a href="#projects">Projects</a>
            </div>
        </div>
    );
}   