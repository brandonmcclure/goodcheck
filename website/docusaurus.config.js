const ORG = "sider";
const REPO = "goodcheck";
const GITHUB_URL = `https://github.com/${ORG}/${REPO}`;
const DEFAULT_BRANCH = "master";

module.exports = {
  title: "Goodcheck",
  tagline: "A regexp based customizable linter",
  url: `https://${ORG}.github.io`,
  baseUrl: `/${REPO}/`,
  organizationName: ORG,
  projectName: REPO,
  trailingSlash: false,
  favicon: "img/favicon.ico",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          editUrl: `${GITHUB_URL}/edit/${DEFAULT_BRANCH}/website`,
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Goodcheck",
      logo: { src: "img/goodcheck-logo.png", alt: "Goodcheck Logo" },
      style: "primary",
      items: [
        { to: "docs/getstarted", label: "Get Started" },
        { to: "docs/configuration", label: "Configuration" },
        { to: "docs/commands", label: "Commands" },
        { to: "docs/rules", label: "Rules" },
        {
          href: GITHUB_URL,
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      logo: { src: "img/goodcheck-logo.png", alt: "Goodcheck Logo", href: "/" },
      copyright: `Copyright © ${new Date().getFullYear()} Sider Corporation`,
      links: [
        {
          title: "Learn",
          items: [
            { to: "docs/getstarted", label: "Get Started" },
            { to: "docs/configuration", label: "Configuration" },
            { to: "docs/commands", label: "Commands" },
            { to: "docs/rules", label: "Rules" },
          ],
        },
        {
          title: "More",
          items: [{ href: GITHUB_URL, label: "GitHub" }],
        },
      ],
    },

    prism: {
      additionalLanguages: ["ruby"],
    },
  },
};
