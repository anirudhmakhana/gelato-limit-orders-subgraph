## **Deploying the Limit Orders Subgraph on Goldsky**

This document provides a step-by-step guide to deploy the **Limit Orders Subgraph** on Goldsky.

### **Table of Contents**

1. [Prerequisites](#prerequisites)
2. [Setup and Configuration](#setup-and-configuration)
3. [Build and Deploy](#build-and-deploy)
4. [Testing and Monitoring](#testing-and-monitoring)
5. [Deploying to a New Network](#deploying-to-a-new-network)
6. [Troubleshooting](#troubleshooting)

---

### 1. **Prerequisites**

Before deploying, ensure the following:

- **Goldsky Account**: Sign up on [Goldsky](https://goldsky.com/) if you haven’t already.
- **Goldsky CLI**: Install the Goldsky CLI.
- **Node.js** and **Yarn** installed.
- **Subgraph CLI**: Install the Graph CLI for building and testing subgraphs locally.

### 2. **Setup and Configuration**

1. **Clone the Repository**:
   Clone the subgraph repository to your local environment:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Edit `subgraph.yaml`**:
   Update the `subgraph.yaml` to specify:

   - **Network**: For example, `mainnet`, `polygon`, etc.
   - **Contract Address**: Specify the contract addresses for `ERC20OrderRouter` and `GelatoPineCore`.
   - **Start Block**: Enter the block number from which to start indexing.

   Example configuration:

   ```yaml
   network: mainnet
   startBlock: 12818753
   contractAddress: "0x36049D479A97CdE1fC6E2a5D2caE30B666Ebf92B"
   ```

3. **Install Dependencies**:
   Run:

   ```bash
   yarn install
   ```

4. **Generate Code**:
   Use the following command to generate TypeScript code from your GraphQL schema:
   ```bash
   yarn codegen
   ```

### 3. **Build and Deploy**

1. **Build the Subgraph**:
   Build the subgraph to compile the mappings and validate the configuration.

   ```bash
   yarn build
   ```

2. **Deploy to Goldsky**:
   Use the Goldsky CLI to deploy the subgraph.
   ```bash
   goldsky subgraph deploy limit-orders/1.0.0
   ```
   Replace `limit-orders/1.0.0` with your subgraph name and version.

### 4. **Testing and Monitoring**

1. **Verify Deployment**:
   On the Goldsky dashboard, ensure your subgraph is listed under **My Subgraphs**.

2. **Use the GraphQL Playground**:
   Query your subgraph data via the built-in GraphQL Playground to verify indexing accuracy.

3. **Monitor for Errors**:
   Regularly check the Goldsky dashboard for any indexing errors or warnings.

### 5. **Deploying to a New Network**

To deploy the same subgraph on a different network:

1. **Update `subgraph.yaml`**: Change the network name, contract addresses, and start block.
2. **Rebuild**: Run `yarn build` to ensure the subgraph compiles with the new configuration.
3. **Deploy with a New Name**: Use a unique name for each network.
   ```bash
   goldsky subgraph deploy <new-subgraph-name>/<version>
   ```

### 6. **Troubleshooting**

Common issues and fixes:

- **Missing Handlers**: Ensure all event handlers are defined and referenced in `subgraph.yaml`.
- **Type Errors**: Double-check nullable fields and TypeScript compatibility.
- **ABI Mismatch**: Ensure ABI files are up to date and match the contract deployed.
