import {
  
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300 pt-14 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Chandrashekhara
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Full Stack Developer passionate about building modern,
              scalable, and user-friendly web applications.
            </p>
          </div>

          

        

  <div className="space-y-2 text-gray-400">
 <h3 className="text-xl font-semibold mb-4">
    Contact 
  </h3>
    <p>
       chandrashekharashivacharya18@gmail.com
    </p>

    <p>
      📞 +91 9902732389
    </p>

  </div>

</div>

        </div>
        

        <hr className="border-gray-700 my-8" />

        <div className="text-center">

          <p className="flex justify-center items-center gap-2">
            Made with
            <FaHeart className="text-red-500" />
            by Chandrashekhara Shivacharya V M
          </p>

          <p className="mt-3 text-gray-500">
            © 2026 All Rights Reserved.
          </p>

        </div>

      

    </footer>
  );
}

export default Footer;