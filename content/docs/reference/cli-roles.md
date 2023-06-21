---
title: Neon CLI commands — roles
subtitle: Use the Neon CLI to manage your Neon project directly from your terminal
enableTableOfContents: true
isDraft: true
---

## Before you begin

Ensure that you have [installed the Neon CLI](../reference/neon-cli/install-the-neon-cli). Once installed, you can manage your Neon projects directly from the command line.

## The `roles` command

The `roles` command allows you to list, create, and delete roles in a Neon project.

### Usage

```bash
neonctl roles <sub-command> [options]
```

### Sub-commands

| Sub-command  | Description      |
|---------|------------------|
| [list](#list)    | List roles    |
| [create](#create)  | Create a role |
| [delete](#delete)  | Delete a role |

### list

This sub-command allows you to list roles.

#### Usage

```bash
neonctl roles list [options]
```

#### Options

In addition to the Neon CLI [global options](../neon-cli/global-options), the `list` sub-command supports these options:

| Option        | Description | Type   | Required  |
| ------------- | ----------- | ------ | :------: |
| --project.id  | Project ID  | string | &check; |
| --branch.id   | Branch ID   | string | &check; |

#### Example

```bash
neonctl roles list --project.id spring-sky-578180 --branch.id br-autumn-dust-190886 
┌────────┬──────────────────────┐
│ Name   │ Created At           │
├────────┼──────────────────────┤
│ daniel │ 2023-06-19T18:27:19Z │
└────────┴──────────────────────┘
```

### create

This sub-command allows you to create a database.

#### Usage

```bash
neonctl roles create [options]
```

#### Options

In addition to the Neon CLI [global options](../neon-cli/global-options), the `create` sub-command supports these options:

| Option               | Description                          | Type   | Required  |
| -------------------- | ------------------------------------ | ------ | :------: |
| --project.id         | Project ID                           | string | &check; |
| --branch.id          | Branch ID                            | string | &check; |
| --role.name      | The role name. Cannot exceed 63 bytes in length.  | string | &check; |

#### Example

```bash
neonctl roles create --project.id spring-sky-578180 --branch.id br-autumn-dust-190886 --role.name sally
┌───────┬──────────────────────┐
│ Name  │ Created At           │
├───────┼──────────────────────┤
│ sally │ 2023-06-20T00:43:17Z │
└───────┴──────────────────────┘
```

### delete

This sub-command allows you to delete a database.

#### Usage

```bash
neonctl roles delete [options]
```

#### Options

In addition to the Neon CLI [global options](../neon-cli/global-options), the `delete` sub-command supports these options:

| Option               | Description                          | Type   | Required  |
| -------------------- | ------------------------------------ | ------ | :------: |
| --project.id         | Project ID                           | string | &check; |
| --branch.id          | Branch ID                            | string | &check; |
| --role.name      | The role name. Cannot exceed 63 bytes in length.  | string | &check; |

#### Example

```bash
neonctl roles delete --project.id spring-sky-578180 --branch.id br-autumn-dust-190886 --role.name sally
┌───────┬──────────────────────┐
│ Name  │ Created At           │
├───────┼──────────────────────┤
│ sally │ 2023-06-20T00:43:17Z │
└───────┴──────────────────────┘
```

## Need help?

Send a request to [support@neon.tech](mailto:support@neon.tech), or join the [Neon community forum](https://community.neon.tech/).