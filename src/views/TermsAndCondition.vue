<script setup>
import {useRouter} from "vue-router";
const router = useRouter();

const goToLogin = () => {
  router.push("/login");
};
</script>

<template>
  <div class="bg-black text-white flex items-center justify-center min-h-screen">
    <div class="w-full m-5 gradient-content">
      <AuthLogo />
      <h1 class="text-center !text-3xl mb-4">Privacy Policy</h1>
      <div>
        <p class="text-center">By continuing you agree to the <b class="text-green-brand">Terms & Conditions</b> stated below.</p>
        <span class="h-[1px] w-[50px] bg-green-brand mx-auto mt-8 mb-8 block"></span>
      </div>

      <div class="flex flex-col gap-5 justify-center text-center">
        <div class="max-w-[700px] mx-auto w-full p-3 rounded-3xl border-[0.5px] border-[#DEE4CD] white-06">
          <div class="w-full p-4 rounded-2xl white-06">
            <h2 class="text-white !text-3xl">Terms & Conditions</h2>
            <p class="text-[#A0A2A8] text-sm mt-2">Last updated 4th October 2025</p>
          </div>
          <div class="h-[500px] !overflow-y-scroll text-left px-7 my-9 auth-scrollbar prose pros-auth">
            <p>The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." 1914 translation by H. Rackham "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
          </div>
        </div>
        <router-link to="/login" class="flex justify-center items-center hover:underline gap-2">
          <font-awesome-icon icon="fa-regular fa-arrow-left-long" />
          Back To <b class="text-green-brand"> Log In</b>
        </router-link>
      </div>
    </div>
    <div class="gradient"></div>
  </div>
</template>

<style scoped>
.white-06 {
  position: relative;
}
.white-06 * {
  z-index: 2;
  display: block;
  position: relative;
  overflow: hidden;
}
.white-06:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  opacity: 0.06;
  z-index: 1;
}

.gradient-content {
  position: relative;
  z-index: 2;
}
.gradient {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;

  background-color: #000;
  /*  background-image:
   radial-gradient(at 96% 8%, hsl(102, 39.68%, 49.41%) 0px, transparent 50%),
    radial-gradient(at 32% 8%, hsl(120, 2%, 9%) 0px, transparent 50%),
    radial-gradient(at 64% 88%, hsl(102, 39.68%, 49.41%) 0px, transparent 50%);
 */

  background-image: radial-gradient(at 96% 8%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%), radial-gradient(at 32% 8%, hsl(0, 0%, 0%) 0px, transparent 50%), radial-gradient(at 64% 88%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%), radial-gradient(at 39% 83%, hsl(0, 0%, 0%) 0px, transparent 50%), radial-gradient(at 30% 21%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%), radial-gradient(at 66% 54%, hsl(0, 0%, 0%) 0px, transparent 50%), radial-gradient(at 74% 47%, hsl(76.43, 100%, 16.47%) 0px, transparent 50%);

  background-size: 200% 200%;
  animation: move-bg 10s linear infinite;
}

@keyframes move-bg {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
