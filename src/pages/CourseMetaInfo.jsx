export default function CourseMetaInfo() {
  return (
    <section className="w-full  py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-[52px] leading-tight font-bold text-[#111827] mb-16">
          Brief information about the course
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <h3 className="text-[42px] font-semibold text-[#00A99D] mb-6">
              Videodarslar▼
            </h3>

            <p className="text-[28px] leading-[1.2] text-[#1F2937] max-w-[620px]">
              Lessons are posted on the platform in the form of videos, which
              can be viewed anytime and anywhere. Video lessons are updated.
            </p>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-[42px] font-semibold text-[#00A99D] mb-6">
              Tasks▼
            </h3>

            <p className="text-[28px] leading-[1.2] text-[#1F2937] max-w-[650px]">
              Test tasks are given at the end of the module. Only students who
              successfully pass the test will be able to access the lessons in
              the next module.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}