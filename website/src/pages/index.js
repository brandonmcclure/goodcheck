import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";

import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";

import s from "./index.module.css";

function GoodcheckConfig({ children }) {
  return (
    <div className="custom-yaml padding-top--sm">
      <CodeBlock className="language-yaml" title="goodcheck.yml">
        {children.trim()}
      </CodeBlock>
    </div>
  );
}

function GoodcheckResult({ file, line, column, message, children }) {
  return (
    <div>
      <div>
        <strong>Result:</strong>
      </div>
      <div className={`alert alert--info margin-top--xs ${s.checkResult}`}>
        <div>
          <strong>{file}</strong>
          {`:${line}:${column}: `}
          <strong>{message}</strong>
        </div>
        <div className={s.checkOutput}>{children}</div>
      </div>
    </div>
  );
}

function Splash({ title, subtitle }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__subtitle">{subtitle}</p>
            <Link className="button button--primary button--lg" to="docs/getstarted">
              Get Started
            </Link>
          </div>
          <div className="col col--7 col--offset-1">
            <GoodcheckConfig>
              {`
rules:
  - id: com.example.github
    pattern: Github
    message: |
      GitHub is GitHub, not Github

      You may have misspelling the name of the service!
`}
            </GoodcheckConfig>
            <GoodcheckResult file="index.html" line={9} column={30} message="GitHub is GitHub, not Github">
              <span>{'<a href="/signup">Signup via '}</span>
              <strong className={s.checkMatched}>{"Github"}</strong>
              <span>{"</a>"}</span>
            </GoodcheckResult>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureSummary({ title, subtitle, linkText }) {
  return (
    <div className={`hero ${s.FeatureSummary}`}>
      <div className="container">
        <h2 className={`hero__title ${s.FeatureSummaryTitle}`}>{title}</h2>
        <p className={`hero__subtitle ${s.FeatureSummarySubtitle}`}>{subtitle}</p>
        <Link className="button button--primary button--outline">{linkText}</Link>
      </div>
    </div>
  );
}

function FeatureSummaryList() {
  return (
    <div className={s.FeatureSummaryList}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <FeatureSummary
              title="Configuration"
              subtitle="Learn the patterns and syntax to make custom rules."
              linkText="Syntax details"
            />
          </div>
          <div className="col col--4">
            <FeatureSummary
              title="Rules"
              subtitle="Want to see some pre-defined rules? Check out some rules here."
              linkText="See rules"
            />
          </div>
          <div className="col col--4">
            <FeatureSummary
              title="Commands"
              subtitle="Goodcheck is written to be used on the command line. Learn about it’s usage here."
              linkText="CLI details"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function GoodcheckRule({ title, subtitle, config, file, line, column, message, children }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col col--5">
            <h2 className={`hero__title ${s.GoodcheckRuleTitle}`}>{title}</h2>
            <p className={`hero__subtitle ${s.GoodcheckRuleSubtitle}`}>{subtitle}</p>
          </div>
          <div className="col col--7">
            <GoodcheckConfig>{config}</GoodcheckConfig>
            <GoodcheckResult file={file} line={line} column={column} message={message}>
              {children}
            </GoodcheckResult>
          </div>
        </div>
      </div>
    </div>
  );
}

function LastMessage() {
  return (
    <div className={`container padding--lg ${s.LastMessage}`}>
      <p>
        <strong>Stop reviewing the same patterns.</strong>
      </p>
      <p>
        <Link className="button button--primary button--lg" to="docs/getstarted">
          Start using Goodcheck
        </Link>
      </p>
    </div>
  );
}

export default function Index() {
  const {
    siteConfig: { title, tagline },
  } = useDocusaurusContext();

  return (
    <Layout>
      <Splash title={title} subtitle={tagline} />

      <FeatureSummaryList />

      <GoodcheckRule
        title="A Goodcheck rule"
        subtitle={
          <>
            Define patterns with messages in a <code>goodcheck.yml</code> file and run goodcheck within your repository.
            Any matching results will be displayed in the terminal.
          </>
        }
        config={`
rules:
  - id: com.sample.no_blink
    pattern: <blink
    message: |
      Stop using <blink> tag.
`}
        file="index.html"
        line={50}
        column={5}
        message="Stop using <blink> tag."
      >
        <span>{"<h3>"}</span>
        <span className={s.checkMatched}>{"<blink>"}</span>
        <span>{"HTML5 Markup</blink></h3>"}</span>
        <span>{"</a>"}</span>
      </GoodcheckRule>

      <GoodcheckRule
        title="A rule with negated pattern"
        subtitle="Goodcheck rules are usually to detect if something is included in a file. You can define the negated rules for the opposite, something is missing in a file."
        config={`
rules:
  - id: com.sample.negated
    not:
      pattern: <!DOCTYPE html>
    message: |
      Write a doctype on HTML files.
    glob: "**/*.html"
`}
        file="index.html"
        line="-"
        column="-"
        message="Write a doctype on HTML files."
      >
        <span>{'<html lang="en">'}</span>
      </GoodcheckRule>

      <GoodcheckRule
        title="A rule without pattern"
        subtitle="You can define a rule without pattern. The rule emits an issue on each file specified with glob. You cannot omit glob from a rule definition without pattern."
        config={`
rules:
  - id: com.sample.without_pattern
    message: |
      Read the operation manual for DB migration.

      See https://example.com/guides/123
    glob: db/schema.rb
`}
        file="db/schema.rb"
        line="-"
        column="-"
        message="Read the operation manual for DB migration"
      >
        <span>{"# This file is auto-generated from the current state of the database."}</span>
      </GoodcheckRule>

      <LastMessage />
    </Layout>
  );
}
