import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center md:flex-row text-center md:text-left pt-10 md:pt-28 px-4 z-10">
        <div className="mb-8 md:mb-0 md:mr-8">
          <Image
            width={256}
            height={256}
            src="/images/profile.png"
            alt="Juan Calderon"
            className="md:w-64 md:h-64 object-cover rounded-full shadow-2xl transition-transform transform hover:scale-110 duration-300 dark:ring-4 dark:ring-indigo-600 dark:ring-opacity-50 dark:ring-offset-4 dark:ring-offset-gray-900"
          />
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-indigo-600 dark:text-white mb-4 drop-shadow-md">
            Hello, I’m Juan Calderon
          </h1>
          <p className="text-lg sm:text-xl md:text-xl text-gray-600 dark:text-gray-300 mb-8 font-light">
            Web developer focused on creating innovative solutions,<br />
            specializing in building efficient and aesthetically pleasing applications,<br />
            with a passion for optimizing user experiences.
          </p>
          <a
            href="/about-me"
            className="px-6 sm:px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Learn more about me
          </a>
        </div>
      </section>
    </>
  );
}
