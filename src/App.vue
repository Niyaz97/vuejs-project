<script setup lang="ts">
import { Amplify } from 'aws-amplify'

import { Authenticator } from '@aws-amplify/ui-vue'
import '@aws-amplify/ui-vue/styles.css'
Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: '7q4f9d0ng3q739ogso02fl96i7',
      userPoolId: 'eu-north-1_uMGN7jMO0',
      loginWith: {
        oauth: {
          domain: 'main.auth.eu-north-1.amazoncognito.com',
          scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
          redirectSignIn: [
            'http://localhost:3000/',
            'https://main.d6px848tj0kdg.amplifyapp.com/welcome'
          ],
          redirectSignOut: ['http://localhost:3000/', 'https://main.d6px848tj0kdg.amplifyapp.com/'],
          responseType: 'code'
        },
        username: true,
        email: true,
        phone: false
      }
    }
  }
})
</script>

<!-- <template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/welcome">Welcome</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/camping">Camping</RouterLink>
      </nav>
    </div>
  </header>
</template> -->
<template>
  <header>
    <authenticator>
      <template v-slot:sign-up-header>
        <h3
          class="amplify-heading"
          style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
        >
          Create a new account
        </h3>
      </template>
      <template v-slot:header>
        <div style="padding: var(--amplify-space-large); text-align: center">
          <img
            class="amplify-image"
            alt="Amplify logo"
            src="https://docs.amplify.aws/assets/logo-dark.svg"
          />
        </div>
      </template>
      <template v-slot:sign-in-header>
        <h3
          class="amplify-heading"
          style="padding: var(--amplify-space-xl) 0 0 var(--amplify-space-xl)"
        >
          Sign in to your account
        </h3>
      </template>
      <template v-slot="{ user, signOut }">
        <!-- {{ user }} -->
        <h1>Hello {{ user.username }}!</h1>
        <button @click="signOut" variation="primary">Sign Out</button>
      </template>
      <template v-slot:footer>
        <div style="padding: var(--amplify-space-large); text-align: center">
          <p class="amplify-text" style="color: var(--amplify-colors-neutral-80)">
            © All Rights Reserved
          </p>
        </div>
      </template>
    </authenticator>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
