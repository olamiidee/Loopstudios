import React from "react";

export default function Footer() {
  return (
    <footer class="bg-black">
      <div class="container max-w-full mx-auto px-6 md:px-32 mt-32 pt-16 pb-6">
        <div class="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          <div class="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            <div class="h-8">
              <img src="images/logo.svg" alt="" class="w-44 md:ml-3" />
            </div>

            <div class="flex flex-col items-center space-y-4 font-semi-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              <div class="h-10 group">
                <a href="#">About</a>
                <div class="mx-2 group-hover:border-b-2 group-hover:border-blue-50"></div>
              </div>

              <div class="h-10 group">
                <a href="#">Careers</a>
                <div class="mx-2 group-hover:border-b-2 group-hover:border-blue-50"></div>
              </div>

              <div class="h-10 group">
                <a href="#">Events</a>
                <div class="mx-2 group-hover:border-b-2 group-hover:border-blue-50"></div>
              </div>

              <div class="h-10 group">
                <a href="#">Products</a>
                <div class="mx-2 group-hover:border-b-2 group-hover:border-blue-50"></div>
              </div>

              <div class="h-10 group">
                <a href="#">Support</a>
                <div class="mx-2 group-hover:border-b-2 group-hover:border-blue-50"></div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between space-y-4 text-gray-500">
            <div class="flex justify-center mx-auto md:justify-end space-x-4 md:items-end md:mx-0">
              <div class="h-8 group">
                <a href="#">
                  <img src="images/icon-facebook.svg" alt="" class="h-6" />
                </a>
                <div class="mt-2 group-hover:border-b-2 group-hover:border-blue-50"></div>
              </div>

              <div class="h-8 group">
                <a href="#">
                  <img src="images/icon-twitter.svg" alt="" class="h-6" />
                </a>
                <div class="mt-2 group-hover:border-b-2 group-hover:border-blue-50"></div>
              </div>

              <div class="h-8 group">
                <a href="#">
                  <img src="images/icon-pinterest.svg" alt="" class="h-6" />
                </a>
                <div class="mt-2 group-hover:border-b-2 group-hover:border-blue-50"></div>
              </div>

              <div class="h-8 group">
                <a href="#">
                  <img src="images/icon-instagram.svg" alt="" class="h-6" />
                </a>
                <div class="mt-2 group-hover:border-b-2 group-hover:border-blue-50"></div>
              </div>
            </div>

            <div class="font-semi-bold">
              &copy; 2022 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
