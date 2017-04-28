<template>
  <div class="link-list">
    <template v-if="loading > 0">
      Loading…
    </template>
    <template v-else>
      <ul>
        <li v-for="link in links" :key="link.id">
          <router-link :to="{ name: link.router }">{{ link.title }}</router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag';

// GraphQL query
const linksQuery = gql`
  query allLinks {
    links {
      id
      title
      href
      router
    }
  }
`;

// Component def
export default {
    name: 'link-list',
  // Local state
  data() {
    return {
        links: [],
        loading: 0,
    }
  },
  // Apollo GraphQL
  apollo: {
    // Local state 'posts' data
    links: {
      query: linksQuery,
      loadingKey: 'loading',
    },
  },
  // Computed properties
  // computed: {
  //   sortedLinks() {
  //     return this.links;
  //   }
  // },
};
</script>

