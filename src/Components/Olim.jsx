const Olim = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[#1e1e26] px-4">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Contact <span className="text-cyan-400">Me!</span>
          </h1>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-[#2d2d39] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#2d2d39] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="bg-[#2d2d39] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                type="text"
                placeholder="Email Subject"
                className="bg-[#2d2d39] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-[#2d2d39] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-cyan-400 text-black rounded-full font-medium shadow-lg hover:bg-cyan-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>{" "}
    </div>
  );
}

export default Olim;