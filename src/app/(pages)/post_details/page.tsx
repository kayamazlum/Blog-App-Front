import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const PostDetails = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center mt-8">
        <div className="w-[1200px] md:mx-8 sm:mx-4 mx-2 p-4">
          <div className="w-full flex flex-col gap-8">
            <div className="dark:bg-darkultra p-2 rounded-md">
              Details Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, nisi quasi sunt error dolores omnis sapiente
              perferendis similique ad impedit distinctio illo alias aperiam
              blanditiis. Maiores voluptas fugiat in ipsa dolores labore
              voluptatum nam magnam cumque enim alias officia aliquid, porro
              recusandae, animi eaque delectus consectetur necessitatibus
              exercitationem quisquam eum excepturi doloremque consequuntur
              reiciendis. Voluptate, voluptatum animi aliquid sequi dolorum
              eligendi cum fuga porro, doloremque eveniet dolore nesciunt
              molestias accusantium necessitatibus libero itaque ullam earum ab
              deserunt ipsum! Quae dolore tempore, illum, cumque incidunt velit
              adipisci, quaerat perferendis at nesciunt modi dignissimos!
              Exercitationem id ipsa deleniti necessitatibus, pariatur molestias
              corrupti.
            </div>
            <div className="flex gap-2 items-center">
              <div className="rounded-full size-16 border flex items-center justify-center">
                img
              </div>
              <div className="flex flex-col text-xl">
                <span>John Doe</span>
                <span className="text-sm">@johndoe47</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetails;
