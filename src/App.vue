<script setup lang="ts">
  import { Amplify } from 'aws-amplify';

  Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: '7q4f9d0ng3q739ogso02fl96i7',
      userPoolId: 'eu-north-1_uMGN7jMO0',
      loginWith: {
        oauth: {
          domain: 'main.auth.eu-north-1.amazoncognito.com',
          scopes: ['openid email phone profile aws.cognito.signin.user.admin '],
          redirectSignIn: ['http://localhost:3000/','https://main.d6px848tj0kdg.amplifyapp.com/login'],
          redirectSignOut: ['http://localhost:3000/','https://main.d6px848tj0kdg.amplifyapp.com/'],
          responseType: 'code',
        },
        username: true,
        email: true,
        phone: false,
      }
    }
  }
});


</script>

<template>
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
