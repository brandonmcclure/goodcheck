---
id: getstarted
title: Getting Started
sidebar_label: Get Started
sidebar_position: 1
---

## Installation

```shell
gem install goodcheck
```

Or you can use [Bundler](https://bundler.io):

```shell
bundle add goodcheck
```

If you would not like to install Goodcheck to your system (e.g. you would not like to install Ruby), you can use our [Docker images](#docker-images).

## Docker images

We provide the Docker images for Goodcheck so that you can try Goodcheck without installing it to your system.
Visit our [Docker Hub](https://hub.docker.com/r/sider/goodcheck/) page for more details.

For example:

```shell
docker run -t --rm -v "$(pwd):/work" sider/goodcheck check
```

The default `latest` tag points to the latest version of Goodcheck.
You can pick any version of Goodcheck from the [released tags](https://hub.docker.com/r/sider/goodcheck/tags).

## Quickstart

```shell
goodcheck init

# Edit goodcheck.yml

goodcheck check
```

1. Generate a template of [`goodcheck.yml`](configuration.md) configuration file for you.
2. Edit the `goodcheck.yml` to define patterns you want to check.
3. Run checking your files, and it will print matched texts.

See the [commands](commands.md) for more details.

## Cheatsheet

You can download a [printable cheatsheet](https://github.com/sider/goodcheck/blob/master/cheatsheet.pdf) from this repository.
