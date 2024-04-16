import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 padding-adjustment text-blue-900">
      <div className="items-center flex flex-col ">
        <h1 className="text-5xl  font-bold mb-4">About Us</h1>
        <div className="underline mb-20"></div>
      </div>

      <div className="flex flex-col w-full">
        <div className=" h-96 flex  mb-10 ">
          <div className="bg-gray-200 p-6 rounded-md w-1/2">
            <p className="text-xl">
              Welcome to Fixify, your one-stop destination for all your
              automotive needs. At Fixify, we understand the importance of
              keeping your vehicle in top condition, and that's why we're
              dedicated to connecting car owners with skilled mechanics who are
              experts in their field.
            </p>
          </div>
          <div className="w-1/2 flex flex-col jusify-end ml-10">
            <h6 className="text-4xl font-extrabold">Welcome</h6>
            <div className="underline"></div>
          </div>
        </div>

        {/* What we do */}
        <div className=" h-96 flex  mb-10 mt-20">
          <div className="w-1/2 flex flex-col jusify-end ml-10">
            <h6 className="text-4xl font-extrabold">What We Do</h6>
            <div className="underline"></div>
          </div>
          <div className="bg-gray-200 p-6 rounded-md w-1/2">
            <p className="text-xl">
              Our platform provides car owners with access to a vast network of
              certified mechanics, offering a wide range of services, from
              routine maintenance and diagnostics to complex repairs and
              overhauls. Whether you're dealing with a minor issue or a major
              breakdown, Fixify is here to help you find the right mechanic for
              the job.
            </p>
          </div>
        </div>

        {/* What we do */}
        <div className=" h-96 flex  mb-10 mt-20">
          <div className="bg-gray-200 p-6 rounded-md w-1/2">
            <p className="text-xl">
              With Fixify, you can browse through detailed profiles of
              mechanics, read customer reviews, and compare prices to make an
              informed decision. Our user-friendly interface makes it easy to
              schedule appointments and track the progress of your vehicle's
              repairs, giving you peace of mind every step of the way.
            </p>
          </div>
          <div className="w-1/2 flex flex-col jusify-end ml-10">
            <h6 className="text-4xl font-extrabold">Let Us Help</h6>
            <div className="underline"></div>
          </div>
        </div>

        {/* Meet the team */}
        <div className=" h-96 flex  mb-10 mt-20">
          <div className="w-1/2 flex flex-col jusify-end ml-10">
            <h6 className="text-4xl font-extrabold">Meet The Team</h6>
            <div className="underline"></div>
          </div>
          <div className="bg-gray-200 p-6 rounded-md w-1/2">
            <p className="text-xl">
              Our team of dedicated professionals is committed to providing
              exceptional service and ensuring that your car receives the care
              and attention it deserves. Whether you need a tune-up, an oil
              change, or a complete engine overhaul, you can trust Fixify to
              connect you with the best mechanics in town.
              <br />
              <br />
              Don't let car troubles slow you down. Trust Fixify to keep your
              vehicle running smoothly, so you can hit the road with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
