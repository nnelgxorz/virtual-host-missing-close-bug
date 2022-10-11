import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const store = useStore({ count: 110 })
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>{store.count}
        <button onClick$={() => store.count *= 1}>Click Me</button>
      </h1>


      <Link class="mindblow" href="/flower">
        {/* <a href="/flower">Blow my mind 🤯</a> */}
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
