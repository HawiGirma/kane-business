import { Users, Award, Leaf, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Retronix
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading provider of premium furniture, public infrastructure
            solutions, and sustainable wood finishing materials since 2010.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Retronix began as a small woodworking shop with a
              vision to create exceptional furniture that combines traditional
              craftsmanship with modern design principles. Over the years,
              expanded our expertise to include public infrastructure solutions
              and premium wood finishing materials.
            </p>
            <p className="text-gray-600 mb-4">
              Today, proud to serve both residential and commercial clients,
              delivering custom furniture, public toilets, seating solutions,
              and high-quality wood finishes that stand the test of time.
            </p>
            <p className="text-gray-600">
              Our commitment to sustainability and innovation drives everything
              we do, ensuring that each project not only meets but exceeds our
              expectations.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Craftsman at work"
              width={600}
              height={500}
              className="rounded-2xl object-cover w-full h-[500px]"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#552910] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, using only the finest materials
                and craftsmanship techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#552910] rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Environmental responsibility guides our material selection and
                manufacturing processes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#552910] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We work closely with clients to understand their vision and
                bring it to life.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#552910] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously explore new techniques and materials to deliver
                cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Sarah Johnson"
                width={250}
                height={250}
                className="rounded-full mx-auto mb-4 object-cover w-[250px] h-[250px]"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sarah Johnson
              </h3>
              <p className="text-[#552910] font-medium mb-2">Lead Designer</p>
              <p className="text-gray-600 text-sm">
                15+ years of experience in furniture design and public space
                planning.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Michael Chen"
                width={250}
                height={250}
                className="rounded-full mx-auto mb-4 object-cover w-[250px] h-[250px]"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Michael Chen
              </h3>
              <p className="text-[#552910] font-medium mb-2">
                Master Craftsman
              </p>
              <p className="text-gray-600 text-sm">
                Expert in traditional woodworking techniques and modern
                finishing methods.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Emily Rodriguez"
                width={250}
                height={250}
                className="rounded-full mx-auto mb-4 object-cover w-[250px] h-[250px]"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Emily Rodriguez
              </h3>
              <p className="text-[#552910] font-medium mb-2">Project Manager</p>
              <p className="text-gray-600 text-sm">
                Ensures seamless project delivery from concept to installation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
