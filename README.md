# Plaited token uitils

[![build/tests](https://github.com/plaited/token-utils/actions/workflows/tests.yml/badge.svg?branch=main)](https://github.com/plaited/token-utils/actions/workflows/tests.yml)

This mono repo serves as the workspace for working on our design token
development libraries.

## Libraries

- [@plaited/token-element](libs/token-element/README.md): Plaited component for applying design tokens to web application
- [@plaited/token-schema](libs/token-schema/README.md): create a JSON schema from design tokens that locks in values and allows addition of news values
- [@plaited/token-transformer](libs/token-transformer/README.md): transform token into outputs suitable for CSS and Typescript usage
- [@plaited/token-types](libs/token-types/README.md): types for plaited design tokens based on [design token format](https://design-tokens.github.io/community-group/format/)

## Dev Requirements

### local

- bun >= 1.0.7
