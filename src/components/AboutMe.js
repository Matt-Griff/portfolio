
export default function AboutMe() {
    return (
        <div className="about w-full h-auto flex flex-col items-center text-white" id="about">
            {/* Header Section */}
            <div className='w-[95%] mx-auto mt-10 mb-12'>
                <div className='bg-[#3A2622] rounded-lg p-6 shadow-xl border border-[#5a3a2a]/30'>
                    <h2 className='text-3xl md:text-5xl font-bold text-center md:text-left drop-shadow-md'>
                        About Me
                    </h2>
                </div>
            </div>

            <div class="text-xl flex ml-4 gap-4 justify-center items-center flex-wrap mb-10">

                <div class="flex flex-col md:w-[50%] w-full justify-center items-start gap-12">
                    <div className="p-4 w-full">
                        Hello! My name is Matthieu Griffonnet, and I am currently pursuing a Master’s degree in Computer Science
                        at Polytech Nice Sophia.
                    </div>
                    <div className="p-4 w-full">
                        I am passionate about software development and enjoy building reliable, efficient, and well-structured
                        applications. Through my academic projects and internships, I have worked with Java, Python, C, and
                        web technologies, gaining experience in both backend and full-stack development
                    </div>
                    <div className="p-4 w-full">
                        I particularly enjoy turning ideas into real-world solutions, collaborating with others, and continuously
                        improving my technical skills. I am currently seeking an internship where I can contribute to meaningful
                        projects and grow as a software engineer.
                    </div>
                </div>

                <img
                    class="md:w-[40%] md:flex hidden rounded-lg mx-auto"
                    alt="About Me"
                    src="./images/solving-amico.svg"
                />
            </div>

        </div>
    );
}

