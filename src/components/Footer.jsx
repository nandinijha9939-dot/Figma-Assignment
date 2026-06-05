export default function Footer() {
  return (
    <footer className="bg-[#dfeedd] pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        {/* Divider */}

        <div className="border-t border-gray-500 mb-16"></div>

        {/* Columns */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">

          {/* Company */}

          <div>

            <h3 className="text-lg mb-6">
              Company
            </h3>

            <div className="space-y-4 text-sm text-gray-700">

              <p>Home</p>
              <p>Studio</p>
              <p>Service</p>
              <p>Blog</p>

            </div>

          </div>

          {/* Terms */}

          <div>

            <h3 className="text-lg mb-6">
              Terms & Policies
            </h3>

            <div className="space-y-4 text-sm text-gray-700">

              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Explore</p>
              <p>Accessibility</p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-lg mb-6">
              Follow Us
            </h3>

            <div className="space-y-4 text-sm text-gray-700">

              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>YouTube</p>
              <p>Twitter</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-lg mb-6">
              Terms & Policies
            </h3>

            <div className="space-y-4 text-sm text-gray-700">

              <p>
                1498w Fulton st, STE
                <br />
                2D Chicago, IL 63867.
              </p>

              <p>
                (123) 456789000
              </p>

              <p>
                info@elementum.com
              </p>

            </div>

          </div>

        </div>

        {/* Copyright */}

        <p className="text-center text-xs text-gray-700 mt-20">

          ©2023 Elementum. All rights reserved

        </p>

      </div>

    </footer>
  );
}