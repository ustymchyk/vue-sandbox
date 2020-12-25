<script>
import { h } from 'vue';
import { subscribeToPushState } from './history';

export default {
  name: 'router',
  data() {
    return {
      current: window.location.pathname,
    };
  },
  computed: {
    routedComponent() {
      return this.$routes[this.current];
    },
  },
  render() {
    return h(this.routedComponent);
  },
  created() {
    subscribeToPushState((route) => {
      this.current = route;
    });

    window.addEventListener('popstate', () => {
      this.current = window.location.pathname;
    });
  },
};
</script>
