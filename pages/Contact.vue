<template>
  <div class="h-full w-full items-center flex justify-center">
    <p v-if="loading">Loading ...</p>
    <div v-else class="flex flex-col gap-6 items-center">
      <p v-if="emailSent" class="text-2xl -mb-2">{{ emailSent }}</p>
      <input
        type="text"
        v-model="email"
        class="text-black"
        @keyup.enter="sendEmail"
      />
      <Button @click="sendEmail" withPadding>Send</Button>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** Variables **/
const email = ref("");
const loading = ref(false);
const emailSent = ref("");
const env = useRuntimeConfig();

/** Methods **/
const sendEmail = async () => {
  const url = "https://api.forwardemail.net/v1/emails";
  const apiKey = env.public.forwardEmailApiKey;
  const data = new URLSearchParams();

  data.append("from", "web@bejepics.com");
  data.append("to", "alex.bejenaru93@gmail.com");
  data.append("subject", "From bejepics.com");
  data.append("text", `${email.value}`);

  loading.value = true;
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${btoa(`${apiKey}:`)}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data.toString(),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      loading.value = false;
      if (data.error) {
        console.error("Error:", data.error);
        emailSent.value =
          "There has been an error, the email could not be sent. Contact me at 642 954 953.";
        return;
      }
      emailSent.value = "Email Sent!";
      email.value = "";
    })
    .catch((error) => {
      console.error("Error:", error);
      loading.value = false;
      emailSent.value =
        "There has been an error, the email could not be sent. Contact me at 642 954 953.";
    });
};
</script>
