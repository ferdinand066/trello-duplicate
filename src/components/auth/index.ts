import { ref } from "vue"
import { decodeCredential } from "vue3-google-login";

export default ({
  setup(){
    const user = ref();

    const callback = (response: any) => {
      const userData = decodeCredential(response.credential);
      user.value = userData;
    };

    return {
      callback,
      user
    };
  }
})