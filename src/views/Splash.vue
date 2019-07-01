<template>
  <div class="splash-wrapper">
    <div class="logo-wrapper">
      <img src="@/assets/logo_small.png" class="logo" />
    </div>
    <div class="heading-wrapper">
      <span class="heading">Pre moznost pridavania odpadkovych kosov je potrebne sa prihlasit.</span>
    </div>
    <div class="login-wrapper">
      <div id="firebaseui-auth-container"></div>
      <!-- <google-icon class="social-logo google" @click="googleSignIn" />
      <facebook-icon class="social-logo facebook" @click="facebookSignIn" />-->
    </div>
  </div>
</template>

<script>
import googleIcon from "@/assets/google.svg";
import facebookIcon from "@/assets/facebook.svg";

import store from "@/store";

import firebase from "firebase";
import firebaseui from "firebaseui";
import "../../node_modules/firebaseui/dist/firebaseui.css";
import firebaseConfig from "./../../firebaseConfig";

export default {
  name: "splash",
  components: {
    googleIcon,
    facebookIcon
  },
  data() {
    return {
      uiConfig: {
        signInOptions: [
          {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID
          },
          {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
          }
        ],
        credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
        callbacks: {
          signInSuccessWithAuthResult(authResult) {
            store.dispatch("setUser", authResult.user);
            console.log(authResult);
          }
        }
      }
    };
  },
  methods: {
    googleSignIn() {
      this.$store.dispatch("signIn", true);
    },
    facebookSignIn() {
      this.$store.dispatch("signIn", false);
    }
  },
  mounted() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", this.uiConfig);
  }
};
</script>

<style lang="scss" scoped>
.splash-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  .logo-wrapper {
    display: flex;
    justify-content: center;

    .logo {
      max-width: 90%;
    }
  }

  .heading-wrapper {
    width: 80%;
    margin-top: 50px;
    text-align: center;
  }

  .login-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 85%;
    margin-top: 30px;

    .social-logo {
      display: flex;
      width: 40px;

      &.google {
        & path {
          fill: #db3236;
        }
      }

      &.facebook {
        & path {
          fill: #3b5998;
        }
      }
    }
  }
}
</style>
