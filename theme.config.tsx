import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const logo = (
  <>
    <div className="flex flex-row align-middle justify-center">
      <img className="h-12 w-auto rounded-md" src="/logo.png"></img>
      <h1 className="text-2xl ml-2 font-bold inline-block text-gray-600" style={{lineHeight: "3rem"}}>AnyLearning</h1>
    </div>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </>
);

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/nrl-ai/anylearning",
  },
  docsRepositoryBase: "https://github.com/nrl-ai/anylearning-docs",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – AnyLearning",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://anylearning.nrl.ai/AnyLearning.png"
        : `https://anylearning.nrl.ai/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Effortless AI-assisted data labeling with AI support from Segment Anything and YOLO!"
        />
        <meta
          name="og:description"
          content="Effortless AI-assisted data labeling with AI support from Segment Anything and YOLO!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="anylearning.nrl.ai" />
        <meta name="twitter:url" content="https://anylearning.nrl.ai" />
        <meta
          name="og:title"
          content={title ? title + " – AnyLearning" : "AnyLearning"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="AnyLearning" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: light)"
        />
      </>
    );
  },
  banner: {
    key: "anylabeling",
    text: (
      <a href="https://anylabeling.nrl.ai" target="_blank" rel="noreferrer">
        🎉 Check out the latest AnyLabeling for AI-assisted image labeling! 🎉
      </a>
    ),
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="Neural Research Lab Website"
            href="https://www.nrl.ai"
          >
            <div className="pt-0 mt-0">
              Developed by{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-red-600 text-bold">
                Neural Research Lab
              </span>
              .
            </div>
          </a>
        </div>
        <p className="mt-2 text-xs">
          © {new Date().getFullYear()} The AnyLearning Project.
        </p>
      </div>
    ),
  },
};

export default config;
