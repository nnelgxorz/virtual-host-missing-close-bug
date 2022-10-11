import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import { Link } from "@builder.io/qwik-city";
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <Link href="https://qwik.builder.io/">
          <a href="https://qwik.builder.io/" target="_blank">
            <QwikLogo />
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="https://qwik.builder.io/docs/components/overview/">
            <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
              Docs
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://qwik.builder.io/examples/introduction/hello-world/">
            <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
              Examples
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
              Tutorials
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
});
